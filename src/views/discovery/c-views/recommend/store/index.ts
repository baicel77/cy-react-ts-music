import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { getBanner } from '../service'
export const getBannerListAction = createAsyncThunk(
  'recommend/getBanner',
  async (_, { dispatch }) => {
    const res = await getBanner()
    console.log('res', res)
    dispatch(changeBannerListAction(res.banners))
  }
)

interface IState {
  bannerList: any[]
}
const initialState: IState = {
  bannerList: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannerListAction(state, { payload }: PayloadAction<any[]>) {
      state.bannerList = payload
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

export const { changeBannerListAction } = recommendSlice.actions
export default recommendSlice.reducer
