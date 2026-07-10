/**
 * Copy final del sitio — Trinidad Global LLC, diseño v2 (aprobado por el
 * cliente). Tomado textualmente del borrador HTML. Una sola fuente de verdad.
 */

export const NAV_LINKS = [
  { href: '#who', label: 'Who We Are' },
  { href: '#heritage', label: 'Our Heritage' },
  { href: '#vision', label: 'Strategic Vision' },
  { href: '#why', label: 'Why Trinidad Global' },
  { href: '#contact', label: 'Contact' },
] as const;

export const HERO = {
  kicker: 'Trinidad Global LLC',
  location: 'Wyoming, United States',
  sub: 'A U.S.-based platform for international sourcing and strategic partnerships — built upon the commercial experience and operational depth of Distribuidora de Gomas Trinidad, with more than five decades of uninterrupted business in the Caribbean.',
};

export const WHO = {
  eyebrow: 'Who We Are',
  paragraphs: [
    'Trinidad Global LLC was established in the United States as an international business and sourcing platform — connected to the experience of Distribuidora de Gomas Trinidad, a family enterprise with more than five decades of uninterrupted commercial operations in the Dominican Republic.',
    'We are not a startup. We are the formalization of relationships, experience, and capabilities that already exist. Our purpose is to bring that infrastructure into an international structure suited for global sourcing, strategic alliances, and long-term partnerships.',
    'We operate with the discipline of an institution and the agility of a family enterprise. Every decision is oriented toward building durable commercial relationships — not transactions.',
  ],
  pillars: [
    {
      num: '01',
      title: 'Caribbean Market Knowledge',
      body: 'Direct operational experience across tires, batteries, lubricants, and automotive aftermarket in the Dominican Republic, with regional commercial relationships spanning the Caribbean.',
    },
    {
      num: '02',
      title: 'International Sourcing',
      body: 'Over two decades of direct import operations with manufacturers and exporters across Asia, North America, and Europe. We understand what it takes to build a reliable supply chain.',
    },
    {
      num: '03',
      title: 'Technology-Driven Operations',
      body: 'Currently developing Trinidad Pulse — a proprietary intelligent commerce platform integrating ERP, CRM, AI-driven pricing, and digital channels across the Trinidad ecosystem.',
    },
    {
      num: '04',
      title: 'Long-Term Orientation',
      body: 'Our vision extends through Trinidad 2030 — a strategic roadmap for developing a technology-enabled, professionally managed automotive distribution platform in the Caribbean.',
    },
  ],
};

export const HERITAGE = {
  eyebrow: 'Our Heritage',
  intro: [
    'Distribuidora de Gomas Trinidad was founded in La Romana, Dominican Republic, in 1969. Over more than fifty years, it has operated continuously as a family enterprise — building deep market relationships, supplier networks, and institutional knowledge that cannot be replicated quickly.',
    'Trinidad Global is the international expression of that heritage. It carries forward the same principles: commercial discipline, long-term relationships, and a commitment to operating with integrity in every market.',
  ],
  timeline: [
    {
      featured: true,
      year: 'February 24, 1969',
      title: 'Foundation of Distribuidora de Gomas Trinidad',
      body: 'Established in La Romana, Dominican Republic, by Rafael María Trinidad. The company begins operations in tire distribution, building its first commercial relationships in the eastern region of the country.',
    },
    {
      featured: false,
      year: '2001',
      title: 'Beginning of International Operations',
      body: 'Trinidad begins direct import operations, establishing supplier relationships with manufacturers in Asia and North America. The foundation for international trade is laid.',
    },
    {
      featured: false,
      year: '2024 — 2025',
      title: 'Development of Trinidad Pulse',
      body: 'The group invests in developing a proprietary intelligent commerce platform — integrating ERP, AI, CRM, and digital channels — as the technological backbone for its next phase of growth.',
    },
    {
      featured: true,
      year: '2026',
      title: 'Foundation of Trinidad Global LLC',
      body: 'Established in Wyoming, United States, as an international business and sourcing platform built upon the commercial experience of Distribuidora de Gomas Trinidad. Trinidad Global opens formal channels for international supplier relationships and strategic partnerships.',
    },
    {
      featured: false,
      year: 'Vision 2030',
      title: 'Trinidad 2030 — Strategic Roadmap',
      body: 'A long-term plan to develop a technology-enabled, professionally structured automotive distribution platform in the Caribbean — with scalable infrastructure, regional expansion, and intelligent commerce capabilities.',
    },
  ],
};

export const FOUNDER = {
  eyebrow: 'Legacy',
  name: 'Rafael María Trinidad',
  frameLabel: 'Founder · Distribuidora de Gomas Trinidad',
  paragraphs: [
    'Rafael María Trinidad founded Distribuidora de Gomas Trinidad in 1969 with a simple conviction: that a business built on honesty and long-term relationships would always outlast one built on opportunity alone.',
    'Over more than five decades, he transformed a regional tire distributor into a multi-line automotive group with direct international supplier relationships, a growing customer base, and a family of professionals committed to his founding vision.',
    'Trinidad Global is built on the infrastructure he created — and on the principles that made it endure.',
  ],
  principles: [
    {
      title: 'Commercial Integrity',
      body: "Every agreement honored. Every commitment kept. No exception justified the erosion of a supplier's or customer's trust.",
    },
    {
      title: 'Long-Term Vision',
      body: 'Decisions measured not in quarters, but in decades. The business was built to be inherited — and to grow in the hands of those who inherited it.',
    },
    {
      title: 'Operational Discipline',
      body: 'Professionalism as a competitive advantage — in how the business was organized, how people were treated, and how obligations were met.',
    },
  ],
  quote:
    '"A business that builds relationships builds something that lasts. Everything else is temporary."',
  cite: 'A principle inspired by the legacy of Rafael María Trinidad · Founder, Distribuidora de Gomas Trinidad · Est. 1969',
};

export const VISION = {
  eyebrow: 'Strategic Vision',
  intro:
    'Trinidad Global is not an isolated entity. It is the international business platform of an integrated ecosystem — each platform fulfilling a distinct role, all operating toward a common strategic objective: to build a serious, technology-enabled automotive distribution platform in the Caribbean — one that earns the trust of international partners and regional markets alike.',
  ecosystem: [
    {
      anchor: false,
      level: 'Origin',
      name: 'Distribuidora de Gomas Trinidad',
      role: 'The operational foundation. More than fifty years of commercial operations in tires, batteries, lubricants, automotive parts, and workshop services in the Dominican Republic. The source of all institutional knowledge within the group.',
      tag: 'La Romana, Dominican Republic · Est. 1969',
    },
    {
      anchor: true,
      level: 'International',
      name: 'Trinidad Global LLC',
      role: 'The international business platform. Established in the United States to formalize cross-border commercial relationships, international sourcing, strategic alliances, and partnership development. The face of the group before global manufacturers and institutional partners.',
      tag: 'Wyoming, United States · Est. 2026',
    },
    {
      anchor: false,
      level: 'Technology',
      name: 'Trinidad Pulse',
      role: "The intelligent commerce layer. A proprietary platform integrating ERP, CRM, AI-driven pricing and demand intelligence, digital sales channels, and executive dashboards — designed to make the group's operations transparent, measurable, and scalable.",
      tag: 'In Development · 2024–2026',
    },
    {
      anchor: false,
      level: 'Horizon',
      name: 'Trinidad 2030',
      role: 'The strategic horizon. A long-term roadmap for regional expansion, platform replication, and the development of a professional, technology-enabled automotive distribution network in the Caribbean.',
      tag: 'Strategic Roadmap · 2026–2030',
    },
  ],
};

export const WHY = {
  eyebrow: 'Why Trinidad Global',
  cards: [
    {
      num: 'I',
      title: 'Caribbean Market Knowledge',
      body: 'Built upon more than fifty years of direct market operations by Distribuidora de Gomas Trinidad in the Dominican Republic and the broader Caribbean. We understand import logistics, customs processes, consumer behavior, and the specific requirements of distributing in island markets.',
    },
    {
      num: 'II',
      title: 'International Sourcing Experience',
      body: 'Over two decades of direct import operations with manufacturers in Asia, North America, and Europe. We know how to evaluate suppliers, structure commercial terms, and manage international logistics reliably.',
    },
    {
      num: 'III',
      title: 'International Business Structure',
      body: 'Established in Wyoming, United States, Trinidad Global provides a professional framework for international commercial relationships, supplier coordination, and long-term partnership development.',
    },
    {
      num: 'IV',
      title: 'Technology-Driven Operations',
      body: "The group's investment in Trinidad Pulse reflects a commitment to data-driven management, supply chain visibility, and the kind of operational transparency that long-term partners require and deserve.",
    },
  ],
};

export const CONTACT = {
  eyebrow: 'Contact',
  intro: [
    'We welcome inquiries from manufacturers, exporters, distributors, and institutional partners interested in developing a serious, long-term commercial presence in Caribbean markets.',
    'We respond to every inquiry with care. We will not pursue opportunities that do not align with our criteria for long-term partnership.',
  ],
  channels: [
    { label: 'General Inquiries', value: 'info@trinidadglobal.com' },
    { label: 'Strategic Partnerships', value: 'partnerships@trinidadglobal.com' },
    { label: 'International Procurement', value: 'procurement@trinidadglobal.com' },
    { label: 'Registered Office', value: 'Wyoming, United States' },
  ],
  directNote:
    'To begin a conversation, please reach us directly at one of the addresses below. We review every inquiry personally and respond with care.',
  directCards: [
    { label: 'General Inquiries', email: 'info@trinidadglobal.com' },
    { label: 'Strategic Partnerships', email: 'partnerships@trinidadglobal.com' },
    { label: 'International Procurement', email: 'procurement@trinidadglobal.com' },
    { label: 'Operations', email: 'operations@trinidadglobal.com' },
  ],
};

export const FOOTER = {
  brand:
    'International business platform connected to the experience of Distribuidora de Gomas Trinidad. Wyoming, United States.',
  cols: [
    {
      heading: 'Company',
      links: [
        { href: '#who', label: 'Who We Are' },
        { href: '#heritage', label: 'Our Heritage' },
        { href: '#founder', label: "Founder's Legacy" },
        { href: '#vision', label: 'Strategic Vision' },
      ],
    },
    {
      heading: 'Partnerships',
      links: [
        { href: '#why', label: 'Why Trinidad Global' },
        { href: '#contact', label: 'Contact' },
        { href: 'mailto:partnerships@trinidadglobal.com', label: 'Partnerships' },
        { href: 'mailto:procurement@trinidadglobal.com', label: 'Procurement' },
      ],
    },
    {
      heading: 'The Group',
      items: [
        'Distribuidora de Gomas Trinidad',
        'Trinidad Pulse',
        'Trinidad 2030',
      ],
    },
  ],
  copyright:
    '© 2026 Trinidad Global LLC. Wyoming, United States. All rights reserved.',
  tagline: 'Built on five decades of earned trust.',
};
