import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useDocFile from '../hooks/useDocFile'
import dayjs from 'dayjs'
import type { DocItem } from '../interface/index'

const DocList: React.FC = () => {
  const [tab, setTab] = useState<string>()
  const navigate = useNavigate()
  const { classes, list } = useDocFile()
  const [sort, setSort] = useState<string>('')

  useEffect(() => {
    setTab(classes[0])
  }, [classes])

  const sortBy = (type: string) => {
    if (sort !== type) {
      setSort(type)
    }
    else {
      setSort('')
    }
  }
  const compareFunc = (a: DocItem, b: DocItem) => {
    if (sort == 'size') {
      return a.size - b.size
    }
    else if (sort == 'create') {
      return dayjs(a.createdAt).valueOf() - dayjs(b.createdAt).valueOf()
    }
    else if (sort == 'update') {
      return dayjs(a.modifiedAt).valueOf() - dayjs(b.modifiedAt).valueOf()
    }
    else {
      return 1
    }
  }

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
      <div className="px-5 flex flex-col bg-white">
        <table className="table-fixed ">
          <thead>
            <tr className="h-11 text-left">
              <th>Name</th>
              <th className={`w-[120px] text-center cursor-pointer ${sort === 'size' ? 'text-violet-500' : ''}`} onClick={() => sortBy('size')}>
                Size(KB)
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="px-1 inline size-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
                </svg>
              </th>
              <th className={`w-[120px] text-center cursor-pointer ${sort === 'create' ? 'text-violet-500' : ''}`} onClick={() => sortBy('create')}>
                Created
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="px-1 inline size-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
                </svg>
              </th>
              <th className={`w-[120px] text-center cursor-pointer ${sort === 'update' ? 'text-violet-500' : ''}`} onClick={() => sortBy('update')}>
                Updated
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="px-1 inline size-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
                </svg>
              </th>
            </tr>
          </thead>
          <tbody>
            {list
              .filter((item) => { return item.category == tab })
              .sort(compareFunc)
              .map((item, index) => (
                <tr
                  key={index}
                  onClick={() => navigate(`/blog/content/${item.name}`)}
                  className={`h-11 cursor-pointer border-y border-slate-300 ${index % 2 > 0 ? 'bg-zinc-50' : ''}`}
                >
                  <td className="text-left text-sky-600 hover:underline">{item.title || item.name}</td>
                  <td className="text-center">
                    {item.size}
                  </td>
                  <td className="text-center">
                    {dayjs(item.createdAt).format('YYYY-MM-DD')}
                  </td>
                  <td className="text-center">
                    {dayjs(item.modifiedAt).format('YYYY-MM-DD')}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default DocList
