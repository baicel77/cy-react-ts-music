import React, { memo, useEffect } from 'react'

import type { FC, ReactNode } from 'react'
import { RecommendWrapper } from './style'
import TopBanner from './c-cpns/top-banner'
import { useAppDispatch, useAppSelector, shallowEqualApp } from '@/store'
import { getRecommendDataAction, getRankingDataAction } from './store'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import TopRanking from './c-cpns/top-ranking'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  // 发起action
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getRecommendDataAction())
    dispatch(getRankingDataAction())
  }, [])
  // 获取数据
  const {
    bannerList = [],
    hotRecommendList = [],
    newAlbumList = [],
    rankingList = []
  } = useAppSelector(
    (state) => ({
      bannerList: state.recommend.bannerList,
      hotRecommendList: state.recommend.hotRecommendList,
      newAlbumList: state.recommend.newAlbumList,
      rankingList: state.recommend.rankingList
    }),
    shallowEqualApp
  )
  return (
    <RecommendWrapper>
      {!!bannerList.length && <TopBanner bannerList={bannerList} />}
      <div className="recommend-content wrap_980">
        <div className="recommend-left">
          {/* 热门推荐 */}
          {!!hotRecommendList.length && (
            <HotRecommend hotRecommendList={hotRecommendList} />
          )}
          {/* 新碟上架 */}
          {!!newAlbumList.length && <NewAlbum newAlbumList={newAlbumList} />}
          {/* 榜单 */}
          {!!rankingList.length && <TopRanking rankingList={rankingList} />}
        </div>
        <div className="recommend-right"></div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
