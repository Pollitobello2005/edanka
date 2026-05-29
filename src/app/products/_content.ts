import type { ProductPageContent } from '@/components/ProductPage';

export type ProductIndexItem = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
};

export const productIndex: ProductIndexItem[] = [
  {
    slug: 'pbx',
    title: 'PBX en la nube',
    description: 'Telefonía empresarial flexible con llamadas, videoconferencias e integraciones.',
    eyebrow: 'Comunicaciones unificadas',
  },
  {
    slug: 'ucontact',
    title: 'uContact',
    description: 'Contact center omnicanal con automatización, analítica y agentes en un solo lugar.',
    eyebrow: 'Contact center cloud',
  },
  {
    slug: 'ucaas',
    title: 'UCaaS',
    description: 'Plataforma todo-en-uno para llamadas, video, mensajería y apps.',
    eyebrow: 'Productividad unificada',
  },
  {
    slug: 'sip-trunking',
    title: 'SIP Trunking',
    description: 'Conecta tu PBX existente a la nube y reduce costos.',
    eyebrow: 'Infraestructura híbrida',
  },
  {
    slug: 'ccaas',
    title: 'CCaaS',
    description: 'Solución para centros de contacto con colas, IVR, grabación y reportes.',
    eyebrow: 'Customer experience',
  },
  {
    slug: 'agentes-ia',
    title: 'Agentes de IA',
    description: 'Agentes de voz inteligentes que atienden llamadas, agendan citas y califican prospectos 24/7.',
    eyebrow: 'IA conversacional de voz',
  },
];

export const pbxContent: ProductPageContent = {
  eyebrow: 'Comunicaciones unificadas',
  title: 'PBX en la nube',
  subtitle: 'Más que un conmutador telefónico, una verdadera plataforma de comunicaciones unificadas para tu empresa.',
  primaryAction: { label: 'Solicitar demo', href: '/agenda-reunion' },
  secondaryAction: { label: 'Ver solución', href: '#funcionalidades' },
  heroStats: [
    { value: '72 hrs', label: 'Implementación promedio' },
    { value: '100%', label: 'En la nube' },
    { value: '24/7', label: 'Disponibilidad para tu equipo' },
  ],
  heroHighlights: [
    'Telefonía desde navegador',
    'App móvil y escritorio',
    'Videoconferencias Huddle',
    'Integraciones con CRM',
  ],
  sections: [
    {
      eyebrow: 'Telefonía',
      title: 'Accede a tu PBX dondequiera que estés',
      description: 'Administra tus equipos, colabora y brinda soporte sin importar dónde te encuentres. Realiza y recibe llamadas desde cualquier dispositivo.',
      bullets: [
        'Llamadas desde navegador, app móvil o teléfono de escritorio.',
        'Operadora automática y enrutamiento inteligente de llamadas.',
        'Grabación, transferencia y correo de voz centralizado.',
      ],
      visualTitle: 'Experiencia de telefonía moderna',
      visualItems: ['Llamadas comerciales', 'Softphone web', 'Correo de voz', 'Rutas inteligentes'],
    },
    {
      eyebrow: 'Videoconferencias',
      title: 'Impulsa la productividad en reuniones virtuales',
      description: 'Conecta con tus equipos y clientes usando una videoconferencia incluida, sin suscripciones adicionales ni herramientas externas.',
      bullets: [
        'Grabación de video para seguimiento y capacitación.',
        'Compartición de pantalla y salas de descanso.',
        'Reuniones seguras y simples desde cualquier dispositivo.',
      ],
      visualTitle: 'Huddle integrado',
      visualItems: ['Video', 'Screen share', 'Breakout rooms', 'Reuniones seguras'],
      reverse: true,
    },
    {
      eyebrow: 'Integración',
      title: 'Mejora la eficiencia del flujo de trabajo',
      description: 'Integra tu sistema telefónico con herramientas existentes para optimizar procesos y crear flujos más estructurados.',
      bullets: [
        'Conecta con aplicaciones de productividad.',
        'Automatiza procesos con API abierta.',
        'Escala sin invertir en infraestructura adicional.',
      ],
      visualTitle: 'Flujo conectado',
      visualItems: ['CRM', 'API abierta', 'Automatización', 'Escalabilidad'],
    },
  ],
  featuresTitle: 'Características de PBX de última generación',
  featuresDescription: 'Gestiona tus comunicaciones, mejora la satisfacción del cliente y reduce costos con funciones pensadas para crecer.',
  features: [
    { title: 'Planes con llamadas ilimitadas', description: 'Llamadas a fijos y móviles en México, USA y Canadá, además de fijos de más de 26 países.' },
    { title: 'Web calling', description: 'Realiza y recibe llamadas desde tu computadora sin hardware adicional.' },
    { title: 'Aplicación móvil', description: 'Lleva contigo tu número comercial y trabaja desde cualquier lugar.' },
    { title: 'Operadora automática', description: 'Contesta y enruta llamadas con saludos personalizados y reglas inteligentes.' },
    { title: 'Colas y desvío', description: 'Mejora el servicio al cliente y nunca pierdas una llamada.' },
    { title: 'Grabación y reportes', description: 'Capacita a colaboradores y toma decisiones con información útil.' },
  ],
  benefitsTitle: 'Por qué elegir net2phone',
  benefitsDescription: 'Una solución rápida de desplegar, segura y fácil de escalar a la medida de tu negocio.',
  benefits: [
    { title: 'Activación rápida y simple', description: 'Solo necesitas una PC y conexión a internet para arrancar.' },
    { title: 'Seguridad y soporte', description: 'Infraestructura en la nube respaldada por soporte y buenas prácticas de seguridad.' },
    { title: 'Escalabilidad real', description: 'Agrega usuarios y funciones conforme crecen tus necesidades sin hardware adicional.' },
  ],
  faqTitle: 'Preguntas frecuentes sobre PBX en la nube',
  faqs: [
    { question: '¿Necesito comprar hardware?', answer: 'No. Puedes operar desde navegador, móvil o equipo de escritorio con una configuración sencilla.' },
    { question: '¿Es más económico que un sistema tradicional?', answer: 'Generalmente sí, porque reduces hardware, mantenimiento y complejidad operativa.' },
    { question: '¿Funciona para equipos remotos?', answer: 'Sí. La experiencia está pensada para trabajar desde cualquier lugar sin perder control ni visibilidad.' },
  ],
  finalTitle: 'Una PBX en la nube que crece contigo',
  finalDescription: 'Eleva la productividad, reduce costos y olvídate del mantenimiento con una solución diseñada para equipos modernos.',
};

export const ucontactContent: ProductPageContent = {
  eyebrow: 'Contact center cloud y omnicanal',
  title: 'uContact',
  subtitle: 'La solución en la nube para contact center que unifica voz, digital e inteligencia operativa en una sola plataforma.',
  primaryAction: { label: 'Hablar con un especialista', href: '/agenda-reunion' },
  secondaryAction: { label: 'Conocer funciones', href: '#funcionalidades' },
  heroStats: [
    { value: '300+', label: 'Reportes y métricas' },
    { value: '24/7', label: 'Atención y monitoreo' },
    { value: 'Omni', label: 'Canales unificados' },
  ],
  heroHighlights: [
    'Voice y omnicanalidad',
    'Automatización e IA',
    'Reportes en tiempo real',
    'Gestión de agentes',
  ],
  sections: [
    {
      eyebrow: 'Planes',
      title: 'Elige el plan de uContact que mejor se adapte a tu negocio',
      description: 'Dile adiós a las miles de pestañas abiertas y gestiona tus interacciones desde una sola ventana, con un enfoque de voz u omnicanal.',
      bullets: [
        'Voice: llamadas entrantes, salientes y campañas combinadas.',
        'Omnicanal: WhatsApp, chat web, correo y redes sociales.',
        'Una experiencia pensada para productividad y control.',
      ],
      visualTitle: 'Dos rutas, una sola plataforma',
      visualItems: ['Voice', 'Omnicanal', 'Productividad', 'Control'],
    },
    {
      eyebrow: 'Personalización',
      title: 'Una solución que se adapta a tu negocio',
      description: 'Utiliza herramientas de bajo código para crear flujos, formularios y reportes sin ser experto en programación.',
      bullets: [
        'Flujos de trabajo y formularios personalizados.',
        'Diseño para equipos que necesitan flexibilidad real.',
        'Implementación rápida y escalable.',
      ],
      visualTitle: 'Bajo código, alto impacto',
      visualItems: ['Workflows', 'Formularios', 'Personalización', 'Escala'],
      reverse: true,
    },
    {
      eyebrow: 'Analítica',
      title: 'Toma decisiones basadas en datos reales',
      description: 'Reportes personalizables y herramientas de monitoreo que te muestran el rendimiento de agentes y campañas en tiempo real.',
      bullets: [
        'Insights por canal, agente y campaña.',
        'Monitoreo en vivo y alertas omnicanal.',
        'Dashboards listos para decisiones operativas.',
      ],
      visualTitle: 'Información accionable',
      visualItems: ['Dashboards', 'Alertas', 'Reportes', 'Monitoreo'],
    },
    {
      eyebrow: 'Automatización',
      title: 'Automatizaciones para deleitar a tus clientes',
      description: 'Acelera las interacciones con bots impulsados por IA y automatizaciones que manejan preguntas frecuentes y transacciones.',
      bullets: [
        'Bots nativos y personalizables.',
        'Flujos de atención de voz y digital.',
        'Menos tareas manuales, más eficiencia.',
      ],
      visualTitle: 'Automatización e IA',
      visualItems: ['Bots', 'IA', 'Autoservicio', 'Eficiencia'],
      reverse: true,
    },
  ],
  featuresTitle: 'Funcionalidades de contact center en la nube',
  featuresDescription: 'Gestiona todas tus interacciones de voz y digitales con una solución omnicanal diseñada para equipos exigentes.',
  features: [
    { title: 'Campañas entrantes, salientes y mixtas', description: 'Brinda experiencias de la más alta calidad en cada interacción de voz.' },
    { title: 'Distribución automática de llamadas', description: 'Enruta llamadas al agente o departamento más apropiado.' },
    { title: 'IVR y TTS', description: 'Permite autoservicio y experiencia guiada desde el inicio.' },
    { title: 'Bandeja unificada', description: 'Conecta con clientes en el canal digital de su preferencia.' },
    { title: 'Chat bots y SMS', description: 'Automatiza interacciones digitales y campañas masivas.' },
    { title: 'Workforce management', description: 'Graba interacciones, realiza entrenamiento y habilita encuestas.' },
  ],
  benefitsTitle: 'Por qué elegir uContact',
  benefitsDescription: 'Una solución accesible, escalable y flexible para crecer con tus operaciones.',
  benefits: [
    { title: 'Accesible y transparente', description: 'Planes claros y eficientes para contact centers que necesitan control de costos.' },
    { title: 'Flexible para crecer', description: 'Añade usuarios, funciones y campañas conforme evoluciona tu negocio.' },
    { title: 'Trabaja desde donde quieras', description: 'Accede desde navegador o app y opera de forma remota sin fricción.' },
  ],
  faqTitle: 'Preguntas frecuentes sobre contact center en la nube',
  faqs: [
    { question: '¿Qué es un contact center omnicanal?', answer: 'Es una plataforma que integra voz y canales digitales para atender en un solo lugar.' },
    { question: '¿Cómo mejora la experiencia del cliente?', answer: 'Unifica canales, automatiza tareas repetitivas y ayuda a enrutar mejor cada interacción.' },
    { question: '¿Sirve para equipos remotos?', answer: 'Sí. Está pensado para operar desde cualquier lugar con visibilidad y control.' },
  ],
  finalTitle: 'Haz que cada interacción cuente con uContact',
  finalDescription: 'Potencia cada interacción con una solución omnicanal de última generación, hecha para crecer contigo.',
};

export const ucaasContent: ProductPageContent = {
  eyebrow: 'UCaaS',
  title: 'Solución todo-en-uno de comunicación empresarial',
  subtitle: 'Llamadas, video, mensajería y apps unificadas para equipos que necesitan colaborar sin complejidad.',
  primaryAction: { label: 'Comenzar', href: '/agenda-reunion' },
  secondaryAction: { label: 'Ver más', href: '/products' },
  heroStats: [
    { value: '4 canales', label: 'En una sola plataforma' },
    { value: 'Web + mobile', label: 'Trabaja donde sea' },
    { value: '72 hrs', label: 'Tiempo de puesta en marcha' },
  ],
  heroHighlights: ['Llamadas empresariales', 'Videoconferencias', 'Mensajería', 'Apps móvil y escritorio'],
  sections: [
    {
      eyebrow: 'Comunicación unificada',
      title: 'Centraliza voz, video y mensajería',
      description: 'Una plataforma para coordinar tu equipo, atender clientes y evitar herramientas aisladas o duplicadas.',
      bullets: ['Llamadas empresariales con control y trazabilidad.', 'Videoconferencias integradas.', 'Mensajería interna y externa en un mismo lugar.'],
      visualTitle: 'Todo en un solo hub',
      visualItems: ['Voz', 'Video', 'Mensajes', 'Apps'],
    },
  ],
  featuresTitle: 'Lo que incluye UCaaS',
  featuresDescription: 'Una suite de colaboración ligera, moderna y lista para equipos distribuidos.',
  features: [
    { title: 'Softphone web', description: 'Atiende desde navegador sin instalar complejidad innecesaria.' },
    { title: 'Mensajería', description: 'Mantén conversaciones internas y con clientes bajo una misma experiencia.' },
    { title: 'Video', description: 'Reuniones rápidas con equipos internos o clientes.' },
    { title: 'Apps', description: 'Usa la solución desde escritorio y móvil.' },
    { title: 'Administración', description: 'Control de usuarios, roles y ajustes con facilidad.' },
    { title: 'Escalabilidad', description: 'Agrega usuarios a medida que tu operación crece.' },
  ],
  benefitsTitle: 'Por qué usar UCaaS',
  benefitsDescription: 'Menos herramientas dispersas, más colaboración y mejor experiencia para tu equipo.',
  benefits: [
    { title: 'Una sola plataforma', description: 'Reduce fricción entre llamadas, video y mensajería.' },
    { title: 'Movilidad', description: 'Tu equipo trabaja igual de bien en escritorio o móvil.' },
    { title: 'Más productividad', description: 'Menos contexto perdido, más enfoque en resolver.' },
  ],
  faqTitle: 'Preguntas frecuentes sobre UCaaS',
  faqs: [
    { question: '¿UCaaS reemplaza varias herramientas?', answer: 'Sí. La idea es concentrar comunicación y colaboración en una sola plataforma.' },
    { question: '¿Sirve para PyMEs?', answer: 'Sí, está pensado para equipos que necesitan crecer sin complicarse.' },
    { question: '¿Puedo usarlo en móvil?', answer: 'Sí. La experiencia está pensada para escritorio y dispositivos móviles.' },
  ],
  finalTitle: 'Comunicación empresarial más simple',
  finalDescription: 'Conecta llamadas, video y mensajería en una sola experiencia diseñada para trabajar mejor.',
};

export const sipTrunkingContent: ProductPageContent = {
  eyebrow: 'SIP Trunking',
  title: 'Conecta tu PBX a la nube',
  subtitle: 'Una solución para conectar sistemas telefónicos existentes a VoIP y modernizar tu infraestructura sin reemplazarlo todo.',
  primaryAction: { label: 'Comenzar', href: '/agenda-reunion' },
  secondaryAction: { label: 'Ver más', href: '/products' },
  heroStats: [
    { value: 'Menos costo', label: 'Optimiza líneas tradicionales' },
    { value: 'Más control', label: 'Sigue usando tu PBX' },
    { value: 'Escalable', label: 'Crecimiento por demanda' },
  ],
  heroHighlights: ['PBX existente', 'Reemplazo de líneas', 'Escalabilidad', 'Ahorro operativo'],
  sections: [
    {
      eyebrow: 'Integración',
      title: 'Lleva tu infraestructura telefónica a la nube',
      description: 'Mantén tu PBX actual y conéctalo a servicios de voz modernos para reducir costos y ganar flexibilidad.',
      bullets: ['Conexión con PBX existente.', 'Menor dependencia de líneas tradicionales.', 'Escala conforme cambie tu demanda.'],
      visualTitle: 'Transición sin reemplazo total',
      visualItems: ['PBX', 'VoIP', 'Canales', 'Escala'],
    },
  ],
  featuresTitle: 'Ventajas del SIP Trunking',
  featuresDescription: 'La opción ideal para modernizar comunicaciones sin tirar tu infraestructura actual.',
  features: [
    { title: 'Compatibilidad PBX', description: 'Conecta sistemas existentes con servicios de voz modernos.' },
    { title: 'Reducción de costos', description: 'Sustituye líneas tradicionales por troncales más flexibles.' },
    { title: 'Escalabilidad', description: 'Aumenta o reduce capacidad según el uso real.' },
    { title: 'Migración gradual', description: 'Transiciona sin interrumpir tu operación.' },
    { title: 'Gestión centralizada', description: 'Controla la operación con una visión más simple.' },
    { title: 'Listo para crecer', description: 'Preparado para negocios con infraestructura existente.' },
  ],
  benefitsTitle: 'Por qué elegir SIP Trunking',
  benefitsDescription: 'Moderniza tu telefonía sin perder la inversión que ya hiciste en tus sistemas.',
  benefits: [
    { title: 'Menos fricción', description: 'Conecta con tu infraestructura actual y evita cambios bruscos.' },
    { title: 'Menor gasto', description: 'Optimiza tus líneas y mejora el costo por llamada.' },
    { title: 'Operación flexible', description: 'Ajusta capacidad y enrutamiento según la demanda.' },
  ],
  faqTitle: 'Preguntas frecuentes sobre SIP Trunking',
  faqs: [
    { question: '¿Tengo que cambiar mi PBX?', answer: 'No necesariamente. SIP Trunking está pensado para conectar tu infraestructura existente.' },
    { question: '¿Sirve para reducir costos?', answer: 'Sí. Una de sus ventajas principales es reemplazar líneas tradicionales por una capa más eficiente.' },
    { question: '¿Se puede escalar fácil?', answer: 'Sí. La capacidad se ajusta a la demanda de tu operación.' },
  ],
  finalTitle: 'Conecta tu PBX a la nube sin complicaciones',
  finalDescription: 'Aprovecha tu infraestructura actual y moderniza tu telefonía con una solución más flexible y rentable.',
};

export const ccaasContent: ProductPageContent = {
  eyebrow: 'CCaaS',
  title: 'Solución para centros de contacto',
  subtitle: 'Gestiona atención al cliente con colas, IVR, grabación, analítica y herramientas para equipos de soporte.',
  primaryAction: { label: 'Comenzar', href: '/agenda-reunion' },
  secondaryAction: { label: 'Ver más', href: '/products' },
  heroStats: [
    { value: 'Omnicanal', label: 'Voz y digital unificados' },
    { value: 'IA', label: 'Automatización para soporte' },
    { value: '360°', label: 'Visibilidad operativa' },
  ],
  heroHighlights: ['Colas de llamadas', 'IVR', 'Grabación', 'Analítica'],
  sections: [
    {
      eyebrow: 'Atención al cliente',
      title: 'Un contact center listo para crecer',
      description: 'Dirige cada llamada a la mejor persona, integra canales digitales y mejora la experiencia desde el primer contacto.',
      bullets: ['Colas, IVR y enrutamiento avanzado.', 'Grabación y monitoreo de llamadas.', 'Bandeja de atención para equipos de soporte.'],
      visualTitle: 'Operación en un solo lugar',
      visualItems: ['Colas', 'IVR', 'Monitoreo', 'Bandeja'],
    },
  ],
  featuresTitle: 'Funciones de CCaaS',
  featuresDescription: 'Todo lo que necesita un equipo de contact center para responder mejor, más rápido y con más contexto.',
  features: [
    { title: 'Colas y priorización', description: 'Distribuye llamadas según reglas y necesidades de tu negocio.' },
    { title: 'IVR', description: 'Guía a los clientes con menús y autoservicio.' },
    { title: 'Grabación', description: 'Capacita y controla calidad con evidencia clara.' },
    { title: 'Reportes', description: 'Toma decisiones con información de desempeño.' },
    { title: 'Automatización', description: 'Reduce tareas manuales y acelera la atención.' },
    { title: 'Omnicanalidad', description: 'Integra canales digitales en una sola bandeja.' },
  ],
  benefitsTitle: 'Por qué usar CCaaS',
  benefitsDescription: 'Una forma más moderna de operar soporte, ventas y atención sin complicarte.',
  benefits: [
    { title: 'Más visibilidad', description: 'Monitorea colas, agentes y resultados en tiempo real.' },
    { title: 'Mejor experiencia', description: 'Responde con más contexto y menos fricción.' },
    { title: 'Más eficiencia', description: 'Automatiza y organiza mejor tu operación.' },
  ],
  faqTitle: 'Preguntas frecuentes sobre CCaaS',
  faqs: [
    { question: '¿CCaaS es lo mismo que un call center?', answer: 'Es una evolución en la nube que amplía la operación hacia canales digitales y automatización.' },
    { question: '¿Sirve para soporte y ventas?', answer: 'Sí. Puedes adaptar colas, reportes e ինտերacciones a ambos casos de uso.' },
    { question: '¿Es escalable?', answer: 'Sí. Está pensado para crecer con tu equipo y tus canales.' },
  ],
  finalTitle: 'Lleva tu contact center a la nube',
  finalDescription: 'Mejora la atención, gana control y ofrece una experiencia más consistente en todos los canales.',
};

export const agentesIaContent: ProductPageContent = {
  eyebrow: 'IA conversacional para llamadas',
  title: 'Agentes de IA',
  subtitle: 'Agentes de voz inteligentes que contestan llamadas, dan información y agendan citas automáticamente 24/7.',
  primaryAction: { label: 'Probar agente de IA', href: '/agenda-reunion' },
  secondaryAction: { label: 'Conocer funciones', href: '#funcionalidades' },
  heroStats: [
    { value: '24/7', label: 'Disponibilidad absoluta' },
    { value: '100%', label: 'Respuestas inteligentes' },
    { value: '0s', label: 'Tiempo de espera para clientes' },
  ],
  heroHighlights: [
    'Atención por llamada telefónica',
    'Agendamiento de citas integrado',
    'Calificación automática de prospectos',
    'Conexión nativa con CRMs y calendarios',
  ],
  sections: [
    {
      eyebrow: 'Atención 24/7',
      title: 'Tus clientes siempre atendidos, sin importar la hora',
      description: 'Nunca vuelvas a perder una llamada de ventas o de soporte fuera del horario de oficina. Nuestro agente de IA atiende con total naturalidad, fluidez y sin tiempos de espera.',
      bullets: [
        'Atención inmediata a múltiples llamadas en paralelo.',
        'Respuestas precisas y naturales en español.',
        'Traspaso inteligente a agentes humanos si es necesario.',
      ],
      visualTitle: 'Operación ininterrumpida',
      visualItems: ['Atención 24/7', 'Cero espera', 'Soporte constante', 'Calidad garantizada'],
    },
    {
      eyebrow: 'Agendamiento',
      title: 'Citas y reservas agendadas directamente en tu calendario',
      description: 'El agente de IA conversa con el cliente, consulta tus espacios libres y agenda la reunión o cita médica de forma totalmente autónoma, enviando notificaciones y confirmaciones inmediatas.',
      bullets: [
        'Integración directa con Google Calendar, Outlook y Cal.com.',
        'Validación de disponibilidad en tiempo real.',
        'Envío automático de recordatorios por WhatsApp o correo.',
      ],
      visualTitle: 'Agendamiento automático',
      visualItems: ['Cal.com / Google', 'Cero colisiones', 'Recordatorios', 'Sincronización total'],
      reverse: true,
    },
    {
      eyebrow: 'Calificación',
      title: 'Captura y califica cada lead telefónico de forma inteligente',
      description: 'Identifica la intención de cada llamada, extrae datos clave (nombre, correo, requerimiento) y guárdalos automáticamente en tu base de datos o CRM sin intervención manual.',
      bullets: [
        'Calificación de leads bajo tus propias reglas de negocio.',
        'Integración con HubSpot, Salesforce y CRMs populares.',
        'Transcripción y resumen de la llamada en texto accionable.',
      ],
      visualTitle: 'Leads calificados en tu CRM',
      visualItems: ['HubSpot / CRM', 'Extracción de datos', 'Resúmenes de IA', 'Automatización'],
    },
  ],
  featuresTitle: 'Funciones de voz con Inteligencia Artificial',
  featuresDescription: 'Agentes conversacionales de última generación diseñados para optimizar tu tiempo y multiplicar tus ventas.',
  features: [
    { title: 'Voz ultra-natural', description: 'Modelos de síntesis de voz avanzados con tono, entonación y pausas naturales.' },
    { title: 'Comprensión contextual', description: 'Entiende intenciones complejas, interrupciones y responde de forma coherente.' },
    { title: 'Agendamiento integrado', description: 'Configura horarios, servicios y deja que la IA coordine las reservas.' },
    { title: 'Envío de información', description: 'Puede enviar mensajes SMS o WhatsApp con datos útiles durante o después de la llamada.' },
    { title: 'Integración de telefonía', description: 'Conecta tu número actual o te asignamos un número nuevo en minutos.' },
    { title: 'Dashboard de analíticas', description: 'Visualiza grabaciones, resúmenes, estadísticas de conversión e impacto financiero.' },
  ],
  benefitsTitle: 'Por qué elegir los Agentes de IA de VOXAI',
  benefitsDescription: 'Incrementa tus ingresos reduciendo costos operativos y asegurando una experiencia de cliente de primer nivel.',
  benefits: [
    { title: 'Multiplica tus ventas', description: 'Captura al 100% de los leads que te llaman, eliminando llamadas perdidas para siempre.' },
    { title: 'Reduce costos de soporte', description: 'Resuelve dudas frecuentes y tareas repetitivas de forma automática.' },
    { title: 'Enfoque en valor real', description: 'Libera a tu equipo humano para que se concentre en tareas complejas y cierres estratégicos.' },
  ],
  faqTitle: 'Preguntas frecuentes sobre Agentes de IA',
  faqs: [
    { question: '¿Cómo suena el agente de IA? ¿Se nota que es un robot?', answer: 'Suena increíblemente natural. Nuestros modelos están optimizados para hablar con acento latino, usar modismos locales y hacer pausas humanas, por lo que la conversación fluye de forma muy amigable.' },
    { question: '¿Cómo se conecta con mis sistemas actuales?', answer: 'Se integra de forma nativa mediante APIs con tus herramientas de agendamiento (Cal.com, Google Calendar) y tu CRM (HubSpot, Zoho, etc.).' },
    { question: '¿Cuánto tiempo toma implementarlo?', answer: 'Podemos tener tu agente conversacional configurado, entrenado con tu base de conocimientos y listo para producción en 72 horas.' },
  ],
  finalTitle: 'Comienza a automatizar tus llamadas hoy mismo',
  finalDescription: 'Dale a tus clientes atención instantánea, califica prospectos y agenda citas las 24 horas con la solución de voz más avanzada.',
};