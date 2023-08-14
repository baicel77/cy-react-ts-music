import styled from 'styled-components'

export const AlbumItemWrapper = styled.div`
  .album {
    position: relative;
    width: 118px;
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-position: 0 -570px;
    }
  }
  .infos {
    font-size: 12px;
    .name {
      color: #000;
    }
    .artist {
      color: #666;
    }
  }
`
