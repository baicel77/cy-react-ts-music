import cyRequest from '@/service'

export function getBanner() {
  return cyRequest.get({
    url: '/banner'
  })
}

export function getHotRecommend(limit = 8) {
  return cyRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewAlbum() {
  return cyRequest.get({
    url: '/album/newest'
  })
}

export function getRanking(id) {
  return cyRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
