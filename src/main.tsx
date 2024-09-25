import React from 'react'
import { createRoot } from 'react-dom/client'
import IndexApp from './pages/Index'
import Content from './pages/Content'
import Blog from './pages/Blog'
import ListPage from './pages/DocList'
import SearchPage from './pages/Search'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexApp />,
  },
  {
    path: 'blog',
    element: <Blog />,
    children: [
      {
        path: 'list',
        element: <ListPage />,
      },
      {
        path: 'content/:file',
        element: <Content />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
    ],
  },

])

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('body')!).render(<RouterProvider router={router} />)
})
