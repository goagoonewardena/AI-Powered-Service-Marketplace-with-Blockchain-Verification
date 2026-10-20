import { useState } from 'react'
import type { FormEvent } from 'react'

function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="grid min-h-screen grid-cols-1 font-['DM_Sans'] text-[#193a31] lg:grid-cols-[43%_57%]">
      <section className="relative hidden overflow-hidden bg-[#10211d] px-[6vw] py-[42px] text-white lg:flex lg:flex-col lg:py-[34px]">
        <div className="pointer-events-none absolute -right-[330px] -top-[100px] h-[560px] w-[560px] rounded-full border border-[#b5dcc81f]" />
        <div className="pointer-events-none absolute -bottom-[230px] -left-[300px] h-[420px] w-[420px] rounded-full border border-[#b5dcc81f]" />
        <a className="relative z-10 flex w-fit items-center gap-2.5 text-[22px] font-semibold tracking-[-.7px] text-white no-underline" href="/">
          <span className="grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-[#9fd6bc] text-[22px] text-[#0f241f]" aria-hidden="true">✓</span>
          veri<span className="text-[#9fd6bc]">serve</span>
        </a>
        <div className="relative z-10 my-auto max-w-[450px] py-[70px]">
          <p className="mb-[19px] font-mono text-[10px] font-medium tracking-[1.7px] text-[#6db496]">JOIN THE TRUSTED NETWORK</p>
          <h1 className="m-0 text-[clamp(42px,4.1vw,64px)] font-medium leading-[1.04] tracking-[-2.5px]">
            Your next opportunity starts <em className="font-['Playfair_Display'] font-medium text-[#a7dcc3]">here.</em>
          </h1>
          <p className="my-[27px] mb-[38px] max-w-[360px] text-[15px] leading-[1.7] text-[#afc1ba]">
            Create your profile, connect with trusted professionals, and turn great ideas into meaningful work.
          </p>
          <div className="flex items-center gap-3.5">
            <div className="flex pl-[7px]" aria-hidden="true">
              <span className="grid h-7 w-7 -ml-[7px] place-items-center rounded-full border-2 border-[#10211d] bg-[#f2d8b2] text-[8px] font-bold text-[#13322a]">JD</span>
              <span className="grid h-7 w-7 -ml-[7px] place-items-center rounded-full border-2 border-[#10211d] bg-[#c3d8e9] text-[8px] font-bold text-[#13322a]">MK</span>
              <span className="grid h-7 w-7 -ml-[7px] place-items-center rounded-full border-2 border-[#10211d] bg-[#e7ac9f] text-[8px] font-bold text-[#13322a]">AS</span>
              <span className="grid h-7 w-7 -ml-[7px] place-items-center rounded-full border-2 border-[#10211d] bg-[#234a3d] text-[8px] font-bold text-[#9fd6bc]">+</span>
            </div>
            <p className="text-[11px] leading-[1.5] text-[#9eafa9]"><strong className="text-[13px] text-[#e5f0eb]">12,000+</strong><br />people already building better</p>
          </div>
        </div>
        <p className="relative z-10 m-0 flex items-center gap-[9px] text-[10px] text-[#728a81]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#73c5a3] shadow-[0_0_0_4px_#73c5a31a]" /> Every profile is verified on-chain
          <span className="mx-1 h-3 w-px bg-[#36534a]" /> © 2024 VeriServe
        </p>
      </section>

      <section className="grid min-h-screen place-items-center bg-[#f8f9f7] px-5 py-7 sm:px-6 lg:px-[7vw] lg:py-10">
        <div className="w-full max-w-[410px]">
          <div className="mb-9 flex w-fit items-center gap-2.5 text-[22px] font-semibold tracking-[-.7px] text-[#18372e] lg:hidden">
            <span className="grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-[#d0e9db] text-[22px] text-[#0f241f]" aria-hidden="true">✓</span>
            veri<span className="text-[#4b9276]">serve</span>
          </div>
          <header className="mb-[29px]">
            <p className="mb-[13px] font-mono text-[10px] font-medium tracking-[1.7px] text-[#7ba894]">WELCOME TO VERISERVE</p>
            <h2 className="m-0 mb-2 text-[29px] font-medium leading-[1.15] tracking-[-1px] text-[#193a31]">Create your account</h2>
            <p className="m-0 text-[13px] text-[#84918d]">Join a community built on verified work.</p>
          </header>
          <button className="flex w-full items-center justify-center gap-2.5 rounded-[7px] border border-[#dfe6e1] bg-white p-3 text-[13px] font-semibold text-[#34453f] transition hover:shadow-[0_4px_14px_#14322814]" type="button">
            <span className="font-sans text-lg font-bold text-[#4285f4]" aria-hidden="true">G</span> Continue with Google
          </button>
          <div className="my-[23px] flex items-center gap-3.5 whitespace-nowrap font-mono text-[10px] uppercase text-[#a1aaa6] before:h-px before:flex-1 before:bg-[#e1e6e3] after:h-px after:flex-1 after:bg-[#e1e6e3]">or sign up with email</div>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <label className="text-[12px] font-semibold text-[#43524c]" htmlFor="name">Full name</label>
            <input className="mb-2 w-full rounded-[6px] border border-[#dbe3df] bg-white p-3 text-[13px] text-[#193a31] outline-none placeholder:text-[#afb9b5] focus:border-[#72ae94] focus:ring-[3px] focus:ring-[#72ae9421]" id="name" name="name" type="text" placeholder="Alex Morgan" autoComplete="name" required />
            <label className="text-[12px] font-semibold text-[#43524c]" htmlFor="signup-email">Email address</label>
            <input className="mb-2 w-full rounded-[6px] border border-[#dbe3df] bg-white p-3 text-[13px] text-[#193a31] outline-none placeholder:text-[#afb9b5] focus:border-[#72ae94] focus:ring-[3px] focus:ring-[#72ae9421]" id="signup-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
            <label className="text-[12px] font-semibold text-[#43524c]" htmlFor="signup-password">Password</label>
            <div className="relative">
              <input className="mb-2 w-full rounded-[6px] border border-[#dbe3df] bg-white p-3 pr-[52px] text-[13px] text-[#193a31] outline-none placeholder:text-[#afb9b5] focus:border-[#72ae94] focus:ring-[3px] focus:ring-[#72ae9421]" id="signup-password" name="password" type={showPassword ? 'text' : 'password'} placeholder="At least 8 characters" autoComplete="new-password" minLength={8} required />
              <button className="absolute right-3 top-3 text-[11px] font-medium text-[#6c9f87]" type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</button>
            </div>
            <label className="mb-2 flex items-start gap-2 text-[11px] font-normal leading-[1.45] text-[#76847f]">
              <input className="mt-0.5 accent-[#347d61]" type="checkbox" required />
              <span>I agree to the <a className="text-[#3c876a] hover:underline" href="#terms">Terms of Service</a> and <a className="text-[#3c876a] hover:underline" href="#privacy">Privacy Policy</a>.</span>
            </label>
            <button className="mt-2 flex w-full items-center justify-center gap-3.5 rounded-[7px] bg-[#225743] p-[13px] text-[13px] font-semibold text-white transition hover:bg-[#194a38]" type="submit">Create my account <span className="text-lg font-normal" aria-hidden="true">→</span></button>
            {submitted && <p className="m-0 rounded-[5px] bg-[#e6f4ec] p-2.5 text-center text-[11px] text-[#2e7655]" role="status">Account form submitted. Connect your backend to complete registration.</p>}
          </form>
          <p className="mt-[27px] text-center text-[12px] text-[#89948f]">Already have an account? <a className="font-semibold text-[#3b8769]" href="/">Sign in</a></p>
        </div>
      </section>
    </main>
  )
}

export default Signup
