import styled from 'styled-components'

export const TopRankingItemWrapper = styled.div`
  width: 230px;
  box-sizing: border-box;
  overflow: hidden;
  &:last-child {
    width: 228px;
  }
  .top {
    display: flex;
    height: 100px;
    padding: 20px 0 0 19px;
    .album {
      position: relative;
      margin-right: 10px;
      width: 80px;
      height: 80px;
      .cover {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-position: -145px -57px;
      }
    }
    .infos {
      .name {
        margin-top: 10px;
        font-size: 14px;
        color: #333;
        font-weight: 600;
      }
      .btns {
        display: flex;
        .btn {
          width: 22px;
          height: 22px;
          margin: 10px 10px 0 0;
          cursor: pointer;
          &.play {
            background-position: -267px -205px;
            &:hover {
              background-position: -267px -235px;
            }
          }
          &.favor {
            background-position: -300px -205px;
            &:hover {
              background-position: -300px -235px;
            }
          }
        }
      }
    }
  }
  .list {
    box-sizing: border-box;
    padding: 0 20px 0 10px;
    .item {
      display: flex;
      height: 32px;
      line-height: 32px;
      cursor: pointer;
      &:nth-child(-n + 3) .index {
        color: ${(props) => props.theme.primary};
      }
      &:hover {
        .name {
          text-decoration: underline;
        }
        .btns {
          display: flex;
        }
      }
      .index {
        width: 35px;
        height: 32px;
        text-align: center;
        color: #666;
        font-size: 16px;
      }
      .name {
        flex: 1;
        font-size: 12px;
        color: #000;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .btns {
        display: none;
        align-items: center;
        width: 82px;
        .btn {
          width: 17px;
          height: 17px;
          margin-right: 10px;
          &.play {
            background-position: -267px -268px;
            &:hover {
              background-position: -267px -288px;
            }
          }
          &.add {
            position: relative;
            top: 2px;
            background-position: 0 -700px;
            &:hover {
              background-position: -22px -700px;
            }
          }
          &.favor {
            background-position: -297px -268px;
            &:hover {
              background-position: -297px -288px;
            }
          }
        }
      }
    }
  }
  .bottom {
    display: flex;
    flex-direction: row-reverse;
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    padding-right: 20px;
    box-sizing: border-box;
    .more {
      ${(props) => props.theme.mixin.itemHover}
    }
  }
`
