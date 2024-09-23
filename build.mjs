import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { fileURLToPath } from 'url'

import copy from 'esbuild-plugin-copy'
import alias from 'esbuild-plugin-path-alias'
import { marked } from 'marked'
import dirJson from './plugins/dirJson.mjs'
import stylePlugin from 'esbuild-style-plugin'
import postcss from 'postcss'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://github.com/indooorsman/esbuild-css-modules-plugin

// 创建 PostCSS 处理函数
// https://github.com/g45t345rt/esbuild-style-plugin/issues/36
const postcssProcessor = postcss([
  tailwindcss(),
  autoprefixer(),
])

const args = process.argv.slice(2)
const useWasm = os.arch() !== 'x64'
const esbuild = (await import(useWasm ? 'esbuild-wasm' : 'esbuild')).default

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const notifyEndPlugin = () => {
  return {
    name: 'notify-end',
    setup(build) {
      let startTime

      build.onStart(() => {
        startTime = new Date()
      })

      build.onEnd(() => {
        const endTime = new Date()
        const timeStamp = endTime.toTimeString().split(' ')[0]
        console.log(`${timeStamp}: Build finished in ${endTime - startTime} ms`)
      })
    },
  }
}

// 创建一个简单的插件来处理 .md 文件
const markdownPlugin = {
  name: 'markdown',
  setup(build) {
    // 拦截以 .md 结尾的文件
    build.onLoad({ filter: /\.md$/ }, async (args) => {
      // 读取 .md 文件的内容
      const markdownContent = await fs.promises.readFile(args.path, 'utf8')
      // 将 Markdown 转换为 HTML
      const htmlContent = marked(markdownContent)
      // 返回一个带有 HTML 的模块
      return {
        contents: `export default ${JSON.stringify(htmlContent)};`,
        loader: 'js',
      }
    })
  },
}

const ctx = await esbuild.context({
  entryPoints: ['./src/main'],
  bundle: true,
  outdir: 'dist',
  minify: true,
  sourcemap: 'linked',
  loader: {
    '.js': 'jsx',
    '.ts': 'tsx',
    '.md': 'file',
    '.png': 'dataurl',
    '.jpg': 'dataurl',
    '.webp': 'dataurl',
    '.svg': 'text',
    '.ttf': 'dataurl',
    '.eot': 'dataurl',
    '.woff': 'dataurl',
    '.woff2': 'dataurl',
    '.svg': 'dataurl',
  },
  plugins: [
    alias({
      '~': path.resolve(__dirname, './src'),
    }),
    copy({
      assets: [
        { from: ['./index.html'], to: ['./index.html'] },
        { from: ['./src/md/**/*'], to: ['./md'] },
      ],
    }),
    notifyEndPlugin(),
    markdownPlugin,
    dirJson('./src/md/', './dist/file-data.json'),
    stylePlugin({
      // 配置 PostCSS 插件
      postcss: postcssProcessor,
    }),
    // postcssModule,
  ],
})

if (args.indexOf('--watch') >= 0) {
  await ctx.watch()
  await ctx.serve({
    servedir: 'dist',
    host: 'localhost',
    port: 8081,
    fallback: 'index.html', // SPA项目
  })
}
else {
  await ctx.rebuild()
  process.exit(1)
}
