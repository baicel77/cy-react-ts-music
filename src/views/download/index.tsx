import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const download: FC<IProps> = () => {
  return <div>download</div>
}

export default memo(download)
