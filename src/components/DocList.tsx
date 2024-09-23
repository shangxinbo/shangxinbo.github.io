import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { DocItem } from '../interface'

const DocList: React.FC = () => {
  const [classes, setClasses] = useState<string[]>([])
  const [list, setList] = useState<DocItem[]>([])
  const [tab, setTab] = useState<string>()
  const navigate = useNavigate()

  const getDocs = async () => {
    const res = await fetch('/file-data.json')
    const json = await res.json()
    setClasses(json.classes)
    setTab(json.classes[0])
    setList(json.file)
  }

  useEffect(() => {
    getDocs()
  }, [])

  return (
    <div className="w-[1200px] flex flex-col flex-1 overflow-hidden m-3">
      <ul className="flex flex-row border-b-2">
        {classes.map((item, index) => (
          <li
            key={index}
            className={`
              px-[20px] 
              py-[10px]
              flex
              justify-center
              items-center
              ${tab == item ? 'border-b-2 border-b-blue-700 border-solid' : 'cursor-pointer'}
            `}
            onClick={() => setTab(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <ul className="p-5 flex flex-col overflow-auto bg-white min-h-full">
        {list.filter((item) => { return item.category == tab }).map((item, index) => (
          <li key={index} onClick={() => navigate(`/blog/content/${item.name}`)} className="flex border-b-2 flex-row justify-between p-2 cursor-pointer hover:bg-blue-300">
            <div className="flex-col">
              <div className="text-2xl text-black font-bold">
                {item.name}
              </div>
              <div>
                Size:
                {item.size}
              </div>
            </div>
            <div className="flex flex-col text-right">
              <div>
                Create:
                {item.createdAt}
              </div>
              <div>
                Update:
                {item.modifiedAt}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default DocList
