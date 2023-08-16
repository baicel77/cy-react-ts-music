import styled from 'styled-components'

export const UserLoginWrapper = styled.div`
  height: 126px;
  padding: 16px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-position: 0 0;
  .infos {
    line-height: 22px;
    font-size: 12px;
    color: #666;
  }
  .login {
    width: 100px;
    height: 31px;
    margin-top: 10px;
    background-position: 0 -195px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-shadow: 0 1px 0 #8a060b;
    cursor: pointer;
    &:hover {
      background-position: -110px -195px;
    }
  }
`
