import styled from 'styled-components'

export const MenuItemWrapper = styled.div`
  width: 140px;
  margin-bottom: 45px;
  .album {
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-position: 0 0;
      cursor: pointer;
    }
    .info {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 27px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      background-position: 0 -537px;
      color: #ccc;
      .info-left {
        display: flex;
        .headset-icon {
          margin-right: 5px;
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
        }
        .play-count {
          font-size: 12px;
        }
      }
      .play-icon {
        display: inline-block;
        width: 16px;
        height: 17px;
        background-position: 0 0;
      }
    }
  }
  .desc {
    margin-top: 10px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`
