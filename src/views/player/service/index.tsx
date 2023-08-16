import cyRequest from '@/service'

export function getSongDetail(ids: number) {
  return cyRequest.get({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

export function getLyricById(id: number) {
  return cyRequest.get({
    url: '/lyric',
    params: {
      id
    }
  })
}
