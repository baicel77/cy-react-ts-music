import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector,
  useDispatch,
  shallowEqual,
  TypedUseSelectorHook
} from 'react-redux'
import counterReducer from './modules/counter'
import recommendReducer from '@/views/discovery/c-views/recommend/store'
import playerReducer from '@/views/player/store'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer,
    player: playerReducer
  }
})

const state = store.getState
export type stateReturnType = ReturnType<typeof state>
type dispatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<stateReturnType> = useSelector
export const useAppDispatch: () => dispatchType = useDispatch
export const shallowEqualApp: typeof shallowEqual = shallowEqual

export default store
