function Splash() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-[#10211d] px-6 font-['DM_Sans'] text-white" role="status" aria-label="Loading VeriServe">
      <div className="pointer-events-none absolute -right-[260px] -top-[190px] h-[600px] w-[600px] rounded-full border border-[#b5dcc81f]" />
      <div className="pointer-events-none absolute -bottom-[310px] -left-[260px] h-[600px] w-[600px] rounded-full border border-[#b5dcc81f]" />
      <div className="relative flex flex-col items-center text-center">
        <div className="mb-5 grid h-[68px] w-[68px] place-items-center rounded-[20px] bg-[#9fd6bc] text-[42px] text-[#0f241f] shadow-[0_0_0_10px_#9fd6bc14]">
          ✓
        </div>
        <h1 className="m-0 text-[34px] font-semibold tracking-[-1.5px]">
          veri<span className="text-[#9fd6bc]">serve</span>
        </h1>
        <p className="mt-3 font-mono text-[10px] tracking-[2.2px] text-[#6db496]">TRUSTED WORK. VERIFIED PEOPLE.</p>
        <div className="mt-12 h-1 w-32 overflow-hidden rounded-full bg-[#2b493f]" aria-hidden="true">
          <div className="h-full w-1/2 animate-[splash-progress_1.5s_ease-in-out_infinite] rounded-full bg-[#9fd6bc]" />
        </div>
      </div>
      <p className="absolute bottom-8 text-[10px] text-[#728a81]">Every profile is verified on-chain</p>
    </main>
  )
}

export default Splash
