import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/index.css'
import logo from '../assets/imgs/avt.jpg'
import blogImg from '../assets/imgs/wordpress-logo.webp'
import githubImg from '../assets/imgs/github-logo.webp'
import emailImg from '../assets/imgs/email.webp'
import wxImg from '../assets/imgs/wechat.webp'
import wxqrImg from '../assets/imgs/wx.jpg'

const IndexApp: React.FC = () => {
  const [showQr, setQr] = useState(false)
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[600px] h-1/2 flex flex-col items-center justify-center">
        <img src={logo} className="w-60 h-60 rounded-full" />
        <div className="flex flex-col italic items-center justify-center text-center">
          <div className="text-3xl font-bold my-3">Shang Xinbo</div>
          <div className="text-2xl text-gray-600 leading-10">
            Live in Beijing , China , and work at
            {' '}
            <Link target="_blank" className="text-blue-600 underline underline-offset-2" to="https://www.kuaishou.com/?isHome=1"> Kuaishou</Link>
            {' '}
            as a senior web front Engineer.
            {' '}
            Read more
            {' '}
            <Link className="text-blue-700 underline underline-offset-2" to="/blog/list">about me</Link>
          </div>
        </div>
        <div className="flex justify-center gap-11 my-6">
          <Link className="w-12 h-12" to="/blog/list" title="it's me">
            <img src={blogImg} />
          </Link>
          <Link className="w-12 h-12" to="https://github.com/shangxinbo" target="_blank" title="github">
            <img src={githubImg} />
          </Link>
          <Link className="w-12 h-12" to="mailto:shangxinbo123@gmail.com" title="email">
            <img src={emailImg} />
          </Link>
          <Link className="w-12 h-12 relative" to="#" title="wechat">
            <img src={wxImg} onClick={() => setQr(!showQr)} />
            <div className={`absolute bottom-14 right-0 bg-white w-[256px] h-[256px] z-20 shadow shadow-slate-700 ${showQr ? 'block' : 'hidden'}`}>
              <img src={wxqrImg} className="block max-w-[256px] w-[256px] h-[256px]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default IndexApp
