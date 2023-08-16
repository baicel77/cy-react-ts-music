export function getSongPlayUrl(id: number) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}
export interface ILyrics {
  time: number
  text: string
}
const regExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/gi
export function parseLyric(lyricString: string) {
  const lyrics: ILyrics[] = []
  const lyricLine = lyricString.split('\n')
  lyricLine.forEach((item) => {
    const res = regExp.exec(item) as any
    if (res) {
      const minutes = res[1] * 60 * 1000
      const second = res[2] * 1000
      const mSecond = res[3].length === 3 ? res[3] * 1 : res[3] * 10
      const time = minutes + second + mSecond
      const text = item.replaceAll(regExp, '')
      lyrics.push({
        time,
        text
      })
    }
  })
  return lyrics
}
