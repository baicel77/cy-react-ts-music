import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`
  .content {
    position: relative;
    height: 186px;
    margin: 20px 0 37px;
    background: #f5f5f5;
    border: 1px solid #d3d3d3;
    padding: 30px;
    box-sizing: border-box;
    .control {
      position: absolute;
      top: 50%;
      transform: translateY(-100%);
      width: 17px;
      height: 17px;
      cursor: pointer;
      &.left {
        left: 10px;
        background-position: -260px -75px;
        &:hover {
          background-position: -280px -75px;
        }
      }
      &.right {
        right: 10px;
        background-position: -300px -75px;
        &:hover {
          background-position: -320px -75px;
        }
      }
    }
    .banner {
      .banner-item {
        display: flex !important;
        justify-content: space-between;
      }
    }
  }
`
