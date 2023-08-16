import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getLyricById, getSongDetail } from '../service'
import { ILyrics, parseLyric } from '@/utils/handle-player'
import { stateReturnType } from '@/store'
import { playlist } from './config'
interface IState {
  state: stateReturnType
}
export const fetchPlayerDataAction = createAsyncThunk<void, number, IState>(
  'fetchPlayerData',
  (id, { dispatch, getState }) => {
    getSongDetail(id).then((res) => {
      const playlist = getState().player.playlist
      const index = playlist.findIndex((item) => item.id === id)
      console.log('index', index)
      // 情况一: 播放列表没有该首歌, 直接加入的播放列表
      if (index === -1) {
        console.log('加入当前歌曲到歌单')
        dispatch(changeCurrentSongAction(res.songs[0]))
        dispatch(changePlayListAction(res.songs[0]))
        dispatch(changeCurrentSongIndexAction(playlist.length))
      } else {
        // 情况二: 播放列表有该首歌, 找到对应索引歌曲播放
        console.log('找到对应索引歌曲播放')
        dispatch(changeCurrentSongAction(playlist[index]))
        dispatch(changeCurrentSongIndexAction(index))
      }
    })
    getLyricById(id).then((res) => {
      const lyrics = parseLyric(res.lrc.lyric)
      dispatch(changeLyricsAction(lyrics))
    })
  }
)

export const handleChangeSongAction = createAsyncThunk<void, boolean, IState>(
  'handleChangeSong',
  (isNext, { dispatch, getState }) => {
    const { currentSongIndex, playlist, playMode } = getState().player
    let newSongIndex = currentSongIndex
    if (playMode === 1) {
      newSongIndex = Math.floor(Math.random() * playlist.length)
    } else {
      newSongIndex = isNext ? currentSongIndex + 1 : currentSongIndex - 1
    }
    if (newSongIndex === playlist.length) newSongIndex = 0
    if (newSongIndex === -1) newSongIndex = playlist.length - 1

    dispatch(changeCurrentSongAction(playlist[newSongIndex]))
    dispatch(changeCurrentSongIndexAction(newSongIndex))

    getLyricById(playlist[newSongIndex].id).then((res) => {
      const lyrics = parseLyric(res.lrc.lyric)
      dispatch(changeLyricsAction(lyrics))
    })
  }
)

interface IPlayerState {
  currenSong: any
  lyrics: ILyrics[]
  playlist: any[]
  currentSongIndex: number
  playMode: number
}
const initialState: IPlayerState = {
  currenSong: {},
  lyrics: [],
  playlist,
  currentSongIndex: 0,
  playMode: 0
}
const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }: PayloadAction<any>) {
      state.currenSong = payload
    },
    changeLyricsAction(state, { payload }: PayloadAction<ILyrics[]>) {
      state.lyrics = payload
    },
    changePlayListAction(state, { payload }: PayloadAction<any>) {
      const newPlayList = [...state.playlist]
      newPlayList.push(payload)
      state.playlist = newPlayList
    },
    changeCurrentSongIndexAction(state, { payload }: PayloadAction<number>) {
      state.currentSongIndex = payload
    },
    changePlayModeAction(state, { payload }: PayloadAction<number>) {
      state.playMode = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changePlayListAction,
  changeCurrentSongIndexAction,
  changePlayModeAction
} = playerSlice.actions

export default playerSlice.reducer
