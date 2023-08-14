import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotRecommendWrapper } from './style'
import AreaHeader from '@/components/area-header'
import MenuItem from '@/components/menu-item'

interface IProps {
  children?: ReactNode
  hotRecommendList: any[]
}
const HotRecommend: FC<IProps> = (props) => {
  const { hotRecommendList } = props
  return (
    <HotRecommendWrapper>
      <AreaHeader
        titleName="热门推荐"
        titleList={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discovery/songs"
      />
      <div className="content">
        {hotRecommendList.map((item) => {
          return <MenuItem key={item.id} itemData={item} />
        })}
      </div>
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
