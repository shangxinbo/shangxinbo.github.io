const emojiSet = [
  '😀', '😃', '😁', '🤣', '😎', '😜', '😡', '🥶',
  '🤞', '🖕', '💪',
  '🖱', '💻', '💾',
  '❤️', '🚾',
]

const changeFaviconToEmoji = (emoji: string) => {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  // 设置画布大小
  canvas.width = 64
  canvas.height = 64

  // 设置字体和颜色
  context!.fillStyle = 'white'
  context!.fillRect(0, 0, canvas.width, canvas.height)
  context!.font = '48px serif' // 调整字体大小
  context!.textAlign = 'center'
  context!.textBaseline = 'middle'
  context!.fillStyle = 'black' // 设置 emoji 颜色
  context!.fillText(emoji, canvas.width / 2, canvas.height / 2)

  let link: HTMLLinkElement | null = document.querySelector('link[rel*=\'icon\']')

  if (link) {
    link.rel = 'icon'
    link.href = canvas.toDataURL('image/png') // 将画布转换为 Data URL
  }
  else {
    link = document.createElement('link')
    link.rel = 'icon'
    link.href = canvas.toDataURL('image/png') // 将画布转换为 Data URL
    document.getElementsByTagName('head')[0].appendChild(link)
  }
}

const updateFavico = () => {
  setInterval(() => {
    changeFaviconToEmoji(emojiSet[Math.floor(emojiSet.length * Math.random())])
  }, 2000)
}

export default updateFavico
