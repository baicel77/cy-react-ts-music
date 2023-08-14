import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MenuItemWrapper } from './style'
import { formatCount, formatImgSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData: any
}
const MenuItem: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <MenuItemWrapper>
      <div className="album">
        <img src={formatImgSize(itemData.picUrl)} alt="" />
        <div className="cover sprite_cover"></div>
        <div className="info sprite_cover">
          <div className="info-left">
            <div className="headset-icon sprite_icon"></div>
            <div className="play-count">{formatCount(itemData.playCount)}</div>
          </div>
          <div className="play-icon sprite_icon"></div>
        </div>
      </div>
      <div className="desc">{itemData.name}</div>
    </MenuItemWrapper>
  )
}

export default memo(MenuItem)
