import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/index.css'
import logo from '../assets/imgs/avt.jpg'
import blogImg from '../assets/imgs/blog.png'
import githubImg from '../assets/imgs/github.png'
import googleImg from '../assets/imgs/google.png'
import qqImg from '../assets/imgs/qq.png'

const IndexApp: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-5/12 h-1/2 flex flex-col items-center justify-center">
        <img src={logo} className="w-48 h-48 rounded-full" />
        <div className="flex flex-col italic items-center justify-center">
          <div className="text-2xl font-bold my-3">Shang Xinbo</div>
          <div className="text-xl text-gray-600">
            Live in Beijing , China , and work
            at
            {' '}
            <Link target="_blank" className="text-blue-600 underline underline-offset-2" to="https://www.kuaishou.com/?isHome=1"> Kuaishou</Link>
            {' '}
            as
            a senior web front Engineer. Read
            more
            {' '}
            <Link className="text-blue-700 underline underline-offset-2" to="/blog/list">about me</Link>
          </div>
        </div>
        <div className="flex justify-center gap-11 my-6">
          <Link className="w-10 h-10" to="/blog/list" title="it's me">
            <img src={blogImg} />
          </Link>
          <Link className="w-10 h-10" to="https://github.com/shangxinbo" target="_blank" title="github">
            <img src={githubImg} />
          </Link>
          <Link className="w-10 h-10" to="#" title="google +">
            <img src={googleImg} />
          </Link>
          <Link className="w-10 h-10" to="tencent://message/?uin=314911714" title="qq">
            <img src={qqImg} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default IndexApp
