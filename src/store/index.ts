import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector,
  useDispatch,
  shallowEqual,
  TypedUseSelectorHook
} from 'react-redux'
import counterReducer from './modules/counter'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

const state = store.getState
type stateReturnType = ReturnType<typeof state>
type dispatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<stateReturnType> = useSelector
export const useAppDispatch: () => dispatchType = useDispatch
export const shallowEqualApp: typeof shallowEqual = shallowEqual

export default store
