import styled from 'styled-components'

export const AreaHeaderV2Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
  .title {
    color: #333;
    font-weight: 700;
    font-size: 12px;
  }
  .more {
    color: #666;
    font-size: 12px;
    ${(props) => props.theme.mixin.itemHover}
  }
`
