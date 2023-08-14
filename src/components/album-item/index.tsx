import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumItemWrapper } from './style'
import { formatImgSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData: any
}
const AlbumItem: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <AlbumItemWrapper>
      <div className="album">
        <img src={formatImgSize(itemData.picUrl, 100)} alt="" />
        <div className="cover sprite_cover"></div>
      </div>
      <div className="infos">
        <div className="name">{itemData.name}</div>
        <div className="artist">{itemData.artist.name}</div>
      </div>
    </AlbumItemWrapper>
  )
}

export default memo(AlbumItem)
