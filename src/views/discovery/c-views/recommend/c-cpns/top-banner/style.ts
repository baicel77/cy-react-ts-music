import styled from 'styled-components'
// const url =
//   'http://p1.music.126.net/xqiYh9UoM1xYbndEgESN0w==/109951168833069664.jpg?imageView&blur=40x20'

// interface IProps {
//   url?: string
// }

export const BannerWrapper = styled.div`
  .wrap_980 {
    display: flex;
    position: relative;
    height: 270px;
    .banner {
      width: 730px;
      .item {
        img {
          width: 100%;
          opacity: 1;
          transition: none 0s ease 0s;
        }
      }
    }
    .dots-list {
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 730px;
      display: flex;
      justify-content: center;
      .dots-item {
        width: 20px;
        height: 20px;
        background: url(${require('@/assets/img/banner_sprite.png')}) 3px -343px;
        cursor: pointer;
        &.active {
          background-position: -16px -343px;
        }
      }
    }
    .download {
      flex: 1;
      background: url(${require('@/assets/img/download.png')});
    }
    .control {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 37px;
      height: 63px;
      cursor: pointer;
      &.left {
        left: -60px;
        background: url(${require('@/assets/img/banner-control-left.png')});
      }
      &.right {
        right: -60px;
        background: url(${require('@/assets/img/banner-control-right.png')});
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
`
