import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IState {
  count: number
}
const initialState: IState = {
  count: 100
}
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeCountAction(state, { payload }: PayloadAction<number>) {
      state.count = payload
    }
  }
})

export const { changeCountAction } = counterSlice.actions

export default counterSlice.reducer
