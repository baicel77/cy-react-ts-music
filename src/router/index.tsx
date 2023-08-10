import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Discovery = lazy(() => import('@/views/discovery'))
const Donwload = lazy(() => import('@/views/download'))
const Focus = lazy(() => import('@/views/focus'))
const Mine = lazy(() => import('@/views/mine'))

const Recommend = lazy(() => import('@/views/discovery/c-views/recommend'))
const Ranking = lazy(() => import('@/views/discovery/c-views/ranking'))
const Songs = lazy(() => import('@/views/discovery/c-views/songs'))
const Djradio = lazy(() => import('@/views/discovery/c-views/djradio'))
const Artist = lazy(() => import('@/views/discovery/c-views/artist'))
const Album = lazy(() => import('@/views/discovery/c-views/album'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discovery" />
  },
  {
    path: '/discovery',
    element: <Discovery />,
    children: [
      {
        path: '/discovery',
        element: <Navigate to="/discovery/recommend" />
      },
      {
        path: '/discovery/recommend',
        element: <Recommend />
      },
      {
        path: '/discovery/ranking',
        element: <Ranking />
      },
      {
        path: '/discovery/songs',
        element: <Songs />
      },
      {
        path: '/discovery/djradio',
        element: <Djradio />
      },
      {
        path: '/discovery/artist',
        element: <Artist />
      },
      {
        path: '/discovery/album',
        element: <Album />
      }
    ]
  },
  {
    path: '/download',
    element: <Donwload />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/mine',
    element: <Mine />
  }
]

export default routes
