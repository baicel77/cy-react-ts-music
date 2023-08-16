import styled from 'styled-components'

interface IType {
  type: string
}
export const SettleSingerItemWrapper = styled.div<IType>`
  display: flex;
  background-color: ${(props) =>
    props.type === 'normal' ? '#fafafa' : '#fff'};
  margin-bottom: 15px;
  cursor: pointer;
  .infos {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
    border: ${(props) => (props.type === 'normal' ? '1px' : '0')} solid #e9e9e9;
    border-left: none;
    box-sizing: border-box;
    overflow: hidden;
    &:hover {
      background: ${(props) => (props.type === 'normal' ? '#f4f4f4' : '#fff')};
    }
    .name {
      margin-bottom: 10px;
      font-size: ${(props) => (props.type === 'normal' ? '14px' : '12px')};
      font-weight: ${(props) => (props.type === 'normal' ? 700 : 400)};
      color: #333;
      ${(props) => props.theme.mixin.itemHover}
    }
    .desc {
      color: #666;
      font-size: 12px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`
