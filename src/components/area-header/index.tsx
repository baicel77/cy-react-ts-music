import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AreaHeaderWrapper } from './style'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  titleName: string
  titleList?: string[]
  moreText?: string
  moreLink?: string
}
const AreaHeader: FC<IProps> = (props) => {
  const { titleName, titleList = [], moreText = '更多', moreLink = '/' } = props
  return (
    <AreaHeaderWrapper className="sprite_02">
      <div className="title">
        <div className="title-name">{titleName}</div>
        <div className="title-list">
          {titleList.map((item) => {
            return (
              <div className="title-item" key={item}>
                <div className="item-name">{item}</div>
                <div className="line">|</div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="more">
        <Link className="more-text" to={moreLink}>
          {moreText}
        </Link>
        <i className="sprite_02"></i>
      </div>
    </AreaHeaderWrapper>
  )
}

export default memo(AreaHeader)
