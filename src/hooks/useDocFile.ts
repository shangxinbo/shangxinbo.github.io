import { useEffect, useState } from 'react'
import type { DocItem } from '../interface'

const useDocFile = () => {
  const [loadStatus, setLoadStatus] = useState(false)
  const [classes, setClasses] = useState<string[]>([])
  const [list, setList] = useState<DocItem[]>([])

  const getDocs = async () => {
    const res = await fetch('/file-data.json')
    const json = await res.json()
    setClasses(json.classes)
    setList(json.file)
    setLoadStatus(true)
  }

  const getDoc = (file: string) => {
    return list.find((item) => {
      return item.name == file
    })
  }

  useEffect(() => {
    getDocs()
  }, [])

  return { classes, list, loadStatus, getDoc }
}

export default useDocFile
