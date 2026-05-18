import { useState } from 'react';
import { useReveal } from './hooks/useReveal';
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

// Endpoint del formulario. Reemplazar por el ID real de Formspree cuando esté.
// Mientras no esté configurado, el form muestra un aviso en lugar de enviar.
const FORMSPREE_ENDPOINT = '';

function Reveal({
  children,
  className = '',
  as: Tag = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section';
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <Tag ref={ref} className={`fade-up ${className}`}>
      {children}
    </Tag>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-accent">
      <span className="h-px w-7 bg-accent" />
      {children}
    </div>
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
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-sm font-semibold text-white">
            TG
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-tight text-ink">
              Trinidad Global
            </span>
            <span className="block text-[11px] uppercase tracking-[0.16em] text-graphite">
              LLC — Wyoming, USA
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-graphite transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent"
          >
            Contact
          </a>
        </div>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white md:hidden">
          <div className="container-x flex flex-col py-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-2 text-sm text-graphite"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-md bg-ink px-4 py-2 text-center text-sm font-medium text-white"
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
    <section id="home" className="border-b border-line pt-32 pb-24 sm:pt-40">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-7 bg-accent" />
            {HERO.label}
          </div>
          <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {HERO.headline.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-graphite">
            {HERO.sub}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#about"
              className="rounded-md bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent"
            >
              About the Company
            </a>
            <a
              href="#contact"
              className="rounded-md border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              Contact Us
            </a>
          </div>
        </Reveal>

        <Reveal className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
          {[
            ['50+', 'Years of Operational Roots'],
            ['RD', 'Caribbean Market Presence'],
            ['US', 'Incorporated Wyoming, USA'],
            ['B2B', 'Supplier & Partner Focus'],
          ].map(([k, v]) => (
            <div key={v} className="bg-white p-6">
              <div className="text-2xl font-semibold text-ink">{k}</div>
              <div className="mt-1 text-sm text-graphite">{v}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24">
      <div className="container-x">
        <Reveal>
          <SectionLabel>About the Company</SectionLabel>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {ABOUT.h2}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-14 lg:grid-cols-2">
          <Reveal className="space-y-5">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed text-graphite">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal className="divide-y divide-line border-l border-line pl-10">
            {ABOUT.facts.map((f) => (
              <div key={f.k} className="py-6 first:pt-0 last:pb-0">
                <div className="text-2xl font-semibold text-ink">{f.k}</div>
                <div className="mt-1 text-sm leading-relaxed text-graphite">
                  {f.v}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function BusinessAreas() {
  return (
    <section id="business" className="border-y border-line bg-haze py-24">
      <div className="container-x">
        <Reveal>
          <SectionLabel>Business Areas</SectionLabel>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            International operations anchored in real-world commerce.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {BUSINESS_AREAS.map((a) => (
            <Reveal
              key={a.title}
              className="rounded-xl border border-line bg-white p-8 transition-colors hover:border-ink/30"
            >
              <h3 className="text-lg font-semibold text-ink">{a.title}</h3>
              <p className="mt-3 leading-relaxed text-graphite">{a.body}</p>
              {a.note && (
                <p className="mt-5 border-t border-line pt-4 text-sm italic leading-relaxed text-graphite">
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
    <section id="ecosystem" className="py-24">
      <div className="container-x">
        <Reveal>
          <SectionLabel>The Trinidad Automotive Ecosystem</SectionLabel>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {ECOSYSTEM.h2}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal className="space-y-5">
            {ECOSYSTEM.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed text-graphite">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal className="space-y-px overflow-hidden rounded-xl border border-line bg-line">
            {ECOSYSTEM.timeline.map((it) => (
              <div key={it.t} className="bg-white p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  {it.t}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-graphite">
                  {it.d}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Suppliers() {
  return (
    <section id="suppliers" className="border-y border-line bg-haze py-24">
      <div className="container-x">
        <Reveal>
          <SectionLabel>Supplier Partnerships</SectionLabel>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {SUPPLIERS.h2}
          </h2>
        </Reveal>
        <Reveal className="mt-8 max-w-3xl space-y-4">
          {SUPPLIERS.intro.map((p, i) => (
            <p key={i} className="leading-relaxed text-graphite">
              {p}
            </p>
          ))}
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SUPPLIERS.pillars.map((p) => (
            <Reveal
              key={p.n}
              className="rounded-xl border border-line bg-white p-7"
            >
              <div className="text-3xl font-semibold text-line">{p.n}</div>
              <h3 className="mt-4 text-base font-semibold text-ink">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite">
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
    <section id="compliance" className="py-24">
      <div className="container-x">
        <Reveal>
          <SectionLabel>{COMPLIANCE.label}</SectionLabel>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {COMPLIANCE.h2}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:items-start">
          <Reveal className="space-y-5">
            {COMPLIANCE.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed text-graphite">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal className="space-y-4">
            {COMPLIANCE.items.map((it) => (
              <div
                key={it.t}
                className="rounded-lg border-l-2 border-accent bg-haze p-6"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.1em] text-ink">
                  {it.t}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-graphite">
                  {it.d}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const configured = FORMSPREE_ENDPOINT.length > 0;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!configured) {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });
    if (res.ok) {
      setSent(true);
      form.reset();
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-line bg-ink py-24 text-white"
    >
      <div className="container-x">
        <Reveal>
          <div className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
            <span className="h-px w-7 bg-white/40" />
            Contact
          </div>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {CONTACT.h2}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:items-start">
          <Reveal className="space-y-4 text-white/70">
            <p className="leading-relaxed">{CONTACT.intro}</p>
            <p className="text-sm leading-relaxed text-white/50">
              {CONTACT.notice}
            </p>
            <div className="space-y-5 pt-6">
              {CONTACT.details.map((d) => (
                <div key={d.label}>
                  <div className="text-[11px] uppercase tracking-[0.16em] text-white/40">
                    {d.label}
                  </div>
                  <div className="mt-1 text-sm text-white/80">{d.value}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            {sent ? (
              <div className="rounded-xl border border-white/15 bg-white/5 p-8 text-center">
                <p className="text-white">
                  Thank you. Your inquiry has been received. A member of the
                  Trinidad Global team will respond to your message.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
                method="POST"
                action={configured ? FORMSPREE_ENDPOINT : undefined}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    name="full-name"
                    required
                    placeholder="Full Name"
                    className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none"
                  />
                  <input
                    name="company"
                    required
                    placeholder="Company Name"
                    className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Business Email"
                    className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none"
                  />
                  <input
                    name="country"
                    required
                    placeholder="Country"
                    className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none"
                  />
                </div>
                <select
                  name="inquiry-type"
                  required
                  defaultValue=""
                  className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/70 focus:border-white/40 focus:outline-none"
                >
                  <option value="" disabled>
                    Nature of Inquiry
                  </option>
                  {CONTACT.inquiryOptions.map((o) => (
                    <option key={o} value={o} className="bg-ink text-white">
                      {o}
                    </option>
                  ))}
                </select>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Briefly describe your inquiry or business context…"
                  className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none"
                />
                {!configured && (
                  <p className="text-xs text-white/40">
                    Form delivery is not yet configured. Set the Formspree
                    endpoint in <code>src/App.tsx</code> to enable submissions.
                  </p>
                )}
                <button
                  type="submit"
                  className="self-start rounded-md bg-white px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-white/85"
                >
                  Send Inquiry
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
            <h4 className="text-lg font-semibold">Trinidad Global LLC</h4>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/50">
              International procurement and trade coordination entity supporting
              affiliated automotive operations — a Caribbean operation with over
              five decades of continuous commercial history.
            </p>
            <p className="mt-4 text-xs text-white/40">
              Wyoming, United States of America
            </p>
          </div>
          <div>
            <h5 className="text-[11px] uppercase tracking-[0.16em] text-white/40">
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
            <h5 className="text-[11px] uppercase tracking-[0.16em] text-white/40">
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
