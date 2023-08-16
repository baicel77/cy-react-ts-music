import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { UserLoginWrapper } from './style'

interface IProps {
  children?: ReactNode
}
const UserLogin: FC<IProps> = () => {
  return (
    <UserLoginWrapper className="sprite_02">
      <div className="infos">
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </div>
      <div className="login sprite_02">用户登录</div>
    </UserLoginWrapper>
  )
}

export default memo(UserLogin)
