import React, { memo, useEffect } from 'react'

import type { FC, ReactNode } from 'react'
import { RecommendWrapper } from './style'
import TopBanner from './c-cpns/top-banner'
import { useAppDispatch, useAppSelector, shallowEqualApp } from '@/store'
import { getBannerListAction } from './store'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  // 发起action
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getBannerListAction())
  }, [])
  const { bannerList } = useAppSelector(
    (state) => ({
      bannerList: state.recommend.bannerList
    }),
    shallowEqualApp
  )
  console.log('bannerList', bannerList)
  return (
    <RecommendWrapper>
      {bannerList.length && <TopBanner bannerList={bannerList} />}
    </RecommendWrapper>
  )
}

export default memo(Recommend)
