import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const mine: FC<IProps> = () => {
  return <div>mine</div>
}

export default memo(mine)
