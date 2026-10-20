import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ForgotPassword from '../forgotpassword/ForgotPassword'
import Login from '../login/Login'
import Signup from '../signup/Signup'

function PublicFeatures() {
  return (
    <main className="min-h-screen bg-[#f8f9f7] font-['DM_Sans'] text-[#193a31]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link className="flex items-center gap-2.5 text-[22px] font-semibold tracking-[-.7px] no-underline" to="/">
          <span className="grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-[#d0e9db] text-[22px] text-[#0f241f]" aria-hidden="true">✓</span>
          veri<span className="text-[#4b9276]">serve</span>
        </Link>
        <div className="flex items-center gap-5 text-xs font-semibold">
          <a className="hidden text-[#6b7f76] no-underline sm:block" href="#features">Features</a>
          <Link className="rounded-md bg-[#225743] px-4 py-2.5 text-white no-underline transition hover:bg-[#194a38]" to="/login/">Sign in</Link>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 text-center sm:pt-24">
        <p className="mb-5 font-mono text-[10px] font-medium tracking-[2px] text-[#6db496]">THE TRUSTED SERVICE MARKETPLACE</p>
        <h1 className="mx-auto max-w-3xl text-5xl font-medium leading-tight tracking-[-2px] sm:text-7xl">
          Find the right people for <em className="font-['Playfair_Display'] text-[#4b9276]">meaningful work.</em>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#71847c]">
          VeriServe brings clients and skilled professionals together through verified expertise and secure, transparent connections.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link className="rounded-md bg-[#225743] px-6 py-3 text-sm font-semibold text-white no-underline transition hover:bg-[#194a38]" to="/signup/">Create an account <span aria-hidden="true">→</span></Link>
          <a className="rounded-md border border-[#dbe3df] bg-white px-6 py-3 text-sm font-semibold text-[#38594d] no-underline" href="#features">Explore features</a>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 pb-20 sm:grid-cols-3" id="features">
        <article className="rounded-xl border border-[#e1e9e4] bg-white p-6">
          <span className="mb-5 grid h-10 w-10 place-items-center rounded-lg bg-[#e6f4ec] text-xl text-[#347d61]">✓</span>
          <h2 className="mb-2 text-lg font-semibold">Verified expertise</h2>
          <p className="text-sm leading-6 text-[#71847c]">Discover professionals whose skills and experience are verified for greater confidence.</p>
        </article>
        <article className="rounded-xl border border-[#e1e9e4] bg-white p-6">
          <span className="mb-5 grid h-10 w-10 place-items-center rounded-lg bg-[#e6f4ec] text-xl text-[#347d61]">◈</span>
          <h2 className="mb-2 text-lg font-semibold">Secure connections</h2>
          <p className="text-sm leading-6 text-[#71847c]">Work with clarity through trusted profiles, transparent projects, and secure communication.</p>
        </article>
        <article className="rounded-xl border border-[#e1e9e4] bg-white p-6">
          <span className="mb-5 grid h-10 w-10 place-items-center rounded-lg bg-[#e6f4ec] text-xl text-[#347d61]">⌁</span>
          <h2 className="mb-2 text-lg font-semibold">Better work</h2>
          <p className="text-sm leading-6 text-[#71847c]">Turn great ideas into meaningful outcomes with a marketplace built around trust.</p>
        </article>
      </section>
    </main>
  )
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/features/*" element={<PublicFeatures />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/signup/*" element={<Signup />} />
        <Route path="/forgotpassword/*" element={<ForgotPassword />} />
        <Route path="*" element={<PublicFeatures />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
