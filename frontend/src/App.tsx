import { useEffect, useState } from 'react'
import ForgotPassword from '../forgotpassword/ForgotPassword'
import Login from '../login/Login'
import Signup from '../signup/Signup'
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

  if (window.location.pathname.startsWith('/signup')) {
    return <Signup />
  }

  if (window.location.pathname.startsWith('/forgotpassword')) {
    return <ForgotPassword />
  }

  return <Login />
}

export default App
