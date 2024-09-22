import React from "react";
import StarSky from './StarSky'
import '../assets/css/index.css'

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="h-48 w-full flex justify-center relative">
        <StarSky starNum={80}>
          <div class="w-[1200px] flex flex-col justify-center items-start text-white">
            <div class="text-2xl italic">Keep the life simple and hopefull</div>
            <ul class="flex justify-start gap-11 mr-3 my-2 text-xl italic">
              <li class="underline"><a href="index.html">index</a></li>
              <li class="underline"><a href="diary.html">blog</a></li>
              <li class="underline"><a href="https://github.com/shangxinbo">github</a></li>
              <li class="underline"><a href="">other</a></li>
            </ul>
          </div>
        </StarSky>
      </div>
      <div className="list-contain">
        <h1 className="text-4xl font-bold text-blue-600">Hello, Tailwind CSS!</h1>
      </div>
    </div>
  );
};

export default App;