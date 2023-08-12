import React, { Suspense, memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './c-cpns/nav-bar'

interface IProps {
  children?: ReactNode
}
const Discovery: FC<IProps> = () => {
  return (
    <div className="discovery">
      <NavBar />
      <div className="discovery-content">
        <Suspense fallback="">
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default memo(Discovery)
