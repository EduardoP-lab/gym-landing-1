const metrics = [
  ['+20', 'maquinas disponibles'],
  ['12', 'clases por semana'],
  ['24/7', 'horario flexible'],
]

function Hero() {
  return (
    <section
      id="inicio"
      className="hero-shell relative isolate min-h-screen overflow-hidden bg-[#080b0d] px-4 pt-28 text-white sm:px-6 sm:pt-32 lg:h-screen lg:max-h-screen lg:min-h-0 lg:px-8 lg:pt-24"
    >
      <div className="hero-grid absolute inset-0 -z-20" />
      <div className="hero-spotlight absolute left-1/2 top-[-18rem] -z-10 h-[min(42rem,120vw)] w-[min(42rem,120vw)] -translate-x-1/2 rounded-full bg-[#5D8AA8]/25 blur-3xl" />
      <div className="scanline absolute inset-0 -z-10 opacity-35" />

      <div className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-[92rem] items-center gap-8 pb-12 sm:gap-12 sm:pb-16 lg:h-[calc(100vh-6rem)] lg:min-h-0 lg:grid-cols-[0.78fr_1.22fr] lg:gap-2 lg:pb-6 xl:grid-cols-[0.72fr_1.28fr]">
        <div className="hero-copy relative z-10 mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
          <div className="motion-badge mb-5 inline-flex max-w-full items-center gap-3 border border-[#5D8AA8]/45 bg-[#5D8AA8]/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#b9d6e6] sm:mb-7 sm:px-4 sm:text-xs sm:tracking-[0.28em]">
            <span className="h-2 w-2 rounded-full bg-[#9ef01a] shadow-[0_0_18px_rgba(158,240,26,0.95)]" />
            Entrena a tu ritmo
          </div>

          <h1 className="mx-auto max-w-4xl text-balance text-[clamp(2.75rem,14vw,5rem)] font-black uppercase leading-[0.88] tracking-normal text-white sm:text-[clamp(4.7rem,9vw,7rem)] lg:mx-0 lg:text-[clamp(5.2rem,7vw,8.5rem)]">
            Ponte fuerte.
            <span className="hero-title-accent block text-[#5D8AA8]">Sientete mejor.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:mt-7 sm:text-xl sm:leading-8 lg:mx-0">
            Gimnasio equipado con area de pesas, cardio, clases grupales y entrenadores listos
            para ayudarte a crear una rutina simple, constante y efectiva.
          </p>

          <div className="mt-8 flex flex-col gap-3 min-[520px]:flex-row min-[520px]:justify-center sm:mt-9 lg:justify-start">
            <a
              href="#prueba"
              className="hero-primary-btn group inline-flex min-h-14 items-center justify-center gap-3 bg-[#5D8AA8] px-5 py-4 text-xs font-black uppercase tracking-[0.18em] text-white shadow-[0_0_48px_rgba(93,138,168,0.52)] sm:px-6 sm:text-sm sm:tracking-[0.22em]"
            >
              Agenda tu visita
              <span className="grid h-7 w-7 place-items-center rounded-full bg-zinc-950 text-white transition duration-300 group-hover:translate-x-1">
                <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </span>
            </a>
            <a
              href="#metodo"
              className="inline-flex min-h-14 items-center justify-center border border-white/15 bg-white/[0.04] px-5 py-4 text-xs font-black uppercase tracking-[0.18em] text-white transition duration-300 hover:border-[#5D8AA8] hover:bg-[#5D8AA8]/10 sm:px-6 sm:text-sm sm:tracking-[0.22em]"
            >
              Ver planes
            </a>
          </div>

          <div className="hero-metrics mx-auto mt-8 grid max-w-2xl grid-cols-1 border-y border-white/10 min-[520px]:grid-cols-3 sm:mt-11 lg:mx-0">
            {metrics.map(([value, label]) => (
              <div key={label} className="metric-panel px-3 py-4 min-[520px]:py-5 min-[520px]:first:pl-0 min-[520px]:last:pr-0 sm:px-6">
                <strong className="block text-3xl font-black text-white sm:text-4xl">{value}</strong>
                <span className="mt-2 block text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-stage relative mx-auto aspect-square w-[min(100%,34rem)] max-w-full lg:mr-[-3vw] lg:w-[min(clamp(38rem,58vw,58rem),calc(100vh-7rem))] xl:mr-[-5vw] 2xl:mr-[-7vw]">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />

          <div className="training-core absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2">
            <div className="core-glass absolute inset-0 border border-white/15 bg-white/[0.05] shadow-2xl shadow-black/40 backdrop-blur-md" />
            <div className="plate-stack plate-stack-one" />
            <div className="plate-stack plate-stack-two" />
            <div className="barbell">
              <span />
              <span />
              <span />
            </div>
            <div className="pulse-readout">
              <span>Clase</span>
              <strong>Gratis</strong>
            </div>
          </div>

          <div className="hero-overlay pointer-events-none absolute inset-0 z-30">
            <div className="floating-card floating-card-a border border-white/10 bg-zinc-950/70 p-4 shadow-2xl shadow-black/35 backdrop-blur-xl">
              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#9ec8df]">Progreso</span>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="power-bar h-full w-[76%] rounded-full bg-[#9ef01a]" />
              </div>
            </div>

            <div className="floating-card floating-card-b border border-white/10 bg-zinc-950/70 p-4 shadow-2xl shadow-black/35 backdrop-blur-xl">
              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#9ec8df]">Meta</span>
              <strong className="mt-2 block text-3xl font-black text-white">30D</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
