import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SettleSingerItemWrapper } from './style'
import { formatImgSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData: any
  picSize?: number
  type?: string
}
const SettleSingerItem: FC<IProps> = (props) => {
  const { itemData, picSize = 62, type = 'normal' } = props
  return (
    <SettleSingerItemWrapper type={type}>
      <div className="album">
        <img src={formatImgSize(itemData.picUrl, picSize)} alt="" />
      </div>
      <div className="infos">
        <div className="name">{itemData.name}</div>
        <div className="desc">{itemData.alias[0]}</div>
      </div>
    </SettleSingerItemWrapper>
  )
}

export default memo(SettleSingerItem)
