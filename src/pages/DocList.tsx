import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import useDocFile from '~/hooks/useDocFile'
import type { DocItem } from '~/interface/index'
import SortIcon from '~/components/SortIcon'
import Loading from '~/components/Loading'
import Blank from '~/components/Blank'

const DocList: React.FC = () => {
  const navigate = useNavigate()
  const [tab, setTab] = useState<string>()
  const { classes, list, loadStatus } = useDocFile()
  const [sort, setSort] = useState<string>('')

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

  useEffect(() => {
    setTab(classes[0])
  }, [classes])

  if (!loadStatus) {
    return (
      <div className="w-full lg:w-[1200px] flex flex-col m-3 h-96">
        <Loading />
      </div>
    )
  }
  if (classes.length <= 0) {
    return (
      <div className="w-full lg:w-[1200px] flex flex-col m-3 h-96">
        <Blank />
      </div>
    )
  }

  return (
    <div className="w-full lg:w-[1200px] flex flex-col m-3">
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
              <th
                className={`w-[120px] text-center cursor-pointer ${sort === 'size' ? 'text-violet-500' : ''}`}
                onClick={() => sortBy('size')}
              >
                Size(KB)
                <SortIcon />
              </th>
              <th
                className={`w-[120px] text-center cursor-pointer ${sort === 'create' ? 'text-violet-500' : ''}`}
                onClick={() => sortBy('create')}
              >
                Created
                <SortIcon />
              </th>
              <th
                className={`w-[120px] text-center cursor-pointer ${sort === 'update' ? 'text-violet-500' : ''}`}
                onClick={() => sortBy('update')}
              >
                Updated
                <SortIcon />
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
