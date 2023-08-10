import React, { Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from './router'
import { useAppSelector, useAppDispatch, shallowEqualApp } from '@/store'
import { changeCountAction } from './store/modules/counter'
function App() {
  const { count } = useAppSelector(
    (state) => ({
      count: state.counter.count
    }),
    shallowEqualApp
  )

  const dispatch = useAppDispatch()
  const changeCount = () => {
    dispatch(changeCountAction(200))
  }

  return (
    <div className="App">
      <div>
        <h3>当前计数: {count}</h3>
        <button onClick={changeCount}>change count</button>
      </div>
      <Link to="/discovery">发现音乐</Link>
      <Link to="/mine">我的音乐</Link>
      <Link to="/focus">关注</Link>
      <Link to="/download">下载客户端</Link>

      <div className="content">
        <Suspense fallback="">{useRoutes(routes)}</Suspense>
      </div>
    </div>
  )
}

export default App
