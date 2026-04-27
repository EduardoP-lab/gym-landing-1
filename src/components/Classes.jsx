const classes = [
  {
    name: 'Fuerza',
    days: 'Lun, Mie, Vie',
    time: '6:00 AM / 7:00 PM',
    duration: '50 min',
    level: 'Todos',
    description: 'Trabajo guiado con peso libre, maquinas y tecnica para progresar con seguridad.',
    spots: '8 lugares',
  },
  {
    name: 'HIIT',
    days: 'Mar, Jue',
    time: '7:00 AM / 6:30 PM',
    duration: '40 min',
    level: 'Intermedio',
    description: 'Circuitos de alta intensidad para mejorar resistencia, potencia y condicion fisica.',
    spots: '10 lugares',
  },
  {
    name: 'Funcional',
    days: 'Lun a Sab',
    time: '8:00 AM / 8:00 PM',
    duration: '45 min',
    level: 'Todos',
    description: 'Movimientos completos con ligas, mancuernas, core y ejercicios de control corporal.',
    spots: '12 lugares',
  },
  {
    name: 'Spinning',
    days: 'Mar, Jue, Sab',
    time: '6:30 AM / 7:30 PM',
    duration: '45 min',
    level: 'Todos',
    description: 'Cardio sobre bici con cambios de ritmo, musica y seguimiento por instructor.',
    spots: '14 lugares',
  },
  {
    name: 'Box Fit',
    days: 'Mie, Vie',
    time: '6:00 PM',
    duration: '50 min',
    level: 'Intermedio',
    description: 'Tecnica basica de golpeo, trabajo de saco, coordinacion y acondicionamiento.',
    spots: '10 lugares',
  },
  {
    name: 'Movilidad',
    days: 'Sab',
    time: '9:00 AM',
    duration: '35 min',
    level: 'Todos',
    description: 'Sesion suave para mejorar postura, rango de movimiento y recuperacion muscular.',
    spots: '15 lugares',
  },
]

const schedule = [
  ['Lun', 'Fuerza', '6:00 AM'],
  ['Mar', 'HIIT', '7:00 AM'],
  ['Mie', 'Box Fit', '6:00 PM'],
  ['Jue', 'Spinning', '7:30 PM'],
]

function Classes() {
  return (
    <section id="clases" className="classes-section relative isolate overflow-hidden bg-[#080b0d] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="classes-glow absolute right-[-18rem] top-20 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#5D8AA8]/20 blur-3xl" />
      <div className="absolute bottom-0 left-[-16rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-[#9ef01a]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div data-aos="fade-right">
            <span className="section-kicker inline-flex border border-[#5D8AA8]/40 bg-[#5D8AA8]/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#b9d6e6] sm:text-xs">
              Clases grupales
            </span>
            <h2 className="mt-5 max-w-3xl text-balance text-4xl font-black uppercase leading-[0.92] text-white sm:text-5xl lg:text-6xl">
              Entrena acompañado, con horarios reales.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
              Elige clases de fuerza, cardio, movilidad o acondicionamiento. Cada sesion tiene cupo limitado
              para que el coach pueda corregirte y adaptar el ritmo.
            </p>
          </div>

          <div className="schedule-panel border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-5" data-aos="fade-left" data-aos-delay="120">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#9ec8df]">Proximas clases</span>
                <strong className="mt-1 block text-2xl font-black text-white">Semana activa</strong>
              </div>
              <a href="#prueba" className="classes-ghost-btn inline-flex min-h-12 items-center justify-center border border-white/15 px-5 text-xs font-black uppercase tracking-[0.18em] text-white">
                Reservar lugar
              </a>
            </div>

            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {schedule.map(([day, name, time], index) => (
                <div key={`${day}-${name}`} className="schedule-row flex items-center justify-between border border-white/10 bg-zinc-950/50 px-4 py-3" style={{ '--delay': `${index * 80}ms` }}>
                  <div className="flex items-center gap-3">
                    <span className="class-dot h-2.5 w-2.5 rounded-full bg-[#9ef01a]" />
                    <span className="text-sm font-black uppercase tracking-[0.18em] text-white">{day}</span>
                  </div>
                  <span className="text-sm font-semibold text-zinc-300">{name}</span>
                  <span className="text-xs font-bold text-[#9ec8df]">{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {classes.map((item, index) => (
            <div key={item.name} className="h-full" data-aos="fade-up" data-aos-delay={index * 80}>
              <article
                className="class-card group relative h-full overflow-hidden border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-500 hover:border-[#5D8AA8]/60 sm:p-6"
                style={{ '--delay': `${index * 70}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.26em] text-[#9ec8df]">{item.level}</span>
                    <h3 className="mt-2 text-3xl font-black uppercase text-white">{item.name}</h3>
                  </div>
                  <span className="class-pill border border-[#5D8AA8]/40 bg-[#5D8AA8]/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#b9d6e6]">
                    {item.spots}
                  </span>
                </div>

                <p className="mt-5 min-h-[5.25rem] text-sm leading-6 text-zinc-300 sm:text-base">{item.description}</p>

                <div className="mt-6 grid grid-cols-2 gap-3 border-y border-white/10 py-4">
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-[0.24em] text-zinc-500">Dias</span>
                    <strong className="mt-1 block text-sm font-bold text-white">{item.days}</strong>
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-[0.24em] text-zinc-500">Duracion</span>
                    <strong className="mt-1 block text-sm font-bold text-white">{item.duration}</strong>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-3 min-[440px]:flex-row min-[440px]:items-center min-[440px]:justify-between">
                  <span className="text-sm font-bold text-[#9ec8df]">{item.time}</span>
                  <a href="#prueba" className="class-action inline-flex min-h-11 items-center justify-center bg-[#5D8AA8] px-4 text-xs font-black uppercase tracking-[0.18em] text-white">
                    Apartar
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Classes
