import { Link } from 'react-router-dom'

const features = [
  {
    icon: '✓',
    title: 'Verified expertise',
    description: 'Discover professionals whose skills and experience are verified for greater confidence.',
  },
  {
    icon: '◈',
    title: 'Secure connections',
    description: 'Work with clarity through trusted profiles, transparent projects, and secure communication.',
  },
  {
    icon: '⌁',
    title: 'Meaningful outcomes',
    description: 'Turn great ideas into real results with a marketplace built around trust.',
  },
]

function Landing() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f9f7] font-['DM_Sans'] text-[#193a31]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link className="flex items-center gap-2.5 text-[22px] font-semibold tracking-[-.7px] no-underline" to="/">
          <span className="grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-[#d0e9db] text-[22px] text-[#0f241f]" aria-hidden="true">✓</span>
          veri<span className="text-[#4b9276]">serve</span>
        </Link>
        <div className="flex items-center gap-5 text-xs font-semibold">
          <a className="hidden text-[#6b7f76] no-underline sm:block" href="#how-it-works">How it works</a>
          <a className="hidden text-[#6b7f76] no-underline sm:block" href="#features">Features</a>
          <Link className="rounded-md border border-[#dbe3df] bg-white px-4 py-2.5 text-[#38594d] no-underline transition hover:border-[#9ccbb2]" to="/login/">Sign in</Link>
        </div>
      </nav>

      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-14 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:pb-28 lg:pt-24">
        <div className="pointer-events-none absolute -right-48 -top-32 h-[520px] w-[520px] rounded-full border border-[#bddccc] opacity-60" />
        <div className="relative z-10 max-w-2xl">
          <p className="mb-5 font-mono text-[10px] font-medium tracking-[2px] text-[#6db496]">THE TRUSTED SERVICE MARKETPLACE</p>
          <h1 className="m-0 text-5xl font-medium leading-[1.05] tracking-[-2.5px] sm:text-7xl">
            Great work starts with <em className="font-['Playfair_Display'] text-[#4b9276]">trust.</em>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#71847c] sm:text-lg">
            Find skilled people, build meaningful projects, and work with confidence through verified expertise.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link className="rounded-md bg-[#225743] px-6 py-3.5 text-sm font-semibold text-white no-underline shadow-[0_8px_20px_#22574326] transition hover:bg-[#194a38]" to="/signup/">
              Start building <span aria-hidden="true">→</span>
            </Link>
            <a className="rounded-md border border-[#dbe3df] bg-white px-6 py-3.5 text-sm font-semibold text-[#38594d] no-underline transition hover:border-[#9ccbb2]" href="#how-it-works">
              See how it works
            </a>
          </div>
          <div className="mt-9 flex items-center gap-3 text-xs text-[#768c82]">
            <span className="h-2 w-2 rounded-full bg-[#73c5a3] shadow-[0_0_0_5px_#73c5a31a]" /> 12,000+ people already building better
          </div>
        </div>

        <div className="relative mx-auto h-[350px] w-full max-w-[470px] sm:h-[420px]">
          <div className="absolute inset-7 rotate-3 rounded-[28px] bg-[#dceee4]" />
          <div className="absolute inset-0 -rotate-3 rounded-[28px] border border-[#d3e5db] bg-[#10211d] p-7 shadow-[0_25px_60px_#193a3126] sm:p-9">
            <div className="flex items-center justify-between border-b border-[#ffffff12] pb-5">
              <div><p className="m-0 font-mono text-[9px] tracking-[1.5px] text-[#6db496]">VERISERVE NETWORK</p><p className="mt-2 text-xl font-semibold text-white">Trusted by design.</p></div>
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#9fd6bc] text-2xl text-[#0f241f]">✓</span>
            </div>
            <div className="mt-8 space-y-3">
              {['Verified professionals', 'Secure project matching', 'Transparent collaboration'].map((item, index) => (
                <div className="flex items-center gap-3 rounded-lg border border-[#ffffff10] bg-[#ffffff08] p-3.5" key={item}>
                  <span className="grid h-7 w-7 place-items-center rounded-md bg-[#9fd6bc1f] text-sm text-[#9fd6bc]">{index + 1}</span>
                  <span className="text-xs text-[#d1e2da]">{item}</span>
                  <span className="ml-auto text-xs text-[#73c5a3]">Active</span>
                </div>
              ))}
            </div>
            <div className="mt-7 flex items-end justify-between">
              <div><p className="m-0 text-[10px] text-[#728a81]">NETWORK CONFIDENCE</p><p className="mt-1 text-3xl font-semibold text-[#9fd6bc]">98.4%</p></div>
              <span className="rounded-full bg-[#73c5a31a] px-3 py-1.5 text-[10px] text-[#9fd6bc]">On-chain verified</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e1e9e4] bg-white" id="features">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-16 sm:grid-cols-3 lg:px-10">
          {features.map((feature) => (
            <article className="rounded-xl p-5 transition hover:bg-[#f8f9f7]" key={feature.title}>
              <span className="mb-5 grid h-11 w-11 place-items-center rounded-lg bg-[#e6f4ec] text-xl text-[#347d61]">{feature.icon}</span>
              <h2 className="mb-2 text-lg font-semibold">{feature.title}</h2>
              <p className="m-0 text-sm leading-6 text-[#71847c]">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-10" id="how-it-works">
        <div>
          <p className="mb-4 font-mono text-[10px] font-medium tracking-[2px] text-[#6db496]">A BETTER WAY TO WORK</p>
          <h2 className="m-0 max-w-lg text-4xl font-medium leading-tight tracking-[-1.5px] sm:text-5xl">From first idea to finished work.</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
          {['Create your profile', 'Find the right match', 'Build with confidence'].map((step, index) => (
            <div className="flex gap-4" key={step}>
              <span className="font-mono text-sm text-[#7ba894]">0{index + 1}</span>
              <div><h3 className="m-0 text-sm font-semibold">{step}</h3><p className="mt-1 text-xs leading-5 text-[#71847c]">{['Showcase what makes your work unique.', 'Connect with people who value your expertise.', 'Collaborate through a trusted network.'][index]}</p></div>
            </div>
          ))}
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-[#e1e9e4] px-6 py-7 text-xs text-[#899c94] sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <span>© 2024 VeriServe</span>
        <span>Every profile is verified on-chain</span>
      </footer>
    </main>
  )
}

export default Landing
