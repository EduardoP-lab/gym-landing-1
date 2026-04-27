import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.webp';

const coaches = [
  {
    image: img1,
    initials: 'LR',
    name: 'Laura Reyes',
    role: 'Fuerza y recomposicion',
    experience: '7 anos',
    focus: 'Pesas, tecnica y planes para ganar fuerza sin improvisar.',
    schedule: 'Lun a Vie',
    clients: '+180 alumnos',
    tag: 'Fuerza',
  },
  {
    image: img2,
    initials: 'MC',
    name: 'Marco Cruz',
    role: 'HIIT y acondicionamiento',
    experience: '5 anos',
    focus: 'Circuitos, perdida de grasa y mejora de condicion fisica.',
    schedule: 'Tardes',
    clients: '+120 alumnos',
    tag: 'Cardio',
  },
  {
    image: img3,
    initials: 'AP',
    name: 'Ana Padilla',
    role: 'Movilidad y funcional',
    experience: '6 anos',
    focus: 'Postura, core, movilidad y entrenamiento para principiantes.',
    schedule: 'Mananas',
    clients: '+150 alumnos',
    tag: 'Movilidad',
  },
]

const highlights = [
  ['01', 'Valoracion inicial'],
  ['02', 'Rutina por objetivo'],
  ['03', 'Correccion de tecnica'],
]

function Coaches() {
  return (
    <section id="coaches" className="coaches-section relative isolate overflow-hidden bg-[#080b0d] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="coaches-backdrop absolute inset-0 -z-20" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div data-aos="fade-right">
            <span className="section-kicker inline-flex border border-[#5D8AA8]/40 bg-[#5D8AA8]/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#b9d6e6] sm:text-xs">
              Coaches certificados
            </span>
            <h2 className="mt-5 max-w-3xl text-balance text-4xl font-black uppercase leading-[0.92] text-white sm:text-5xl lg:text-6xl">
              Gente real guiando tu progreso.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
              Entrena con coaches que revisan tu tecnica, ajustan cargas y te ayudan a mantener una
              rutina sostenible desde la primera semana.
            </p>
          </div>

          <div className="coach-process border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-5" data-aos="fade-left" data-aos-delay="120">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#9ec8df]">Como empezamos</span>
                <strong className="mt-1 block text-2xl font-black text-white">Primer semana guiada</strong>
              </div>
              <a href="#prueba" className="coach-outline-btn inline-flex min-h-12 items-center justify-center border border-white/15 px-5 text-xs font-black uppercase tracking-[0.18em] text-white">
                Conocer coach
              </a>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {highlights.map(([number, label], index) => (
                <div key={label} className="coach-step border border-white/10 bg-zinc-950/50 p-4" style={{ '--delay': `${index * 90}ms` }}>
                  <span className="text-3xl font-black text-[#5D8AA8]">{number}</span>
                  <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-zinc-200">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {coaches.map((coach, index) => (
            <div key={coach.name} className="h-full" data-aos="fade-up" data-aos-delay={index * 100}>
              <article
                className="coach-card group relative h-full overflow-hidden border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-500 hover:border-[#5D8AA8]/60 sm:p-5"
                style={{ '--delay': `${index * 90}ms` }}
              >
                <div className="coach-portrait relative grid aspect-[4/5] place-items-end overflow-hidden border border-white/10 bg-[#10181c] p-5">
                  <div className="coach-scan absolute inset-0" />
                  <div className="coach-avatar absolute left-1/2 top-[16%] h-[52%] w-[52%] -translate-x-1/2">
                    {coach.image ? (
                      <img src={coach.image} alt={`Foto de ${coach.name}`} className="h-full w-full object-cover" loading="lazy" />
                    ) : (
                      <span className="coach-avatar-fallback">{coach.initials}</span>
                    )}
                  </div>
                  <div className="relative z-10 flex w-full items-end justify-between gap-4">
                    <span className="grid h-14 w-14 place-items-center border border-white/15 bg-zinc-950/75 text-lg font-black text-white backdrop-blur-md">
                      {coach.initials}
                    </span>
                    <span className="border border-[#5D8AA8]/40 bg-[#5D8AA8]/15 px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#b9d6e6]">
                      {coach.tag}
                    </span>
                  </div>
                </div>

                <div className="pt-5">
                  <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#9ec8df]">{coach.experience} de experiencia</span>
                  <h3 className="mt-2 text-3xl font-black uppercase text-white">{coach.name}</h3>
                  <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-zinc-400">{coach.role}</p>
                  <p className="mt-5 min-h-[4.5rem] text-sm leading-6 text-zinc-300 sm:text-base">{coach.focus}</p>

                  <div className="mt-6 grid grid-cols-2 gap-3 border-y border-white/10 py-4">
                    <div>
                      <span className="block text-[10px] font-black uppercase tracking-[0.24em] text-zinc-500">Horario</span>
                      <strong className="mt-1 block text-sm font-bold text-white">{coach.schedule}</strong>
                    </div>
                    <div>
                      <span className="block text-[10px] font-black uppercase tracking-[0.24em] text-zinc-500">Historial</span>
                      <strong className="mt-1 block text-sm font-bold text-white">{coach.clients}</strong>
                    </div>
                  </div>

                  <a href="#prueba" className="coach-action mt-5 inline-flex min-h-11 w-full items-center justify-center bg-[#5D8AA8] px-4 text-xs font-black uppercase tracking-[0.18em] text-white">
                    Agendar asesoria
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

export default Coaches
