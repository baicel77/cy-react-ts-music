import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AreaHeaderV2Wrapper } from './style'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  title?: string
  moreText?: string
  isShowMore?: boolean
}
const AreaHeaderV2: FC<IProps> = (props) => {
  const {
    title = '入驻歌手',
    moreText = '查看全部 >',
    isShowMore = true
  } = props
  return (
    <AreaHeaderV2Wrapper>
      <div className="title">{title}</div>
      {isShowMore && (
        <Link to="/" className="more">
          {moreText}
        </Link>
      )}
    </AreaHeaderV2Wrapper>
  )
}

export default memo(AreaHeaderV2)
