import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ArticlePage from './pages/ArticlePage.jsx'
import NotFoundError from './components/NotFoundError.jsx'
import MyArticles from './pages/MyArticles.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <NotFoundError />,
},
{
  path: '/article/:id',
  element: <ArticlePage />
},
{
  path: '/MyArticles',
  element: <MyArticles/>
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
