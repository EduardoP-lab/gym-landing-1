import { useState } from 'react'

const links = ['Inicio', 'Clases', 'Coaches', 'Precios']

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="gym-navbar fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between border border-white/10 bg-zinc-950/70 px-4 py-3 text-white shadow-2xl shadow-black/25 backdrop-blur-2xl sm:px-5">
        <a href="#inicio" className="group flex items-center gap-3" aria-label="AeroFit inicio">
          <span className="brand-mark relative grid h-11 w-11 place-items-center overflow-hidden border border-white/15 bg-[#5D8AA8]/20">
            <span className="absolute h-7 w-7 border border-white/50" />
            <span className="relative h-2.5 w-7 bg-white shadow-[0_0_28px_rgba(93,138,168,0.95)]" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-black uppercase tracking-[0.42em] text-white">Aero</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.58em] text-[#9ec8df]">Fit Lab</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 lg:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="nav-chip relative rounded-full px-4 py-2 text-sm font-semibold text-zinc-300 transition duration-300 hover:text-white"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#agenda"
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white/85 transition duration-300 hover:border-[#5D8AA8] hover:text-white"
          >
            Tour virtual
          </a>
          <a
            href="#prueba"
            className="nav-cta rounded-full bg-[#5D8AA8] px-5 py-2.5 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_0_34px_rgba(93,138,168,0.55)]"
          >
            Entrena hoy
          </a>
        </div>

        <button
          className="mobile-trigger grid h-11 w-11 place-items-center border border-white/15 bg-white/[0.06] text-white md:hidden"
          type="button"
          aria-label="Abrir menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d={isOpen ? 'M6 6L18 18M18 6L6 18' : 'M4 7h16M8 12h12M4 17h16'}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </nav>

      <div
        className={`mobile-panel mx-auto mt-3 max-w-7xl overflow-hidden border border-white/10 bg-zinc-950/85 text-white shadow-2xl shadow-black/30 backdrop-blur-2xl md:hidden ${
          isOpen ? 'mobile-panel--open' : ''
        }`}
      >
        <div className="grid gap-2 p-3">
          {links.map((link, index) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="mobile-link flex items-center justify-between border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] text-zinc-200"
              style={{ '--delay': `${index * 55}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link}
              <span className="text-[#9ec8df]">0{index + 1}</span>
            </a>
          ))}
          <a
            href="#prueba"
            className="mt-1 justify-center bg-[#5D8AA8] px-4 py-3 text-center text-sm font-black uppercase tracking-[0.2em] text-zinc-950"
            onClick={() => setIsOpen(false)}
          >
            Entrena hoy
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
