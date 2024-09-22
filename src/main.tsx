import { createRoot } from 'react-dom/client'
import IndexApp from './pages/Index'
import Content from './pages/Content'
import ListPage from './pages/List'

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
    path: '/content/:file',
    element: <Content />,
  },
  {
    path: 'list',
    element: <ListPage />,
  },
])

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('body')!).render(<RouterProvider router={router} />)
})
