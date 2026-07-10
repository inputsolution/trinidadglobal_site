import { useEffect } from 'react';
import { useReveal } from './hooks/useReveal';
import {
  NAV_LINKS,
  HERO,
  WHO,
  HERITAGE,
  FOUNDER,
  VISION,
  WHY,
  CONTACT,
  FOOTER,
} from './content';

/**
 * Trinidad Global LLC — International Business Platform.
 * Diseño v2 (aprobado por el cliente): portado 1:1 desde el borrador HTML,
 * mismo UI y mismo contenido. Estilos en src/index.css.
 */

/** Envuelve un bloque con la animación de aparición en scroll (.reveal → .in). */
function Reveal({
  children,
  className = '',
  as = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'p';
}) {
  const ref = useReveal<HTMLDivElement & HTMLParagraphElement>();
  const Tag = as;
  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}

const CheckMark = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="var(--gold)" strokeWidth="1.5">
    <circle cx="8" cy="8" r="6" />
    <path d="M5.5 8l2 2 3-3" />
  </svg>
);

const ArrowDown = () => (
  <svg
    width="16"
    height="20"
    viewBox="0 0 16 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <line x1="8" y1="0" x2="8" y2="16" />
    <polyline points="3,11 8,16 13,11" />
  </svg>
);

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="rule" />
      <Who />
      <div className="rule" />
      <Heritage />
      <div className="rule" />
      <Founder />
      <div className="rule" />
      <Vision />
      <div className="rule" />
      <Why />
      <div className="rule" />
      <Contact />
      <Footer />
    </>
  );
}

function Nav() {
  // Realza el borde del nav al hacer scroll (réplica del script del HTML).
  useEffect(() => {
    const nav = document.getElementById('nav');
    if (!nav) return;
    const onScroll = () => {
      nav.style.borderBottomColor =
        window.scrollY > 60
          ? 'rgba(184,146,74,0.12)'
          : 'rgba(255,255,255,0.05)';
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="nav">
      <div className="nav-logo">
        Trinidad <span>Global</span>
      </div>
      <ul className="nav-links">
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="nav-contact">
        Contact Us
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-lines" />
      <div className="hero-content">
        <p className="hero-kicker">
          {HERO.kicker} &nbsp;·&nbsp; <span>{HERO.location}</span>
        </p>
        <h1 className="hero-title">
          Building&nbsp;Long&#8209;Term
          <br />
          Partnerships for
          <br />
          <em>Caribbean Trade.</em>
        </h1>
        <p className="hero-sub">{HERO.sub}</p>
        <div className="hero-actions">
          <a href="#vision" className="btn btn-gold">
            Explore Our Vision
          </a>
          <a href="#contact" className="btn btn-ghost">
            Partner With Us
          </a>
        </div>
      </div>
      <div className="scroll-cue">Scroll</div>
    </section>
  );
}

function Who() {
  return (
    <section id="who">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          {WHO.eyebrow}
        </Reveal>
        <div className="who-grid">
          <Reveal className="who-text">
            <h2>
              A Platform Built on
              <br />
              <em>Earned Trust</em>
            </h2>
            {WHO.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
          <Reveal className="who-pillars reveal-d2">
            {WHO.pillars.map((pillar) => (
              <div key={pillar.num} className="who-pillar">
                <div className="who-pillar-num">{pillar.num}</div>
                <div>
                  <h4>{pillar.title}</h4>
                  <p>{pillar.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Heritage() {
  return (
    <section id="heritage">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          {HERITAGE.eyebrow}
        </Reveal>
        <div className="heritage-intro">
          <Reveal>
            <h2>
              Five Decades of
              <br />
              Commercial History
            </h2>
          </Reveal>
          <Reveal className="reveal-d2">
            {HERITAGE.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </div>

        <div className="timeline">
          {HERITAGE.timeline.map((item, i) => (
            <Reveal
              key={item.year}
              className={`tl-item ${item.featured ? 'featured' : ''} reveal-d${i}`}
            >
              <div className="tl-dot" />
              <div className="tl-year">{item.year}</div>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section id="founder">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          {FOUNDER.eyebrow}
        </Reveal>
        <div className="founder-grid">
          <Reveal>
            <div className="founder-photo">
              <div className="photo-placeholder">{FOUNDER.name}</div>
              <div className="photo-frame-label">{FOUNDER.frameLabel}</div>
            </div>
          </Reveal>
          <Reveal className="founder-content reveal-d2">
            <h2>
              Our Founder's <em>Legacy</em>
            </h2>
            {FOUNDER.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="founder-principles">
              {FOUNDER.principles.map((pr) => (
                <div key={pr.title} className="principle">
                  <div className="principle-mark">
                    <CheckMark />
                  </div>
                  <div>
                    <h4>{pr.title}</h4>
                    <p>{pr.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="founder-quote">
              <blockquote>{FOUNDER.quote}</blockquote>
              <cite>{FOUNDER.cite}</cite>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section id="vision">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          {VISION.eyebrow}
        </Reveal>
        <Reveal className="vision-intro">
          <h2>
            One Ecosystem.
            <br />
            <em>Four Platforms.</em>
            <br />
            One Vision.
          </h2>
          <p style={{ marginTop: '1.2rem' }}>{VISION.intro}</p>
        </Reveal>
        <Reveal className="eco-stack">
          {VISION.ecosystem.map((eco, i) => (
            <div key={eco.name} style={{ display: 'contents' }}>
              <div className={`eco-item ${eco.anchor ? 'anchor' : ''}`}>
                <div className="eco-level">{eco.level}</div>
                <div>
                  <div className="eco-name">{eco.name}</div>
                  <div className="eco-role">{eco.role}</div>
                  <div className="eco-tag">{eco.tag}</div>
                </div>
              </div>
              {i < VISION.ecosystem.length - 1 && (
                <div className="eco-arrow">
                  <ArrowDown />
                </div>
              )}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          {WHY.eyebrow}
        </Reveal>
        <Reveal>
          <h2 style={{ fontSize: 'clamp(2rem,3.2vw,3rem)', marginBottom: '0.5rem' }}>
            What We Bring
            <br />
            to Every Partnership
          </h2>
        </Reveal>
        <div className="why-grid">
          {WHY.cards.map((card, i) => (
            <Reveal key={card.num} className={`why-card reveal-d${i}`}>
              <div className="why-num">{card.num}</div>
              <h4>{card.title}</h4>
              <p>{card.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          {CONTACT.eyebrow}
        </Reveal>
        <div className="contact-grid">
          <Reveal className="contact-info">
            <h2>Begin a Conversation</h2>
            {CONTACT.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="contact-channels">
              {CONTACT.channels.map((c) => (
                <div key={c.label} className="channel">
                  <span className="channel-label">{c.label}</span>
                  <span className="channel-value">{c.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="reveal-d2">
            <div className="contact-direct">
              <p className="contact-direct-note">{CONTACT.directNote}</p>
              <div className="contact-direct-cards">
                {CONTACT.directCards.map((card) => (
                  <a
                    key={card.email}
                    href={`mailto:${card.email}`}
                    className="direct-card"
                  >
                    <span className="direct-card-label">{card.label}</span>
                    <span className="direct-card-email">{card.email}</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="logo-mark">
              Trinidad <span>Global</span>
            </div>
            <p>{FOOTER.brand}</p>
          </div>
          <div className="footer-cols">
            {FOOTER.cols.map((col) => (
              <div key={col.heading} className="footer-col">
                <h6>{col.heading}</h6>
                <ul>
                  {col.links?.map((l) => (
                    <li key={l.label}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                  {col.items?.map((item) => (
                    <li key={item}>
                      <span style={{ fontSize: '0.84rem', color: 'var(--steel)' }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-base">
          <p>{FOOTER.copyright}</p>
          <span className="tagline">{FOOTER.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
