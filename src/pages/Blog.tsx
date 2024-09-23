import '../assets/css/index.css'
import StarSky from '../components/StarSky'
import { Outlet } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center">
      <div className="h-48 w-full flex min-h-[200px] justify-center relative">
        <StarSky starNum={80}>
          <div className="w-[1200px] flex flex-col justify-center items-start text-white">
            <div className="text-2xl italic">Keep the life simple and hopefull</div>
            <ul className="flex justify-start gap-11 mr-3 my-2 text-xl italic">
              <li className="underline"><a href="index.html">index</a></li>
              <li className="underline"><a href="diary.html">blog</a></li>
              <li className="underline"><a href="https://github.com/shangxinbo">github</a></li>
              <li className="underline"><a href="">other</a></li>
            </ul>
          </div>
        </StarSky>
      </div>
      <Outlet />
    </div>
  )
}

export default App
