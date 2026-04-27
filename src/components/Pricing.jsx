const priceOptions = [
  {
    type: 'Visita',
    name: 'Pase diario',
    price: '$120',
    note: 'MXN por dia',
    bestFor: 'Probar instalaciones',
    includes: ['Acceso a pesas y cardio', 'Uso de regaderas', 'Sin contrato'],
    accent: 'Entrada libre',
  },
  {
    type: 'Mensual',
    name: 'Gym completo',
    price: '$650',
    note: 'MXN al mes',
    bestFor: 'Entrenar constante',
    includes: ['Acceso 24/7', 'Area de pesas y cardio', 'Rutina inicial incluida'],
    accent: 'Mas elegido',
  },
  {
    type: 'Clases',
    name: 'Clases grupales',
    price: '$850',
    note: 'MXN al mes',
    bestFor: 'Entrenar con coach',
    includes: ['Clases ilimitadas', 'Cupo reservado', 'Seguimiento semanal'],
    accent: 'Con coach',
  },
  {
    type: 'Personal',
    name: 'Paquete 1:1',
    price: '$1,200',
    note: 'MXN / 4 sesiones',
    bestFor: 'Objetivo especifico',
    includes: ['Coach personal', 'Tecnica y cargas', 'Plan de avance'],
    accent: 'Personalizado',
  },
]

const extras = [
  ['Inscripcion', '$250', 'Pago unico al iniciar'],
  ['Evaluacion fisica', 'Gratis', 'Incluida en mensualidad'],
  ['Invitado', '$80', 'Acceso acompanante'],
]

function Pricing() {
  return (
    <section id="precios" className="pricing-section relative isolate overflow-hidden bg-[#080b0d] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="pricing-light absolute left-1/2 top-0 -z-10 h-[34rem] w-[min(42rem,120vw)] -translate-x-1/2 rounded-full bg-[#5D8AA8]/18 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div data-aos="fade-right">
            <span className="section-kicker inline-flex border border-[#5D8AA8]/40 bg-[#5D8AA8]/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#b9d6e6] sm:text-xs">
              Precios del gym
            </span>
            <h2 className="mt-5 max-w-3xl text-balance text-4xl font-black uppercase leading-[0.92] text-white sm:text-5xl lg:text-6xl">
              Paga por como entrenas, no por una app.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
              Elige entre visita, mensualidad, clases o sesiones personales. Precios claros para entrenar
              en el gym, con coaches reales y acceso a instalaciones.
            </p>
          </div>

          <div className="price-summary border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-5" data-aos="fade-left" data-aos-delay="120">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#9ec8df]">Inicio sencillo</span>
                <strong className="mt-1 block text-2xl font-black text-white">Sin permanencia forzada</strong>
              </div>
              <a href="#prueba" className="pricing-outline-btn inline-flex min-h-12 items-center justify-center border border-white/15 px-5 text-xs font-black uppercase tracking-[0.18em] text-white">
                Agendar visita
              </a>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {extras.map(([label, value, detail], index) => (
                <div key={label} className="price-extra border border-white/10 bg-zinc-950/50 p-4" style={{ '--delay': `${index * 90}ms` }}>
                  <span className="text-[10px] font-black uppercase tracking-[0.22em] text-zinc-500">{label}</span>
                  <strong className="mt-2 block text-2xl font-black text-white">{value}</strong>
                  <p className="mt-2 text-sm leading-5 text-zinc-400">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {priceOptions.map((option, index) => (
            <div key={option.name} className="h-full" data-aos="fade-up" data-aos-delay={index * 90}>
              <article
                className="price-ticket group relative h-full overflow-hidden border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-500 hover:border-[#5D8AA8]/60"
                style={{ '--delay': `${index * 80}ms` }}
              >
                <div className="ticket-rip ticket-rip-left" />
                <div className="ticket-rip ticket-rip-right" />

                <div className="flex min-h-[12rem] flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <span className="border border-[#5D8AA8]/40 bg-[#5D8AA8]/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#b9d6e6]">
                        {option.type}
                      </span>
                      <span className="text-right text-[10px] font-black uppercase tracking-[0.22em] text-[#9ec8df]">{option.accent}</span>
                    </div>
                    <h3 className="mt-6 text-3xl font-black uppercase text-white">{option.name}</h3>
                    <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-zinc-400">{option.bestFor}</p>
                  </div>

                  <div className="mt-7">
                    <strong className="block text-5xl font-black leading-none text-white">{option.price}</strong>
                    <span className="mt-2 block text-sm font-semibold text-[#9ec8df]">{option.note}</span>
                  </div>
                </div>

                <div className="ticket-line my-6 border-t border-dashed border-white/15" />

                <ul className="grid gap-3">
                  {option.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-semibold text-zinc-300">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-[#9ef01a] shadow-[0_0_18px_rgba(158,240,26,0.8)]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a href="#prueba" className="price-action mt-7 inline-flex min-h-11 w-full items-center justify-center bg-[#5D8AA8] px-4 text-xs font-black uppercase tracking-[0.18em] text-white">
                  Quiero este
                </a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
