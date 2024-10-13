import { useEffect, useRef, useState } from 'react'
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom'
import '../assets/css/index.css'
import StarSky from '~/components/StarSky'
import MenuIcon from '~/components/MenuIcon'

const BlogLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)

  let keywords = ''
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [showNav, setShowNav] = useState(false)

  const toSearch = () => navigate(`/blog/search?keywords=${encodeURIComponent(keywords)}`)

  const searchEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == 'Enter') {
      toSearch()
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = queryParams.get('keywords') || ''
    }
  })

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="h-48 w-full flex min-h-[200px] justify-center relative">
        <StarSky starNum={80}>
          <div className="w-full lg:w-[1200px] flex flex-col justify-end lg:justify-center items-start text-white p-3">
            <div className="text-3xl italic">Keep the life simple and hopefull</div>
            <div className="w-full flex justify-between items-center my-3 flex-wrap">
              <ul className="justify-start gap-11 mr-3 text-xl hidden lg:flex">
                <li className="underline underline-offset-2">
                  <Link to="/">Home</Link>
                </li>
                <li className="underline underline-offset-2">
                  <Link to="/blog/list/">DocList</Link>
                </li>
                <li className="underline underline-offset-2">
                  <Link to="https://github.com/shangxinbo">Github</Link>
                </li>
                <li className="underline underline-offset-2">
                  <Link to="/blog/content/why">About</Link>
                </li>
                <li className="underline underline-offset-2">
                  <Link to="/blog/content/me">Me</Link>
                </li>
              </ul>
              <div className="w-1/3 h-9 border border-white rounded-full flex items-center mt-1">
                <input
                  type="text"
                  placeholder="Doc Title/Name"
                  ref={inputRef}
                  onKeyDown={searchEnter}
                  onChange={evt => keywords = evt.target.value}
                  className="
                    w-96 h-9 block bg-transparent
                    outline-none
                    pl-4 pr-2
                    placeholder:text-slate-300
                "
                />
                <svg
                  onClick={toSearch}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-3 cursor-pointer size-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="relative lg:hidden">
            <div onClick={() => setShowNav(true)} className="absolute right-5 top-4 flex justify-center items-center w-10 h-10 rounded text-white border border-2 border-white">
              <MenuIcon />
            </div>
            <div className={`fixed w-full h-screen top-0 right-0 bg-black bg-opacity-50 ${showNav == true ? 'block' : 'hidden'}`} onClick={() => setShowNav(false)}>
              <ul className="justify-start gap-11 bg-blue-700 color-white min-h-screen p-5 w-[70%] absolute right-0 shadow-lg">
                <li className="block p-5 border-b border-solid border-white border-1">
                  <Link className="text-white text-2xl" to="/">Home</Link>
                </li>
                <li className="block p-5  border-b border-solid border-white border-1">
                  <Link className="text-white text-2xl" to="/blog/list/">DocList</Link>
                </li>
                <li className="block p-5  border-b border-solid border-white border-1">
                  <Link className="text-white text-2xl" to="https://github.com/shangxinbo">Github</Link>
                </li>
                <li className="block p-5  border-b border-solid border-white border-1">
                  <Link className="text-white text-2xl" to="/blog/content/why">About</Link>
                </li>
                <li className="block p-5  border-b border-solid border-white border-1">
                  <Link className="text-white text-2xl" to="/blog/content/me">Me</Link>
                </li>
              </ul>
            </div>
          </div>
        </StarSky>
      </div>
      <Outlet />
    </div>
  )
}

export default BlogLayout
