document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("langBtn");
  let english = false;

  const translations = {
    es: {
      "meta.description":"JobXp: microexperiencias laborales e inclusión asistida para jóvenes en Chile.",
      "meta.title":"JobXp | Microexperiencias Laborales",
      "brand.home":"JobXp inicio",
      "img.logo":"Logo JobXp",
      "nav.label":"Navegación principal",
      "nav.home":"Inicio",
      "nav.problem":"Problemática",
      "nav.ods":"ODS 8",
      "nav.solution":"Solución",
      "nav.tech":"Tecnologías",
      "nav.prototype":"Prototipo",
      "nav.team":"Equipo",
      "hero.eyebrow":"INCLUSIÓN · TALENTO · OPORTUNIDADES",
      "hero.title":"JobXp: <span>Microexperiencias Laborales</span>",
      "hero.desc":"Plataforma de inclusión asistida que conecta a jóvenes sin experiencia con oportunidades laborales reales en Chile.",
      "hero.cta1":"Conocer la solución",
      "hero.cta2":"Ver equipo",
      "img.team":"Personas trabajando en equipo",
      "hero.cardTitle":"Inclusión asistida",
      "hero.cardDesc":"Menos barreras, más oportunidades.",
      "summary.eyebrow":"EL PROYECTO",
      "summary.title":"Resumen Ejecutivo",
      "summary.card1.title":"Conexión laboral",
      "summary.card1.desc":"JobXp conecta a jóvenes mayores de 18 años sin experiencia laboral con pequeñas y medianas empresas.",
      "summary.card2.title":"Microexperiencias",
      "summary.card2.desc":"Experiencias laborales acotadas y certificadas que permiten adquirir habilidades y construir un primer historial.",
      "summary.card3.title":"Inclusión asistida",
      "summary.card3.desc":"El proyecto considera barreras arquitectónicas, cognitivas, sensoriales y de comunicación.",
      "problem.eyebrow":"02 · DESAFÍO",
      "problem.title":"Problemática Laboral",
      "problem.desc":"Entrar al mundo laboral por primera vez puede ser especialmente difícil cuando no existen experiencia previa, redes de contacto o condiciones de accesibilidad.",
      "problem.item1.title":"Falta de experiencia",
      "problem.item1.desc":" · Los jóvenes encuentran barreras para demostrar sus capacidades.",
      "problem.item2.title":"Brecha de oportunidades",
      "problem.item2.desc":" · El acceso a primeras experiencias no es igual para todos.",
      "problem.item3.title":"Barreras de inclusión",
      "problem.item3.desc":" · Factores físicos, sensoriales y cognitivos pueden dificultar la inserción.",
      "problem.item4.title":"Desconexión",
      "problem.item4.desc":" · Empresas y jóvenes necesitan un puente más simple y transparente.",
      "ods.badge":"ODS<br><strong>8</strong>",
      "ods.eyebrow":"IMPACTO",
      "ods.title":"Alineación con el ODS 8",
      "ods.cardTitle":"Trabajo decente y crecimiento económico",
      "ods.desc":"JobXp promueve oportunidades de empleo productivo, inclusión laboral y acceso de los jóvenes a experiencias que fortalecen su preparación para el trabajo.",
      "solution.eyebrow":"PROPUESTA",
      "solution.title":"Solución Tecnológica",
      "solution.tag":"PLATAFORMA",
      "solution.mainTitle":"Un puente seguro entre jóvenes y empresas",
      "solution.mainDesc":"Una página web de microexperiencias laborales que facilita el encuentro entre talento joven y negocios locales, con un enfoque transparente, accesible y regulado. La plataforma busca que una primera experiencia laboral sea más fácil de encontrar, comprender y aprovechar, permitiendo que los jóvenes conozcan oportunidades, desarrollen habilidades y construyan antecedentes que les ayuden en futuras postulaciones. Al mismo tiempo, las empresas pueden encontrar personas interesadas en aprender y participar en experiencias acotadas, generando un vínculo inicial que puede transformarse en nuevas oportunidades laborales.",
      "solution.inclusionTag":"INCLUSIÓN",
      "solution.inclusionTitle":"Diseño accesible",
      "solution.inclusionDesc":"La inclusión asistida atraviesa toda la propuesta para reducir barreras de acceso y participación.",
      "solution.trustTag":"CONFIANZA",
      "solution.trustTitle":"Experiencias certificadas",
      "solution.trustDesc":"Las microexperiencias ayudan a convertir oportunidades breves en aprendizaje y antecedentes verificables.",
      "prototype.eyebrow":"DEMO FUNCIONAL",
      "prototype.title":"Prototipo Principal",
      "prototype.tag":"JOBXP · PROTOTIPO WEB",
      "prototype.heading":"Explora nuestra plataforma principal",
      "prototype.desc":"Aquí puedes acceder directamente al prototipo principal de JobXp y revisar cómo funciona la propuesta de microexperiencias laborales inclusivas. El prototipo permite visualizar la experiencia que tendría un usuario al utilizar la plataforma.",
      "prototype.open":"Abrir prototipo ↗",
      "prototype.iframeTitle":"Prototipo principal de JobXp",
      "prototype.preview":"Vista previa del prototipo",
      "prototype.newTab":"Abrir en una pestaña nueva ↗",
      "tech.eyebrow":"DESARROLLO",
      "tech.title":"Tecnologías Utilizadas",
      "tech.html":"Estructura semántica",
      "tech.css":"Diseño responsive",
      "tech.js":"Interactividad",
      "tech.iot":"Prototipado tecnológico",
      "team.eyebrow":"PERSONAS DETRÁS DE JOBXP",
      "team.title":"Equipo y Roles",
      "team.estefano.role":"Líder · Desarrollo Web",
      "team.estefano.desc":"Liderazgo del proyecto y desarrollo general de la página web con HTML, CSS y JavaScript.",
      "team.presentation.role":"Presentación y PowerPoint",
      "team.benjamin.desc":"Planificación y preparación de la presentación del proyecto.",
      "team.support.desc":"Apoyo en la planificación y desarrollo de la presentación.",
      "cta.eyebrow":"JOBXP",
      "cta.title":"Conectando talento, empresas y oportunidades.",
      "cta.desc":"Una propuesta centrada en la inclusión y en el acceso a primeras experiencias laborales.",
      "cta.top":"Volver arriba ↑",
      "gallery.eyebrow":"REFERENCIAS VISUALES",
      "gallery.title":"Galería y Prototipos",
      "img.collab":"Interfaz y trabajo colaborativo",
      "img.tech":"Prototipado tecnológico",
      "img.design":"Diseño y planificación",
      "footer.desc":"Conectando talento, empresas y oportunidades laborales de forma inclusiva.",
      "footer.copy":"© 2026 JobXP. Todos los derechos reservados."
    },
    en: {
      "meta.description":"JobXp: work micro-experiences and assisted inclusion for young people in Chile.",
      "meta.title":"JobXp | Work Micro-Experiences",
      "brand.home":"JobXp home",
      "img.logo":"JobXp logo",
      "nav.label":"Main navigation",
      "nav.home":"Home",
      "nav.problem":"The Challenge",
      "nav.ods":"SDG 8",
      "nav.solution":"Solution",
      "nav.tech":"Technologies",
      "nav.prototype":"Prototype",
      "nav.team":"Team",
      "hero.eyebrow":"INCLUSION · TALENT · OPPORTUNITIES",
      "hero.title":"JobXp: <span>Work Micro-Experiences</span>",
      "hero.desc":"An assisted inclusion platform connecting young people without experience with real work opportunities in Chile.",
      "hero.cta1":"Discover the solution",
      "hero.cta2":"Meet the team",
      "img.team":"People working as a team",
      "hero.cardTitle":"Assisted inclusion",
      "hero.cardDesc":"Fewer barriers, more opportunities.",
      "summary.eyebrow":"THE PROJECT",
      "summary.title":"Executive Summary",
      "summary.card1.title":"Job connection",
      "summary.card1.desc":"JobXp connects young people over 18 without work experience with small and medium-sized businesses.",
      "summary.card2.title":"Micro-experiences",
      "summary.card2.desc":"Short, certified work experiences that help people gain skills and build a first work history.",
      "summary.card3.title":"Assisted inclusion",
      "summary.card3.desc":"The project considers architectural, cognitive, sensory and communication barriers.",
      "problem.eyebrow":"02 · CHALLENGE",
      "problem.title":"The Employment Challenge",
      "problem.desc":"Entering the workforce for the first time can be especially difficult when there is no previous experience, professional network or accessibility support.",
      "problem.item1.title":"Lack of experience",
      "problem.item1.desc":" · Young people face barriers when trying to demonstrate their skills.",
      "problem.item2.title":"Opportunity gap",
      "problem.item2.desc":" · Access to first work experiences is not equal for everyone.",
      "problem.item3.title":"Inclusion barriers",
      "problem.item3.desc":" · Physical, sensory and cognitive factors can make employment more difficult.",
      "problem.item4.title":"Disconnection",
      "problem.item4.desc":" · Companies and young people need a simpler and more transparent bridge.",
      "ods.badge":"SDG<br><strong>8</strong>",
      "ods.eyebrow":"IMPACT",
      "ods.title":"Alignment with SDG 8",
      "ods.cardTitle":"Decent work and economic growth",
      "ods.desc":"JobXp promotes productive employment opportunities, workplace inclusion and access to experiences that strengthen young people's preparation for work.",
      "solution.eyebrow":"PROPOSAL",
      "solution.title":"Technology Solution",
      "solution.tag":"PLATFORM",
      "solution.mainTitle":"A safe bridge between young people and companies",
      "solution.mainDesc":"A work micro-experience website that connects young talent with local businesses through a transparent, accessible and regulated approach. The platform aims to make a first work experience easier to find, understand and use, helping young people discover opportunities, develop skills and build a record that can support future applications. At the same time, companies can find people interested in learning and taking part in short experiences, creating an initial connection that can lead to new job opportunities.",
      "solution.inclusionTag":"INCLUSION",
      "solution.inclusionTitle":"Accessible design",
      "solution.inclusionDesc":"Assisted inclusion is part of the entire proposal to reduce barriers to access and participation.",
      "solution.trustTag":"TRUST",
      "solution.trustTitle":"Certified experiences",
      "solution.trustDesc":"Micro-experiences turn short opportunities into learning and verifiable experience.",
      "prototype.eyebrow":"FUNCTIONAL DEMO",
      "prototype.title":"Main Prototype",
      "prototype.tag":"JOBXP · WEB PROTOTYPE",
      "prototype.heading":"Explore our main platform",
      "prototype.desc":"Here you can access the main JobXp prototype and see how the inclusive work micro-experience proposal works. The prototype lets you visualize the experience a user would have when using the platform.",
      "prototype.open":"Open prototype ↗",
      "prototype.iframeTitle":"JobXp main prototype",
      "prototype.preview":"Prototype preview",
      "prototype.newTab":"Open in a new tab ↗",
      "tech.eyebrow":"DEVELOPMENT",
      "tech.title":"Technologies Used",
      "tech.html":"Semantic structure",
      "tech.css":"Responsive design",
      "tech.js":"Interactivity",
      "tech.iot":"Technology prototyping",
      "team.eyebrow":"THE PEOPLE BEHIND JOBXP",
      "team.title":"Team and Roles",
      "team.estefano.role":"Leader · Web Development",
      "team.estefano.desc":"Project leadership and overall website development using HTML, CSS and JavaScript.",
      "team.presentation.role":"Presentation and PowerPoint",
      "team.benjamin.desc":"Planning and preparation of the project presentation.",
      "team.support.desc":"Support in planning and developing the presentation.",
      "cta.eyebrow":"JOBXP",
      "cta.title":"Connecting talent, companies and opportunities.",
      "cta.desc":"A proposal focused on inclusion and access to first work experiences.",
      "cta.top":"Back to top ↑",
      "gallery.eyebrow":"VISUAL REFERENCES",
      "gallery.title":"Gallery and Prototypes",
      "img.collab":"Interface and collaborative work",
      "img.tech":"Technology prototyping",
      "img.design":"Design and planning",
      "footer.desc":"Connecting talent, companies and job opportunities inclusively.",
      "footer.copy":"© 2026 JobXP. All rights reserved."
    }
  };

  function applyLanguage(language) {
    const dict = translations[language];

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.dataset.i18nHtml;
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll("[data-i18n-key]").forEach(el => {
      const key = el.dataset.i18nKey;
      const attr = el.dataset.i18nAttr;
      if (dict[key] !== undefined && attr) el.setAttribute(attr, dict[key]);
    });

    document.documentElement.lang = language;
    langBtn.textContent = language === "en" ? "ES / Español" : "EN / English";
    langBtn.setAttribute("aria-label", language === "en" ? "Switch to Spanish" : "Cambiar a inglés");
    document.title = dict["meta.title"];
  }

  langBtn.addEventListener("click", () => {
    english = !english;
    applyLanguage(english ? "en" : "es");
  });

  applyLanguage("es");
});
