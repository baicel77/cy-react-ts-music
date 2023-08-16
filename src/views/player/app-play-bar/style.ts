import styled from 'styled-components'

interface IPlaybar {
  $isPlaying: boolean
  $playMode: number
}

export const AppPlayBarWrapper = styled.div<IPlaybar>`
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;
  .content {
    position: relative;
    top: 5px;
    display: flex;
    align-items: center;
    height: 47px;
    .play-btns {
      display: flex;
      align-items: center;
      .btn {
        width: 28px;
        height: 28px;
        cursor: pointer;
        &.play {
          width: 36px;
          height: 36px;
          background-position: ${(props) =>
            props.$isPlaying ? '0 -165px' : '0 -204px'};
          margin: 0 8px;
        }
        &.prev {
          background-position: 0 -130px;
        }
        &.next {
          background-position: -80px -130px;
        }
      }
    }
    .song-infos {
      display: flex;
      align-items: center;
      margin-left: 15px;
      .album {
        border-radius: 5px;
        overflow: hidden;
        cursor: pointer;
      }
      .detail {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 20px;
        .top {
          display: flex;
          font-size: 12px;

          .name {
            margin-right: 10px;
            color: #e1e1e1;
          }
          .singer {
            color: #a1a1a1;
          }
        }
        .bottom {
          display: flex;
          align-items: center;
          .ant-slider {
            position: relative;
            top: -7px;
            width: 493px;
            margin: 10px 20px 0 0;
            .ant-slider-rail {
              height: 9px;
              background: url(${require('@/assets/img/progress_bar.png')}) right
                0;
            }
            .ant-slider-track {
              height: 9px;
              background: url(${require('@/assets/img/progress_bar.png')}) left -66px;
            }
            .ant-slider-handle {
              width: 22px;
              height: 24px;
              border: none;
              margin-top: -5px;
              background: url(${require('@/assets/img/sprite_icon.png')}) 0 -250px;
              &::after,
              &::before {
                display: none;
              }
            }
          }
          .time {
            font-size: 12px;
            .currentTime {
              color: #e1e1e1;
            }
            .totalTime,
            .line {
              color: #a1a1a1;
            }
            .line {
              margin: 0 3px;
            }
          }
        }
      }
    }
    .control {
      display: flex;
      margin-left: 15px;
      .left {
        margin-right: 15px;
        display: flex;
      }
      .right {
        display: flex;
      }
      .btn {
        width: 25px;
        height: 25px;
        cursor: pointer;
        &.pip {
          background: url(${require('@/assets/img/pip_icon')});
        }
        &.favor {
          background-position: -88px -163px;
        }
        &.share {
          background-position: -114px -163px;
        }
        &.volume {
          background-position: -2px -248px;
        }
        &.loop {
          //-3px -344px
          background-position: ${(props) => {
            switch (props.$playMode) {
              case 0:
                return '-3px -344px'
              case 1:
                return '-66px -248px'
              case 2:
                return '-66px -344px'
            }
          }};
        }
        &.playlist {
          padding-left: 18px;
          background-position: -42px -68px;
          text-align: center;
          color: #ccc;
          width: 59px;
          line-height: 25px;
          font-size: 12px;
          box-sizing: border-box;
        }
      }
    }
  }
`
