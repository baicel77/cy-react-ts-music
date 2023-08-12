import styled from 'styled-components'
import sprite01 from '@/assets/img/sprite_01.png'

export const HeaderWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  background: #242424;
  .top {
    display: flex;
    justify-content: space-between;
    height: 70px;
    line-height: 70px;
    color: #ccc;
  }
  .line {
    height: 5px;
    background-color: ${(props) => props.theme.primary};
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  .title {
    width: 176px;
    background-position: 0 0;
    text-indent: -9999px;
    cursor: pointer;
    a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .title-list {
    display: flex;
    .item {
      &:last-child {
        position: relative;
      }
      a {
        display: block;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 0 20px;
        color: #ccc;
        &:hover,
        &.active-title {
          position: relative;
          background-color: #000;
          color: #fff;
        }
        &.active-title::after {
          position: absolute;
          content: '';
          display: inline-block;
          width: 12px;
          height: 7px;
          bottom: -1px;
          left: 50%;
          transform: translate(-50%, 0);
          background: url(${sprite01}) no-repeat -226px 0;
        }
      }
      &:last-child::after {
        position: absolute;
        content: '';
        width: 28px;
        height: 19px;
        background: url(${sprite01}) no-repeat -190px 0;
        top: 20px;
        right: -15px;
      }
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  .search {
    display: flex;
    .ant-input-affix-wrapper {
      width: 158px;
      height: 32px;
      border-radius: 32px;
      overflow: hidden;
      .ant-input {
        font-size: 12px;
        text-overflow: inherit;
      }
    }
  }
  .create {
    width: 90px;
    height: 32px;
    margin: 0 16px;
    box-sizing: border-box;
    border: 1px solid #4f4f4f;
    line-height: 32px;
    border-radius: 20px;
    text-align: center;
    color: #ccc;
    font-size: 12px;
    cursor: pointer;
    &:hover {
      border-color: #fff;
      color: #fff;
    }
  }
  .login {
    color: #787878;
    font-size: 12px;
    &:hover {
      color: #fff;
      cursor: pointer;
    }
  }
`
