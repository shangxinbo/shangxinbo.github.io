import fs from 'node:fs'
import path from 'node:path'
import { fromMarkdown } from 'mdast-util-from-markdown'

const mdDirtoJson = (directory, outputFile) => ({
  name: 'generate-markdown-files-json',
  setup(build) {
    build.onEnd(() => {
      // 递归遍历目录并获取文件详细信息
      const getFiles = (dir, fileList = [], classes = []) => {
        const files = fs.readdirSync(dir)

        files.forEach((file) => {
          const filePath = path.join(dir, file)
          const stat = fs.statSync(filePath)

          if (stat.isDirectory()) {
            getFiles(filePath, fileList, classes) // 递归遍历子目录
          }
          else {
            // 使用 path.parse() 获取不带后缀的文件名
            const parsedPath = path.parse(filePath)
            const distPath = filePath.replace('src\\', '')
            const distPathArr = distPath.split('\\')

            let className = 'Uncategorized'
            if (distPathArr.length > 2) {
              className = distPathArr[1]
            }

            // 解析文件名
            let docTitle = ''
            const doc = fs.readFileSync(filePath)
            const tree = fromMarkdown(doc)
            tree.children.map((item) => {
              if (
                item.type === 'heading'
                && item.depth === 1
                && item.position.start.line < 3
              ) {
                docTitle = item.children[0].value
              }
            })

            // 收集文件的基本信息
            fileList.push({
              name: parsedPath.name,
              title: docTitle,
              path: distPath, // 文件的完整路径
              size: stat.size, // 文件大小（字节）
              createdAt: stat.birthtime, // 创建时间
              modifiedAt: stat.mtime, // 最后修改时间
              category: className,
            })
            classes.push(className)
          }
        })

        return [fileList, classes]
      }

      // 获取目录中的文件列表及其详细信息
      const [fileList, classes] = getFiles(directory)

      const jsonFile = {
        classes: [...new Set(classes)].sort((a, b) => { return a == 'Uncategorized' ? 1 : -1 }),
        file: fileList,
      }

      // 生成 JSON 数据
      const jsonData = JSON.stringify(jsonFile, null, 2)

      // 将 JSON 数据写入到指定文件
      fs.writeFileSync(outputFile, jsonData)

      // console.log(`JSON 数据已生成: ${outputFile}`)
    })
  },
})

export default mdDirtoJson
