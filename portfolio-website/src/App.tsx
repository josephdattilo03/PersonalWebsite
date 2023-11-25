import { useEffect, useState } from 'react'
import './App.css'
import Router from './routes/Router.js'
import SplashScreen from './components/common/SplashScreen.js'

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {setLoading(false)}, 6000)
  }, [])

  return (
    loading ? <SplashScreen></SplashScreen> : <Router></Router>
  )
}

export default App
