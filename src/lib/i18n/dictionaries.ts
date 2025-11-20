export type Locale = "en" | "es";

type NavLink = {
  label: string;
  href: string;
};

type HeroContent = {
  badge: { location: string; since: string };
  headline: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  scrollCta: string;
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
};

type ServiceItem = {
  id: string;
  name: string;
  summary: string;
  details: string;
  note?: string;
};

type ServiceCategory = {
  id: string;
  title: string;
  description: string;
  items: ServiceItem[];
};

type ServicesPageContent = {
  heroEyebrow: string;
  heroHeading: string;
  heroDescription: string;
  heroNote: string;
  heroCta: string;
  categories: ServiceCategory[];
  dining: {
    title: string;
    description: string;
    essentialsTitle: string;
    essentials: string[];
    alsoTitle: string;
    alsoList: string[];
  };
};

type ServicesContent = {
  eyebrow: string;
  heading: string;
  description: string;
  services: ServiceItem[];
  cta: string;
  assurance: string;
  viewAllLabel: string;
  page: ServicesPageContent;
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
  seeAllLabel: string;
};

type ContactContent = {
  eyebrow: string;
  heading: string;
  description: string;
  whatsappCta: string;
  emailCta: string;
};

type FooterContent = {
  navigationLabel: string;
  contactLabel: string;
  callLabel: string;
  emailLabel: string;
  locationLabel: string;
  scheduleCta: string;
  privacyLinkLabel: string;
  craftedNote: string;
};

export type Dictionary = {
  nav: NavLink[];
  hero: HeroContent;
  about: AboutContent;
  services: ServicesContent;
  portfolio: PortfolioContent;
  contact: ContactContent;
  footer: FooterContent;
  placeholders: PlaceholderSection[];
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Service catalog", href: "/services" },
      { label: "Residences", href: "#portfolio" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      badge: { location: "Punta Mita", since: "Since 2007" },
      headline: "Exceptional Property Management in Paradise",
      description:
        "We craft worry-free ownership experiences for Punta de Mita's most celebrated estates, blending meticulous property care with intuitive concierge service for you and your guests.",
      primaryCta: "Request Concierge",
      secondaryCta: "Explore services",
      scrollCta: "Gently scroll",
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
      summary: "Eighteen years of bespoke property care throughout Punta Mita.",
      paragraphs: [
        "Concierge at the Bay is a property management house with 18 years of continuous operation in Punta Mita. We specialize exclusively in luxury residences, deploying a seasoned team to safeguard every detail of your estate and financial stewardship.",
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
          value: "18",
          label: "Years stewarding Punta Mita",
          detail: "Deep local knowledge since 2007",
        },
        {
          value: "150",
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
    },
    services: {
      eyebrow: "Comprehensive Stewardship",
      heading: "Services designed for absolute ease",
      description:
        "From transparent financial guardianship to hands-on technical care, every discipline is in-house so you never have to juggle separate vendors.",
      services: [
        {
          id: "airport-transfer",
          name: "Airport Transportation",
          summary: "Relaxed arrivals and departures from PVR.",
          details:
            "Whether you're arriving for a relaxing vacation or departing after an unforgettable stay, our reliable airport transfer team keeps every ride smooth, timely, and comfortable.",
          note: "Includes flight monitoring, welcome signage, towels, and chilled drinks.",
        },
        {
          id: "private-transport",
          name: "Private Transportation",
          summary: "Expert drivers for town runs and day trips.",
          details:
            "Explore Punta Mita and the Riviera with highly qualified chauffeurs who love sharing the region's culture, dining, and hidden vistas.",
          note: "Ideal for tastings, golf rounds, surf checks, and evening reservations.",
        },
        {
          id: "private-chef",
          name: "Private Chef Experiences",
          summary: "In-residence dining tailored to every guest.",
          details:
            "Breakfast spreads, romantic dinners, and family celebrations are crafted by our chef collective with bespoke menus, sourcing, and staffing.",
          note: "Menus curated for dietary preferences and special occasions.",
        },
        {
          id: "grocery-prestocking",
          name: "Pre-Stocked Groceries",
          summary: "Arrive to a fridge filled with your favorites.",
          details:
            "Send us your grocery list and we will shop, stage, and refrigerate everything before you land so vacation starts at the front door.",
          note: "We handle specialty items and local market runs.",
        },
        {
          id: "golf-cart",
          name: "Golf Cart Rentals",
          summary: "Navigate Punta Mita the local way.",
          details:
            "Reserve late-model golf carts sized for your group to cruise every enclave, beach club, and village stop with ease.",
          note: "Charged, detailed, and delivered to your villa.",
        },
        {
          id: "wellness-experiences",
          name: "Wellness Rituals",
          summary: "Mobile spa therapies, yoga, and recovery sessions.",
          details:
            "Licensed therapists and instructors arrange massage, guided meditation, yoga flows, and IV hydration so guests reset without leaving the villa.",
          note: "Available sunrise to sunset with all equipment provided.",
        },
      ],
      cta: "Plan a tailored service suite",
      assurance: "Every service tier is customized for the way you live in Punta Mita.",
      viewAllLabel: "View every service",
      page: {
        heroEyebrow: "In-residence & beyond",
        heroHeading: "A complete concierge and lifestyle catalog",
        heroDescription:
          "Concierge at the Bay goes far beyond property operations. Our in-house team and trusted partners coordinate airport welcomes, culinary rituals, wellness, ocean adventures, and every request your guests dream up.",
        heroNote:
          "Every listing below can be mixed, matched, and personalized for length of stay, party size, and celebration type.",
        heroCta: "Connect with our concierge",
        categories: [
          {
            id: "available-services",
            title: "Available services",
            description:
              "Daily comforts that keep your stay effortless—from thoughtful breakfasts to child care and memory-making photography.",
            items: [
              {
                id: "airport-transportation",
                name: "Airport transportation",
                summary: "Meet-and-greet transfers for every arrival or departure.",
                details:
                  "Whether you're landing for a relaxing vacation or saying goodbye after an unforgettable stay, our professional transfer partners make the journey smooth, comfortable, and punctual.",
              },
              {
                id: "private-transportation",
                name: "Private transportation",
                summary: "Discover Punta Mita with seasoned local chauffeurs.",
                details:
                  "Enjoy exploring the coast with highly qualified staff eager to showcase points of interest, artisan shops, and breathtaking lookouts while keeping logistics effortless.",
              },
              {
                id: "breakfast-lunch",
                name: "Breakfast & lunch cooking service",
                summary: "Freshly prepared meals exactly when you want them.",
                details:
                  "Our cooks handle market runs, prep, cooking, and cleanup for breakfast or lunch so you can simply gather at the table and enjoy.",
              },
              {
                id: "prestocking",
                name: "Pre-stocking grocery list",
                summary: "Arrive to a pantry filled with favorites and local treats.",
                details:
                  "Skip the supermarket and start unwinding right away—send us your list and we'll stock every shelf, fridge, and bar before you arrive.",
              },
              {
                id: "golf-cart-rental",
                name: "Golf cart rental",
                summary: "Cruise Punta Mita with 100% golf-cart-friendly ease.",
                details:
                  "Reserve carts sized for your party so you can hop between beach clubs, surf spots, and dinner reservations in minutes.",
              },
              {
                id: "private-chef-events",
                name: "Private chef",
                summary: "Romantic dinners, celebrations, or refined family meals.",
                details:
                  "Your villa becomes the perfect venue for tailor-made menus, wine pairings, and elegant service so you can forget about cooking.",
              },
              {
                id: "professional-photos",
                name: "Professional photoshoot",
                summary: "Capture Punta Mita magic with curated sessions.",
                details:
                  "Book lifestyle, family, or celebration photography complete with location scouting and gentle posing direction.",
              },
              {
                id: "babysitter",
                name: "Babysitter",
                summary: "Peace of mind while you recharge.",
                details:
                  "Our vetted sitters care for children in the comfort of your villa so adults can enjoy spa time, dinners, or adventures.",
              },
              {
                id: "baby-gear",
                name: "Baby gear rental",
                summary: "Travel light—everything is ready at the residence.",
                details:
                  "We arrange cribs, monitors, toys, and beach-friendly gear to be delivered and set up before the family arrives.",
              },
            ],
          },
          {
            id: "area-activities",
            title: "Activities in the area",
            description:
              "Sail, surf, climb, and discover Riviera Nayarit with curated outings. We arrange private guides, permits, and door-to-door transport so each adventure feels bespoke.",
            items: [
              {
                id: "sailing-charters",
                name: "Sailing charters",
                summary: "Set off aboard the luxurious Tranquilo Lagoon 440.",
                details:
                  "Enjoy 360-degree views, attentive crew, paddleboards, kayaks, and lily-pad lounging for the most elegant day on the water.",
              },
              {
                id: "spa-treatment",
                name: "Spa treatment",
                summary: "Relaxing massages delivered in-residence.",
                details:
                  "Take a break from routine with revitalizing bodywork—our therapists bring the spa directly to your villa.",
              },
              {
                id: "yoga",
                name: "Yoga",
                summary: "Experienced instructors for sunrise or sunset flows.",
                details:
                  "Practice with the bay's calm energy as we connect you with the best private yoga teachers in Punta Mita.",
              },
              {
                id: "whale-watching",
                name: "Whale watching",
                summary: "December through March sightings at their best.",
                details:
                  "Specialized private excursions bring you face-to-face with humpbacks along Punta de Mita's coastline.",
              },
              {
                id: "marietas-snorkel",
                name: "Marietas & snorkeling tour",
                summary: "Visit the world-famous Hidden Beach in comfort.",
                details:
                  "A private boat, snorkel gear, and expert guides reveal the islands' reefs, wildlife, and turquoise coves.",
              },
              {
                id: "scuba-diving",
                name: "Scuba diving",
                summary: "Guided dives for certified or first-time guests.",
                details:
                  "Explore vibrant reefs, swim alongside tropical marine life, and experience the tranquility of the Pacific's underwater world.",
              },
              {
                id: "surf-lessons",
                name: "Surfing lessons",
                summary: "Year-round breaks for every level.",
                details:
                  "Personalized instruction matches the best Punta Mita wave with your goals, boards, and schedule.",
              },
              {
                id: "sup-rentals",
                name: "Stand up paddle, boogie & surfboard rental",
                summary: "Travel light—your favorite boards await.",
                details:
                  "We deliver SUPs, boogie boards, and surfboards directly to the villa so gear is ready whenever the ocean calls.",
              },
              {
                id: "jet-ski",
                name: "Jet ski activity",
                summary: "Thrilling rides with wildlife sightings.",
                details:
                  "Learn controls, ride your own jet ski, spot dolphins and rays, and even add snorkel stops if you wish.",
              },
              {
                id: "fishing-tour",
                name: "Fishing tour",
                summary: "Deep-sea or in-shore adventures tailored to you.",
                details:
                  "Target tuna, mahi-mahi, rooster fish, marlin, sailfish, and more alongside expert captains.",
              },
              {
                id: "spearfishing",
                name: "Spearfishing trips",
                summary: "Dive into the thrill of underwater hunts.",
                details:
                  "Guided experiences pair freedive coaching with the region's best spearfishing spots.",
              },
              {
                id: "zip-line",
                name: "Zip line",
                summary: "Ten exhilarating lines over jungle canopies.",
                details:
                  "Glide from the Pacific views to rainforest reserves while spotting wild boars, deer, and macaws along the route.",
              },
              {
                id: "rzr-adventure",
                name: "RZR adventure",
                summary: "Country roads and jungle trails en route to Sayulita.",
                details:
                  "Drive to colorful markets, surf beaches, and vibrant food stalls on this adrenaline-filled outing.",
              },
              {
                id: "atv-tours",
                name: "ATV tours",
                summary: "Challenge rivers, streams, and mountain paths.",
                details:
                  "Single or double ATVs navigate Punta Mita's natural playground with expert guides leading the way.",
              },
              {
                id: "horseback-riding",
                name: "Horseback riding",
                summary: "Traditional rides across beach, jungle, and village.",
                details:
                  "Well-cared-for horses and seasoned cowboys escort you through Higuera Blanca's most scenic corners.",
              },
              {
                id: "hiking-tour",
                name: "Hiking tour",
                summary: "Summit Monkey Mountain for sweeping views.",
                details:
                  "Trek lush jungle trails while listening to over 350 endemic and migratory birds.",
              },
              {
                id: "bike-rental",
                name: "Bike rental",
                summary: "Discover Punta Mita on two wheels.",
                details:
                  "Cruise lush landscapes, hidden paths, and ocean-view routes with bikes sized for every rider.",
              },
              {
                id: "golf",
                name: "Golf",
                summary: "Access multiple world-class courses nearby.",
                details:
                  "We secure coveted tee times, forecaddies, and transportation for the region's signature fairways.",
              },
            ],
          },
        ],
        dining: {
          title: "Top nearby restaurants",
          description:
            "Need a night out? These favorites stay on speed dial for last-minute reservations, chef's tables, and sunset cocktails.",
          essentialsTitle: "Chef-loved essentials",
          essentials: [
            "Mina",
            "La Pescadora",
            "Si Sushi",
            "El Cafesito",
            "Fish Market at La Pescadora",
            "Lobster Paradise",
            "Punta Mercedes",
            "Zicatela",
            "Tuna Blanca",
            "La Rustica",
            "Casa Teresa",
            "Parrot Fish",
            "Tora",
          ],
          alsoTitle: "Also recommended",
          alsoList: [
            "Mauka",
            "Makai",
            "Hector's Kitchen",
            "Casa Tradicional",
            "Naef",
            "Barracuda",
            "Margaritas on the hill",
          ],
        },
      },
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
        {
          title: "Las Marietas & Iyari",
          subtitle: "Clifftop terraces",
          description:
            "Sun-drenched residences engineered for seamless indoor-outdoor living and sunset terraces.",
          image:
            "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1200&q=80",
        },
      ],
      partnerHeadline: "Discover every residence with our partner, Mita Rentals",
      partnerDescription:
        "We publish the full catalog of estates with our exclusive rental partner so you can explore availability, galleries, and concierge notes in one place.",
      partnerCta: "View the complete portfolio on Mita Rentals",
      seeAllLabel: "See all residences",
    },
    contact: {
      eyebrow: "Connect",
      heading: "Speak directly with Concierge at the Bay",
      description:
        "Whether you prefer a quick WhatsApp exchange or a detailed email brief, our Punta Mita team replies promptly with the next steps.",
      whatsappCta: "Message us on WhatsApp",
      emailCta: "Email the team",
    },
    footer: {
      navigationLabel: "Navigation",
      contactLabel: "Contact",
      callLabel: "Call us",
      emailLabel: "Email",
      locationLabel: "Our location",
      scheduleCta: "Schedule with the team",
      privacyLinkLabel: "Privacy Policy",
      craftedNote: "Crafted in Punta de Mita",
    },
    placeholders: [
    ],
  },
  es: {
    nav: [
      { label: "Nosotros", href: "#about" },
      { label: "Servicios", href: "#services" },
      { label: "Catálogo de servicios", href: "/services" },
      { label: "Residencias", href: "#portfolio" },
      { label: "Contacto", href: "#contact" },
    ],
    hero: {
      badge: { location: "Punta Mita", since: "Desde 2007" },
      headline: "Administración Excepcional de Propiedades.",
      description:
        "Creamos experiencias sin preocupaciones para las residencias más celebradas de Punta de Mita, combinando cuidado meticuloso con un servicio de concierge intuitivo para usted y sus invitados.",
      primaryCta: "Solicitar concierge",
      secondaryCta: "Explorar servicios",
      scrollCta: "Desliza suavemente",
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
      summary: "Dieciocho años de cuidado personalizado en Punta Mita.",
      paragraphs: [
        "Concierge at the Bay es una firma de administración con 18 años de operación continua en Punta Mita. Nos dedicamos exclusivamente a residencias de lujo, asignando un equipo experimentado que protege cada detalle de la propiedad y la gestión financiera.",
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
          value: "18",
          label: "Años en Punta Mita",
          detail: "Conocimiento local desde 2007",
        },
        {
          value: "150",
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
    },
    services: {
      eyebrow: "Cuidado integral",
      heading: "Servicios creados para tu tranquilidad",
      description:
        "Desde la gestión financiera transparente hasta el mantenimiento técnico, todo vive dentro de nuestro equipo para que nunca debas coordinar proveedores por separado.",
      services: [
        {
          id: "airport-transfer",
          name: "Traslados aeroportuarios",
          summary: "Llegadas y salidas relajadas desde PVR.",
          details:
            "Ya sea que llegues para unas vacaciones de descanso o te despidas tras una estancia inolvidable, nuestro equipo de traslados mantiene cada viaje cómodo y puntual.",
          note: "Incluye monitoreo de vuelos, bienvenida con letrero, toallas y bebidas frías.",
        },
        {
          id: "private-transport",
          name: "Transporte privado",
          summary: "Choferes expertos para traslados y excursiones.",
          details:
            "Explora Punta Mita y la Riviera con conductores altamente calificados que disfrutan compartir cultura, gastronomía y miradores escondidos.",
          note: "Perfecto para catas, rondas de golf, surf trips y cenas.",
        },
        {
          id: "private-chef",
          name: "Experiencias de chef privado",
          summary: "Gastronomía a la medida dentro de la residencia.",
          details:
            "Desayunos, cenas románticas y celebraciones familiares se diseñan con menús, sourcing y servicio personalizados por nuestro colectivo de chefs.",
          note: "Adaptamos menús a preferencias y ocasiones especiales.",
        },
        {
          id: "grocery-prestocking",
          name: "Despensa preabastecida",
          summary: "Llega con el refrigerador lleno.",
          details:
            "Envíanos tu lista y nosotros haremos las compras, montaje y refrigeración para que las vacaciones empiecen al abrir la puerta.",
          note: "Incluye productos especiales y visitas al mercado local.",
        },
        {
          id: "golf-cart",
          name: "Renta de carritos de golf",
          summary: "Muévete como local por Punta Mita.",
          details:
            "Reserva carritos de último modelo en el tamaño ideal para tu grupo y recorre clubes de playa, surf spots y el pueblo con facilidad.",
          note: "Se entregan cargados, detallados y listos en tu villa.",
        },
        {
          id: "wellness-experiences",
          name: "Rituales de bienestar",
          summary: "Spa móvil, yoga e hidratación IV en la villa.",
          details:
            "Terapeutas e instructores certificados organizan masajes, meditación guiada, clases de yoga e hidratación intravenosa para recuperar energía sin salir.",
          note: "Disponible del amanecer al atardecer con todo el equipo incluido.",
        },
      ],
      cta: "Diseñar un programa a medida",
      assurance: "Cada nivel de servicio se adapta a cómo vives Punta Mita.",
      viewAllLabel: "Ver todos los servicios",
      page: {
        heroEyebrow: "En la residencia y más allá",
        heroHeading: "Catálogo completo de concierge y estilo de vida",
        heroDescription:
          "Concierge at the Bay va mucho más allá de la operación de la propiedad. Nuestro equipo interno y socios confiables coordinan bienvenidas, rituales culinarios, bienestar, aventura en el mar y cada petición que imaginen tus invitados.",
        heroNote:
          "Cada servicio puede mezclarse, ajustarse y personalizarse según la duración de la estancia, el número de invitados y el tipo de celebración.",
        heroCta: "Hablar con nuestro concierge",
        categories: [
          {
            id: "available-services",
            title: "Servicios disponibles",
            description:
              "Comodidades diarias que hacen la estancia sin esfuerzo: desayunos pensados, cuidado infantil y fotografías que capturan recuerdos.",
            items: [
              {
                id: "airport-transportation",
                name: "Traslado aeropuerto",
                summary: "Recepciones y despedidas puntuales.",
                details:
                  "Si llegas para relajarte o vuelas de regreso, nuestros choferes profesionales manejan equipaje, niños y horarios con absoluta cortesía.",
              },
              {
                id: "private-transportation",
                name: "Transporte privado",
                summary: "Explora la costa con choferes locales.",
                details:
                  "Disfruta de conocer los alrededores con personal altamente calificado que comparte puntos de interés, artesanías y vistas inolvidables.",
              },
              {
                id: "breakfast-lunch",
                name: "Cocina para desayunos y comidas",
                summary: "Alimentos frescos justo cuando los deseas.",
                details:
                  "Nos encargamos de compras, mise en place, servicio y limpieza para que solo te sientes a la mesa.",
              },
              {
                id: "prestocking",
                name: "Lista de súper preabastecida",
                summary: "Llegas y todo está acomodado.",
                details:
                  "Olvida el supermercado y empieza a descansar de inmediato; solo comparte tu lista y nosotros surtimos despensa, refrigerador y bar.",
              },
              {
                id: "golf-cart-rental",
                name: "Renta de carritos de golf",
                summary: "Punta Mita es 100% golf-cart friendly.",
                details:
                  "Agrega un extra a tus vacaciones moviéndote en carrito entre clubes, playas y restaurantes.",
              },
              {
                id: "private-chef-events",
                name: "Chef privado",
                summary: "Cenas románticas o celebraciones familiares.",
                details:
                  "Tu villa es el escenario ideal para menús personalizados, maridajes y servicio impecable. Disfruta y olvida la cocina.",
              },
              {
                id: "professional-photos",
                name: "Sesión fotográfica profesional",
                summary: "Captura la magia de Punta Mita.",
                details:
                  "Coordinamos sesiones para familias, parejas o grupos con scouting de locaciones y dirección gentil.",
              },
              {
                id: "babysitter",
                name: "Niñera",
                summary: "Tranquilidad mientras descansas.",
                details:
                  "Cuidadores profesionales atienden a tus hijos en la comodidad de la villa para que disfrutes el spa, una cena o una excursión.",
              },
              {
                id: "baby-gear",
                name: "Renta de artículos para bebé",
                summary: "Viaja ligero, todo te espera en casa.",
                details:
                  "Coordinamos cunas, monitores, juguetes y equipo de playa para entregarlos e instalarlos antes de su llegada.",
              },
            ],
          },
          {
            id: "area-activities",
            title: "Actividades en la zona",
            description:
              "Navega, surfea, escala y descubre la Riviera Nayarit con experiencias curadas. Organizamos guías, permisos y traslados puerta a puerta para que cada aventura sea única.",
            items: [
              {
                id: "sailing-charters",
                name: "Charters de vela",
                summary: "Zarpa en el lujoso Tranquilo Lagoon 440.",
                details:
                  "360 grados de vistas, tripulación atenta, paddle boards, kayaks y lily pad para un día elegante en el mar.",
              },
              {
                id: "spa-treatment",
                name: "Tratamiento de spa",
                summary: "Masajes relajantes en tu residencia.",
                details:
                  "Regálate un respiro con masajes revitalizantes; llevamos el spa hasta tu villa.",
              },
              {
                id: "yoga",
                name: "Yoga",
                summary: "Instructores privados al amanecer o atardecer.",
                details:
                  "Aprovecha la tranquilidad de la bahía y practica con los mejores maestros de Punta Mita.",
              },
              {
                id: "whale-watching",
                name: "Avistamiento de ballenas",
                summary: "La temporada ideal de diciembre a marzo.",
                details:
                  "Excursiones privadas especializadas te acercan a las majestuosas ballenas jorobadas.",
              },
              {
                id: "marietas-snorkel",
                name: "Tour a Marietas y snorkel",
                summary: "Visita la famosa Playa del Amor.",
                details:
                  "Tour privado con embarcación, equipo y guías expertos para explorar cuevas, arrecifes y fauna.",
              },
              {
                id: "scuba-diving",
                name: "Buceo",
                summary: "Inmersiones guiadas para certificados o principiantes.",
                details:
                  "Descubre arrecifes vibrantes, vida marina tropical y la calma del Pacífico bajo el agua.",
              },
              {
                id: "surf-lessons",
                name: "Clases de surf",
                summary: "Olas todo el año para cualquier nivel.",
                details:
                  "Lecciones personalizadas que eligen el break perfecto según tus objetivos y horario.",
              },
              {
                id: "sup-rentals",
                name: "Renta de SUP, boogie y tablas",
                summary: "Viaja ligero, el equipo te espera.",
                details:
                  "Entregamos paddle boards, boogies y tablas directamente en la villa para que el mar te encuentre listo.",
              },
              {
                id: "jet-ski",
                name: "Actividad de jet ski",
                summary: "Aventura con vistas y fauna marina.",
                details:
                  "Aprende a manejarlo, recorre la costa, busca delfines y rayas y agrega snorkel si lo deseas.",
              },
              {
                id: "fishing-tour",
                name: "Tour de pesca",
                summary: "Modalidades offshore o inshore a tu medida.",
                details:
                  "Persigue atunes, mahi-mahi, pez gallo, marlines y más junto a capitanes expertos.",
              },
              {
                id: "spearfishing",
                name: "Pesca con arpón",
                summary: "Sumérgete en la emoción submarina.",
                details:
                  "Experiencias guiadas combinan coaching de apnea con los mejores puntos de la región.",
              },
              {
                id: "zip-line",
                name: "Tirolesa",
                summary: "Diez líneas sobre el dosel de la selva.",
                details:
                  "Pasa de vistas al Pacífico a la reserva tropical observando jabalíes, venados y guacamayas.",
              },
              {
                id: "rzr-adventure",
                name: "Aventura en RZR",
                summary: "Caminos rurales rumbo a Sayulita.",
                details:
                  "Maneja hacia mercados llenos de color, playas y puestos de comida en esta salida llena de adrenalina.",
              },
              {
                id: "atv-tours",
                name: "Tours en ATV",
                summary: "Cruza ríos, veredas y montañas.",
                details:
                  "ATVs sencillos o dobles recorren el paraíso natural de Punta Mita guiados por expertos.",
              },
              {
                id: "horseback-riding",
                name: "Cabalgatas",
                summary: "Recorridos tradicionales por playa y jungla.",
                details:
                  "Caballos bien cuidados y vaqueros locales te llevan por los paisajes de Higuera Blanca.",
              },
              {
                id: "hiking-tour",
                name: "Tour de hiking",
                summary: "Sube el cerro del Mono con vistas panorámicas.",
                details:
                  "Camina por selva exuberante mientras escuchas más de 350 aves endémicas y migratorias.",
              },
              {
                id: "bike-rental",
                name: "Renta de bicicletas",
                summary: "Descubre Punta Mita en dos ruedas.",
                details:
                  "Recorre paisajes verdes, senderos escondidos y rutas con vista al mar con bicis ajustadas a cada persona.",
              },
              {
                id: "golf",
                name: "Golf",
                summary: "Acceso a campos de clase mundial cercanos.",
                details:
                  "Aseguramos tee times codiciados, forecaddies y transporte en los fairways icónicos de la zona.",
              },
            ],
          },
        ],
        dining: {
          title: "Restaurantes cercanos",
          description:
            "¿Se antoja salir? Estas mesas favoritas siempre están en marcación rápida para reservar al último minuto, pedir chef's table o ver el atardecer con cocteles.",
          essentialsTitle: "Imprescindibles del chef",
          essentials: [
            "Mina",
            "La Pescadora",
            "Si Sushi",
            "El Cafesito",
            "Fish Market at La Pescadora",
            "Lobster Paradise",
            "Punta Mercedes",
            "Zicatela",
            "Tuna Blanca",
            "La Rustica",
            "Casa Teresa",
            "Parrot Fish",
            "Tora",
          ],
          alsoTitle: "También recomendamos",
          alsoList: [
            "Mauka",
            "Makai",
            "Hector's Kitchen",
            "Casa Tradicional",
            "Naef",
            "Barracuda",
            "Margaritas on the hill",
          ],
        },
      },
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
        {
          title: "Las Marietas e Iyari",
          subtitle: "Terrazas en el acantilado",
          description:
            "Residencias bañadas por el sol pensadas para vivir dentro-fuera y disfrutar atardeceres infinitos.",
          image:
            "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1200&q=80",
        },
      ],
      partnerHeadline:
        "Descubre cada residencia junto a nuestro socio, Mita Rentals",
      partnerDescription:
        "Publicamos el catálogo completo de propiedades con nuestro socio exclusivo para que explores disponibilidad, galerías y notas de concierge en un solo lugar.",
      partnerCta: "Ver el portafolio completo en Mita Rentals",
      seeAllLabel: "Ver todas las residencias",
    },
    contact: {
      eyebrow: "Contacto",
      heading: "Habla directo con Concierge at the Bay",
      description:
        "Ya sea por un mensaje rápido en WhatsApp o un correo detallado, nuestro equipo en Punta Mita responde de inmediato con los siguientes pasos.",
      whatsappCta: "Escríbenos por WhatsApp",
      emailCta: "Enviar correo",
    },
    footer: {
      navigationLabel: "Navegación",
      contactLabel: "Contacto",
      callLabel: "Llámanos",
      emailLabel: "Correo",
      locationLabel: "Nuestra ubicación",
      scheduleCta: "Agenda con el equipo",
      privacyLinkLabel: "Aviso de Privacidad",
      craftedNote: "Hecho en Punta de Mita",
    },
    placeholders: [
    ],
  },
};
