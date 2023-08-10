import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const songs: FC<IProps> = () => {
  return <div>songs</div>
}

export default memo(songs)
