import { memo, useRef, useState, useEffect, ReactNode } from 'react'
import anime from 'animejs/lib/anime.es.js'
import styles from '../assets/css/index.module.css'

// starNum 星星数量
// meteorNum 流星数量
const StarSky = memo(function StarSky({ starNum = 120, meteorNum = 60, children }: { starNum?: number, meteorNum?: number, children?: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [vw, setVw] = useState(0)
  const [vh, setVh] = useState(0)

  const [num] = useState(starNum)
  const [shootStarNum] = useState(meteorNum)

  const starryNight = () => {
    anime({
      targets: '#sky circle',
      opacity: [
        { duration: 600, value: '0' },
        { duration: 600, value: '1' },
      ],
      easing: 'linear',
      loop: true,
      delay: (el: unknown, i: number) => 50 * i,
    })
  }

  const shootingStars = () => {
    anime({
      targets: '#shootingstars div',
      easing: 'linear',
      loop: true,
      delay: (el: unknown, i: number) => 1000 * i,
      opacity: [{ duration: 500, value: '1' }, 0],
      translateX: [0, 120],
      translateY: [0, -120],
      rotate: ['135deg', '135deg'],
    })
  }

  // 星星的大小 最小值1，最大值3
  const randomRadius = () => Math.random() * 2 + 1

  const getRandomX = () => Math.floor(Math.random() * vw)

  const getRandomY = () => Math.floor(Math.random() * vh)

  useEffect(() => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect()
      setVw(width)
      setVh(height)
      starryNight()
      shootingStars()
    }
  }, [])

  return (
    <div ref={ref} className={`absolute top-0 left-0 w-full h-full ${styles['sky-bg']}`}>
      <svg id="sky" className="w-full h-full z-0">
        {[...Array(num)].map((_, index) => (
          <circle
            cx={getRandomX()}
            cy={getRandomY()}
            r={randomRadius()}
            stroke="none"
            strokeWidth="0"
            fill="white"
            key={index}
          />
        ))}
      </svg>
      <div id="shootingstars" className={`w-full h-full absolute top-0 left-0 ${styles.shootingstars}`}>
        {[...Array(shootStarNum)].map((_, index) => (
          <div
            key={index}
            className={styles.wish}
            style={{
              left: `${getRandomX()}px`,
              top: `${getRandomY() - 50}px`, // 因为旋转了
            }}
          />
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-10 flex justify-center">
        {children}
      </div>
    </div>
  )
})

export default StarSky
