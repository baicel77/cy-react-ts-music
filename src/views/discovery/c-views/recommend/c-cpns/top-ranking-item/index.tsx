import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TopRankingItemWrapper } from './style'
import { formatImgSize } from '@/utils/format'
import { useAppDispatch } from '@/store'
import { fetchPlayerDataAction } from '@/views/player/store'

interface IProps {
  children?: ReactNode
  itemData: any
}
const TopRankingItem: FC<IProps> = (props) => {
  const { itemData } = props
  const dispatch = useAppDispatch()
  const handlePlaySong = (id: number) => {
    dispatch(fetchPlayerDataAction(id))
  }
  return (
    <TopRankingItemWrapper>
      <div className="top">
        <div className="album">
          <img src={formatImgSize(itemData.coverImgUrl, 80)} alt="" />
          <div className="cover sprite_cover"></div>
        </div>
        <div className="infos">
          <div className="name">{itemData.name}</div>
          <div className="btns">
            <a href="" className="sprite_02 btn play"></a>
            <a href="" className="sprite_02 btn favor"></a>
          </div>
        </div>
      </div>
      <div className="list">
        {itemData.tracks.slice(0, 10).map((item: any, index: any) => {
          return (
            <div className="item" key={item.id}>
              <div className="index">{index + 1}</div>
              <div className="name">{item.name}</div>
              <div className="btns">
                <a
                  className="sprite_02 btn play"
                  onClick={() => handlePlaySong(item.id)}
                ></a>
                <a className="sprite_icon2 btn add"></a>
                <a className="sprite_02 btn favor"></a>
              </div>
            </div>
          )
        })}
      </div>
      <div className="bottom">
        <div className="more">查看全部 &gt;</div>
      </div>
    </TopRankingItemWrapper>
  )
}

export default memo(TopRankingItem)
