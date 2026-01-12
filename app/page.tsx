import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IA + WhatsApp | Automatizá ventas y atención",
  description:
    "Asistente IA en WhatsApp, calificación de leads, agenda automática, CRM y seguimiento. Implementación rápida y medible.",
};

const BRAND = {
  name: "Tu Empresa IA",
  whatsapp: "5492230000000", // <-- tu número con código país, sin + (AR ejemplo)
  calendly: "https://calendly.com/tuusuario/diagnostico", // opcional
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        variant === "primary"
          ? "bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:ring-emerald-400"
          : "bg-white/10 text-white hover:bg-white/15 focus-visible:ring-white/40"
      )}
    >
      {children}
    </a>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm leading-6 text-white/70">{subtitle}</p>
      ) : null}
    </div>
  );
}

function Card({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
          {icon}
        </div>
        <div>
          <p className="font-semibold text-white">{title}</p>
          <p className="mt-1 text-sm leading-6 text-white/70">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-emerald-300"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function Icon({ path }: { path: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-white/80"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  );
}

export default function Page() {
  const waLink = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
    "Hola! Quiero un diagnóstico para automatizar ventas y atención por WhatsApp con IA."
  )}`;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Top glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-[520px] bg-gradient-to-b from-indigo-500/20 via-cyan-500/10 to-transparent blur-3xl" />

      {/* Header */}
      <header className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-white/10" />
          <span className="text-sm font-semibold tracking-tight">
            {BRAND.name}
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a className="hover:text-white" href="#servicios">
            Servicios
          </a>
          <a className="hover:text-white" href="#proceso">
            Proceso
          </a>
          <a className="hover:text-white" href="#planes">
            Planes
          </a>
          <a className="hover:text-white" href="#faq">
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={waLink}
            className="hidden rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15 md:inline-flex"
          >
            Hablar por WhatsApp
          </a>
          <a
            href={BRAND.calendly}
            className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Pedir diagnóstico
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-5 pb-14 pt-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Implementación rápida · Integración con CRM · Medible
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Automatizá <span className="text-emerald-300">ventas</span> y{" "}
              <span className="text-cyan-300">atención</span> al cliente con{" "}
              <span className="text-indigo-300">IA</span> en WhatsApp
            </h1>

            <p className="mt-4 text-base leading-7 text-white/70">
              Atendé 24/7, calificá leads, agendá turnos y respondé consultas sin
              perder oportunidades. No es un chatbot genérico: es un sistema
              comercial.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={BRAND.calendly} variant="primary">
                Pedir diagnóstico
              </Button>
              <Button href="#como-funciona" variant="secondary">
                Ver cómo funciona
              </Button>
            </div>

            <p className="mt-5 text-sm text-white/60">
              Para negocios con alto volumen de consultas y necesidad de orden
              comercial sin sumar personal.
            </p>
          </div>

          {/* Mock panel */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Panel de Conversaciones</p>
                <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs text-emerald-200">
                  Live
                </span>
              </div>
              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs text-white/60">Tiempo de respuesta</p>
                  <p className="mt-1 text-2xl font-bold">8s</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs text-white/60">Leads calificados</p>
                  <p className="mt-1 text-2xl font-bold">+31%</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs text-white/60">Turnos confirmados</p>
                  <p className="mt-1 text-2xl font-bold">+18%</p>
                </div>
              </div>
              <div className="mt-5 rounded-2xl bg-white/5 p-4">
                <p className="text-xs text-white/60">Ejemplo de chat</p>
                <div className="mt-3 space-y-2 text-sm">
                  <div className="w-fit rounded-2xl bg-white/10 px-3 py-2">
                    Hola, ¿en qué puedo ayudarte?
                  </div>
                  <div className="ml-auto w-fit rounded-2xl bg-emerald-600/20 px-3 py-2">
                    Quiero saber precio y disponibilidad
                  </div>
                  <div className="w-fit rounded-2xl bg-white/10 px-3 py-2">
                    Perfecto. ¿Para qué servicio y qué zona?
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-r from-indigo-500/20 via-cyan-500/15 to-emerald-500/20 blur-2xl" />
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="relative border-t border-white/10 bg-white/0">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <SectionTitle
            title="Si tu negocio depende de WhatsApp, esto te está pasando"
            subtitle="El caos operativo y la pérdida de leads es un problema de sistema, no de esfuerzo."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              title="Respuestas lentas e inconsistentes"
              desc="Cada vendedor responde distinto y se pierden oportunidades."
              icon={<Icon path="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />}
            />
            <Card
              title="Leads que dejan de responder"
              desc="Preguntan precio y desaparecen por falta de seguimiento."
              icon={<Icon path="M12 20l9-5-9-5-9 5 9 5z M12 12l9-5-9-5-9 5 9 5z" />}
            />
            <Card
              title="Ventas perdidas fuera de horario"
              desc="Cuando no contestás, el lead se va con otro."
              icon={<Icon path="M12 8v4l3 3 M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />}
            />
            <Card
              title="Agenda desordenada"
              desc="Turnos sin confirmar, reprogramaciones y faltazos."
              icon={<Icon path="M8 7V3m8 4V3M4 11h16M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />}
            />
            <Card
              title="CRM inexistente o mal usado"
              desc="No sabés cuántos leads entran ni por qué se pierden."
              icon={<Icon path="M4 6h16M4 12h16M4 18h16" />}
            />
            <Card
              title="Dueño apagando incendios"
              desc="La operación depende de vos y no escala."
              icon={<Icon path="M12 11c0-3 2-5 5-5 0 3-2 5-5 5z M7 21a5 5 0 0 1 10 0 M9 11c-3 0-5-2-5-5 3 0 5 2 5 5z" />}
            />
          </div>

          <p className="mt-8 text-center text-sm text-white/60">
            Más gasto, menos conversiones y apagás incendios todo el día.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section id="servicios" className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <SectionTitle
            eyebrow="La solución"
            title="IA + Automatización enfocada en conversiones"
            subtitle="Diseñamos un sistema a medida que atiende, califica, deriva y registra todo."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              {
                t: "Asistente IA en WhatsApp",
                d: "FAQs, objeciones, precios, disponibilidad, ubicación y medios de pago.",
              },
              {
                t: "Calificación y derivación inteligente",
                d: "Segmenta por interés, presupuesto, zona, urgencia y manda al vendedor correcto.",
              },
              {
                t: "Agenda automática",
                d: "Toma turnos, confirma, reprograma y envía recordatorios.",
              },
              {
                t: "CRM + pipeline",
                d: "Carga leads, etiquetas, etapas, tareas, seguimiento y reportes.",
              },
              {
                t: "Seguimiento automático",
                d: "Recupera leads fríos y empuja cierre con mensajes programados.",
              },
              {
                t: "Analítica y optimización",
                d: "Métricas claras: respuestas, conversiones, pérdida, motivos frecuentes.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <CheckIcon />
                  </div>
                  <div>
                    <p className="font-semibold">{x.t}</p>
                    <p className="mt-1 text-sm leading-6 text-white/70">
                      {x.d}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div id="como-funciona" className="mt-14">
            <SectionTitle
              eyebrow="Cómo trabajamos"
              title="Implementación en 4 pasos"
              subtitle="Orden, velocidad y seguimiento. Con datos reales para optimizar."
            />

            <div
              id="proceso"
              className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {[
                {
                  n: "1",
                  t: "Diagnóstico",
                  d: "Revisamos tu proceso y dónde se pierden ventas.",
                },
                {
                  n: "2",
                  t: "Diseño del flujo",
                  d: "Guiones, calificación, derivaciones y seguimiento.",
                },
                {
                  n: "3",
                  t: "Integración y lanzamiento",
                  d: "WhatsApp, CRM, agenda, formularios y automatizaciones.",
                },
                {
                  n: "4",
                  t: "Optimización continua",
                  d: "Ajustes según métricas para mejorar conversiones.",
                },
              ].map((s) => (
                <div
                  key={s.n}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="text-xs font-semibold text-white/60">
                    Paso {s.n}
                  </div>
                  <div className="mt-2 font-semibold">{s.t}</div>
                  <p className="mt-1 text-sm leading-6 text-white/70">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="planes" className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <SectionTitle
            eyebrow="Planes"
            title="Según volumen y complejidad"
            subtitle="Cobramos por alcance e integración. La idea es que el sistema pague su costo con eficiencia y cierres."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold">Starter</p>
              <p className="mt-1 text-sm text-white/70">Ordenar lo básico</p>
              <ul className="mt-5 space-y-3 text-sm text-white/70">
                <li className="flex gap-2">
                  <CheckIcon /> Flujo principal + FAQs
                </li>
                <li className="flex gap-2">
                  <CheckIcon /> Calificación simple
                </li>
                <li className="flex gap-2">
                  <CheckIcon /> Integración básica con CRM
                </li>
                <li className="flex gap-2">
                  <CheckIcon /> Soporte y mejoras mensuales
                </li>
              </ul>
              <div className="mt-6">
                <Button href={BRAND.calendly} variant="secondary">
                  Consultar precio
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-emerald-500/15 to-white/5 p-6 shadow-xl">
              <p className="text-sm font-semibold">Pro</p>
              <p className="mt-1 text-sm text-white/70">Escalar ventas</p>
              <ul className="mt-5 space-y-3 text-sm text-white/70">
                <li className="flex gap-2">
                  <CheckIcon /> Flujos por servicio/segmento
                </li>
                <li className="flex gap-2">
                  <CheckIcon /> Seguimiento automático
                </li>
                <li className="flex gap-2">
                  <CheckIcon /> Agenda + confirmaciones
                </li>
                <li className="flex gap-2">
                  <CheckIcon /> Reportes + optimización
                </li>
              </ul>
              <div className="mt-6">
                <Button href={BRAND.calendly} variant="primary">
                  Pedir diagnóstico
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold">Enterprise</p>
              <p className="mt-1 text-sm text-white/70">Operación grande</p>
              <ul className="mt-5 space-y-3 text-sm text-white/70">
                <li className="flex gap-2">
                  <CheckIcon /> Multi-área / multi-sede
                </li>
                <li className="flex gap-2">
                  <CheckIcon /> Reglas avanzadas + derivaciones
                </li>
                <li className="flex gap-2">
                  <CheckIcon /> Integraciones personalizadas
                </li>
                <li className="flex gap-2">
                  <CheckIcon /> SLA y monitoreo
                </li>
              </ul>
              <div className="mt-6">
                <Button href={BRAND.calendly} variant="secondary">
                  Hablar con un asesor
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <SectionTitle
            eyebrow="FAQ"
            title="Preguntas frecuentes"
            subtitle="Respuestas claras para acelerar la decisión."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              {
                q: "¿Esto reemplaza a mi equipo?",
                a: "No. Automatiza lo repetitivo y filtra. Tu equipo se dedica a cerrar y a casos complejos.",
              },
              {
                q: "¿Se adapta a mi negocio?",
                a: "Sí. Se diseña a medida con tu oferta, objeciones y reglas de atención/ventas.",
              },
              {
                q: "¿Cuánto tarda en implementarse?",
                a: "Depende del alcance. Un MVP puede salir rápido y luego se optimiza con datos reales.",
              },
              {
                q: "¿Necesito CRM?",
                a: "Recomendado. Si no tenés, te ayudamos a implementarlo o integrar una solución simple.",
              },
            ].map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="font-semibold">{f.q}</p>
                <p className="mt-2 text-sm leading-6 text-white/70">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-500/15 via-cyan-500/10 to-emerald-500/15 p-8 text-center">
            <h3 className="text-2xl font-bold">Dejá de perder ventas por WhatsApp</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/70">
              Te armamos un sistema que atiende, califica y deriva automáticamente,
              integrado a tu CRM, con métricas claras.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button href={BRAND.calendly} variant="primary">
                Pedir diagnóstico
              </Button>
              <a
                href={waLink}
                className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>

          <footer className="mt-10 flex flex-col items-center gap-2 text-center text-xs text-white/50">
            <div className="flex gap-4">
              <a className="hover:text-white" href="#">
                Política de privacidad
              </a>
              <a className="hover:text-white" href="#">
                Términos
              </a>
            </div>
            <p>© {new Date().getFullYear()} {BRAND.name}. Hecho para convertir conversaciones en ventas.</p>
          </footer>
        </div>
      </section>
    </main>
  );
}

