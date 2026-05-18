import { useEffect, useState } from 'react';
import { useReveal } from './hooks/useReveal';
import { useCountUp } from './hooks/useCountUp';
import {
  NAV_LINKS,
  HERO,
  ABOUT,
  BUSINESS_AREAS,
  ECOSYSTEM,
  SUPPLIERS,
  COMPLIANCE,
  CONTACT,
  FOOTER_DISCLAIMER,
} from './content';

// El formulario envía al backend Django (guarda la consulta en el sistema
// y notifica al correo corporativo). Configurable por entorno: en Railway
// se define VITE_API_BASE_URL apuntando al backend de producción.
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  'https://trinidadpulsebackend-production.up.railway.app/api';
const CONTACT_ENDPOINT = `${API_BASE_URL}/website/contact/`;

// Fotografía corporativa de uso libre (Unsplash). Reemplazable por las definitivas.
const IMG = {
  hero: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80',
  ecosystem:
    'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=80',
  suppliers:
    'https://images.unsplash.com/photo-1577416412292-747c6607f055?auto=format&fit=crop&w=1200&q=80',
};

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useReveal<HTMLDivElement>(delay);
  return (
    <div ref={ref} className={`fade-up ${className}`}>
      {children}
    </div>
  );
}

function StatNumber({ value }: { value: string }) {
  const { ref, value: shown } = useCountUp(value);
  return <span ref={ref}>{shown}</span>;
}

function ArrowLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
    >
      {children}
      <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        ↗
      </span>
    </a>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <BusinessAreas />
        <Ecosystem />
        <Suppliers />
        <Compliance />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-ink/95 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div
        className={`container-x flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-20'
        }`}
      >
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/70 text-sm font-bold text-white">
            TG
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold tracking-tight text-white">
              Trinidad Global
            </span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-white/60">
              LLC — Wyoming, USA
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-white/90"
          >
            Contact
          </a>
        </div>

        <button
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink lg:hidden">
          <div className="container-x flex flex-col py-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-2.5 text-sm text-white/80"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-md bg-white px-5 py-2.5 text-center text-sm font-semibold text-navy"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Foto corporativa a pantalla completa con overlay azul (estilo referencia) */}
      <div className="absolute inset-0">
        <img
          src={IMG.hero}
          alt=""
          className="ken-burns h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-navy/70 to-ink/60" />
      </div>

      <div className="container-x relative flex min-h-screen flex-col justify-center pt-28 pb-20">
        <div className="max-w-4xl">
          <div
            className="hero-in mb-7 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.18em] text-white/75"
            style={{ '--hero-delay': '100ms' } as React.CSSProperties}
          >
            <span className="h-px w-9 bg-white/50" />
            {HERO.label}
          </div>
          <h1
            className="hero-in text-[34px] font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ '--hero-delay': '220ms' } as React.CSSProperties}
          >
            International procurement and trade coordination,{' '}
            <span className="text-white/80">
              grounded in five decades of Caribbean commerce.
            </span>
          </h1>
          <p
            className="hero-in mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
            style={{ '--hero-delay': '360ms' } as React.CSSProperties}
          >
            {HERO.sub}
          </p>
          <div
            className="hero-in mt-10 flex flex-wrap gap-4"
            style={{ '--hero-delay': '500ms' } as React.CSSProperties}
          >
            <a
              href="#contact"
              className="rounded-md bg-navy px-7 py-4 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-accent"
            >
              Become a Partner
            </a>
            <a
              href="#about"
              className="rounded-md border border-white/50 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition duration-150 hover:border-white hover:bg-white hover:text-ink"
            >
              About the Company
            </a>
          </div>
        </div>
      </div>

      {/* Franja de stats sobre la imagen, parte inferior */}
      <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-ink/40 backdrop-blur-sm">
        <div className="container-x grid grid-cols-2 divide-x divide-white/10 lg:grid-cols-4">
          {[
            ['50+', 'Years of Operational Roots'],
            ['RD', 'Caribbean Market Presence'],
            ['US', 'Incorporated Wyoming, USA'],
            ['B2B', 'Supplier & Partner Focus'],
          ].map(([k, v]) => (
            <div key={v} className="px-6 py-6">
              <div className="text-2xl font-bold text-white">
                <StatNumber value={k} />
              </div>
              <div className="mt-1 text-xs text-white/55">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Layout editorial: kicker lateral pequeño + titular grande a la derecha */
function EditorialHead({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-16">
      <Reveal>
        <div className="kicker">{kicker}</div>
      </Reveal>
      <Reveal>
        <h2 className="max-w-3xl text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {children}
      </Reveal>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container-x">
        <EditorialHead kicker="About the Company" title={ABOUT.h2} />
        <div className="mt-16 grid gap-12 lg:ml-[324px] lg:grid-cols-2 lg:gap-16">
          <Reveal className="space-y-5">
            {ABOUT.paragraphs.slice(0, 2).map((p, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-graphite">
                {p}
              </p>
            ))}
            <div className="pt-2">
              <ArrowLink href="#business">Discover what we do</ArrowLink>
            </div>
          </Reveal>
          <Reveal className="space-y-5">
            {ABOUT.paragraphs.slice(2).map((p, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-graphite">
                {p}
              </p>
            ))}
          </Reveal>
        </div>

        <Reveal className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-card lg:grid-cols-4">
          {ABOUT.facts.map((f) => (
            <div key={f.k} className="bg-white p-7">
              <div className="text-3xl font-bold text-navy">{f.k}</div>
              <div className="mt-2 text-[13px] leading-relaxed text-graphite">
                {f.v}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function BusinessAreas() {
  return (
    <section id="business" className="border-y border-line bg-haze py-24 lg:py-32">
      <div className="container-x">
        <EditorialHead
          kicker="Business Areas"
          title="International operations anchored in real-world commerce."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {BUSINESS_AREAS.map((a, i) => (
            <Reveal
              key={a.title}
              delay={i * 90}
              className="group rounded-2xl border border-line bg-white p-9 shadow-card transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-cardHover"
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="text-xl font-bold text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="h-px flex-1 bg-line transition-colors group-hover:bg-accent/40" />
              </div>
              <h3 className="text-xl font-bold text-ink">{a.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-graphite">
                {a.body}
              </p>
              {a.note && (
                <p className="mt-6 border-t border-line pt-5 text-[13px] italic leading-relaxed text-graphite/80">
                  {a.note}
                </p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section id="ecosystem" className="py-24 lg:py-32">
      <div className="container-x">
        <EditorialHead
          kicker="The Trinidad Automotive Ecosystem"
          title="A multi-decade automotive operation in the Dominican Republic."
        />
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="overflow-hidden rounded-2xl border border-line shadow-card">
            <img
              src={IMG.ecosystem}
              alt="Container shipping and logistics operations"
              className="h-full min-h-[340px] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal>
            <div className="space-y-5">
              {ECOSYSTEM.paragraphs.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-graphite">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-8 space-y-0">
              {ECOSYSTEM.timeline.map((it) => (
                <div
                  key={it.t}
                  className="border-t border-line py-5 first:border-t-0 first:pt-0"
                >
                  <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-accent">
                    {it.t}
                  </div>
                  <div className="mt-1.5 text-sm leading-relaxed text-graphite">
                    {it.d}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Suppliers() {
  return (
    <section
      id="suppliers"
      className="relative overflow-hidden bg-ink py-24 text-white lg:py-32"
    >
      <div className="absolute inset-0">
        <img
          src={IMG.suppliers}
          alt=""
          className="h-full w-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/70" />
      </div>
      <div className="container-x relative">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-16">
          <Reveal>
            <div className="kicker text-white/70">
              <span className="!bg-white" />
              Supplier Partnerships
            </div>
          </Reveal>
          <Reveal>
            <h2 className="max-w-3xl text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
              We work with global brands, distributors, and manufacturers.
            </h2>
            <div className="mt-6 max-w-2xl space-y-4">
              {SUPPLIERS.intro.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-white/65">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {SUPPLIERS.pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 90} className="bg-ink/60 p-8">
              <div className="text-3xl font-bold text-white/30">{p.n}</div>
              <h3 className="mt-6 text-base font-bold text-white">{p.t}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-white/55">
                {p.d}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compliance() {
  return (
    <section
      id="compliance"
      className="border-y border-line bg-haze py-24 lg:py-32"
    >
      <div className="container-x">
        <EditorialHead
          kicker={COMPLIANCE.label}
          title={COMPLIANCE.h2}
        />
        <div className="mt-16 grid gap-12 lg:ml-[324px] lg:grid-cols-2 lg:gap-16">
          <Reveal className="space-y-5">
            {COMPLIANCE.paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-graphite">
                {p}
              </p>
            ))}
          </Reveal>
          <div className="space-y-4">
            {COMPLIANCE.items.map((it, i) => (
              <Reveal
                key={it.t}
                delay={i * 90}
                className="rounded-xl border border-line bg-white p-6 shadow-card"
              >
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-ink">
                    {it.t}
                  </span>
                </div>
                <p className="mt-3 pl-[18px] text-[14px] leading-relaxed text-graphite">
                  {it.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    setError('');
    setSending(true);

    const form = e.currentTarget;
    const fd = new FormData(form);
    // El backend (DRF) espera snake_case; el form usa los name del brief.
    const payload = {
      full_name: fd.get('full-name'),
      company: fd.get('company'),
      email: fd.get('email'),
      country: fd.get('country'),
      inquiry_type: fd.get('inquiry-type'),
      message: fd.get('message'),
    };

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setSent(true);
        form.reset();
      } else if (res.status === 429) {
        setError(
          'Too many submissions from your network. Please try again later.',
        );
      } else {
        setError(
          'We could not submit your inquiry. Please verify the form and try again.',
        );
      }
    } catch {
      setError(
        'A network error occurred. Please check your connection and try again.',
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <EditorialHead
          kicker="Contact"
          title="Supplier inquiries, partnership discussions, and business contacts."
        />
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="space-y-4">
            <p className="text-[15px] leading-relaxed text-graphite">
              {CONTACT.intro}
            </p>
            <p className="text-[13px] leading-relaxed text-graphite/70">
              {CONTACT.notice}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-card">
              {CONTACT.details.map((d) => (
                <div key={d.label} className="bg-white p-6">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                    {d.label}
                  </div>
                  <div className="mt-1.5 text-sm text-ink">{d.value}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            {sent ? (
              <div className="rounded-2xl border border-line bg-haze p-10 text-center">
                <p className="text-ink">
                  Thank you. Your inquiry has been received. A member of the
                  Trinidad Global team will respond to your message.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 rounded-2xl border border-line bg-haze p-8"
                method="POST"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    name="full-name"
                    required
                    placeholder="Full Name"
                    className="rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-graphite/50 focus:border-accent focus:outline-none"
                  />
                  <input
                    name="company"
                    required
                    placeholder="Company Name"
                    className="rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-graphite/50 focus:border-accent focus:outline-none"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Business Email"
                    className="rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-graphite/50 focus:border-accent focus:outline-none"
                  />
                  <input
                    name="country"
                    required
                    placeholder="Country"
                    className="rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-graphite/50 focus:border-accent focus:outline-none"
                  />
                </div>
                <select
                  name="inquiry-type"
                  required
                  defaultValue=""
                  className="rounded-md border border-line bg-white px-4 py-3 text-sm text-graphite focus:border-accent focus:outline-none"
                >
                  <option value="" disabled>
                    Nature of Inquiry
                  </option>
                  {CONTACT.inquiryOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Briefly describe your inquiry or business context…"
                  className="rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-graphite/50 focus:border-accent focus:outline-none"
                />
                {error && (
                  <p className="text-sm text-red-600">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  style={{ backgroundColor: '#13294B', color: '#FFFFFF' }}
                  className="mt-2 self-start rounded-md px-8 py-4 text-sm font-semibold shadow-lg ring-1 ring-navy/20 transition-all hover:!bg-accent hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? 'Sending…' : 'Send Inquiry'}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink pb-10 pt-16 text-white">
      <div className="container-x">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/60 text-sm font-bold text-white">
                TG
              </span>
              <h4 className="text-lg font-bold">Trinidad Global LLC</h4>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              International procurement and trade coordination entity supporting
              affiliated automotive operations — a Caribbean operation with over
              five decades of continuous commercial history.
            </p>
            <p className="mt-4 text-xs text-white/40">
              Wyoming, United States of America
            </p>
          </div>
          <div>
            <h5 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
              Navigation
            </h5>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/60 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="text-white/60 transition-colors hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
              Related
            </h5>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="#ecosystem"
                  className="text-white/60 transition-colors hover:text-white"
                >
                  Distribuidora de Gomas Trinidad SRL
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/60 transition-colors hover:text-white"
                >
                  B2B Inquiries
                </a>
              </li>
              <li>
                <a
                  href="#compliance"
                  className="text-white/60 transition-colors hover:text-white"
                >
                  Business Verification
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/40">
            © 2026 Trinidad Global LLC. All rights reserved. Incorporated in
            Wyoming, USA.
          </p>
          <p className="max-w-2xl text-xs leading-relaxed text-white/30">
            {FOOTER_DISCLAIMER}
          </p>
        </div>
      </div>
    </footer>
  );
}
