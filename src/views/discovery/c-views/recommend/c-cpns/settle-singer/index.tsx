import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SettleSingerWrapper } from './style'
import AreaHeaderV2 from '@/components/area-header-v2'
import SettleSingerItem from '@/components/singer-item'

interface IProps {
  children?: ReactNode
  settleSingerList: any[]
}
const SettleSinger: FC<IProps> = (props) => {
  const { settleSingerList } = props
  return (
    <SettleSingerWrapper>
      <AreaHeaderV2 />
      <div className="list">
        {settleSingerList.map((item) => {
          return <SettleSingerItem key={item.id} itemData={item} />
        })}
      </div>
      <div className="apply-for">申请成为网易音乐人</div>
    </SettleSingerWrapper>
  )
}

export default memo(SettleSinger)
