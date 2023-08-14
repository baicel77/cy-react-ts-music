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
