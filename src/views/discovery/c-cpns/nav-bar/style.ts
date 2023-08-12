import styled from 'styled-components'

export const NavbarWrapper = styled.div`
  box-sizing: border-box;
  background-color: ${(props) => props.theme.primary};
  .nav {
    display: flex;
    height: 30px;
    padding-left: 180px;
    box-sizing: border-box;
    .item {
      margin: 4px 17px 0;
      cursor: pointer;
      a {
        color: #fff;
        font-size: 12px;
        padding: 2px 13px;
        &.active,
        &:hover {
          background-color: #9b0909;
          border-radius: 20px;
        }
      }
    }
  }
`
