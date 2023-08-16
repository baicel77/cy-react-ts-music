export function formatCount(count: number) {
  if (count > 100000) {
    return Math.floor(count / 10000) + '万'
  } else {
    return count
  }
}

export function formatImgSize(
  imgUrl: string,
  width = 140,
  height: number = width
) {
  return imgUrl + `?param=${width}y${height}`
}

export function formatTime(time: number) {
  const secondTime = Math.floor(time / 1000)
  const minute = String(Math.floor(secondTime / 60)).padStart(2, '0')
  const second = String(Math.floor(secondTime) % 60).padStart(2, '0')

  return `${minute}:${second}`
}
