import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useDocFile from './useDocFile'

const DocList: React.FC = () => {
  const [tab, setTab] = useState<string>()
  const navigate = useNavigate()
  const { classes, list } = useDocFile()

  useEffect(() => {
    setTab(classes[0])
  }, [classes])

  return (
    <div className="w-[1200px] flex flex-col m-3">
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
      <ul className="p-5 flex flex-col bg-white min-h-[500px]">
        {list.filter((item) => { return item.category == tab }).map((item, index) => (
          <li
            key={index}
            onClick={() => navigate(`/blog/content/${item.name}`)}
            className="flex border-b-2 flex-row justify-between p-2 cursor-pointer"
          >
            <div className="flex-col">
              <div className="text-2xl text-black">
                {item.title || item.name}
              </div>
              <div>
                Size:
                {item.size}
              </div>
            </div>
            <div className="flex flex-col text-right min-w-72 justify-end">
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
