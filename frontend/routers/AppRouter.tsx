import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ForgotPassword from '../forgotpassword/ForgotPassword'
import Landing from '../landing/Landing'
import Login from '../login/Login'
import Signup from '../signup/Signup'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/features/*" element={<Landing />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/signup/*" element={<Signup />} />
        <Route path="/forgotpassword/*" element={<ForgotPassword />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
