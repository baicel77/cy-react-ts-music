import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const djradio: FC<IProps> = () => {
  return <div>djradio</div>
}

export default memo(djradio)
