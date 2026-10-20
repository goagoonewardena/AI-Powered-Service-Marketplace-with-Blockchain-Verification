import { useState } from 'react'
import type { FormEvent } from 'react'

function ForgotPassword() {
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
          <p className="mb-[19px] font-mono text-[10px] font-medium tracking-[1.7px] text-[#6db496]">SECURE ACCESS, SIMPLIFIED</p>
          <h1 className="m-0 text-[clamp(42px,4.1vw,64px)] font-medium leading-[1.04] tracking-[-2.5px]">
            We&apos;ll help you get back <em className="font-['Playfair_Display'] font-medium text-[#a7dcc3]">in.</em>
          </h1>
          <p className="my-[27px] mb-[38px] max-w-[360px] text-[15px] leading-[1.7] text-[#afc1ba]">
            Reset your password securely and get back to the work that matters.
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
          <div className="mb-[52px] flex w-fit items-center gap-2.5 text-[22px] font-semibold tracking-[-.7px] text-[#18372e] lg:hidden">
            <span className="grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-[#d0e9db] text-[22px] text-[#0f241f]" aria-hidden="true">✓</span>
            veri<span className="text-[#4b9276]">serve</span>
          </div>
          <header className="mb-[29px]">
            <p className="mb-[13px] font-mono text-[10px] font-medium tracking-[1.7px] text-[#7ba894]">ACCOUNT RECOVERY</p>
            <h2 className="m-0 mb-2 text-[29px] font-medium leading-[1.15] tracking-[-1px] text-[#193a31]">Forgot your password?</h2>
            <p className="m-0 text-[13px] text-[#84918d]">Enter your email and we&apos;ll send you a reset link.</p>
          </header>
          {!submitted ? (
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <label className="text-[12px] font-semibold text-[#43524c]" htmlFor="recovery-email">
                Email address <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input className="mb-2 w-full rounded-[6px] border border-[#dbe3df] bg-white p-3 text-[13px] text-[#193a31] outline-none placeholder:text-[#afb9b5] focus:border-[#72ae94] focus:ring-[3px] focus:ring-[#72ae9421]" id="recovery-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
              <button className="mt-2 flex w-full items-center justify-center gap-3.5 rounded-[7px] bg-[#225743] p-[13px] text-[13px] font-semibold text-white transition hover:bg-[#194a38]" type="submit">
                Send reset link <span className="text-lg font-normal" aria-hidden="true">→</span>
              </button>
            </form>
          ) : (
            <div className="rounded-[7px] border border-[#cce7d7] bg-[#e6f4ec] p-4 text-center">
              <p className="mb-1 text-[13px] font-semibold text-[#2e7655]">Check your inbox</p>
              <p className="m-0 text-[11px] leading-[1.5] text-[#477963]">If an account exists for that email, you&apos;ll receive password reset instructions shortly.</p>
            </div>
          )}
          <p className="mt-[27px] text-center text-[12px] text-[#89948f]">
            Remember your password? <a className="font-semibold text-[#3b8769]" href="/login/">Sign in</a>
          </p>
        </div>
      </section>
    </main>
  )
}

export default ForgotPassword
