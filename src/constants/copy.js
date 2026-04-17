export const META = {
  name: 'Cypaz',
  tagline: 'Seguridad Pre-Click. Protección Real.',
  description:
    'Extensión de navegador con IA que detecta amenazas de phishing antes de que el usuario haga clic — la primera línea de defensa donde el 90% de los ataques comienza.',
  ctaPrimary: 'Solicitar Demo B2B',
  ctaSecondary: 'Ver cómo funciona',
  badge: 'Presentado en StartCo Medellín 2025',
};

export const HERO = {
  eyebrow: '// Ciberseguridad Pre-Click para Latinoamérica',
  headline: ['El 90% de los ataques', 'empieza con un clic.', 'Cypaz lo detiene antes.'],
  subheadline:
    'Extensión de navegador con IA que analiza URLs en tiempo real mediante clic derecho — sin fricción, sin esperas, sin brechas.',
  threatCounter: {
    label: 'Intentos de fraude digital en Latam desde que entraste a esta web',
    ratePerSecond: 1500,
  },
};

export const STATS = [
  {
    id: 'attacks',
    value: 1500,
    suffix: '/s',
    label: 'Intentos de ciberataque por segundo en Latinoamérica',
    source: 'Kaspersky Latam 2025',
    icon: 'Zap',
  },
  {
    id: 'colombia',
    value: 20,
    suffix: 'B+',
    label: 'Intentos anuales en Colombia — 4° país más atacado de la región',
    source: 'CSIRT Colombia 2025',
    icon: 'Target',
  },
  {
    id: 'human',
    value: 90,
    suffix: '%',
    label: 'De las brechas empresariales inician con error humano en el navegador',
    source: 'IBM Security Report 2025',
    icon: 'Users',
  },
  {
    id: 'cost',
    value: 2.4,
    suffix: 'M USD',
    label: 'Costo promedio de una filtración de datos para una PyME en Latam',
    source: 'Ponemon Institute 2025',
    icon: 'DollarSign',
  },
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Detecta',
    description: 'Clic derecho sobre cualquier enlace sospechoso en el navegador.',
    icon: 'MousePointerClick',
  },
  {
    step: '02',
    title: 'Analiza',
    description: 'IA local + base de amenazas en tiempo real evalúan la URL en milisegundos.',
    icon: 'ScanSearch',
  },
  {
    step: '03',
    title: 'Protege',
    description: 'Veredicto claro: seguro, sospechoso o phishing — antes del clic.',
    icon: 'ShieldCheck',
  },
];

export const LEGAL = {
  headline: 'Cumplimiento Normativo B2B',
  subheadline: 'Cypaz ayuda a su organización a cumplir con las regulaciones de ciberseguridad vigentes en Chile y Colombia.',
  frameworks: [
    {
      country: 'Chile',
      flag: '🇨🇱',
      law: 'Ley 21.663',
      title: 'Ley Marco de Ciberseguridad',
      year: '2024',
      relevance:
        'Establece obligaciones para operadores de infraestructura crítica y organismos públicos. Cypaz facilita el cumplimiento del deber de reporte y gestión de incidentes en la capa del navegador.',
      highlights: [
        'Gestión proactiva de incidentes',
        'Protección de infraestructura crítica',
        'Reporte obligatorio ante brechas',
      ],
    },
    {
      country: 'Colombia',
      flag: '🇨🇴',
      law: 'Ley 1581 + CONPES 3854',
      title: 'Protección de Datos & Política Nacional de Seguridad Digital',
      year: '2012 / vigente',
      relevance:
        'Cypaz protege datos personales al prevenir exfiltración vía phishing, alineándose con los principios de responsabilidad demostrada de la SIC y el marco CONPES de seguridad digital.',
      highlights: [
        'Prevención de exfiltración de datos',
        'Responsabilidad demostrada ante la SIC',
        'Reducción de superficie de ataque',
      ],
    },
  ],
  cta: 'Solicitar informe de cumplimiento',
};

export const TRUST = {
  headline: 'Respaldados por instituciones líderes',
  logos: [
    { name: 'UCN', label: 'Universidad Católica del Norte', url: '#' },
    { name: 'ProChile', label: 'ProChile — Gobierno de Chile', url: '#' },
    { name: 'Nómada', label: 'Nómada Hub', url: '#' },
    { name: 'StartCo', label: 'StartCo Medellín', url: '#' },
  ],
};

export const FOOTER = {
  tagline: 'Protegiendo el clic más peligroso.',
  links: [
    { label: 'Producto', href: '#hero' },
    { label: 'Estadísticas', href: '#stats' },
    { label: 'Cumplimiento', href: '#legal' },
    { label: 'Contacto', href: '#footer' },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com', icon: 'Instagram' },
    { label: 'Email', href: 'mailto:hola@cypaz.com', icon: 'Mail' },
  ],
  legal: '© 2025 Cypaz SpA. Todos los derechos reservados. Desarrollado en Chile 🇨🇱',
};