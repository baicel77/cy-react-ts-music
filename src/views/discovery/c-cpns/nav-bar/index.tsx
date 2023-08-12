import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavbarWrapper } from './style'
import { NavLink } from 'react-router-dom'
import { discoverMenu } from '@/assets/data/local_data'

interface IProps {
  children?: ReactNode
}
const Navbar: FC<IProps> = () => {
  return (
    <NavbarWrapper>
      <div className="nav wrap_1100">
        {discoverMenu.map((item) => {
          return (
            <div className="item" key={item.link}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          )
        })}
      </div>
    </NavbarWrapper>
  )
}

export default memo(Navbar)
