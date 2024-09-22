import React, { useEffect, useState } from 'react'
import type { DocItem } from '../interface'

const DocList: React.FC = () => {
  const [classes, setClasses] = useState<string[]>([])
  const [list, setList] = useState<DocItem[]>([])

  const getDocs = async () => {
    const res = await fetch('/file-data.json')
    const json = await res.json()
    setClasses(json.classes)
    setList(json.file)
  }

  useEffect(() => {
    getDocs()
  }, [])

  return (
    <div className="w-[1200px] border-slate-400 border-solid border">
      <ul className="flex flex-col max-w-[200px] min-w-[200px]">
        {classes.map((item, index) => (
          <li key={index}>{item }</li>
        ))}
      </ul>
      <div className="">
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item.name }</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default DocList
