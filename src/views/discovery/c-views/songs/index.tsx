import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const Songs: FC<IProps> = () => {
  return <div>songs</div>
}

export default memo(Songs)
