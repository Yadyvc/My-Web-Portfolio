(function () {
  "use strict";

  const EMAIL = "ValentincabanYadielo@gmail.com";
  const GITHUB_URL = "https://github.com/Yadyvc";

  let currentLang = "en";
  let currentMode = "shinobi"; // Default: Shinobi Mode ON
  let activeCmdIndex = 0;
  let filteredCommands = [];
  let toastTimer = null;


  const i18n = {
    en: {
      nav_experience: "Experience",
      nav_projects: "Projects",
      nav_skills: "Skills",
      nav_education: "Education",
      nav_contact: "Contact",

      hero_status: "Open to Opportunities",
      hero_title: "Tulip Engineer & Full-Stack Web Developer",
      hero_summary: "Information Systems graduate working in digital manufacturing. Building compliant Electronic Batch Records (eBR) in Tulip for regulated biomedical production, alongside full-stack web applications with Node.js, Express, and PostgreSQL.",
      btn_view_projects: "View Projects",
      btn_copy_email: "Copy Email",
      btn_copy_email_full: "Copy Email (ValentincabanYadielo@gmail.com)",

      bento1_label: "Location & Status",
      bento1_lang: "Bilingual (Spanish Native, English Intermediate)",
      bento2_label: "Core Tech Stack",
      bento3_label: "Top Credential",
      bento3_deg: "B.S. in Information Systems (UAA, May 2026)",
      bento3_cert: "AI Fundamentals 2026 Certification",

      exp1_role: "Tulip Engineer",
      exp1_date: "July 2026 – Present",
      exp1_b1: "Developed and deployed Electronic Batch Records (eBR) for purification and conjugation processes using Tulip low-code platform.",
      exp1_b2: "Implemented step verification, record history, and digital signatures on batch records converting 30+ page paper SOPs into digital apps.",
      exp1_b3: "Collaborated with quality teams to translate paper-based SOPs into compliant digital systems for regulated biomedical manufacturing.",
      exp1_b4: "Managed applications through the full development cycle (SDLC), from requirements to deployment.",

      exp2_role: "Web Development Intern",
      exp2_date: "Aug 2025 – Dec 2025",
      exp2_b1: "Maintained and updated university web content using WordPress CMS.",
      exp2_b2: "Managed databases and streamlined digital publishing workflows for internal communications.",

      exp3_role: "Operations Assistant (Food Service)",
      exp3_date: "Operations",
      exp3_org: "Various Establishments · Puerto Rico",
      exp3_b1: "Managed daily business purchasing and oversaw cash flow operations.",
      exp3_b2: "Delivered consistent customer service and maintained operational efficiency in high-pressure environments.",

      rank_s: "Rank S",
      rank_a: "Rank A",
      rank_b: "Rank B",
      proj1_type: "Full-Stack",
      proj2_type: "SaaS / API",
      proj3_type: "Analytics",
      proj1_title: "DulceMomentos E-Commerce Platform",
      proj1_desc: "Full-stack web app with customer storefront and admin dashboard. REST API built with Node.js & Express, PostgreSQL deployed on Neon, RBAC for customer profiles, order status timelines, inventory adjustments, and SVG analytics dashboard.",
      proj2_title: "Ticketing System (In-Progress)",
      proj2_desc: "SaaS ticketing platform built with Node.js, JavaScript, and PostgreSQL featuring a REST API and full CRUD workflows to track and resolve client support tickets.",
      proj3_title: "Financial Modeling Portfolio",
      proj3_desc: "Interactive financial models in Microsoft Excel including loan calculators and amortization schedules, presented on a Google Sites portfolio.",
      proj_view_repo: "View Repository",
      proj3_note: "Presented on Google Sites Portfolio",

      skill_cat_lang: "Languages",
      skill_cat_backend: "Backend & Data",
      skill_cat_tools: "Platforms & Tools",
      skill_cat_methods: "Methodologies",

      radar_1: "Backend & APIs",
      radar_2: "Databases/SQL",
      radar_3: "Digital Mfg/Tulip",
      radar_4: "Frontend/JS",
      radar_5: "Systems Analysis",

      sec_education: "Education & Certifications",
      edu_label: "University Degree",
      edu_degree: "B.S. in Information Systems",
      edu_date: "Graduated: May 2026",
      cert1_issuer: "Tulip Interfaces · Digital Manufacturing",
      cert2_issuer: "Artificial Intelligence & Applied Systems",
      cert3_issuer: "Modern JavaScript & Web Architecture",
      badge_certified: "Certified",
      badge_in_progress: "In-Progress",

      contact_headline: "Let’s build something reliable.",
      contact_sub: "Open to full-stack web development, digital manufacturing (Tulip), and information systems opportunities. Reach out directly via email or explore my code on GitHub.",

      footer_hint_pre: "Press",
      footer_hint_post: "for quick commands",

      cmd_placeholder: "Type a command or search... (try 'konoha' or 'chakra')",
      cmd_empty: "No matching commands found.",
      toast_copied: "Email copied: ValentincabanYadielo@gmail.com",
      toast_copy_failed: "Could not copy the email. You can find it in the Contact section.",
      toast_shinobi: "Shinobi Mode Activated ⚡",
      toast_corporate: "Corporate Mode Activated",
      toast_lang: "Language switched to English",
      toast_easter: "🌀 Chakra Released! Welcome to Yadiel’s Shinobi Dossier."
    },
    es: {
      nav_experience: "Experiencia",
      nav_projects: "Proyectos",
      nav_skills: "Habilidades",
      nav_education: "Educación",
      nav_contact: "Contacto",

      hero_status: "Disponible para Oportunidades",
      hero_title: "Ingeniero Tulip y Desarrollador Web Full-Stack",
      hero_summary: "Graduado de Sistemas de Información trabajando en manufactura digital. Construyendo Electronic Batch Records (eBR) en Tulip para producción biomédica regulada, junto con aplicaciones web full-stack con Node.js, Express y PostgreSQL.",
      btn_view_projects: "Ver Proyectos",
      btn_copy_email: "Copiar Correo",
      btn_copy_email_full: "Copiar Correo (ValentincabanYadielo@gmail.com)",

      bento1_label: "Ubicación y Estado",
      bento1_lang: "Bilingüe (Español Nativo, Inglés Intermedio)",
      bento2_label: "Stack Principal",
      bento3_label: "Credencial Destacada",
      bento3_deg: "Bach. en Sistemas de Información (UAA, Mayo 2026)",
      bento3_cert: "Certificación AI Fundamentals 2026",

      exp1_role: "Ingeniero Tulip",
      exp1_date: "Julio 2026 – Presente",
      exp1_b1: "Desarrollé y desplegué Electronic Batch Records (eBR) para procesos de purificación y conjugación usando la plataforma low-code Tulip.",
      exp1_b2: "Implementé verificación de pasos, historial de registros y firmas digitales en registros de lote, convirtiendo SOPs en papel de más de 30 páginas en aplicaciones digitales.",
      exp1_b3: "Colaboré con equipos de calidad para traducir SOPs en papel a sistemas digitales regulados para manufactura biomédica.",
      exp1_b4: "Gestioné aplicaciones a través del ciclo completo de desarrollo (SDLC), desde requisitos hasta despliegue.",

      exp2_role: "Interno de Desarrollo Web",
      exp2_date: "Ago 2025 – Dic 2025",
      exp2_b1: "Mantuve y actualicé contenido web universitario utilizando el CMS WordPress.",
      exp2_b2: "Administré bases de datos y optimicé flujos de publicación digital para comunicaciones internas.",

      exp3_role: "Asistente de Operaciones (Servicio de Alimentos)",
      exp3_date: "Operaciones",
      exp3_org: "Varios Establecimientos · Puerto Rico",
      exp3_b1: "Gestioné compras diarias del negocio y supervisé operaciones de flujo de efectivo.",
      exp3_b2: "Brindé servicio al cliente consistente y mantuve eficiencia operativa en entornos de alta presión.",

      rank_s: "Rango S",
      rank_a: "Rango A",
      rank_b: "Rango B",
      proj1_type: "Full-Stack",
      proj2_type: "SaaS / API",
      proj3_type: "Analítica",
      proj1_title: "Plataforma E-Commerce DulceMomentos",
      proj1_desc: "Aplicación web full-stack con tienda para clientes y panel administrativo. API REST con Node.js y Express, PostgreSQL en Neon, control RBAC para perfiles, líneas de tiempo de pedidos, inventario y panel de analítica en SVG.",
      proj2_title: "Sistema de Tickets (En Progreso)",
      proj2_desc: "Plataforma SaaS de tickets construida con Node.js, JavaScript y PostgreSQL con API REST y flujos CRUD completos para rastrear y resolver tickets de soporte.",
      proj3_title: "Portafolio de Modelado Financiero",
      proj3_desc: "Modelos financieros interactivos en Microsoft Excel incluyendo calculadoras de préstamos y tablas de amortización, presentados en un portafolio de Google Sites.",
      proj_view_repo: "Ver Repositorio",
      proj3_note: "Presentado en Portafolio de Google Sites",

      skill_cat_lang: "Lenguajes",
      skill_cat_backend: "Backend y Datos",
      skill_cat_tools: "Plataformas y Herramientas",
      skill_cat_methods: "Metodologías",

      radar_1: "Backend y APIs",
      radar_2: "Bases de Datos",
      radar_3: "Mfg Digital/Tulip",
      radar_4: "Frontend/JS",
      radar_5: "Análisis Sistemas",

      sec_education: "Educación y Certificaciones",
      edu_label: "Grado Universitario",
      edu_degree: "Bachillerato en Sistemas de Información",
      edu_date: "Graduado: Mayo 2026",
      cert1_issuer: "Tulip Interfaces · Manufactura Digital",
      cert2_issuer: "Inteligencia Artificial y Sistemas Aplicados",
      cert3_issuer: "JavaScript Moderno y Arquitectura Web",
      badge_certified: "Certificado",
      badge_in_progress: "En Progreso",

      contact_headline: "Construyamos algo sólido y confiable.",
      contact_sub: "Disponible para oportunidades en desarrollo web full-stack, manufactura digital (Tulip) y sistemas de información. Contáctame por correo o explora mi código en GitHub.",

      footer_hint_pre: "Presiona",
      footer_hint_post: "para comandos rápidos",

      cmd_placeholder: "Escribe un comando o busca... (prueba 'konoha' o 'chakra')",
      cmd_empty: "No se encontraron comandos.",
      toast_copied: "Correo copiado: ValentincabanYadielo@gmail.com",
      toast_copy_failed: "No se pudo copiar el correo. Puedes encontrarlo en la sección de contacto.",
      toast_shinobi: "Modo Shinobi Activado ⚡",
      toast_corporate: "Modo Corporativo Activado",
      toast_lang: "Idioma cambiado a Español",
      toast_easter: "🌀 ¡Chakra Liberado! Bienvenido al Expediente Shinobi de Yadiel."
    }
  };

  /* Mode-Specific Headings & Labels */
  const modeLabels = {
    en: {
      shinobi: {
        hero_badge: "// DOSSIER_ID: 2026-PR",
        sec_experience: "Mission Log",
        sec_projects: "Featured Missions",
        sec_skills: "Chakra / Tech Affinity",
        radar_title: "Technical Affinity Matrix",
        sec_contact: "Summon / Contact",
        toggle_text: "Shinobi"
      },
      corporate: {
        hero_badge: "// PROFILE_ID: 2026-PR",
        sec_experience: "Experience",
        sec_projects: "Featured Projects",
        sec_skills: "Technical Skills",
        radar_title: "Core Competency Matrix",
        sec_contact: "Contact",
        toggle_text: "Corporate"
      }
    },
    es: {
      shinobi: {
        hero_badge: "// EXPEDIENTE_ID: 2026-PR",
        sec_experience: "Registro de Misiones",
        sec_projects: "Misiones Destacadas",
        sec_skills: "Afinidad Técnica / Chakra",
        radar_title: "Matriz de Afinidad Técnica",
        sec_contact: "Invocar / Contacto",
        toggle_text: "Shinobi"
      },
      corporate: {
        hero_badge: "// PERFIL_ID: 2026-PR",
        sec_experience: "Experiencia",
        sec_projects: "Proyectos Destacados",
        sec_skills: "Habilidades Técnicas",
        radar_title: "Matriz de Competencias",
        sec_contact: "Contacto",
        toggle_text: "Corporativo"
      }
    }
  };


  const htmlEl = document.documentElement;
  const langToggleBtn = document.getElementById("langToggle");
  const modeToggleBtn = document.getElementById("modeToggle");
  const modeLabelEl = document.getElementById("modeLabel");
  const cmdTriggerBtn = document.getElementById("cmdTrigger");
  const cmdBackdrop = document.getElementById("cmdBackdrop");
  const cmdInput = document.getElementById("cmdInput");
  const cmdList = document.getElementById("cmdList");
  const toastEl = document.getElementById("toast");
  const chakraPulseEl = document.getElementById("chakraPulse");
  const chakraProgressEl = document.getElementById("chakraProgress");
  const backToTopBtn = document.getElementById("backToTop");
  const copyEmailBtns = document.querySelectorAll(".copy-email-btn");


  function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove("show");
    }, 2800);
  }

  async function copyEmailToClipboard() {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(EMAIL);
      } else {
        const tempInput = document.createElement("textarea");
        tempInput.value = EMAIL;
        tempInput.setAttribute("readonly", "");
        tempInput.style.position = "fixed";
        tempInput.style.opacity = "0";
        document.body.appendChild(tempInput);

        try {
          tempInput.select();
          if (!document.execCommand("copy")) {
            throw new Error("Clipboard copy command was rejected.");
          }
        } finally {
          document.body.removeChild(tempInput);
        }
      }

      showToast(i18n[currentLang].toast_copied);
    } catch (error) {
      console.error("Could not copy email to clipboard.", error);
      showToast(i18n[currentLang].toast_copy_failed);
    }
  }

  function updateUI() {
    htmlEl.setAttribute("lang", currentLang);
    htmlEl.setAttribute("data-mode", currentMode);

    // Update standard bilingual elements
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (i18n[currentLang][key] !== undefined) {
        el.textContent = i18n[currentLang][key];
      }
    });

    // Update mode-dependent labels
    const currentModeDict = modeLabels[currentLang][currentMode];
    document.querySelectorAll("[data-i18n-mode]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-mode");
      if (currentModeDict[key] !== undefined) {
        el.textContent = currentModeDict[key];
      }
    });

    modeLabelEl.textContent = currentModeDict.toggle_text;
    langToggleBtn.textContent = currentLang === "en" ? "ES" : "EN";
    cmdInput.placeholder = i18n[currentLang].cmd_placeholder;
  }

  function toggleLanguage() {
    currentLang = currentLang === "en" ? "es" : "en";
    updateUI();
    showToast(i18n[currentLang].toast_lang);
    if (cmdBackdrop.classList.contains("open")) {
      renderCommands(cmdInput.value);
    }
  }

  function toggleMode(forceMode) {
    currentMode = forceMode || (currentMode === "shinobi" ? "corporate" : "shinobi");
    updateUI();
    showToast(
      currentMode === "shinobi"
        ? i18n[currentLang].toast_shinobi
        : i18n[currentLang].toast_corporate
    );
  }

  function triggerChakraEasterEgg() {
    closeCmdPalette();
    if (currentMode !== "shinobi") {
      currentMode = "shinobi";
      updateUI();
    }
    chakraPulseEl.classList.remove("active");
    void chakraPulseEl.offsetWidth; // Reflow to restart animation
    chakraPulseEl.classList.add("active");
    showToast(i18n[currentLang].toast_easter);
  }


  function getBaseCommands() {
    const isEs = currentLang === "es";
    return [
      {
        label: isEs ? "Ir a Experiencia" : "Jump to Experience",
        tag: "NAV",
        keywords: "experience experiencia work trabajo tulip waters",
        action: function () { jumpTo("#experience"); }
      },
      {
        label: isEs ? "Ir a Proyectos" : "Jump to Projects",
        tag: "NAV",
        keywords: "projects proyectos dulcemomentos ticketing excel",
        action: function () { jumpTo("#projects"); }
      },
      {
        label: isEs ? "Ir a Habilidades" : "Jump to Skills",
        tag: "NAV",
        keywords: "skills habilidades stack node postgres radar",
        action: function () { jumpTo("#skills"); }
      },
      {
        label: isEs ? "Ir a Educación y Certificaciones" : "Jump to Education",
        tag: "NAV",
        keywords: "education educacion certifications certificaciones uaa",
        action: function () { jumpTo("#education"); }
      },
      {
        label: isEs ? "Ir a Contacto" : "Jump to Contact",
        tag: "NAV",
        keywords: "contact contacto phone telefono email",
        action: function () { jumpTo("#contact"); }
      },
      {
        label: isEs ? "Cambiar Modo (Shinobi / Corporativo)" : "Toggle Shinobi / Corporate Mode",
        tag: "THEME",
        keywords: "mode modo shinobi corporate corporativo theme tema",
        action: function () { closeCmdPalette(); toggleMode(); }
      },
      {
        label: isEs ? "Cambiar Idioma (EN / ES)" : "Toggle Language (EN / ES)",
        tag: "LANG",
        keywords: "language idioma english spanish ingles espanol translate",
        action: function () { closeCmdPalette(); toggleLanguage(); }
      },
      {
        label: isEs ? "Copiar Correo Electrónico" : "Copy Email Address",
        tag: "ACTION",
        keywords: "copy copiar email correo gmail",
        action: function () { closeCmdPalette(); copyEmailToClipboard(); }
      },
      {
        label: isEs ? "Abrir Perfil de GitHub" : "Open GitHub Profile",
        tag: "LINK",
        keywords: "github repo code codigo yadyvc",
        action: function () {
          closeCmdPalette();
          window.open(GITHUB_URL, "_blank", "noopener,noreferrer");
        }
      }
    ];
  }

  function jumpTo(selector) {
    closeCmdPalette();
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }

  function renderCommands(query) {
    const q = (query || "").trim().toLowerCase();
    const base = getBaseCommands();

    filteredCommands = base.filter(function (cmd) {
      return cmd.label.toLowerCase().includes(q) || cmd.keywords.includes(q);
    });

    // Easter Egg trigger keywords: konoha, chakra, naruto, rasengan
    if (
      q.includes("konoha") ||
      q.includes("chakra") ||
      q.includes("naruto") ||
      q.includes("rasengan")
    ) {
      filteredCommands.unshift({
        label: currentLang === "es"
          ? "🌀 Liberar Chakra / Rasengan (Pulso Shinobi)"
          : "🌀 Release Chakra / Rasengan (Shinobi Pulse)",
        tag: "SECRET",
        keywords: "konoha chakra naruto rasengan",
        action: triggerChakraEasterEgg
      });
    }

    activeCmdIndex = 0;
    cmdList.innerHTML = "";

    if (filteredCommands.length === 0) {
      const emptyEl = document.createElement("div");
      emptyEl.className = "cmd-empty";
      emptyEl.textContent = i18n[currentLang].cmd_empty;
      cmdList.appendChild(emptyEl);
      return;
    }

    filteredCommands.forEach(function (cmd, idx) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cmd-item" + (idx === activeCmdIndex ? " active" : "");
      btn.setAttribute("role", "option");

      const labelSpan = document.createElement("span");
      labelSpan.textContent = cmd.label;

      const tagSpan = document.createElement("span");
      tagSpan.className = "cmd-item-tag";
      tagSpan.textContent = cmd.tag;

      btn.appendChild(labelSpan);
      btn.appendChild(tagSpan);

      btn.addEventListener("mouseenter", function () {
        activeCmdIndex = idx;
        updateActiveCommandClass();
      });

      btn.addEventListener("click", function () {
        cmd.action();
      });

      cmdList.appendChild(btn);
    });
  }

  function updateActiveCommandClass() {
    const items = cmdList.querySelectorAll(".cmd-item");
    items.forEach(function (item, idx) {
      if (idx === activeCmdIndex) {
        item.classList.add("active");
        item.scrollIntoView({ block: "nearest" });
      } else {
        item.classList.remove("active");
      }
    });
  }

  function openCmdPalette() {
    cmdBackdrop.classList.add("open");
    cmdInput.value = "";
    renderCommands("");
    setTimeout(function () {
      cmdInput.focus();
    }, 30);
  }

  function closeCmdPalette() {
    cmdBackdrop.classList.remove("open");
    cmdInput.blur();
  }


  function handleScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    chakraProgressEl.style.width = Math.min(100, Math.max(0, progress)) + "%";

    if (scrollTop > 320) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  }


  langToggleBtn.addEventListener("click", toggleLanguage);
  modeToggleBtn.addEventListener("click", function () { toggleMode(); });
  cmdTriggerBtn.addEventListener("click", openCmdPalette);

  copyEmailBtns.forEach(function (btn) {
    btn.addEventListener("click", copyEmailToClipboard);
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  cmdInput.addEventListener("input", function (e) {
    renderCommands(e.target.value);
  });

  cmdBackdrop.addEventListener("click", function (e) {
    if (e.target === cmdBackdrop) {
      closeCmdPalette();
    }
  });

  document.addEventListener("keydown", function (e) {
    // Open/close with Ctrl+K or Cmd+K
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (cmdBackdrop.classList.contains("open")) {
        closeCmdPalette();
      } else {
        openCmdPalette();
      }
      return;
    }

    if (!cmdBackdrop.classList.contains("open")) return;

    if (e.key === "Escape") {
      e.preventDefault();
      closeCmdPalette();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (filteredCommands.length > 0) {
        activeCmdIndex = (activeCmdIndex + 1) % filteredCommands.length;
        updateActiveCommandClass();
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (filteredCommands.length > 0) {
        activeCmdIndex = (activeCmdIndex - 1 + filteredCommands.length) % filteredCommands.length;
        updateActiveCommandClass();
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[activeCmdIndex]) {
        filteredCommands[activeCmdIndex].action();
      }
    }
  });

  window.addEventListener("scroll", handleScroll, { passive: true });

  // Initialize UI on load
  updateUI();
  handleScroll();
    })();
