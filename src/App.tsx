import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import AppPlayBar from './views/player/app-play-bar'
function App() {
  return (
    <div className="App" style={{ marginBottom: '52px' }}>
      <AppHeader />
      <div className="content">
        <Suspense fallback="">{useRoutes(routes)}</Suspense>
      </div>
      <AppFooter />
      {/* 播放器 */}
      <AppPlayBar />
    </div>
  )
}

export default App
