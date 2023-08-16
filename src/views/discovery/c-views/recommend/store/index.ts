import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import {
  getBanner,
  getHotRecommend,
  getNewAlbum,
  getRanking,
  getSettleSinger
} from '../service'
export const getRecommendDataAction = createAsyncThunk(
  'getRecommendData',
  (_, { dispatch }) => {
    getBanner().then((res) => {
      dispatch(changeBannerListAction(res.banners))
    })
    getHotRecommend().then((res) => {
      dispatch(changeHotRecommendListAction(res.result))
    })
    getNewAlbum().then((res) => {
      dispatch(changeNewAlbumListAction(res.albums))
    })
    getSettleSinger().then((res) => {
      dispatch(changeSettleSingerListAction(res.artists))
    })
  }
)

export const getRankingDataAction = createAsyncThunk(
  'getRankingData',
  (_, { dispatch }) => {
    const ids = [19723756, 3779629, 2884035]
    const promises: Promise<any>[] = []
    ids.forEach((id) => {
      const p = getRanking(id)
      promises.push(p)
    })
    Promise.all(promises).then((res) => {
      const rankingList = res.map((item) => item.playlist)
      dispatch(changeRankingListAction(rankingList))
    })
  }
)

interface IState {
  bannerList: any[]
  hotRecommendList: any[]
  newAlbumList: any[]
  rankingList: any[]
  settleSingerList: any[]
}
const initialState: IState = {
  bannerList: [],
  hotRecommendList: [],
  newAlbumList: [],
  rankingList: [],
  settleSingerList: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannerListAction(state, { payload }: PayloadAction<any[]>) {
      state.bannerList = payload
    },
    changeHotRecommendListAction(state, { payload }: PayloadAction<any[]>) {
      state.hotRecommendList = payload
    },
    changeNewAlbumListAction(state, { payload }: PayloadAction<any[]>) {
      state.newAlbumList = payload
    },
    changeRankingListAction(state, { payload }: PayloadAction<any[]>) {
      state.rankingList = payload
    },
    changeSettleSingerListAction(state, { payload }: PayloadAction<any[]>) {
      state.settleSingerList = payload
    }
  }
  // extraReducers: {
  //   [getBannerListAction.pending as any as string](state, { payload }) {
  //     console.log('pending')
  //   },
  //   [getBannerListAction.fulfilled as any as string](state, { payload }) {
  //     console.log('payload', payload)
  //   }
  // }
  // extraReducers(builder) {
  //   builder.addCase(getBannerListAction.fulfilled, (state, { payload }) => {
  //     console.log(state)
  //     console.log(payload)
  //   })
  // }
})

export const {
  changeBannerListAction,
  changeHotRecommendListAction,
  changeNewAlbumListAction,
  changeRankingListAction,
  changeSettleSingerListAction
} = recommendSlice.actions
export default recommendSlice.reducer
