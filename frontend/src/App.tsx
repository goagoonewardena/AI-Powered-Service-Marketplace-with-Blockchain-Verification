import Login from '../login/Login'
import Signup from '../signup/Signup'

function App() {
  return window.location.pathname.startsWith('/signup') ? <Signup /> : <Login />
}

export default App
