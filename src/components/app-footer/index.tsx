import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { FooterWrapper } from './style'

interface IProps {
  children?: ReactNode
}
const Footer: FC<IProps> = () => {
  return <FooterWrapper></FooterWrapper>
}

export default memo(Footer)
