import { useEffect, useState } from 'react'
import type { DocItem } from '../interface'

const useDocFile = () => {
  const [classes, setClasses] = useState<string[]>([])
  const [list, setList] = useState<DocItem[]>([])

  const getDocs = async () => {
    const res = await fetch('/file-data.json')
    const json = await res.json()
    setClasses(json.classes)
    setList(json.file)
  }

  const getDoc = (file: string) => {
    return list.find((item) => {
      return item.name == file
    })
  }

  useEffect(() => {
    getDocs()
  }, [])

  return { classes, list, getDoc }
}

export default useDocFile
