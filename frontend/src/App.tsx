import { useEffect, useState } from 'react'
import AppRouter from '../routers/AppRouter'
import Splash from '../splash/Splash'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const splashTimer = window.setTimeout(() => setShowSplash(false), 1800)
    return () => window.clearTimeout(splashTimer)
  }, [])

  if (showSplash) {
    return <Splash />
  }

  return <AppRouter />
}

export default App
