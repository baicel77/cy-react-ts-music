import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TopRankingWrapper } from './style'
import AreaHeader from '@/components/area-header'
import TopRankingItem from '../top-ranking-item'

interface IProps {
  children?: ReactNode
  rankingList: any[]
}
const TopRanking: FC<IProps> = (props) => {
  const { rankingList } = props
  console.log('rankingList', rankingList)
  return (
    <TopRankingWrapper>
      <AreaHeader titleName="榜单" moreLink="/discovery/ranking" />
      <div className="content">
        {rankingList.map((item) => {
          return <TopRankingItem itemData={item} key={item.id} />
        })}
      </div>
    </TopRankingWrapper>
  )
}

export default memo(TopRanking)
