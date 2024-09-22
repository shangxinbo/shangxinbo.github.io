import fs from 'node:fs'
import path from 'node:path'

const mdDirtoJson = (directory, outputFile) => ({
  name: 'generate-markdown-files-json',
  setup(build) {
    build.onEnd(() => {
      // 递归遍历目录并获取文件详细信息
      const getFiles = (dir, fileList = {}, classes = []) => {
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
            let className = 'Others'
            if (distPathArr.length > 2) {
              className = distPathArr[1]
            }
            // 收集文件的基本信息
            fileList[parsedPath.name] = {
              name: parsedPath.name, // 不带后缀的文件名
              path: distPath, // 文件的完整路径
              size: stat.size, // 文件大小（字节）
              createdAt: stat.birthtime, // 创建时间
              modifiedAt: stat.mtime, // 最后修改时间
              category: className,
            }
            classes.push(className)
          }
        })

        return [fileList, classes]
      }

      // 获取目录中的文件列表及其详细信息
      const [fileList, classes] = getFiles(directory)

      const jsonFile = {
        classes: [...new Set(classes)],
        file: fileList,
      }

      // 生成 JSON 数据
      const jsonData = JSON.stringify(jsonFile, null, 2)

      // 将 JSON 数据写入到指定文件
      fs.writeFileSync(outputFile, jsonData)

      console.log(`JSON 数据已生成: ${outputFile}`)
    })
  },
})

export default mdDirtoJson
