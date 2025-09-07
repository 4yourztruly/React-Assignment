import { useState } from 'react'
import './App.css'
import HomePage from "./pages/HomePage"
import ArticlePage from "./pages/ArticlePage"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage />
    </>
  )
}

export default App
