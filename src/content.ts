/**
 * Copy final del sitio — tomado textualmente del brief aprobado del cliente.
 * Una sola fuente de verdad; no introducir términos prohibidos por el brief
 * (sin "premier/leading/world-class", sin "fintech/payment processor/
 * money transmitter", sin "KYC Readiness" público, sin "Trinidad Group").
 */

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#business', label: 'Business Areas' },
  { href: '#ecosystem', label: 'Ecosystem' },
  { href: '#suppliers', label: 'Suppliers' },
  { href: '#compliance', label: 'Corporate Information' },
] as const;

export const HERO = {
  label: 'International Procurement & Trade Coordination',
  // El brief permite saltos visuales; los manejamos como líneas.
  headline: [
    'International procurement and trade coordination,',
    'grounded in five decades of Caribbean commerce.',
  ],
  sub: 'Trinidad Global LLC coordinates international sourcing, supplier relationships, import logistics, and trade documentation for affiliated automotive distribution and service operations in the Caribbean region.',
};

export const ABOUT = {
  h2: 'Structured U.S. entity for international procurement and trade support.',
  paragraphs: [
    'Trinidad Global LLC is incorporated in Wyoming, United States, with a defined operating purpose and a documented connection to established commercial operations in the Dominican Republic. It serves as the international procurement and trade support entity of the Trinidad automotive ecosystem.',
    'The company supports global sourcing, supplier relationship management, trade documentation, import coordination, and logistics support for affiliated automotive operations.',
    'Trinidad Global LLC is a business-to-business entity. It does not operate as a retail business, ecommerce marketplace, financial services provider, investment vehicle, or consumer-facing automotive service company.',
    'By establishing a U.S.-based structure, the Trinidad automotive ecosystem gains a clearer international counterpart for supplier relationships, trade coordination, logistics partners, and standard corporate onboarding processes.',
  ],
  facts: [
    {
      k: '50+',
      v: 'Years of automotive operations in the Dominican Republic — the commercial foundation Trinidad Global is built upon.',
    },
    {
      k: 'B2B',
      v: 'Focused exclusively on supplier relationships, procurement coordination, and international trade support for affiliated operations.',
    },
    {
      k: 'Wyoming',
      v: 'Incorporated in Wyoming, United States, with a defined operating purpose and a traceable connection to established Caribbean commercial operations.',
    },
    {
      k: 'Caribbean',
      v: 'Serving an established automotive distribution and services operation in La Romana and the Dominican Republic.',
    },
  ],
};

export const BUSINESS_AREAS = [
  {
    title: 'Global Procurement Management',
    body: 'Sourcing and consolidating purchases of passenger, SUV, and commercial tires, batteries, lubricants, and automotive components from international manufacturers and distributors.',
  },
  {
    title: 'Import & Logistics Coordination',
    body: 'Supporting trade documentation, freight coordination, customs documentation, port coordination, and supply chain traceability between global origins and Caribbean destinations.',
  },
  {
    title: 'Supplier Relationship Management',
    body: 'Managing commercial relationships, supplier onboarding, distribution discussions, and long-term supply agreements with international brands, distributors, and manufacturing partners.',
  },
  {
    title: 'Commercial Trade Support',
    body: 'Supporting purchase documentation, supplier onboarding, order coordination, and corporate trade records related to documented international procurement activities for affiliated automotive operations.',
    note: 'Supplier-related payments, when applicable, are handled only as part of documented procurement and import transactions. Trinidad Global LLC does not provide payment processing, money transmission, banking, or financial services to third parties.',
  },
];

export const ECOSYSTEM = {
  h2: 'A multi-decade automotive operation in the Dominican Republic.',
  paragraphs: [
    'Trinidad Global LLC serves as the international procurement and trade support arm of an automotive ecosystem anchored by Distribuidora de Gomas Trinidad SRL, an established automotive distributor and workshop service provider with over 50 years of continuous commercial operations in La Romana and the Dominican Republic.',
    'This connection provides international suppliers, logistics providers, and commercial partners with a verifiable operating foundation and a clear U.S.-registered counterpart for international business coordination.',
  ],
  timeline: [
    {
      t: 'Distribuidora de Gomas Trinidad SRL',
      d: 'The core Dominican operating company. Automotive distribution and workshop services in La Romana, Dominican Republic. In continuous operation for over 50 years.',
    },
    {
      t: 'Trinidad Global LLC',
      d: 'International procurement and trade coordination entity. Incorporated in Wyoming, USA. Supports global sourcing, import coordination, supplier relationship management, and trade documentation for affiliated operations.',
    },
    {
      t: 'Product Focus',
      d: 'Tires (passenger, SUV, commercial), batteries, lubricants, automotive parts, and workshop services. Serving both retail and commercial vehicle segments across the Dominican Republic.',
    },
    {
      t: 'Market Position',
      d: "An established automotive distributor in the Dominican Republic's Eastern Region, with a reputation for operational reliability built over five decades of continuous commerce.",
    },
  ],
};

export const SUPPLIERS = {
  h2: 'We work with global brands, distributors, and manufacturers.',
  intro: [
    'We establish transparent, long-term commercial relationships with global automotive manufacturers, distributors, logistics providers, and supply partners. Our supplier relationships are grounded in the purchasing history, operational continuity, and market presence of the affiliated Dominican automotive operations.',
    'We are interested in establishing direct relationships with manufacturers and regional distributors across our product categories, with a focus on competitive pricing, supply continuity, and documented international trade terms.',
  ],
  pillars: [
    {
      n: '01',
      t: 'Established Volume',
      d: "Backed by an operating distributor with over five decades of purchasing history in the Dominican Republic's automotive market.",
    },
    {
      n: '02',
      t: 'Transparent Structure',
      d: 'A U.S.-registered entity with documented ownership, a clear operating purpose, and a traceable connection to established Caribbean commercial operations.',
    },
    {
      n: '03',
      t: 'Documented Trade Terms',
      d: 'Supplier coordination is conducted through documented procurement and import transactions. Standard international trade terms apply.',
    },
    {
      n: '04',
      t: 'Long-Term Focus',
      d: 'We pursue durable partnerships, not transactional engagements. Our supplier relationships span years and are based on mutual confidence and operational reliability.',
    },
  ],
};

export const COMPLIANCE = {
  label: 'Corporate Information & Business Verification',
  h2: 'A documented structure and a verifiable operating foundation.',
  paragraphs: [
    'Trinidad Global LLC maintains a defined operating purpose, documented corporate structure, and verifiable ties to affiliated automotive operations in the Dominican Republic.',
    'The company supports standard corporate onboarding, supplier verification, trade documentation review, and business due diligence processes when required by suppliers, logistics providers, financial institutions, or commercial partners.',
    'All commercial activities are conducted through documented channels, with appropriate records, and in alignment with applicable U.S. and international trade practices. The company does not engage in financial services, investment activity, consumer commerce, or any activity outside its defined procurement and trade coordination purpose.',
  ],
  items: [
    {
      t: 'Ownership Transparency',
      d: "Clear beneficial ownership with a documented connection to the Trinidad automotive ecosystem's operational history in the Dominican Republic.",
    },
    {
      t: 'Defined Operating Purpose',
      d: 'International procurement, import coordination, and supplier relationship management. The company does not provide financial services, money transmission, investment advisory, or consumer services.',
    },
    {
      t: 'Traceability',
      d: 'All commercial activities connect to verifiable procurement operations and an established import and distribution history spanning five decades.',
    },
    {
      t: 'Business Verification Support',
      d: 'Prepared to provide corporate documentation for supplier onboarding, business verification, and standard institutional due diligence processes upon request.',
    },
  ],
};

export const CONTACT = {
  h2: 'Supplier inquiries, partnership discussions, and business contacts.',
  intro:
    'This platform is dedicated exclusively to corporate B2B inquiries, supplier relationships, logistics coordination, institutional verification, and business partnerships.',
  notice:
    'Notice: Trinidad Global LLC does not process retail requests, consumer parts orders, tire quotations, or mechanical workshop appointments through this website.',
  details: [
    { label: 'Entity', value: 'Trinidad Global LLC' },
    { label: 'Jurisdiction', value: 'Wyoming, United States of America' },
    { label: 'Email', value: 'contact@trinidadglobal.com' },
    { label: 'Affiliated Operations', value: 'La Romana, Dominican Republic' },
  ],
  inquiryOptions: [
    'Supplier / Manufacturer Inquiry',
    'Procurement Partnership',
    'Logistics & Freight',
    'Business Partnership',
    'Corporate Documentation Request',
    'General Business Inquiry',
  ],
};

export const FOOTER_DISCLAIMER =
  'Trinidad Global LLC operates as a business-to-business procurement and trade coordination entity supporting affiliated automotive operations. The company does not offer consumer retail services, investment services, banking services, money transmission, payment processing for third parties, or regulated financial services. Supplier-related payments, when applicable, are handled only as part of documented procurement and import transactions.';
