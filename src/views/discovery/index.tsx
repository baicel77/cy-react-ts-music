import React, { Suspense, memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}
const discovery: FC<IProps> = () => {
  return (
    <div className="discovery">
      <Link to="/discovery/recommend">推荐</Link>
      <Link to="/discovery/ranking">排行榜</Link>
      <Link to="/discovery/songs">歌单</Link>
      <Link to="/discovery/djradio">主播电台</Link>
      <Link to="/discovery/artist">歌手</Link>
      <Link to="/discovery/album">新碟上架</Link>
      <div className="discovery-content">
        <Suspense fallback="">
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default memo(discovery)
