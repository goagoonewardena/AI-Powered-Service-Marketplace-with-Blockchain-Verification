import ForgotPassword from '../forgotpassword/ForgotPassword'
import Login from '../login/Login'
import Signup from '../signup/Signup'

function App() {
  if (window.location.pathname.startsWith('/signup')) {
    return <Signup />
  }

  if (window.location.pathname.startsWith('/forgotpassword')) {
    return <ForgotPassword />
  }

  return <Login />
}

export default App
