import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ArticlePage from './pages/ArticlePage.jsx'
import NotFoundError from './components/NotFoundError.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <NotFoundError />,
},
{
  path: '/ArticlePage',
  element: <ArticlePage />
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
