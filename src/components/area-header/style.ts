import styled from 'styled-components'

export const AreaHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 33px;
  padding: 0 10px 0 34px;
  background-position: -225px -158px;
  border-bottom: 2px solid #c10d0c;
  box-sizing: border-box;
  color: #666;
  font-size: 12px;
  .title {
    display: flex;
    align-items: center;
    .title-name {
      position: relative;
      top: -3px;
      margin-right: 20px;
      color: #333;
      font-size: 20px;
    }
    .title-list {
      display: flex;
      .title-item {
        display: flex;
        align-items: center;
        .item-name {
          ${(props) => props.theme.mixin.itemHover}
        }
        .line {
          margin: 0 12px;
        }
        &:last-child .line {
          display: none;
        }
      }
    }
  }
  .more {
    display: flex;
    align-items: center;
    .more-text {
      ${(props) => props.theme.mixin.itemHover}
    }
    i {
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`
