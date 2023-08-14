import styled from 'styled-components'

export const RecommendWrapper = styled.div`
  .recommend-content {
    display: flex;
    background: url(${require('@/assets/img/wrap-bg.png')});
    min-height: 1000px;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    .recommend-left {
      width: 729px;
      padding: 20px 20px 40px;
      box-sizing: border-box;
    }
    .recommend-right {
      flex: 1;
    }
  }
`
