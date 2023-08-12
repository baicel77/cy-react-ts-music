import cyRequest from '@/service'

export function getBanner() {
  return cyRequest.get({
    url: '/banner'
  })
}
