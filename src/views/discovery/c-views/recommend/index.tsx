import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const recommend: FC<IProps> = () => {
  return <div>recommend</div>
}

export default memo(recommend)
