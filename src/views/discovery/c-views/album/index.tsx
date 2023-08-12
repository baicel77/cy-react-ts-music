import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const Album: FC<IProps> = () => {
  return <div>album</div>
}

export default memo(Album)
