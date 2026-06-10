const navToggle = document.querySelector(".nav-toggle");
const siteHeader = document.querySelector(".site-header");
const navLinks = document.querySelector(".nav-links");
const pageLinks = document.querySelectorAll("[data-page-link]");
const pages = document.querySelectorAll("[data-page]");
const faqLinks = document.querySelectorAll(".faq-aside a");
const faqItems = document.querySelectorAll(".faq details");
const languageSwitch = document.querySelector("[data-language-switch]");
const hotspots = document.querySelectorAll(".hotspot");
const useCaseCards = document.querySelectorAll("[data-use]");
const contactForm = document.querySelector(".contact-form");
const transition = document.querySelector(".page-transition");
const videoFrame = document.querySelector("[data-youtube-id]");
const detailModal = document.querySelector(".detail-modal");
const detailPanel = document.querySelector(".detail-panel");
const detailImage = document.querySelector(".detail-image");
const detailVideo = document.querySelector(".detail-video");
const detailTitle = document.querySelector("#detail-title");
const detailCopy = document.querySelector(".detail-copy");
const detailFeatures = document.querySelector(".detail-features");
const languageCodes = ["it", "fr", "es", "de", "zh-CN", "ru"];

const getCurrentLanguage = () => {
  const pageLang = document.documentElement.lang;
  return languageCodes.includes(pageLang) ? pageLang : "en";
};

const currentLanguage = getCurrentLanguage();
const relativeRoot = currentLanguage === "en" ? "" : "../";
const assetPath = (path) => `${relativeRoot}${path}`;

const languageOptions = {
  en: relativeRoot || "./",
  it: `${relativeRoot}it/`,
  fr: `${relativeRoot}fr/`,
  es: `${relativeRoot}es/`,
  de: `${relativeRoot}de/`,
  "zh-CN": `${relativeRoot}zh-CN/`,
  ru: `${relativeRoot}ru/`
};

const languageLabels = {
  en: "EN",
  it: "IT",
  fr: "FR",
  es: "ES",
  de: "DE",
  "zh-CN": "中文",
  ru: "RU"
};

const translations = {
  it: {
    nav: ["Home", "Chi siamo", "PRO", "LIGHT", "Contesti", "FAQ", "Contatti"],
    language: "Lingua",
    title: "Power Island | Hub di generazione intelligente",
    description: "Power Island è un hub energetico mobile, modulare e intelligente per off-grid, backup di emergenza, stazioni di ricarica e siti temporanei.",
    homeEyebrow: "Hub di generazione intelligente",
    homeTitle: "ENERGIA VERDE E SOSTENIBILE OVUNQUE",
    homeCopy: "Power Island è un hub energetico autonomo, mobile, intelligente e green sviluppato da Avoni Industrial per fornire energia affidabile, flessibile e sostenibile ovunque serva.",
    homePrimary: "Esplora i prodotti",
    homeSecondary: "Contesti di impiego",
    introEyebrow: "Un prodotto, molti contesti",
    introTitle: "Energia green come non l'hai mai vista prima.",
    introP1: "Grazie al design modulare, mobile e off-grid, Power Island si adatta a un'ampia gamma di applicazioni.",
    introP2: "È alloggiato in container standard da 10, 20 o 40 piedi insonorizzati, riciclabili, scalabili e dotati di pannelli solari, batterie ad alte prestazioni e generatore HVO-ready.",
    videoEyebrow: "Power Island in movimento",
    watchVideo: "Guarda il video su YouTube",
    configTitle: "Configurazione Power Island",
    configLead: "La soluzione ideale per applicazioni off-grid, backup di emergenza e stazioni di ricarica mobili.",
    hotspotHint: "Clicca gli hotspot per maggiori dettagli",
    optimonEyebrow: "Sistema Optim-on",
    optimonTitle: "Ottimizzazione energetica supportata dall'AI.",
    optimonCopy: "Grazie a un PLC gestito dall'AI, Power Island ottimizza generazione e distribuzione dell'energia, privilegiando le fonti rinnovabili.",
    partners: "I nostri partner",
    aboutEyebrow: "Chi siamo",
    aboutTitle: "Vendita di motori e ricambi dal 1948.",
    since: "Dal 1948",
    exp: "Oltre 70 anni di esperienza",
    aboutHeading: "Avoni Industrial, dalla Motor Valley all'energia mobile.",
    aboutP1: "Avoni Industrial ha sede a Calderara di Reno, nel cuore della Motor Valley italiana, e opera da oltre 70 anni nella vendita di motori.",
    aboutP2: "La sua storia e crescita sono sinonimo di affidabilità e professionalità, valori tramandati per tre generazioni dal fondatore Francesco Avoni. Oggi Avoni è distributore autorizzato FPT Industrial e fornisce accessori, ricambi e assistenza post-vendita.",
    brochure: "Scarica brochure",
    passion: "La nostra passione al tuo servizio",
    expertise: "Competenza industriale dietro Power Island.",
    aboutCards: [
      ["Vendita motori", "Il nostro obiettivo è supportare i clienti e soddisfare esigenze tecniche avanzate nel rispetto della tutela ambientale."],
      ["Assistenza post-vendita", "Diamo ai motori la cura che meritano, garantendo alte prestazioni e massima efficienza con personale qualificato."],
      ["Ricambi", "Avoni fornisce accessori e ricambi, supportati da una solida struttura di customer service."]
    ],
    proEyebrow: "Scheda tecnica e commerciale",
    proHeading: "Formati Full e Base in container da 20 e 40 piedi.",
    lightHeading: "Configurazioni solar-first con capacità batteria modulare.",
    contextsEyebrow: "Contesti di impiego Power Island",
    contextsTitle: "Adatta a un'ampia gamma di casi d'uso.",
    contextsLead: "Grazie al design modulare, mobile e off-grid, Power Island può essere configurata in modalità diverse in base all'applicazione.",
    explore: "Approfondisci",
    contextCards: [
      ["Stazione di ricarica", "Capacità di ricarica mobile per veicoli elettrici, flotte e picchi temporanei di domanda."],
      ["Gestione emergenze", "Energia immediata e affidabile durante emergenze, blackout e operazioni temporanee di ripristino."],
      ["Alimentazione centri medici", "Supporto stabile per strutture sanitarie e aree mediche dove la continuità è critica."],
      ["Trattamento acqua", "Energia autonoma per trattamento acqua, pompaggio e infrastrutture di servizio remote."],
      ["Applicazioni di cantiere", "Energia per cantieri, basi logistiche e aree industriali non elettrificate."],
      ["Data center", "Supporto energetico supplementare o temporaneo per infrastrutture digitali critiche."]
    ],
    faqTitle: "Tutto quello che devi sapere su Power Island.",
    faqGuide: "Guida FAQ",
    faqGuideTitle: "Trova la risposta giusta più velocemente.",
    contactEyebrow: "I nostri professionisti a tua disposizione",
    contactTitle: "Raccontaci come vuoi usare la tua Power Island.",
    contactHeading: "Contattaci.",
    contactCopy: "Scrivi a sales@powerisland.it o chiama +39 340 0013447. I nostri tecnici ti aiuteranno a definire la configurazione ottimale per personalizzare il prodotto.",
    form: ["Nome *", "Cognome *", "Indirizzo email *", "Telefono", "Messaggio", "Autorizzo il trattamento dei miei dati personali nel rispetto della privacy policy.", "Invia"],
    footerHeadquarters: "Sede legale: Via Bazzane 71, 40012 Calderara di Reno, Bologna, Italy",
    footerSales: "Ufficio commerciale: +39 340 0013447"
  },
  fr: {
    nav: ["Accueil", "À propos", "PRO", "LIGHT", "Contextes", "FAQ", "Contact"],
    language: "Langue",
    title: "Power Island | Hub de génération intelligent",
    description: "Power Island est un hub énergétique mobile, modulaire et intelligent pour l'off-grid, le secours d'urgence, les stations de recharge et les sites temporaires.",
    homeEyebrow: "Hub de génération intelligent",
    homeTitle: "ÉNERGIE VERTE ET DURABLE PARTOUT",
    homeCopy: "Power Island est un hub énergétique autonome, mobile, intelligent et vert développé par Avoni Industrial pour fournir une énergie fiable, flexible et durable partout où elle est nécessaire.",
    homePrimary: "Découvrir les produits",
    homeSecondary: "Contextes d'utilisation",
    introEyebrow: "Un produit, plusieurs contextes",
    introTitle: "Une énergie verte comme vous ne l'avez jamais vue.",
    introP1: "Grâce à sa conception modulaire, mobile et off-grid, Power Island s'adapte à de nombreux déploiements.",
    introP2: "Elle est intégrée dans des conteneurs standard de 10, 20 ou 40 pieds, insonorisés, recyclables, évolutifs et équipés de panneaux solaires, de batteries haute performance et d'un générateur compatible HVO.",
    videoEyebrow: "Power Island en mouvement",
    watchVideo: "Voir la vidéo sur YouTube",
    configTitle: "Configuration Power Island",
    configLead: "La solution idéale pour les applications off-grid, le secours d'urgence et les stations de recharge mobiles.",
    hotspotHint: "Cliquez sur les hotspots pour plus de détails",
    optimonEyebrow: "Système Optim-on",
    optimonTitle: "Optimisation énergétique assistée par l'IA.",
    optimonCopy: "Grâce à un PLC piloté par l'IA, Power Island optimise la génération et la distribution d'énergie en privilégiant les sources renouvelables.",
    partners: "Nos partenaires",
    aboutEyebrow: "À propos",
    aboutTitle: "Vente de moteurs et pièces détachées depuis 1948.",
    since: "Depuis 1948",
    exp: "Plus de 70 ans d'expérience",
    aboutHeading: "Avoni Industrial, de la Motor Valley à l'énergie mobile.",
    aboutP1: "Avoni Industrial est basée à Calderara di Reno, au coeur de la Motor Valley italienne, et vend des moteurs depuis plus de 70 ans.",
    aboutP2: "Son histoire et sa croissance sont synonymes de fiabilité et de professionnalisme, valeurs transmises depuis trois générations par le fondateur Francesco Avoni. Aujourd'hui, Avoni est distributeur agréé FPT Industrial et fournit accessoires, pièces détachées et service après-vente.",
    brochure: "Télécharger la brochure",
    passion: "Notre passion à votre service",
    expertise: "L'expertise industrielle derrière Power Island.",
    aboutCards: [
      ["Vente de moteurs", "Notre objectif est d'accompagner les clients et de répondre aux besoins techniques avancés tout en respectant la protection de l'environnement."],
      ["Service après-vente", "Nous apportons aux moteurs le soin qu'ils méritent, en garantissant hautes performances et efficacité maximale avec du personnel qualifié."],
      ["Pièces détachées", "Avoni fournit accessoires et pièces détachées, avec une solide structure de service client."]
    ],
    proEyebrow: "Fiche technique et commerciale",
    proHeading: "Formats Full et Base en conteneurs de 20 et 40 pieds.",
    lightHeading: "Configurations orientées solaire avec capacité batterie modulaire.",
    contextsEyebrow: "Contextes de déploiement Power Island",
    contextsTitle: "Adaptée à de nombreux cas d'usage.",
    contextsLead: "Grâce à sa conception modulaire, mobile et off-grid, Power Island peut être configurée selon l'application.",
    explore: "Explorer le scénario",
    contextCards: [
      ["Station de recharge", "Capacité de recharge mobile pour véhicules électriques, flottes et pics temporaires de demande."],
      ["Gestion des urgences", "Énergie immédiate et fiable lors d'urgences, coupures et opérations temporaires de reprise."],
      ["Alimentation de centres médicaux", "Support stable pour structures de santé et zones médicales où la continuité est critique."],
      ["Traitement de l'eau", "Énergie autonome pour traitement de l'eau, pompage et infrastructures de service isolées."],
      ["Applications chantier", "Énergie pour chantiers, bases logistiques et zones industrielles non électrifiées."],
      ["Data center", "Support énergétique supplémentaire ou temporaire pour infrastructures numériques critiques."]
    ],
    faqTitle: "Tout ce que vous devez savoir sur Power Island.",
    faqGuide: "Guide FAQ",
    faqGuideTitle: "Trouvez la bonne réponse plus rapidement.",
    contactEyebrow: "Nos professionnels à votre disposition",
    contactTitle: "Dites-nous comment vous souhaitez utiliser votre Power Island.",
    contactHeading: "Contactez-nous.",
    contactCopy: "Écrivez à sales@powerisland.it ou appelez le +39 340 0013447. Nos techniciens vous aideront à définir la configuration optimale pour personnaliser votre produit.",
    form: ["Prénom *", "Nom *", "Adresse e-mail *", "Téléphone", "Message", "J'autorise le traitement de mes données personnelles conformément à la politique de confidentialité.", "Envoyer"],
    footerHeadquarters: "Siège: Via Bazzane 71, 40012 Calderara di Reno, Bologna, Italy",
    footerSales: "Bureau commercial: +39 340 0013447"
  },
  es: {
    nav: ["Home", "Quiénes somos", "PRO", "LIGHT", "Contextos", "FAQ", "Contacto"],
    language: "Idioma",
    title: "Power Island | Hub de generación inteligente",
    description: "Power Island es un hub energético móvil, modular e inteligente para aplicaciones off-grid, respaldo de emergencia, estaciones de carga y sitios temporales.",
    homeEyebrow: "Hub de generación inteligente",
    homeTitle: "ENERGÍA VERDE Y SOSTENIBLE EN CUALQUIER LUGAR",
    homeCopy: "Power Island es un hub energético autónomo, móvil, inteligente y verde desarrollado por Avoni Industrial para suministrar energía fiable, flexible y sostenible allí donde se necesite.",
    homePrimary: "Explorar productos",
    homeSecondary: "Contextos de uso",
    introEyebrow: "Un producto, múltiples contextos",
    introTitle: "Energía verde como nunca la has tenido.",
    introP1: "Gracias a su diseño modular, móvil y off-grid, Power Island es adecuada para una amplia gama de aplicaciones.",
    introP2: "Está alojada en contenedores estándar de 10, 20 o 40 pies, insonorizados, reciclables, escalables y equipados con paneles solares, baterías de alto rendimiento y generador HVO-ready.",
    videoEyebrow: "Power Island en movimiento",
    watchVideo: "Ver el video en YouTube",
    configTitle: "Configuración Power Island",
    configLead: "La solución ideal para aplicaciones off-grid, respaldo de emergencia y estaciones de carga móviles.",
    hotspotHint: "Haz clic en los hotspots para más detalles",
    optimonEyebrow: "Sistema Optim-on",
    optimonTitle: "Optimización energética asistida por IA.",
    optimonCopy: "Gracias a un PLC gestionado por IA, Power Island optimiza la generación y distribución de energía, priorizando las fuentes renovables.",
    partners: "Nuestros partners",
    aboutEyebrow: "Quiénes somos",
    aboutTitle: "Venta de motores y repuestos desde 1948.",
    since: "Desde 1948",
    exp: "Más de 70 años de experiencia",
    aboutHeading: "Avoni Industrial, de la Motor Valley a la energía móvil.",
    aboutP1: "Avoni Industrial tiene su sede en Calderara di Reno, en el corazón de la Motor Valley italiana, y lleva más de 70 años dedicada a la venta de motores.",
    aboutP2: "Su historia y crecimiento son sinónimo de fiabilidad y profesionalidad, valores transmitidos durante tres generaciones desde el fundador Francesco Avoni. Hoy Avoni es distribuidor autorizado FPT Industrial y suministra accesorios, repuestos y servicio posventa.",
    brochure: "Descargar brochure",
    passion: "Nuestra pasión a tu servicio",
    expertise: "Experiencia industrial detrás de Power Island.",
    aboutCards: [
      ["Venta de motores", "Nuestro objetivo es apoyar a los clientes y satisfacer necesidades técnicas avanzadas respetando los requisitos de protección ambiental."],
      ["Servicio posventa", "Damos a los motores el cuidado que merecen, garantizando alto rendimiento y máxima eficiencia con personal cualificado."],
      ["Repuestos", "Avoni suministra accesorios y repuestos, respaldados por una sólida estructura de atención al cliente."]
    ],
    proEyebrow: "Ficha técnica y comercial",
    proHeading: "Formatos Full y Base en contenedores de 20 y 40 pies.",
    lightHeading: "Configuraciones solar-first con capacidad de batería modular.",
    contextsEyebrow: "Contextos de uso Power Island",
    contextsTitle: "Adecuada para una amplia gama de casos de uso.",
    contextsLead: "Gracias a su diseño modular, móvil y off-grid, Power Island puede configurarse de distintas formas según la aplicación.",
    explore: "Explorar escenario",
    contextCards: [
      ["Estación de carga", "Capacidad de carga móvil para vehículos eléctricos, flotas y picos temporales de demanda."],
      ["Gestión de emergencias", "Energía inmediata y fiable durante emergencias, apagones y operaciones temporales de recuperación."],
      ["Alimentación de centros médicos", "Soporte estable para instalaciones sanitarias y áreas médicas donde la continuidad es crítica."],
      ["Tratamiento de agua", "Energía autónoma para tratamiento de agua, bombeo e infraestructura de servicio remota."],
      ["Aplicaciones de obra", "Energía para obras, bases logísticas y áreas industriales no electrificadas."],
      ["Data center", "Soporte energético adicional o temporal para infraestructuras digitales críticas."]
    ],
    faqTitle: "Todo lo que necesitas saber sobre Power Island.",
    faqGuide: "Guía FAQ",
    faqGuideTitle: "Encuentra la respuesta adecuada más rápido.",
    contactEyebrow: "Nuestros profesionales a tu disposición",
    contactTitle: "Cuéntanos cómo quieres usar tu Power Island.",
    contactHeading: "Ponte en contacto.",
    contactCopy: "Escribe a sales@powerisland.it o llama al +39 340 0013447. Nuestros técnicos te ayudarán a definir la configuración óptima para personalizar el producto.",
    form: ["Nombre *", "Apellido *", "Email *", "Teléfono", "Mensaje", "Autorizo el tratamiento de mis datos personales de acuerdo con la política de privacidad.", "Enviar"],
    footerHeadquarters: "Sede: Via Bazzane 71, 40012 Calderara di Reno, Bologna, Italy",
    footerSales: "Oficina comercial: +39 340 0013447"
  },
  de: {
    nav: ["Home", "Über uns", "PRO", "LIGHT", "Kontexte", "FAQ", "Kontakt"],
    language: "Sprache",
    title: "Power Island | Intelligenter Energie-Hub",
    description: "Power Island ist ein mobiler, modularer und intelligenter Energie-Hub für Off-Grid-Strom, Notstrom, Ladestationen und temporäre Standorte.",
    homeEyebrow: "Intelligenter Energie-Hub",
    homeTitle: "GRÜNE UND NACHHALTIGE ENERGIE ÜBERALL",
    homeCopy: "Power Island ist ein autonomer, mobiler, intelligenter und grüner Energie-Hub von Avoni Industrial, der zuverlässige, flexible und nachhaltige Energie überall dort liefert, wo sie gebraucht wird.",
    homePrimary: "Produkte entdecken",
    homeSecondary: "Einsatzbereiche",
    introEyebrow: "Ein Produkt, viele Kontexte",
    introTitle: "Grüne Energie, wie Sie sie noch nie erlebt haben.",
    introP1: "Dank des modularen, mobilen und off-grid Designs eignet sich Power Island für eine Vielzahl von Anwendungen.",
    introP2: "Das System befindet sich in schallgedämmten, recycelbaren und skalierbaren Standardcontainern mit 10, 20 oder 40 Fuß, ausgestattet mit Solarmodulen, Hochleistungsbatterien und HVO-fähigem Generator.",
    videoEyebrow: "Power Island in Bewegung",
    watchVideo: "Video auf YouTube ansehen",
    configTitle: "Power Island Konfiguration",
    configLead: "Die ideale Lösung für Off-Grid-Anwendungen, Notstromversorgung und mobile Ladestationen.",
    hotspotHint: "Hotspots anklicken für Details",
    optimonEyebrow: "Optim-on System",
    optimonTitle: "KI-gestützte Energieoptimierung.",
    optimonCopy: "Dank einer KI-gesteuerten SPS optimiert Power Island Energieerzeugung und -verteilung mit Fokus auf erneuerbare Quellen.",
    partners: "Unsere Partner",
    aboutEyebrow: "Über uns",
    aboutTitle: "Verkauf von Motoren und Ersatzteilen seit 1948.",
    since: "Seit 1948",
    exp: "Mehr als 70 Jahre Erfahrung",
    aboutHeading: "Avoni Industrial, von der Motor Valley zur mobilen Energie.",
    aboutP1: "Avoni Industrial hat seinen Sitz in Calderara di Reno, im Herzen der italienischen Motor Valley, und ist seit über 70 Jahren im Motorenvertrieb tätig.",
    aboutP2: "Geschichte und Wachstum stehen für Zuverlässigkeit und Professionalität, Werte, die seit Gründer Francesco Avoni über drei Generationen weitergegeben werden. Heute ist Avoni autorisierter FPT Industrial Händler und liefert Zubehör, Ersatzteile und After-Sales-Service.",
    brochure: "Broschüre herunterladen",
    passion: "Unsere Leidenschaft in Ihrem Dienst",
    expertise: "Industrielle Kompetenz hinter Power Island.",
    aboutCards: [
      ["Motorenverkauf", "Unser Ziel ist es, Kunden zu unterstützen und anspruchsvolle technische Anforderungen unter Berücksichtigung des Umweltschutzes zu erfüllen."],
      ["After-Sales-Service", "Wir geben Motoren die Pflege, die sie verdienen, und sichern hohe Leistung sowie maximale Effizienz mit qualifiziertem Personal."],
      ["Ersatzteile", "Avoni liefert Zubehör und Ersatzteile, unterstützt durch eine starke Kundenservice-Struktur."]
    ],
    proEyebrow: "Technisches und kommerzielles Datenblatt",
    proHeading: "Full- und Base-Formate in 20- und 40-Fuß-Containern.",
    lightHeading: "Solarorientierte Konfigurationen mit modularer Batteriekapazität.",
    contextsEyebrow: "Power Island Einsatzbereiche",
    contextsTitle: "Geeignet für viele Anwendungsfälle.",
    contextsLead: "Dank des modularen, mobilen und off-grid Designs kann Power Island je nach Anwendung unterschiedlich konfiguriert werden.",
    explore: "Szenario ansehen",
    contextCards: [
      ["Ladestation", "Mobile Ladekapazität für Elektrofahrzeuge, Flotten und temporäre Bedarfsspitzen."],
      ["Notfallmanagement", "Sofortige und zuverlässige Energie bei Notfällen, Ausfällen und temporären Wiederherstellungsarbeiten."],
      ["Stromversorgung medizinischer Zentren", "Stabile Unterstützung für Gesundheitseinrichtungen und medizinische Bereiche, in denen Kontinuität kritisch ist."],
      ["Wasseraufbereitung", "Autonome Energie für entfernte Wasseraufbereitung, Pumpen und Serviceinfrastruktur."],
      ["Baustellenanwendungen", "Strom für Baustellen, Logistikbasen und nicht elektrifizierte Industrieflächen."],
      ["Data Center", "Zusätzliche oder temporäre Energieunterstützung für kritische digitale Infrastruktur."]
    ],
    faqTitle: "Alles, was Sie über Power Island wissen müssen.",
    faqGuide: "FAQ Leitfaden",
    faqGuideTitle: "Finden Sie schneller die richtige Antwort.",
    contactEyebrow: "Unsere Fachleute stehen Ihnen zur Verfügung",
    contactTitle: "Sagen Sie uns, wie Sie Ihre Power Island nutzen möchten.",
    contactHeading: "Kontaktieren Sie uns.",
    contactCopy: "Schreiben Sie an sales@powerisland.it oder rufen Sie +39 340 0013447 an. Unsere Techniker unterstützen Sie bei der optimalen Konfiguration Ihres Produkts.",
    form: ["Vorname *", "Nachname *", "E-Mail-Adresse *", "Telefon", "Nachricht", "Ich stimme der Verarbeitung meiner personenbezogenen Daten gemäß Datenschutzrichtlinie zu.", "Senden"],
    footerHeadquarters: "Hauptsitz: Via Bazzane 71, 40012 Calderara di Reno, Bologna, Italy",
    footerSales: "Vertrieb: +39 340 0013447"
  },
  "zh-CN": {
    nav: ["首页", "关于我们", "PRO", "LIGHT", "应用场景", "FAQ", "联系"],
    language: "语言",
    title: "Power Island | 智能发电能源中心",
    description: "Power Island 是一套移动、模块化、智能能源中心，适用于离网供电、应急备电、充电站和临时场地。",
    homeEyebrow: "智能发电能源中心",
    homeTitle: "随处可用的绿色可持续能源",
    homeCopy: "Power Island 是 Avoni Industrial 开发的自主、移动、智能绿色能源中心，可在任何需要的地方提供可靠、灵活、可持续的电力。",
    homePrimary: "查看产品",
    homeSecondary: "应用场景",
    introEyebrow: "一个产品，多种场景",
    introTitle: "前所未有的绿色能源体验。",
    introP1: "凭借模块化、移动式和离网设计，Power Island 适用于广泛的部署场景。",
    introP2: "系统集成在 10、20 或 40 英尺标准集装箱内，具备隔音、可回收、可扩展特性，并配备太阳能板、高性能电池和 HVO-ready 发电机。",
    videoEyebrow: "Power Island 动态展示",
    watchVideo: "在 YouTube 上观看视频",
    configTitle: "Power Island 配置",
    configLead: "离网应用、应急备电和移动充电站的理想解决方案。",
    hotspotHint: "点击热点查看更多详情",
    optimonEyebrow: "Optim-on 系统",
    optimonTitle: "AI 辅助能源优化。",
    optimonCopy: "通过 AI 管理的 PLC，Power Island 优化能源生成与分配，并优先使用可再生能源。",
    partners: "合作伙伴",
    aboutEyebrow: "关于我们",
    aboutTitle: "自 1948 年起销售发动机和备件。",
    since: "始于 1948",
    exp: "超过 70 年经验",
    aboutHeading: "Avoni Industrial，从 Motor Valley 到移动能源。",
    aboutP1: "Avoni Industrial 位于意大利 Calderara di Reno，地处意大利 Motor Valley 核心区域，70 多年来一直从事发动机销售。",
    aboutP2: "公司的历史与发展代表着可靠性和专业精神，这些价值由创始人 Francesco Avoni 传承三代。如今 Avoni 是 FPT Industrial 授权经销商，并提供附件、备件和售后服务。",
    brochure: "下载手册",
    passion: "我们的热情为您服务",
    expertise: "Power Island 背后的工业专业能力。",
    aboutCards: [
      ["发动机销售", "我们的目标是在满足环境保护要求的同时支持客户并满足先进技术需求。"],
      ["售后服务", "我们以合格人员为发动机提供应有的维护，确保高性能和最高效率。"],
      ["备件", "Avoni 提供附件和备件，并由完善的客户服务体系支持。"]
    ],
    proEyebrow: "技术与商业数据表",
    proHeading: "20 英尺和 40 英尺集装箱的 Full 与 Base 版本。",
    lightHeading: "以太阳能为核心、具备模块化电池容量的配置。",
    contextsEyebrow: "Power Island 应用场景",
    contextsTitle: "适用于广泛的使用场景。",
    contextsLead: "凭借模块化、移动式和离网设计，Power Island 可根据不同应用进行配置。",
    explore: "查看场景",
    contextCards: [
      ["充电站", "为电动汽车、车队和临时需求峰值提供移动充电能力。"],
      ["应急管理", "在紧急情况、停电和临时恢复作业中提供即时可靠的能源。"],
      ["医疗中心供电", "为需要连续供电的医疗设施和医疗区域提供稳定支持。"],
      ["水处理", "为偏远水处理、泵送和服务基础设施提供自主能源。"],
      ["工地应用", "为施工现场、物流基地和未通电工业区域供电。"],
      ["数据中心", "为关键数字基础设施提供补充或临时能源支持。"]
    ],
    faqTitle: "关于 Power Island，您需要了解的一切。",
    faqGuide: "FAQ 指南",
    faqGuideTitle: "更快找到正确答案。",
    contactEyebrow: "我们的专业人员随时为您服务",
    contactTitle: "告诉我们您打算如何使用 Power Island。",
    contactHeading: "联系我们。",
    contactCopy: "请发送邮件至 sales@powerisland.it 或致电 +39 340 0013447。我们的技术人员将协助您确定最佳配置。",
    form: ["名字 *", "姓氏 *", "电子邮箱 *", "电话", "留言", "我授权根据隐私政策处理我的个人数据。", "提交"],
    footerHeadquarters: "总部：Via Bazzane 71, 40012 Calderara di Reno, Bologna, Italy",
    footerSales: "销售办公室：+39 340 0013447"
  },
  ru: {
    nav: ["Главная", "О нас", "PRO", "LIGHT", "Сценарии", "FAQ", "Контакты"],
    language: "Язык",
    title: "Power Island | Интеллектуальный энергетический хаб",
    description: "Power Island — мобильный, модульный и интеллектуальный энергетический хаб для автономного питания, аварийного резерва, зарядных станций и временных объектов.",
    homeEyebrow: "Интеллектуальный энергетический хаб",
    homeTitle: "ЗЕЛЕНАЯ И УСТОЙЧИВАЯ ЭНЕРГИЯ ВЕЗДЕ",
    homeCopy: "Power Island — автономный, мобильный, интеллектуальный и экологичный энергетический хаб Avoni Industrial, созданный для надежной, гибкой и устойчивой подачи энергии там, где она нужна.",
    homePrimary: "Посмотреть продукты",
    homeSecondary: "Сценарии применения",
    introEyebrow: "Один продукт, множество сценариев",
    introTitle: "Зеленая энергия, какой вы ее еще не видели.",
    introP1: "Благодаря модульной, мобильной и автономной конструкции Power Island подходит для широкого спектра применений.",
    introP2: "Система размещается в стандартных 10-, 20- или 40-футовых контейнерах: звукоизолированных, пригодных к переработке, масштабируемых и оснащенных солнечными панелями, высокопроизводительными батареями и HVO-ready генератором.",
    videoEyebrow: "Power Island в движении",
    watchVideo: "Смотреть видео на YouTube",
    configTitle: "Конфигурация Power Island",
    configLead: "Идеальное решение для автономных приложений, аварийного резерва и мобильных зарядных станций.",
    hotspotHint: "Нажмите на точки для подробностей",
    optimonEyebrow: "Система Optim-on",
    optimonTitle: "Оптимизация энергии с поддержкой ИИ.",
    optimonCopy: "С помощью PLC под управлением ИИ Power Island оптимизирует генерацию и распределение энергии, отдавая приоритет возобновляемым источникам.",
    partners: "Наши партнеры",
    aboutEyebrow: "О нас",
    aboutTitle: "Продажа двигателей и запчастей с 1948 года.",
    since: "С 1948 года",
    exp: "Более 70 лет опыта",
    aboutHeading: "Avoni Industrial: от Motor Valley к мобильной энергии.",
    aboutP1: "Avoni Industrial находится в Calderara di Reno, в сердце итальянской Motor Valley, и более 70 лет занимается продажей двигателей.",
    aboutP2: "История и развитие компании являются синонимами надежности и профессионализма — ценностей, передаваемых тремя поколениями со времен основателя Francesco Avoni. Сегодня Avoni является авторизованным дистрибьютором FPT Industrial и поставляет аксессуары, запчасти и послепродажный сервис.",
    brochure: "Скачать брошюру",
    passion: "Наша страсть к вашим услугам",
    expertise: "Промышленная экспертиза за Power Island.",
    aboutCards: [
      ["Продажа двигателей", "Наша цель — поддерживать клиентов и удовлетворять сложные технические потребности с учетом требований охраны окружающей среды."],
      ["Послепродажный сервис", "Мы обеспечиваем двигателям должный уход, высокую производительность и максимальную эффективность силами квалифицированного персонала."],
      ["Запчасти", "Avoni поставляет аксессуары и запчасти при поддержке сильной структуры клиентского сервиса."]
    ],
    proEyebrow: "Технический и коммерческий лист",
    proHeading: "Форматы Full и Base в 20- и 40-футовых контейнерах.",
    lightHeading: "Солнечные конфигурации с модульной емкостью батарей.",
    contextsEyebrow: "Сценарии применения Power Island",
    contextsTitle: "Подходит для широкого спектра задач.",
    contextsLead: "Благодаря модульной, мобильной и автономной конструкции Power Island может настраиваться под конкретное применение.",
    explore: "Подробнее",
    contextCards: [
      ["Зарядная станция", "Мобильная зарядка для электромобилей, автопарков и временных пиков спроса."],
      ["Управление ЧС", "Немедленная и надежная энергия во время аварий, отключений и временных восстановительных работ."],
      ["Питание медицинских центров", "Стабильная поддержка медицинских объектов и зон, где критична непрерывность."],
      ["Водоподготовка", "Автономная энергия для удаленной очистки воды, насосов и сервисной инфраструктуры."],
      ["Строительные площадки", "Питание для стройплощадок, логистических баз и неэлектрифицированных промышленных зон."],
      ["Data Center", "Дополнительная или временная энергетическая поддержка критической цифровой инфраструктуры."]
    ],
    faqTitle: "Все, что нужно знать о Power Island.",
    faqGuide: "FAQ гид",
    faqGuideTitle: "Найдите нужный ответ быстрее.",
    contactEyebrow: "Наши специалисты в вашем распоряжении",
    contactTitle: "Расскажите, как вы планируете использовать Power Island.",
    contactHeading: "Свяжитесь с нами.",
    contactCopy: "Напишите на sales@powerisland.it или позвоните +39 340 0013447. Наши технические специалисты помогут подобрать оптимальную конфигурацию.",
    form: ["Имя *", "Фамилия *", "Email *", "Телефон", "Сообщение", "Я разрешаю обработку моих персональных данных в соответствии с политикой конфиденциальности.", "Отправить"],
    footerHeadquarters: "Штаб-квартира: Via Bazzane 71, 40012 Calderara di Reno, Bologna, Italy",
    footerSales: "Отдел продаж: +39 340 0013447"
  }
};

const supplementalTranslations = {
  it: {
    modalEyebrow: "Componenti Power Island",
    youtubeWatch: "Guarda il video su YouTube",
    flow: [
      "OPTIM-ON raccoglie previsioni meteo, dati di domanda e stati operativi.",
      "La previsione AI stima i profili di generazione fotovoltaica e i carichi elettrici.",
      "MILP minimizza i costi del sistema e calcola i punti operativi ottimali.",
      "Power Island segue i punti operativi e restituisce i parametri reali per il ciclo successivo."
    ],
    hotspots: ["Pannello fotovoltaico", "Generatore", "Stazione di ricarica", "Sistema di accumulo energetico", "Container e movimentazione"]
  },
  fr: {
    modalEyebrow: "Composants Power Island",
    youtubeWatch: "Voir la vidéo sur YouTube",
    flow: [
      "OPTIM-ON collecte les prévisions météo, les données de demande et les états de fonctionnement.",
      "La prévision par IA estime les profils de génération photovoltaïque et les charges électriques.",
      "MILP minimise les coûts du système et calcule les points de fonctionnement optimaux.",
      "Power Island suit les points de fonctionnement et renvoie les paramètres réels pour le cycle suivant."
    ],
    hotspots: ["Panneau photovoltaïque", "Générateur", "Station de recharge", "Système de stockage d'énergie", "Conteneur et manutention"]
  },
  es: {
    modalEyebrow: "Componentes Power Island",
    youtubeWatch: "Ver el video en YouTube",
    flow: [
      "OPTIM-ON recopila previsiones meteorológicas, datos de demanda y estados operativos.",
      "La previsión basada en IA estima los perfiles de generación fotovoltaica y las cargas eléctricas.",
      "MILP minimiza los costes del sistema y calcula los puntos de operación óptimos.",
      "Power Island sigue los puntos de operación y devuelve parámetros reales para el siguiente ciclo."
    ],
    hotspots: ["Panel fotovoltaico", "Generador", "Estación de carga", "Sistema de almacenamiento de energía", "Contenedor y manipulación"]
  },
  de: {
    modalEyebrow: "Power Island Komponenten",
    youtubeWatch: "Video auf YouTube ansehen",
    flow: [
      "OPTIM-ON sammelt Wetterprognosen, Bedarfsdaten und Betriebszustände.",
      "KI-gestützte Prognosen schätzen PV-Erzeugungsprofile und elektrische Lastanforderungen.",
      "MILP minimiert die Systemkosten und berechnet optimale Betriebspunkte.",
      "Power Island folgt den Betriebspunkten und liefert reale Parameter für den nächsten Zyklus zurück."
    ],
    hotspots: ["Photovoltaikmodul", "Generator", "Ladestation", "Energiespeichersystem", "Container und Handling"]
  },
  "zh-CN": {
    modalEyebrow: "Power Island 组件",
    youtubeWatch: "在 YouTube 上观看视频",
    flow: [
      "OPTIM-ON 收集天气预报、用电需求数据和当前运行状态。",
      "AI 预测光伏发电曲线和电力负载需求。",
      "MILP 最小化系统成本并计算最佳运行点。",
      "Power Island 按运行点工作，并返回实际参数用于下一周期。"
    ],
    hotspots: ["光伏面板", "发电机", "充电站", "储能系统", "集装箱与搬运"]
  },
  ru: {
    modalEyebrow: "Компоненты Power Island",
    youtubeWatch: "Смотреть видео на YouTube",
    flow: [
      "OPTIM-ON собирает прогнозы погоды, данные спроса и рабочие состояния.",
      "ИИ-прогнозирование оценивает профили фотоэлектрической генерации и электрические нагрузки.",
      "MILP минимизирует системные затраты и рассчитывает оптимальные рабочие точки.",
      "Power Island следует рабочим точкам и возвращает реальные параметры для следующего цикла."
    ],
    hotspots: ["Фотоэлектрическая панель", "Генератор", "Зарядная станция", "Система хранения энергии", "Контейнер и перемещение"]
  }
};

Object.entries(supplementalTranslations).forEach(([language, values]) => {
  translations[language] = { ...translations[language], ...values };
});

const componentDetails = {
  photovoltaic: {
    title: "Photovoltaic panel",
    image: "assets/components/solar-panel.png",
    copy: "Power Island includes a Photovoltaic Roof system generating 7.4 kW, composed of 18 steel-series panels rated at 410W each. Several other models are available.",
    features: ["Peak shaving, grid forming and genset optimization", "Active and reactive power generation based on EMS configuration", "Increased self-consumption of AC-coupled photovoltaic energy"]
  },
  generator: {
    title: "Generator",
    image: "assets/components/generator.svg",
    copy: "The generator provides backup power when renewable production or stored energy is not enough, supporting continuity for demanding off-grid applications.",
    features: ["HVO-ready backup generation", "Supports battery recharge during low solar production", "Designed for continuity during peak loads"]
  },
  charging: {
    title: "Charging station",
    image: "assets/components/charging-station.svg",
    copy: "Power Island can integrate charging stations to serve electric vehicles, temporary charging points, fleets and mobile energy services.",
    features: ["Mobile EV charging capacity", "Useful for temporary or remote demand", "Integrated with the energy management system"]
  },
  storage: {
    title: "Energy storage system",
    image: "assets/components/energy-storage.svg",
    copy: "The energy storage system stabilizes power availability, stores renewable production and supports loads when demand rises.",
    features: ["High-efficiency battery storage", "Supports fast charge and discharge cycles", "Scalable capacity based on the selected configuration"]
  },
  handling: {
    title: "Container and handling",
    image: "assets/components/handling.png",
    copy: "Power Island is housed in a containerized structure designed for transport, positioning and protection of the integrated energy systems.",
    features: ["Standard container format", "Mobile and fast to deploy", "Designed for handling, transport and off-grid installation"]
  }
};

const setText = (selector, text) => {
  const element = document.querySelector(selector);
  if (element && text) element.textContent = text;
};

const setTexts = (selector, values) => {
  document.querySelectorAll(selector).forEach((element, index) => {
    if (values?.[index]) element.textContent = values[index];
  });
};

const setLabelTexts = (selector, values) => {
  document.querySelectorAll(selector).forEach((element, index) => {
    if (values?.[index] && element.childNodes[0]) {
      element.childNodes[0].textContent = `${values[index]} `;
    }
  });
};

const localizePage = () => {
  const t = translations[currentLanguage];
  if (!t) return;

  document.documentElement.lang = currentLanguage;
  document.title = t.title;
  document.querySelector("meta[name='description']")?.setAttribute("content", t.description);

  setTexts(".nav-links > .nav-link, .nav-links > .nav-cta", t.nav);
  setText(".language-select span", t.language);
  if (languageSwitch) languageSwitch.value = languageOptions[currentLanguage];

  setText(".hero .eyebrow", t.homeEyebrow);
  setText(".hero h1", t.homeTitle);
  setText(".hero-copy", t.homeCopy);
  setTexts(".hero-actions .button", [t.homePrimary, t.homeSecondary]);
  setText(".split .eyebrow", t.introEyebrow);
  setText(".split h2", t.introTitle);
  setTexts(".lead-copy p", [t.introP1, t.introP2]);
  setText(".video-copy .eyebrow", t.videoEyebrow);
  setText(".video-fallback span", t.watchVideo);
  setText(".config-copy h2", t.configTitle);
  setText(".config-lead", t.configLead);
  const hotspotHint = document.querySelector(".hotspot-hint");
  if (hotspotHint) hotspotHint.innerHTML = `<span></span>${t.hotspotHint}`;
  setText(".optimon .eyebrow", t.optimonEyebrow);
  setText(".optimon h2", t.optimonTitle);
  setText(".optimon p:not(.eyebrow)", t.optimonCopy);
  setTexts(".flow span", t.flow);
  document.querySelectorAll(".hotspot").forEach((hotspot, index) => {
    if (!t.hotspots?.[index]) return;
    hotspot.setAttribute("aria-label", t.hotspots[index]);
    hotspot.dataset.title = t.hotspots[index];
    const label = hotspot.querySelector("span");
    if (label) label.textContent = t.hotspots[index];
  });
  setText(".partners .eyebrow", t.partners);

  setText(".about-bg .eyebrow", t.aboutEyebrow);
  setText(".about-bg h1", t.aboutTitle);
  setText(".about-logo-card span", t.since);
  setText(".about-copy .eyebrow", t.exp);
  setText(".about-copy h2", t.aboutHeading);
  setTexts(".about-copy > p:not(.eyebrow)", [t.aboutP1, t.aboutP2]);
  setText(".about-actions .button", t.brochure);
  setText("#about .section-heading .eyebrow", t.passion);
  setText("#about .section-heading h2", t.expertise);
  document.querySelectorAll("#about .context-grid article").forEach((article, index) => {
    const card = t.aboutCards?.[index];
    if (!card) return;
    const heading = article.querySelector("h3");
    const copy = article.querySelector("p");
    if (heading) heading.textContent = card[0];
    if (copy) copy.textContent = card[1];
  });

  setText(".pro-bg .eyebrow", t.proEyebrow);
  setText(".pro-specs .section-heading h2", t.proHeading);
  setText(".light-bg .eyebrow", t.proEyebrow);
  setText(".light-specs .section-heading h2", t.lightHeading);

  setText(".contexts-bg .eyebrow", t.contextsEyebrow);
  setText(".contexts-bg h1", t.contextsTitle);
  setText("#contexts .lead-copy", t.contextsLead);
  document.querySelectorAll(".use-case-card").forEach((card, index) => {
    const content = t.contextCards?.[index];
    if (!content) return;
    const heading = card.querySelector("h3");
    const copy = card.querySelector("p");
    if (heading) heading.textContent = content[0];
    if (copy) copy.textContent = content[1];
  });
  setTexts(".use-case-card button", Array.from({ length: 6 }, () => t.explore));

  setText(".faq-bg h1", t.faqTitle);
  setText(".faq-aside .eyebrow", t.faqGuide);
  setText(".faq-aside h2", t.faqGuideTitle);
  setText(".detail-panel > .eyebrow", t.modalEyebrow);

  setText(".contact-bg .eyebrow", t.contactEyebrow);
  setText(".contact-bg h1", t.contactTitle);
  setText(".contact-copy h2", t.contactHeading);
  const contactCopy = document.querySelector(".contact-copy p");
  if (contactCopy) contactCopy.innerHTML = t.contactCopy.replace("sales@powerisland.it", '<a href="mailto:sales@powerisland.it">sales@powerisland.it</a>').replace("+39 340 0013447", '<a href="tel:+393400013447">+39 340 0013447</a>');
  setLabelTexts(".contact-form label:not(.consent)", t.form.slice(0, 5));
  setText(".contact-form .consent span", t.form[5]);
  setText(".contact-form button", t.form[6]);
  setText(".footer div:first-child p", t.footerHeadquarters);
  setText(".footer div:last-child p:first-child", t.footerSales);
};

const useCaseDetails = {
  charging: {
    title: "Charging Station",
    image: "assets/components/charging-station.svg",
    videoId: "_gBaIJO3ZmM",
    copy: "Power Island features EV charging stations starting from 12.5 kW three-phase, suitable for electric vehicles. It can support a Basic line and a Professional line, also available in an AI-managed version.",
    features: ["Temporary charging capacity without permanent grid works", "Suitable for fleets, events and remote locations", "AI-managed Professional line available"]
  },
  emergency: {
    title: "Emergency Management",
    image: "assets/contexts/emergency-detail.png",
    copy: "Power Island is a dependable solution for areas hit by natural disasters, crisis zones, emergency operations and large temporary events requiring robust energy infrastructure.",
    features: ["Immediate backup power during grid failures", "Portable structure for fast deployment", "Resilient operation in extreme contexts"]
  },
  medical: {
    title: "Medical Center Power Supply",
    image: "assets/contexts/medical-detail.png",
    copy: "Power Island is designed for continuous, reliable power supply for mobile medical units and healthcare operations in remote or emergency environments.",
    features: ["Stable energy for mobile healthcare", "Ready to operate in remote areas", "Supports continuity where power is mission-critical"]
  },
  water: {
    title: "Water Treatment",
    image: "assets/contexts/water-detail.png",
    copy: "Power Island can power advanced water purification and desalination systems, helping secure safe and sustainable water supply in remote or challenging environments.",
    features: ["Energy autonomy for purification systems", "Supports isolated communities and water emergencies", "Compatible with renewable-source operation"]
  },
  worksite: {
    title: "Worksite Applications",
    image: "assets/contexts/worksite-detail.png",
    copy: "Power Island is an ideal energy source for mobile offices, large construction sites and highway infrastructure projects, delivering stable off-grid energy without main-grid connection.",
    features: ["Stable power for non-electrified sites", "Reduces setup time for temporary operations", "Supports mobile offices and heavy-duty site needs"]
  },
  datacenter: {
    title: "Data Center",
    image: "assets/contexts/datacenter-detail.png",
    copy: "Power Island is a modular, autonomous power solution designed to ensure continuous and reliable electricity supply for data centers, even under demanding conditions.",
    features: ["Redundancy for operational continuity", "Intelligent load management", "Useful for temporary, expanding or remote data centers"]
  }
};

const localizedDetails = {
  it: {
    components: {
      photovoltaic: { title: "Pannello fotovoltaico", copy: "Power Island integra un tetto fotovoltaico da 7,4 kW composto da 18 pannelli serie steel da 410 W ciascuno. Sono disponibili anche altri modelli.", features: ["Peak shaving, grid forming e ottimizzazione del gruppo elettrogeno", "Generazione di potenza attiva e reattiva secondo configurazione EMS", "Maggiore autoconsumo dell'energia fotovoltaica AC-coupled"] },
      generator: { title: "Generatore", copy: "Il generatore fornisce energia di backup quando la produzione rinnovabile o l'energia accumulata non sono sufficienti, garantendo continuità nelle applicazioni off-grid più esigenti.", features: ["Generazione di backup HVO-ready", "Supporta la ricarica delle batterie in caso di bassa produzione solare", "Progettato per continuità durante i picchi di carico"] },
      charging: { title: "Stazione di ricarica", copy: "Power Island può integrare stazioni di ricarica per veicoli elettrici, punti temporanei, flotte e servizi energetici mobili.", features: ["Capacità di ricarica EV mobile", "Utile per domanda temporanea o remota", "Integrata con il sistema di gestione energetica"] },
      storage: { title: "Sistema di accumulo energetico", copy: "Il sistema di accumulo stabilizza la disponibilità di energia, immagazzina la produzione rinnovabile e supporta i carichi quando la domanda aumenta.", features: ["Accumulo batterie ad alta efficienza", "Supporta cicli rapidi di carica e scarica", "Capacità scalabile in base alla configurazione"] },
      handling: { title: "Container e movimentazione", copy: "Power Island è alloggiata in una struttura containerizzata progettata per trasporto, posizionamento e protezione dei sistemi energetici integrati.", features: ["Formato container standard", "Mobile e rapida da installare", "Progettata per movimentazione, trasporto e installazione off-grid"] }
    },
    useCases: {
      charging: { title: "Charging Station", copy: "Power Island integra stazioni di ricarica EV a partire da 12,5 kW trifase, adatte ai veicoli elettrici. Può supportare una linea Basic e una linea Professional, anche in versione gestita da AI.", features: ["Capacità di ricarica temporanea senza opere di rete permanenti", "Adatta a flotte, eventi e località remote", "Linea Professional gestita da AI disponibile"] },
      emergency: { title: "Emergency Management", copy: "Power Island è una soluzione affidabile per aree colpite da disastri naturali, zone di crisi, operazioni di emergenza e grandi eventi temporanei che richiedono infrastrutture energetiche robuste.", features: ["Backup immediato durante blackout", "Struttura portatile per deployment rapido", "Operatività resiliente in contesti estremi"] },
      medical: { title: "Medical Center Power Supply", copy: "Power Island è progettata per fornire energia continua e affidabile a unità mediche mobili e operazioni sanitarie in ambienti remoti o di emergenza.", features: ["Energia stabile per sanità mobile", "Pronta a operare in aree remote", "Supporta continuità dove l'energia è critica"] },
      water: { title: "Water Treatment", copy: "Power Island può alimentare sistemi avanzati di purificazione e desalinizzazione dell'acqua, contribuendo a garantire forniture idriche sicure e sostenibili in contesti remoti o difficili.", features: ["Autonomia energetica per sistemi di purificazione", "Supporto a comunità isolate ed emergenze idriche", "Compatibile con funzionamento da fonti rinnovabili"] },
      worksite: { title: "Worksite Applications", copy: "Power Island è una fonte energetica ideale per uffici mobili, grandi cantieri e infrastrutture stradali, con energia off-grid stabile senza collegamento alla rete principale.", features: ["Energia stabile per siti non elettrificati", "Riduce i tempi di setup temporaneo", "Supporta uffici mobili e carichi gravosi"] },
      datacenter: { title: "Data Center", copy: "Power Island è una soluzione modulare e autonoma pensata per assicurare alimentazione continua e affidabile ai data center anche in condizioni impegnative.", features: ["Ridondanza per continuità operativa", "Gestione intelligente dei carichi", "Utile per data center temporanei, in espansione o remoti"] }
    }
  },
  fr: {
    components: {
      photovoltaic: { title: "Panneau photovoltaïque", copy: "Power Island intègre un toit photovoltaïque de 7,4 kW composé de 18 panneaux steel-series de 410 W chacun. Plusieurs autres modèles sont disponibles.", features: ["Peak shaving, grid forming et optimisation du groupe électrogène", "Production de puissance active et réactive selon la configuration EMS", "Autoconsommation accrue de l'énergie photovoltaïque AC-coupled"] },
      generator: { title: "Générateur", copy: "Le générateur fournit une énergie de secours lorsque la production renouvelable ou l'énergie stockée ne suffit pas, assurant la continuité des applications off-grid exigeantes.", features: ["Génération de secours compatible HVO", "Recharge les batteries lors d'une faible production solaire", "Conçu pour la continuité lors des pics de charge"] },
      charging: { title: "Station de recharge", copy: "Power Island peut intégrer des stations de recharge pour véhicules électriques, points temporaires, flottes et services d'énergie mobile.", features: ["Capacité de recharge EV mobile", "Utile pour une demande temporaire ou distante", "Intégrée au système de gestion énergétique"] },
      storage: { title: "Système de stockage d'énergie", copy: "Le système de stockage stabilise la disponibilité d'énergie, stocke la production renouvelable et soutient les charges lorsque la demande augmente.", features: ["Stockage batterie haute efficacité", "Cycles rapides de charge et décharge", "Capacité évolutive selon la configuration"] },
      handling: { title: "Conteneur et manutention", copy: "Power Island est intégrée dans une structure conteneurisée conçue pour le transport, le positionnement et la protection des systèmes énergétiques.", features: ["Format conteneur standard", "Mobile et rapide à déployer", "Conçue pour la manutention, le transport et l'installation off-grid"] }
    }
  },
  es: {
    components: {
      photovoltaic: { title: "Panel fotovoltaico", copy: "Power Island integra un sistema fotovoltaico en el techo de 7,4 kW, compuesto por 18 paneles steel-series de 410 W cada uno. Hay otros modelos disponibles.", features: ["Peak shaving, grid forming y optimización del grupo electrógeno", "Generación de potencia activa y reactiva según configuración EMS", "Mayor autoconsumo de energía fotovoltaica AC-coupled"] },
      generator: { title: "Generador", copy: "El generador proporciona energía de respaldo cuando la producción renovable o la energía almacenada no son suficientes, garantizando continuidad en aplicaciones off-grid exigentes.", features: ["Generación de respaldo HVO-ready", "Soporta la recarga de baterías con baja producción solar", "Diseñado para continuidad durante picos de carga"] },
      charging: { title: "Estación de carga", copy: "Power Island puede integrar estaciones de carga para vehículos eléctricos, puntos temporales, flotas y servicios energéticos móviles.", features: ["Capacidad de carga EV móvil", "Útil para demanda temporal o remota", "Integrada con el sistema de gestión energética"] },
      storage: { title: "Sistema de almacenamiento de energía", copy: "El sistema de almacenamiento estabiliza la disponibilidad de energía, almacena la producción renovable y soporta las cargas cuando aumenta la demanda.", features: ["Almacenamiento con baterías de alta eficiencia", "Soporta ciclos rápidos de carga y descarga", "Capacidad escalable según la configuración"] },
      handling: { title: "Contenedor y manipulación", copy: "Power Island está alojada en una estructura contenedorizada diseñada para transporte, posicionamiento y protección de los sistemas energéticos integrados.", features: ["Formato de contenedor estándar", "Móvil y rápida de desplegar", "Diseñada para manipulación, transporte e instalación off-grid"] }
    },
    useCases: {
      charging: { title: "Charging Station", copy: "Power Island integra estaciones de carga EV desde 12,5 kW trifásicos, adecuadas para vehículos eléctricos. Puede soportar una línea Basic y una línea Professional, también disponible con gestión por IA.", features: ["Capacidad de carga temporal sin obras de red permanentes", "Adecuada para flotas, eventos y ubicaciones remotas", "Línea Professional gestionada por IA disponible"] },
      emergency: { title: "Emergency Management", copy: "Power Island es una solución fiable para zonas afectadas por desastres naturales, áreas de crisis, operaciones de emergencia y grandes eventos temporales que requieren infraestructura energética robusta.", features: ["Respaldo inmediato durante fallos de red", "Estructura portátil para despliegue rápido", "Operación resiliente en contextos extremos"] },
      medical: { title: "Medical Center Power Supply", copy: "Power Island está diseñada para proporcionar alimentación continua y fiable a unidades médicas móviles y operaciones sanitarias en entornos remotos o de emergencia.", features: ["Energía estable para sanidad móvil", "Lista para operar en áreas remotas", "Soporta continuidad donde la energía es crítica"] },
      water: { title: "Water Treatment", copy: "Power Island puede alimentar sistemas avanzados de purificación y desalinización de agua, ayudando a garantizar suministro seguro y sostenible en entornos remotos o difíciles.", features: ["Autonomía energética para sistemas de purificación", "Soporte a comunidades aisladas y emergencias hídricas", "Compatible con operación desde fuentes renovables"] },
      worksite: { title: "Worksite Applications", copy: "Power Island es una fuente de energía ideal para oficinas móviles, grandes obras e infraestructuras viarias, con energía off-grid estable sin conexión a la red principal.", features: ["Energía estable para sitios no electrificados", "Reduce tiempos de instalación temporal", "Soporta oficinas móviles y cargas exigentes"] },
      datacenter: { title: "Data Center", copy: "Power Island es una solución modular y autónoma diseñada para asegurar suministro eléctrico continuo y fiable para data centers, incluso en condiciones exigentes.", features: ["Redundancia para continuidad operativa", "Gestión inteligente de cargas", "Útil para data centers temporales, en expansión o remotos"] }
    }
  },
  de: {
    components: {
      photovoltaic: { title: "Photovoltaikmodul", copy: "Power Island umfasst ein Photovoltaik-Dachsystem mit 7,4 kW, bestehend aus 18 Steel-Series-Modulen mit je 410 W. Weitere Modelle sind verfügbar.", features: ["Peak Shaving, Grid Forming und Genset-Optimierung", "Aktive und reaktive Leistung nach EMS-Konfiguration", "Höherer Eigenverbrauch AC-gekoppelter PV-Energie"] },
      generator: { title: "Generator", copy: "Der Generator liefert Backup-Strom, wenn erneuerbare Erzeugung oder gespeicherte Energie nicht ausreichen, und sichert die Kontinuität anspruchsvoller Off-Grid-Anwendungen.", features: ["HVO-fähige Backup-Erzeugung", "Unterstützt Batterieladung bei geringer Solarproduktion", "Für Kontinuität bei Lastspitzen ausgelegt"] },
      charging: { title: "Ladestation", copy: "Power Island kann Ladestationen für Elektrofahrzeuge, temporäre Ladepunkte, Flotten und mobile Energiedienste integrieren.", features: ["Mobile EV-Ladekapazität", "Geeignet für temporäre oder abgelegene Nachfrage", "In das Energiemanagementsystem integriert"] },
      storage: { title: "Energiespeichersystem", copy: "Das Energiespeichersystem stabilisiert die Energieverfügbarkeit, speichert erneuerbare Produktion und unterstützt Lasten bei steigender Nachfrage.", features: ["Hocheffizienter Batteriespeicher", "Schnelle Lade- und Entladezyklen", "Skalierbare Kapazität je nach Konfiguration"] },
      handling: { title: "Container und Handling", copy: "Power Island ist in einer containerisierten Struktur untergebracht, die für Transport, Positionierung und Schutz der integrierten Energiesysteme ausgelegt ist.", features: ["Standard-Containerformat", "Mobil und schnell einsetzbar", "Für Handling, Transport und Off-Grid-Installation entwickelt"] }
    }
  },
  "zh-CN": {
    components: {
      photovoltaic: { title: "光伏面板", copy: "Power Island 配备 7.4 kW 光伏屋顶系统，由 18 块 410W steel-series 面板组成，也可选择其他型号。", features: ["削峰、构网和发电机组优化", "根据 EMS 配置输出有功和无功功率", "提高 AC 耦合光伏能源的自用率"] },
      generator: { title: "发电机", copy: "当可再生能源发电或储能不足时，发电机提供备用电力，保障高要求离网应用的连续运行。", features: ["HVO-ready 备用发电", "太阳能产量低时支持电池充电", "为负载峰值期间的连续供电而设计"] },
      charging: { title: "充电站", copy: "Power Island 可集成电动汽车充电站，用于临时充电点、车队和移动能源服务。", features: ["移动 EV 充电能力", "适用于临时或偏远需求", "与能源管理系统集成"] },
      storage: { title: "储能系统", copy: "储能系统稳定电力可用性，存储可再生能源，并在需求上升时支撑负载。", features: ["高效率电池储能", "支持快速充放电循环", "容量可根据配置扩展"] },
      handling: { title: "集装箱与搬运", copy: "Power Island 集成在集装箱结构中，便于运输、定位并保护内部能源系统。", features: ["标准集装箱格式", "移动式且部署快速", "适用于搬运、运输和离网安装"] }
    }
  },
  ru: {
    components: {
      photovoltaic: { title: "Фотоэлектрическая панель", copy: "Power Island включает фотоэлектрическую крышу мощностью 7,4 кВт из 18 панелей серии steel по 410 Вт каждая. Доступны и другие модели.", features: ["Peak shaving, grid forming и оптимизация генератора", "Активная и реактивная мощность по конфигурации EMS", "Повышенное собственное потребление AC-coupled фотоэлектрической энергии"] },
      generator: { title: "Генератор", copy: "Генератор обеспечивает резервное питание, когда возобновляемой генерации или накопленной энергии недостаточно, поддерживая непрерывность сложных автономных применений.", features: ["Резервная генерация HVO-ready", "Поддержка зарядки батарей при низкой солнечной генерации", "Разработан для непрерывности при пиковых нагрузках"] },
      charging: { title: "Зарядная станция", copy: "Power Island может интегрировать зарядные станции для электромобилей, временных точек зарядки, автопарков и мобильных энергетических сервисов.", features: ["Мобильная зарядка EV", "Подходит для временного или удаленного спроса", "Интегрирована с системой управления энергией"] },
      storage: { title: "Система хранения энергии", copy: "Система хранения стабилизирует доступность энергии, сохраняет возобновляемую генерацию и поддерживает нагрузки при росте спроса.", features: ["Высокоэффективное батарейное хранение", "Быстрые циклы зарядки и разрядки", "Масштабируемая емкость в зависимости от конфигурации"] },
      handling: { title: "Контейнер и перемещение", copy: "Power Island размещается в контейнерной конструкции, разработанной для транспортировки, позиционирования и защиты интегрированных энергетических систем.", features: ["Стандартный формат контейнера", "Мобильность и быстрый ввод в работу", "Для перемещения, транспорта и автономной установки"] }
    }
  }
};

localizedDetails.fr.useCases = {
  charging: { title: "Charging Station", copy: "Power Island intègre des stations de recharge EV à partir de 12,5 kW triphasé, adaptées aux véhicules électriques. Elle peut prendre en charge une ligne Basic et une ligne Professional, également disponible avec gestion par IA.", features: ["Recharge temporaire sans travaux réseau permanents", "Adaptée aux flottes, événements et sites isolés", "Ligne Professional gérée par IA disponible"] },
  emergency: { title: "Emergency Management", copy: "Power Island est une solution fiable pour les zones touchées par des catastrophes naturelles, les zones de crise, les opérations d'urgence et les grands événements temporaires nécessitant une infrastructure énergétique robuste.", features: ["Secours immédiat lors des coupures réseau", "Structure portable pour un déploiement rapide", "Fonctionnement résilient dans les contextes extrêmes"] },
  medical: { title: "Medical Center Power Supply", copy: "Power Island fournit une alimentation continue et fiable pour les unités médicales mobiles et les opérations de santé en environnements isolés ou d'urgence.", features: ["Énergie stable pour la santé mobile", "Prête à fonctionner en zones isolées", "Soutient la continuité lorsque l'énergie est critique"] },
  water: { title: "Water Treatment", copy: "Power Island peut alimenter des systèmes avancés de purification et de dessalement de l'eau afin de sécuriser un approvisionnement durable dans les zones difficiles.", features: ["Autonomie énergétique pour la purification", "Soutien aux communautés isolées et urgences hydriques", "Compatible avec les sources renouvelables"] },
  worksite: { title: "Worksite Applications", copy: "Power Island est une source d'énergie idéale pour bureaux mobiles, grands chantiers et infrastructures routières, avec une énergie off-grid stable sans raccordement principal.", features: ["Énergie stable pour sites non électrifiés", "Réduit les temps de mise en place temporaire", "Soutient bureaux mobiles et charges lourdes"] },
  datacenter: { title: "Data Center", copy: "Power Island est une solution modulaire et autonome conçue pour assurer une alimentation continue et fiable des data centers, même en conditions exigeantes.", features: ["Redondance pour la continuité opérationnelle", "Gestion intelligente des charges", "Utile pour data centers temporaires, en expansion ou isolés"] }
};
localizedDetails.de.useCases = {
  charging: { title: "Charging Station", copy: "Power Island bietet EV-Ladestationen ab 12,5 kW dreiphasig für Elektrofahrzeuge. Unterstützt werden Basic- und Professional-Linien, auch als KI-gesteuerte Version.", features: ["Temporäre Ladekapazität ohne dauerhafte Netzarbeiten", "Geeignet für Flotten, Events und abgelegene Standorte", "KI-gesteuerte Professional-Linie verfügbar"] },
  emergency: { title: "Emergency Management", copy: "Power Island ist eine verlässliche Lösung für Naturkatastrophen, Krisenzonen, Notfalleinsätze und große temporäre Veranstaltungen mit robustem Energiebedarf.", features: ["Sofortige Backup-Leistung bei Netzausfällen", "Portable Struktur für schnellen Einsatz", "Robuster Betrieb in extremen Kontexten"] },
  medical: { title: "Medical Center Power Supply", copy: "Power Island liefert kontinuierliche und zuverlässige Energie für mobile medizinische Einheiten und Gesundheitsanwendungen in abgelegenen oder Notfallumgebungen.", features: ["Stabile Energie für mobile Medizin", "Bereit für abgelegene Gebiete", "Sichert Kontinuität bei kritischem Strombedarf"] },
  water: { title: "Water Treatment", copy: "Power Island kann moderne Wasseraufbereitungs- und Entsalzungssysteme versorgen und so eine sichere, nachhaltige Wasserversorgung in schwierigen Umgebungen unterstützen.", features: ["Energieautonomie für Aufbereitungssysteme", "Unterstützt isolierte Gemeinschaften und Wasser-Notfälle", "Kompatibel mit erneuerbarem Betrieb"] },
  worksite: { title: "Worksite Applications", copy: "Power Island ist eine ideale Energiequelle für mobile Büros, Großbaustellen und Straßeninfrastruktur mit stabiler Off-Grid-Energie ohne Hauptnetzanschluss.", features: ["Stabile Energie für nicht elektrifizierte Standorte", "Reduziert temporäre Einrichtungszeiten", "Unterstützt mobile Büros und schwere Lasten"] },
  datacenter: { title: "Data Center", copy: "Power Island ist eine modulare, autonome Lösung für kontinuierliche und zuverlässige Stromversorgung von Rechenzentren, auch unter anspruchsvollen Bedingungen.", features: ["Redundanz für Betriebskontinuität", "Intelligentes Lastmanagement", "Nützlich für temporäre, wachsende oder abgelegene Rechenzentren"] }
};
localizedDetails["zh-CN"].useCases = {
  charging: { title: "Charging Station", copy: "Power Island 配备从 12.5 kW 三相起的 EV 充电站，适用于电动汽车。可支持 Basic 与 Professional 系列，也可提供 AI 管理版本。", features: ["无需永久电网工程的临时充电能力", "适用于车队、活动和偏远地点", "可提供 AI 管理的 Professional 系列"] },
  emergency: { title: "Emergency Management", copy: "Power Island 是自然灾害、危机区域、应急行动和大型临时活动中的可靠能源解决方案。", features: ["电网故障时提供即时备用电力", "便携结构便于快速部署", "适用于极端环境的韧性运行"] },
  medical: { title: "Medical Center Power Supply", copy: "Power Island 为移动医疗单元以及偏远或应急环境中的医疗运营提供连续、可靠的电力。", features: ["为移动医疗提供稳定能源", "可在偏远地区快速运行", "支持关键场景下的供电连续性"] },
  water: { title: "Water Treatment", copy: "Power Island 可为先进的净水和海水淡化系统供电，帮助在偏远或困难环境中保障安全、可持续的供水。", features: ["净化系统能源自主", "支持孤立社区和用水应急", "兼容可再生能源运行"] },
  worksite: { title: "Worksite Applications", copy: "Power Island 是移动办公室、大型工地和道路基础设施项目的理想能源来源，无需主电网即可提供稳定离网能源。", features: ["为未通电场地提供稳定电力", "减少临时部署时间", "支持移动办公室和重载需求"] },
  datacenter: { title: "Data Center", copy: "Power Island 是模块化、自主供电解决方案，可在严苛条件下为数据中心提供连续可靠的电力。", features: ["保障运行连续性的冗余能力", "智能负载管理", "适用于临时、扩展或偏远数据中心"] }
};
localizedDetails.ru.useCases = {
  charging: { title: "Charging Station", copy: "Power Island оснащается EV-зарядными станциями от 12,5 кВт трехфазного тока для электромобилей. Возможны линии Basic и Professional, включая версию с управлением ИИ.", features: ["Временная зарядка без постоянных сетевых работ", "Подходит для автопарков, мероприятий и удаленных локаций", "Доступна Professional-линия с управлением ИИ"] },
  emergency: { title: "Emergency Management", copy: "Power Island — надежное решение для зон стихийных бедствий, кризисных территорий, аварийных операций и крупных временных мероприятий.", features: ["Мгновенное резервное питание при сбоях сети", "Портативная структура для быстрого развертывания", "Устойчивость в экстремальных условиях"] },
  medical: { title: "Medical Center Power Supply", copy: "Power Island обеспечивает непрерывное и надежное питание мобильных медицинских подразделений и медицинских операций в удаленных или аварийных условиях.", features: ["Стабильная энергия для мобильной медицины", "Готовность к работе в удаленных районах", "Поддержка непрерывности при критичном питании"] },
  water: { title: "Water Treatment", copy: "Power Island может питать системы очистки и опреснения воды, помогая обеспечить безопасное и устойчивое водоснабжение в сложных условиях.", features: ["Энергоавтономность систем очистки", "Поддержка изолированных сообществ и водных ЧС", "Совместимость с возобновляемыми источниками"] },
  worksite: { title: "Worksite Applications", copy: "Power Island — идеальный источник энергии для мобильных офисов, крупных строительных площадок и дорожной инфраструктуры без подключения к основной сети.", features: ["Стабильная энергия для неэлектрифицированных площадок", "Сокращает время временной подготовки", "Поддерживает мобильные офисы и тяжелые нагрузки"] },
  datacenter: { title: "Data Center", copy: "Power Island — модульное автономное решение для непрерывного и надежного электроснабжения дата-центров даже в сложных условиях.", features: ["Резервирование для операционной непрерывности", "Интеллектуальное управление нагрузкой", "Полезно для временных, расширяемых или удаленных дата-центров"] }
};

const getLocalizedDetail = (type, key, fallback) => ({
  ...fallback,
  ...(localizedDetails[currentLanguage]?.[type]?.[key] || {})
});

const openDetail = (detail) => {
  detailImage.src = assetPath(detail.image);
  detailImage.alt = detail.title;
  if (detail.videoId) {
    const videoUrl = `https://www.youtube.com/watch?v=${detail.videoId}`;
    if (/^https?:$/.test(window.location.protocol)) {
      detailVideo.innerHTML = `
        <iframe
          src="https://www.youtube.com/embed/${detail.videoId}?rel=0&playsinline=1&origin=${encodeURIComponent(window.location.origin)}"
          title="${detail.title} video"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen; compute-pressure"
          allowfullscreen>
        </iframe>
      `;
    } else {
      detailVideo.innerHTML = `<a href="${videoUrl}" target="_blank" rel="noopener">${translations[currentLanguage]?.youtubeWatch || "Watch video on YouTube"}</a>`;
    }
    detailVideo.classList.add("is-visible");
  } else {
    detailVideo.innerHTML = "";
    detailVideo.classList.remove("is-visible");
  }
  detailTitle.textContent = detail.title;
  detailCopy.textContent = detail.copy;
  detailFeatures.innerHTML = detail.features.map((feature) => `<span>${feature}</span>`).join("");
  detailModal.classList.add("is-open");
  detailModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  detailPanel.focus?.();
};

const setPage = (pageName, updateHash = true) => {
  const target = document.querySelector(`[data-page="${pageName}"]`);
  if (!target) return;

  transition?.classList.add("is-running");

  window.setTimeout(() => {
    pages.forEach((page) => page.classList.toggle("is-active", page === target));
    pageLinks.forEach((link) => link.classList.toggle("is-active", link.dataset.pageLink === pageName));
    navLinks?.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
    window.scrollTo({ top: 0, behavior: "instant" });

    if (updateHash) {
      history.pushState(null, "", `#${pageName}`);
    }

  }, 180);

  window.setTimeout(() => transition?.classList.remove("is-running"), 520);
};

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

pageLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setPage(link.dataset.pageLink);
  });
});

faqLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

faqItems.forEach((item) => {
  const summary = item.querySelector("summary");
  const answer = item.querySelector("p");
  if (!summary || !answer) return;

  const setAnswerHeight = () => {
    item.style.setProperty("--faq-answer-height", `${answer.scrollHeight + 32}px`);
  };

  summary.addEventListener("click", (event) => {
    event.preventDefault();
    setAnswerHeight();

    if (item.open) {
      item.classList.add("is-closing");
      window.setTimeout(() => {
        item.open = false;
        item.classList.remove("is-closing");
      }, 380);
      return;
    }

    item.open = true;
    requestAnimationFrame(setAnswerHeight);
  });

  window.addEventListener("resize", setAnswerHeight, { passive: true });
});

window.addEventListener("popstate", () => {
  setPage(location.hash.replace("#", "") || "home", false);
});

hotspots.forEach((hotspot) => {
  hotspot.addEventListener("click", () => {
    const detail = getLocalizedDetail("components", hotspot.dataset.detail, componentDetails[hotspot.dataset.detail]);
    if (!detail) return;
    openDetail(detail);
  });
});

useCaseCards.forEach((card) => {
  card.addEventListener("click", () => {
    const detail = getLocalizedDetail("useCases", card.dataset.use, useCaseDetails[card.dataset.use]);
    if (detail) openDetail(detail);
  });
});

const closeDetailModal = () => {
  detailModal?.classList.remove("is-open");
  detailModal?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

languageSwitch?.addEventListener("change", () => {
  window.location.href = `${languageSwitch.value}${window.location.hash}`;
});

document.querySelectorAll(".modal-close, .modal-backdrop").forEach((button) => {
  button.addEventListener("click", closeDetailModal);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDetailModal();
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = contactForm.querySelector("button");
  button.textContent = "Request ready to send";
});

if (videoFrame && /^https?:$/.test(window.location.protocol)) {
  const videoId = videoFrame.dataset.youtubeId;
  videoFrame.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&playsinline=1&rel=0&origin=${encodeURIComponent(window.location.origin)}"
      title="Power Island video"
      referrerpolicy="strict-origin-when-cross-origin"
      allow="autoplay; encrypted-media; picture-in-picture; fullscreen; compute-pressure"
      allowfullscreen>
    </iframe>
  `;
}

const updateHeaderState = () => {
  siteHeader?.classList.toggle("is-scrolled", window.scrollY > 32);
};

window.addEventListener("scroll", () => {
  updateHeaderState();
}, { passive: true });
window.addEventListener("load", () => {
  localizePage();
  setPage(location.hash.replace("#", "") || "home", false);
  updateHeaderState();
});
