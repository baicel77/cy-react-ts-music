import React, { memo, useRef, useState } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { BannerWrapper } from './style'
import { Carousel } from 'antd'
import classNames from 'classnames'

interface IProps {
  children?: ReactNode
  bannerList: any[]
}

const TopBanner: FC<IProps> = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const urlRef = useRef<any>()

  const handlePrevClick = () => {
    bannerRef.current?.prev()
  }
  const handleNextClick = () => {
    bannerRef.current?.next()
  }
  const beforeChange = () => {
    urlRef.current = currentIndex
    setCurrentIndex(-1)
  }
  const handleAfterChange = (index: number) => {
    setCurrentIndex(index)
  }

  const bgImgUrl =
    currentIndex >= 0
      ? props.bannerList[currentIndex].imageUrl + '?imageView&blur=40x20'
      : props.bannerList[urlRef.current].imageUrl + '?imageView&blur=40x20'

  return (
    <BannerWrapper
      style={{
        background: `url(${bgImgUrl}) no-repeat center center / 6000px`
      }}
    >
      <div className="wrap_980">
        <Carousel
          className="banner"
          effect="fade"
          autoplay
          ref={bannerRef}
          beforeChange={beforeChange}
          afterChange={handleAfterChange}
          speed={1000}
          dots={false}
        >
          {props.bannerList.map((item) => {
            return (
              <div className="item" key={item.scm}>
                <img src={item.imageUrl} alt="" />
              </div>
            )
          })}
        </Carousel>
        <div className="dots-list">
          {props.bannerList.map((item, index) => {
            return (
              <div
                className={classNames('dots-item', {
                  active: index === currentIndex
                })}
                key={item.scm}
              ></div>
            )
          })}
        </div>
        <a
          className="download"
          target="_blank"
          href="https://music.163.com/#/download"
          rel="noreferrer"
        ></a>
        <div className="control left" onClick={handlePrevClick}></div>
        <div className="control right" onClick={handleNextClick}></div>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
