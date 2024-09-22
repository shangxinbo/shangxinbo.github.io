import React from 'react'
import '../assets/css/index.css'
import logo from '../assets/imgs/avt.jpg'
import blogImg from '../assets/imgs/blog.png'
import githubImg from '../assets/imgs/github.png'
import googleImg from '../assets/imgs/google.png'
import qqImg from '../assets/imgs/qq.png'

export default function IndexApp() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className='w-5/12 h-1/2 flex flex-col items-center justify-center'>
        <img src={logo} class="w-48 h-48 rounded-full" />
        <div className='flex flex-col italic items-center justify-center'>
          <div className="text-2xl font-bold my-3">Shang Xinbo</div>
          <div className="text-xl text-gray-600">
            Live in Beijing , China , and work
            at <a target="_blank" className='text-blue-600 underline underline-offset-2' href="https://www.kuaishou.com/?isHome=1"> Kuaishou</a> as
            a senior web front Engineer. Read
            more <a className='text-blue-700 underline underline-offset-2' href="diary.html">about me</a>
          </div>
        </div>
        <div className="flex justify-center gap-11 my-6">
          <a className="w-10 h-10" href="diary.html" title="it's me">
            <img src={blogImg} />
          </a>
          <a class="w-10 h-10" href="https://github.com/shangxinbo" target="_blank" title="github">
            <img src={githubImg} />
          </a>
          <a class="w-10 h-10" href="#" title="google +">
            <img src={googleImg} />
          </a>
          <a class="w-10 h-10" href="tencent://message/?uin=314911714" title="qq">
            <img src={qqImg} />
          </a>
        </div>
      </div>
    </div >
  )
}