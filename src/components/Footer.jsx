const navLinks = [
  ['Inicio', '#inicio'],
  ['Clases', '#clases'],
  ['Coaches', '#coaches'],
  ['Precios', '#precios'],
]

const hours = [
  ['Lun - Vie', '5:00 AM - 11:00 PM'],
  ['Sabado', '7:00 AM - 6:00 PM'],
  ['Domingo', '8:00 AM - 2:00 PM'],
]

function Footer() {
  return (
    <footer className="footer-section relative isolate overflow-hidden bg-[#080b0d] px-4 pt-16 text-white sm:px-6 lg:px-8">
      <div className="footer-grid absolute inset-0 -z-20" />
      <div className="footer-glow absolute bottom-[-18rem] left-1/2 -z-10 h-[32rem] w-[min(46rem,130vw)] -translate-x-1/2 rounded-full bg-[#5D8AA8]/18 blur-3xl" />

      <div className="mx-auto max-w-7xl border-t border-white/10">
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.8fr_1fr] lg:gap-12 lg:py-16" data-aos="fade-up">
          <div className="max-w-md">
            <a href="#inicio" className="footer-brand group inline-flex items-center gap-3" aria-label="AeroFit inicio">
              <span className="brand-mark relative grid h-11 w-11 place-items-center overflow-hidden border border-white/15 bg-[#5D8AA8]/20">
                <span className="absolute h-7 w-7 border border-white/50" />
                <span className="relative h-2.5 w-7 bg-white shadow-[0_0_28px_rgba(93,138,168,0.95)]" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-sm font-black uppercase tracking-[0.42em] text-white">Aero</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.58em] text-[#9ec8df]">Fit Lab</span>
              </span>
            </a>

            <p className="mt-6 text-base leading-7 text-zinc-300">
              Gimnasio con pesas, cardio, clases grupales y coaches que te ayudan a entrenar con
              constancia, buena tecnica y objetivos claros.
            </p>

            <a href="#prueba" className="footer-cta mt-7 inline-flex min-h-12 items-center justify-center bg-[#5D8AA8] px-5 text-xs font-black uppercase tracking-[0.18em] text-white">
              Agenda tu visita
            </a>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.28em] text-[#9ec8df]">Navegacion</h3>
            <ul className="mt-5 grid gap-3">
              {navLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="footer-link inline-flex text-sm font-bold uppercase tracking-[0.16em] text-zinc-300">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.28em] text-[#9ec8df]">Horarios</h3>
            <dl className="mt-5 grid gap-4">
              {hours.map(([day, time]) => (
                <div key={day} className="footer-row grid gap-1 border-b border-white/10 pb-3">
                  <dt className="text-sm font-black uppercase tracking-[0.16em] text-white">{day}</dt>
                  <dd className="text-sm font-semibold text-zinc-400">{time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.28em] text-[#9ec8df]">Contacto</h3>
            <div className="mt-5 grid gap-4 text-sm font-semibold text-zinc-300">
              <a href="tel:+526621234567" className="footer-link inline-flex">+52 662 123 4567</a>
              <a href="mailto:hola@aerofitlab.com" className="footer-link inline-flex">hola@aerofitlab.com</a>
              <p className="leading-6">Blvd. Principal 245, Hermosillo, Sonora</p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#instagram" className="footer-social flex h-11 w-11 justify-center items-center border border-white/15 text-white" aria-label="Instagram">
                <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="17" cy="7" r="1.1" fill="currentColor" />
                </svg>
              </a>
              <a href="#facebook" className="footer-social flex justify-center items-center h-11 w-11 border border-white/15 text-white" aria-label="Facebook">
                <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M14.4 8.2h2.1V4.6c-.4-.1-1.7-.2-3.2-.2-3.1 0-5.2 1.9-5.2 5.5v3H4.7V17h3.4v6h4.1v-6h3.4l.5-4.1h-3.9v-2.6c0-1.2.3-2.1 2.2-2.1Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#whatsapp" className="footer-social flex justify-center items-center h-11 w-11 border border-white/15 text-white" aria-label="WhatsApp">
                <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4.8 19.4 6 15.8a7.6 7.6 0 1 1 2.9 2.8l-4.1.8Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M9.2 8.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.4.5c.6 1 1.4 1.8 2.4 2.3l.6-.7c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.6 0 .7-.5 1.7-1.3 1.8-1.7.2-5.7-1.7-7-4.8-.5-1.2.2-2.2.4-2.5Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs font-bold uppercase tracking-[0.16em] text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 AeroFit Lab. Todos los derechos reservados.</span>
          <a href="#inicio" className="footer-link inline-flex text-[#9ec8df]">Volver arriba</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
