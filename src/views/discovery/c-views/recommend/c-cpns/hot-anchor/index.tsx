import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HorAnchorWrapper } from './style'
import AreaHeaderV2 from '@/components/area-header-v2'
import { hotRadios } from '@/assets/data/local_data'
import SettleSingerItem from '@/components/singer-item'

interface IProps {
  children?: ReactNode
}
const HotAnchor: FC<IProps> = () => {
  return (
    <HorAnchorWrapper>
      <AreaHeaderV2 title="热门主播" isShowMore={false} />
      <div className="list">
        {hotRadios.map((item) => {
          return (
            <SettleSingerItem
              itemData={item}
              picSize={40}
              type="hotAnchor"
              key={item.name}
            />
          )
        })}
      </div>
    </HorAnchorWrapper>
  )
}

export default memo(HotAnchor)
