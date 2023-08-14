import React, { memo, useRef } from 'react'
import type { ElementRef, FC, ReactNode } from 'react'
import { NewAlbumWrapper } from './style'
import AreaHeader from '@/components/area-header'
import { Carousel } from 'antd'
import AlbumItem from '@/components/album-item'

interface IProps {
  children?: ReactNode
  newAlbumList: any[]
}
const NewAlbum: FC<IProps> = (props) => {
  const { newAlbumList } = props
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const handlePreClick = () => {
    bannerRef.current?.prev()
  }
  const handleNextClick = () => {
    bannerRef.current?.next()
  }
  return (
    <NewAlbumWrapper>
      <AreaHeader titleName="新碟上架" moreLink="/discovery/album" />
      <div className="content">
        <div className="sprite_02 control left" onClick={handlePreClick}></div>
        <div className="banner">
          <Carousel dots={false} ref={bannerRef}>
            {[0, 1].map((item) => {
              return (
                <div className="banner-item" key={item}>
                  {newAlbumList.slice(item * 5, (item + 1) * 5).map((citem) => {
                    return <AlbumItem key={citem.id} itemData={citem} />
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <div
          className="sprite_02 control right"
          onClick={handleNextClick}
        ></div>
      </div>
    </NewAlbumWrapper>
  )
}

export default memo(NewAlbum)
