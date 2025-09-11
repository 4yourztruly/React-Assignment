import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ArticlePage from './pages/ArticlePage.jsx'
import NotFoundError from './components/NotFoundError.jsx'
import MyArticles from './pages/MyArticles.jsx'
import {createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme ({
  palette: {
    mode: 'light',
    primary: {
      main: '#e20f00',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontSize: 16,
  }
})

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
    <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
