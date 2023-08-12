import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import titleList from '@/assets/data/header_titles.json'
import { NavLink } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

interface IProps {
  children?: ReactNode
}

const showItem = (item: any) => {
  if (item.type === 'path') {
    return (
      <NavLink
        to={item.link}
        className={({ isActive }) => (isActive ? 'active-title' : 'pending')}
      >
        {item.title}
      </NavLink>
    )
  } else {
    return (
      <a target="_blank" href={item.link} rel="noreferrer">
        {item.title}
      </a>
    )
  }
}

const Header: FC<IProps> = () => {
  return (
    <HeaderWrapper>
      <div className="wrap_1100 top">
        <HeaderLeft>
          <div className="title sprite_01">
            <a href="/">网易云音乐</a>
          </div>
          <ul className="title-list">
            {titleList.map((item) => {
              return (
                <li className="item" key={item.title}>
                  {showItem(item)}
                </li>
              )
            })}
          </ul>
        </HeaderLeft>
        <HeaderRight>
          <div className="search">
            <Input
              size="small"
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined />}
            />
          </div>
          <div className="create">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="line"></div>
    </HeaderWrapper>
  )
}

export default memo(Header)
