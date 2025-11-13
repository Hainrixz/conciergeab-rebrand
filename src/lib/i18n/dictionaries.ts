export type Locale = "en" | "es";

type NavLink = {
  label: string;
  href: string;
};

type HeroContent = {
  badge: { location: string; since: string };
  headline: string;
  description: string;
  assurance: string;
  primaryCta: string;
  secondaryCta: string;
  scrollCta: string;
  stats: { label: string; value: string; suffix: string }[];
  highlightTitle: string;
  highlights: string[];
  spotlightTitle: string;
  spotlightQuote: string;
  spotlightProperty: string;
  spotlightLocation: string;
};

type PlaceholderSection = {
  id: string;
  label: string;
};

type AboutContent = {
  eyebrow: string;
  heading: string;
  summary: string;
  paragraphs: string[];
  highlights: { title: string; description: string }[];
  metrics: { value: string; label: string; detail: string }[];
  pillars: string[];
  response: { title: string; description: string; note: string };
  clientsLabel: string;
  clientsQuote: string;
};

type ServiceItem = {
  id: string;
  name: string;
  summary: string;
  details: string;
  note: string;
};

type ServicesContent = {
  eyebrow: string;
  heading: string;
  description: string;
  services: ServiceItem[];
  cta: string;
  assurance: string;
};

type PortfolioHighlight = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

type PortfolioContent = {
  eyebrow: string;
  heading: string;
  description: string;
  badge: string;
  highlights: PortfolioHighlight[];
  partnerHeadline: string;
  partnerDescription: string;
  partnerCta: string;
};

type ContactContent = {
  eyebrow: string;
  heading: string;
  description: string;
  whatsappCta: string;
  emailCta: string;
};

export type Dictionary = {
  nav: NavLink[];
  hero: HeroContent;
  about: AboutContent;
  services: ServicesContent;
  portfolio: PortfolioContent;
  contact: ContactContent;
  placeholders: PlaceholderSection[];
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Residences", href: "#portfolio" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      badge: { location: "Punta de Mita", since: "Since 2008" },
      headline: "Exceptional Property Management in Paradise",
      description:
        "We craft worry-free ownership experiences for Punta de Mita's most celebrated estates, blending meticulous property care with intuitive concierge service for you and your guests.",
      assurance:
        "Trusted by the private estate teams of Four Seasons, St. Regis, and Mexico's most discerning homeowners.",
      primaryCta: "Request Concierge",
      secondaryCta: "Explore services",
      scrollCta: "Gently scroll",
      stats: [
        { label: "Private Residences", value: "48", suffix: "+" },
        { label: "Guest Satisfaction", value: "98", suffix: "%" },
        { label: "Years in Punta de Mita", value: "15", suffix: "+" },
      ],
      highlightTitle: "Exclusive enclaves",
      highlights: [
        "Four Seasons Private Villas",
        "St. Regis Beachfront",
        "Kupuri Estates",
      ],
      spotlightTitle: "Guest spotlight",
      spotlightQuote:
        "Concierge at the Bay ensures everything is perfect—from arrival rituals to sunset cruises.",
      spotlightProperty: "Kupuri Villa 7",
      spotlightLocation: "Punta Negra",
    },
    about: {
      eyebrow: "About Concierge at the Bay",
      heading: "Concierge at the Bay",
      summary: "Fifteen years of bespoke property care throughout Punta de Mita.",
      paragraphs: [
        "Concierge at the Bay is a property management house with more than 15 years of continuous operation in Punta Mita. We specialize exclusively in luxury residences, deploying a seasoned team to safeguard every detail of your estate and financial stewardship.",
        "Our headquarters in the Anclote district places us minutes from every enclave in Punta Mita, allowing us to mobilize our in-house staff or trusted partners the moment a need arises.",
        "Decades of white-glove hosting have taught us that unforgettable vacations hinge on anticipation. We curate every touchpoint so owners and guests simply arrive and exhale—our clients' experiences remain our most powerful introduction.",
      ],
      highlights: [
        {
          title: "Tailored estate programs",
          description:
            "Dedicated property directors align maintenance, staffing, and reporting with how you live in each home.",
        },
        {
          title: "Trusted artisan network",
          description:
            "Chefs, captains, florists, and caretakers refined over years of collaboration, vetted for discretion and excellence.",
        },
      ],
      metrics: [
        {
          value: "15+",
          label: "Years stewarding Punta Mita",
          detail: "Deep local knowledge since 2008",
        },
        {
          value: "35",
          label: "In-house specialists",
          detail: "Concierge, engineering, housekeeping",
        },
        {
          value: "60+",
          label: "Preferred partners",
          detail: "Vetted suppliers & guest services",
        },
      ],
      pillars: [
        "Personalized owner care",
        "Guest journey orchestration",
        "Transparent financial oversight",
      ],
      response: {
        title: "Always-on response",
        description:
          "Located in Anclote, we dispatch teams or partner talent instantly for anything from preventive maintenance to a last-minute sunset sail.",
        note: "Your estate, our constant attention.",
      },
      clientsLabel: "Clients first",
      clientsQuote:
        "Our most important calling card will always be the stories our homeowners and guests share.",
    },
    services: {
      eyebrow: "Comprehensive Stewardship",
      heading: "Services designed for absolute ease",
      description:
        "From transparent financial guardianship to hands-on technical care, every discipline is in-house so you never have to juggle separate vendors.",
      services: [
        {
          id: "accounting",
          name: "Account Statement",
          summary:
            "No more trips into town to manage utilities or association dues.",
          details:
            "We process electricity, gas, telecom, internet, HOA, and water payments on your behalf and reconcile every peso.",
          note: "Receive a monthly packet with scanned invoices and an itemized ledger.",
        },
        {
          id: "maintenance",
          name: "Maintenance",
          summary: "Proactive weekly inspections keep every system at 100%.",
          details:
            "Our engineers walk the residence each week, testing mechanical, electrical, and lifestyle amenities to repair issues before they disrupt your stay.",
          note: "If specialty work is required, we coordinate vetted trades and approvals immediately.",
        },
        {
          id: "housekeeping",
          name: "Housekeeping",
          summary: "Impeccable interiors managed by our trained housekeeping team.",
          details:
            "From daily refresh to turnover deep cleans, we handle staffing, supervision, and replenishment so every arrival feels like the first.",
          note: "Larger projects receive detailed quotes for your authorization before work begins.",
        },
      ],
      cta: "Plan a tailored service suite",
      assurance: "Every service tier is customized for the way you live in Punta Mita.",
    },
    portfolio: {
      eyebrow: "Portfolio",
      heading: "100+ curated estates under concierge care",
      description:
        "Beachfront villas, hillside hideaways, and branded residences across Punta Mita managed with white-glove precision.",
      badge: "100+ Residences",
      highlights: [
        {
          title: "Four Seasons Private Villas",
          subtitle: "Signature Pacifico views",
          description:
            "Expansive multi-level villas with infinity pools, media suites, and resort privileges.",
          image:
            "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Kupuri & La Punta Estates",
          subtitle: "Hillside sanctuaries",
          description:
            "Dramatic architecture carved into the coastline, designed for multi-generational escapes.",
          image:
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "St. Regis & TAU Residences",
          subtitle: "Branded sky villas",
          description:
            "Turn-key residences with elevated services, private clubs, and concierge-level hospitality.",
          image:
            "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
        },
      ],
      partnerHeadline: "Discover every residence with our partner, Mita Rentals",
      partnerDescription:
        "We publish the full catalog of estates with our exclusive rental partner so you can explore availability, galleries, and concierge notes in one place.",
      partnerCta: "View the complete portfolio on Mita Rentals",
    },
    contact: {
      eyebrow: "Connect",
      heading: "Speak directly with Concierge at the Bay",
      description:
        "Whether you prefer a quick WhatsApp exchange or a detailed email brief, our Punta Mita team replies promptly with the next steps.",
      whatsappCta: "Message us on WhatsApp",
      emailCta: "Email the team",
    },
    placeholders: [
    ],
  },
  es: {
    nav: [
      { label: "Nosotros", href: "#about" },
      { label: "Servicios", href: "#services" },
      { label: "Residencias", href: "#portfolio" },
      { label: "Contacto", href: "#contact" },
    ],
    hero: {
      badge: { location: "Punta de Mita", since: "Desde 2008" },
      headline: "Administración excepcional de propiedades en el paraíso",
      description:
        "Creamos experiencias sin preocupaciones para las residencias más celebradas de Punta de Mita, combinando cuidado meticuloso con un servicio de concierge intuitivo para usted y sus invitados.",
      assurance:
        "Confiado por los equipos de Four Seasons, St. Regis y los propietarios más exigentes de México.",
      primaryCta: "Solicitar concierge",
      secondaryCta: "Explorar servicios",
      scrollCta: "Desliza suavemente",
      stats: [
        { label: "Residencias privadas", value: "48", suffix: "+" },
        { label: "Satisfacción de huéspedes", value: "98", suffix: "%" },
        { label: "Años en Punta de Mita", value: "15", suffix: "+" },
      ],
      highlightTitle: "Enclaves exclusivos",
      highlights: [
        "Villas privadas Four Seasons",
        "Frente al mar St. Regis",
        "Residencias Kupuri",
      ],
      spotlightTitle: "Experiencia destacada",
      spotlightQuote:
        "Concierge at the Bay asegura que todo sea perfecto: desde rituales de llegada hasta paseos al atardecer.",
      spotlightProperty: "Villa Kupuri 7",
      spotlightLocation: "Punta Negra",
    },
    about: {
      eyebrow: "Sobre Concierge at the Bay",
      heading: "Concierge at the Bay",
      summary: "Quince años de cuidado personalizado en Punta de Mita.",
      paragraphs: [
        "Concierge at the Bay es una firma de administración con más de 15 años de operación continua en Punta Mita. Nos dedicamos exclusivamente a residencias de lujo, asignando un equipo experimentado que protege cada detalle de la propiedad y la gestión financiera.",
        "Nuestra oficina en la zona de Anclote nos mantiene a minutos de cada enclave de Punta Mita, lo que nos permite movilizar a nuestro personal o socios de confianza en cuanto surge una necesidad.",
        "La hospitalidad a este nivel nos ha enseñado que las vacaciones memorables se anticipan. Curamos cada momento para que propietarios e invitados solo lleguen y respiren; las experiencias de nuestros clientes siguen siendo nuestra mejor carta de presentación.",
      ],
      highlights: [
        {
          title: "Programas a la medida",
          description:
            "Directores dedicados alinean mantenimiento, personal y reportes con la forma en que disfrutas cada residencia.",
        },
        {
          title: "Red de artesanos confiables",
          description:
            "Chefs, capitanes, floristas y cuidadores perfeccionados durante años, seleccionados por su discreción y excelencia.",
        },
      ],
      metrics: [
        {
          value: "15+",
          label: "Años en Punta Mita",
          detail: "Conocimiento local desde 2008",
        },
        {
          value: "35",
          label: "Especialistas internos",
          detail: "Concierge, ingeniería, housekeeping",
        },
        {
          value: "60+",
          label: "Socios preferentes",
          detail: "Proveedores y servicios para huéspedes",
        },
      ],
      pillars: [
        "Atención personalizada al propietario",
        "Orquestación del viaje del huésped",
        "Transparencia financiera total",
      ],
      response: {
        title: "Respuesta inmediata",
        description:
          "Al estar en Anclote, desplegamos equipos o talento aliado al instante, desde mantenimiento preventivo hasta una velada en velero de última hora.",
        note: "Tu propiedad, bajo nuestra atención constante.",
      },
      clientsLabel: "Clientes primero",
      clientsQuote:
        "Nuestra carta de presentación más poderosa son las historias que comparten propietarios e invitados.",
    },
    services: {
      eyebrow: "Cuidado integral",
      heading: "Servicios creados para tu tranquilidad",
      description:
        "Desde la gestión financiera transparente hasta el mantenimiento técnico, todo vive dentro de nuestro equipo para que nunca debas coordinar proveedores por separado.",
      services: [
        {
          id: "accounting",
          name: "Estados de cuenta",
          summary:
            "Olvídate de ir a la ciudad para pagar servicios o cuotas.",
          details:
            "Pagamos luz, gas, telefonía, internet, cuotas de condominio y agua en tu nombre, conciliando cada peso.",
          note: "Recibe mensualmente un estado detallado con todas las facturas escaneadas.",
        },
        {
          id: "maintenance",
          name: "Mantenimiento",
          summary: "Inspecciones semanales para mantener todo al 100%.",
          details:
            "Nuestros ingenieros recorren la residencia cada semana, revisando sistemas mecánicos, eléctricos y amenidades para corregir cualquier detalle antes de tu llegada.",
          note: "Si se requiere un trabajo especializado, coordinamos proveedores de confianza y tu autorización inmediata.",
        },
        {
          id: "housekeeping",
          name: "Housekeeping",
          summary: "Interiores impecables con nuestro equipo de limpieza.",
          details:
            "Desde refrescos diarios hasta limpiezas profundas entre estancias, gestionamos personal, supervisión y reposiciones para que cada llegada se sienta nueva.",
          note: "Para proyectos mayores enviamos cotizaciones claras antes de ejecutar.",
        },
      ],
      cta: "Diseñar un programa a medida",
      assurance: "Cada nivel de servicio se adapta a cómo vives Punta Mita.",
    },
    portfolio: {
      eyebrow: "Portafolio",
      heading: "Más de 100 residencias bajo nuestro cuidado",
      description:
        "Villas frente al mar, refugios en la colina y residencias de marca en Punta Mita administradas con precisión de concierge.",
      badge: "100+ Residencias",
      highlights: [
        {
          title: "Villas Privadas Four Seasons",
          subtitle: "Vistas icónicas al Pacífico",
          description:
            "Villas multinivel con albercas infinitas, salas multimedia y privilegios de resort.",
          image:
            "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Kupuri y La Punta Estates",
          subtitle: "Santuarios en la loma",
          description:
            "Arquitectura dramática esculpida en la costa, pensada para escapes multigeneracionales.",
          image:
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Residencias St. Regis y TAU",
          subtitle: "Sky villas de marca",
          description:
            "Residencias llave en mano con servicios elevados, clubes privados y hospitalidad concierge.",
          image:
            "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
        },
      ],
      partnerHeadline:
        "Descubre cada residencia junto a nuestro socio, Mita Rentals",
      partnerDescription:
        "Publicamos el catálogo completo de propiedades con nuestro socio exclusivo para que explores disponibilidad, galerías y notas de concierge en un solo lugar.",
      partnerCta: "Ver el portafolio completo en Mita Rentals",
    },
    contact: {
      eyebrow: "Contacto",
      heading: "Habla directo con Concierge at the Bay",
      description:
        "Ya sea por un mensaje rápido en WhatsApp o un correo detallado, nuestro equipo en Punta Mita responde de inmediato con los siguientes pasos.",
      whatsappCta: "Escríbenos por WhatsApp",
      emailCta: "Enviar correo",
    },
    placeholders: [
    ],
  },
};
