/**
 * ============================================
 * MAIN JAVASCRIPT - Funcionalidad Modular
 * ============================================
 * Arquitectura: Módulos ES6 + Principios SOLID
 * Sin dependencias externas
 */

'use strict';

/**
 * ============================================
 * CONFIGURACIÓN Y CONSTANTES
 * ============================================
 */

const CONFIG = {
  selectors: {
    header: '.header',
    menuToggle: '.header__toggle',
    nav: '.header__nav',
    navLinks: '.header__menu-link',
    form: '.contact__form',
    formMessage: '.form__message',
    animatedElements: '.fade-in-up'
  },
  classes: {
    active: 'is-active',
    scrolled: 'is-scrolled',
    visible: 'is-visible'
  },
  scrollThreshold: 100
};

/**
 * ============================================
 * MÓDULO: MOBILE NAVIGATION
 * Manejo del menú móvil hamburguesa
 * ============================================
 */

const MobileMenu = (() => {
  let toggle = null;
  let nav = null;
  let isOpen = false;

  /**
   * Inicializa el menú móvil
   */
  const init = () => {
    toggle = document.querySelector(CONFIG.selectors.menuToggle);
    nav = document.querySelector(CONFIG.selectors.nav);

    if (!toggle || !nav) return;

    bindEvents();
  };

  /**
   * Vincula eventos del menú
   */
  const bindEvents = () => {
    toggle.addEventListener('click', handleToggle);
    
    // Cerrar menú al hacer click en un enlace
    const navLinks = document.querySelectorAll(CONFIG.selectors.navLinks);
    navLinks.forEach(link => {
      link.addEventListener('click', close);
    });

    // Cerrar menú con tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        close();
      }
    });
  };

  /**
   * Maneja el toggle del menú
   */
  const handleToggle = () => {
    isOpen ? close() : open();
  };

  /**
   * Abre el menú móvil
   */
  const open = () => {
    toggle.classList.add(CONFIG.classes.active);
    nav.style.display = 'block';
    
    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
    
    // Accesibilidad
    toggle.setAttribute('aria-expanded', 'true');
    
    isOpen = true;
  };

  /**
   * Cierra el menú móvil
   */
  const close = () => {
    toggle.classList.remove(CONFIG.classes.active);
    nav.style.display = 'none';
    
    // Restaurar scroll del body
    document.body.style.overflow = '';
    
    // Accesibilidad
    toggle.setAttribute('aria-expanded', 'false');
    
    isOpen = false;
  };

  return {
    init
  };
})();

/**
 * ============================================
 * MÓDULO: STICKY HEADER
 * Header que cambia al hacer scroll
 * ============================================
 */

const StickyHeader = (() => {
  let header = null;
  let lastScroll = 0;

  /**
   * Inicializa el sticky header
   */
  const init = () => {
    header = document.querySelector(CONFIG.selectors.header);
    if (!header) return;

    bindEvents();
  };

  /**
   * Vincula el evento de scroll
   */
  const bindEvents = () => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  };

  /**
   * Maneja el scroll de la página
   */
  const handleScroll = () => {
    const currentScroll = window.pageYOffset;

    // Añade clase cuando hace scroll
    if (currentScroll > CONFIG.scrollThreshold) {
      header.classList.add(CONFIG.classes.scrolled);
    } else {
      header.classList.remove(CONFIG.classes.scrolled);
    }

    lastScroll = currentScroll;
  };

  return {
    init
  };
})();

/**
 * ============================================
 * MÓDULO: SMOOTH SCROLL
 * Scroll suave a secciones internas
 * ============================================
 */

const SmoothScroll = (() => {
  /**
   * Inicializa el smooth scroll
   */
  const init = () => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', handleClick);
    });
  };

  /**
   * Maneja el click en enlaces internos
   */
  const handleClick = (e) => {
    const href = e.currentTarget.getAttribute('href');
    
    // Ignorar enlaces sin destino o solo "#"
    if (!href || href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    
    // Calcular offset del header
    const header = document.querySelector(CONFIG.selectors.header);
    const headerHeight = header ? header.offsetHeight : 0;
    
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  return {
    init
  };
})();

/**
 * ============================================
 * MÓDULO: FORM VALIDATION & SUBMISSION
 * Validación y envío del formulario de contacto
 * ============================================
 */

const ContactForm = (() => {
  let form = null;
  let messageContainer = null;

  /**
   * Inicializa el formulario
   */
  const init = () => {
    form = document.querySelector(CONFIG.selectors.form);
    messageContainer = document.querySelector(CONFIG.selectors.formMessage);

    if (!form) return;

    bindEvents();
  };

  /**
   * Vincula eventos del formulario
   */
  const bindEvents = () => {
    form.addEventListener('submit', handleSubmit);
    
    // Validación en tiempo real
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => validateField(input));
    });
  };

  /**
   * Maneja el envío del formulario
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar todos los campos
    const isValid = validateForm();
    if (!isValid) {
      showMessage('Por favor, completa todos los campos correctamente.', 'error');
      return;
    }

    // Obtener datos del formulario
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      // 🔧 PERSONALIZAR: Aquí debes integrar tu endpoint backend
      // Ejemplo con fetch API:
      /*
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error('Error en el envío');
      
      const result = await response.json();
      */

      // SIMULACIÓN de envío exitoso (eliminar en producción)
      await simulateSubmission(data);

      showMessage('¡Mensaje enviado con éxito! Te contactaremos pronto.', 'success');
      form.reset();

    } catch (error) {
      console.error('Error:', error);
      showMessage('Hubo un error al enviar el mensaje. Inténtalo de nuevo.', 'error');
    }
  };

  /**
   * Simula el envío del formulario (SOLO DESARROLLO)
   */
  const simulateSubmission = (data) => {
    return new Promise((resolve) => {
      console.log('📧 Datos del formulario:', data);
      setTimeout(resolve, 1000);
    });
  };

  /**
   * Valida todo el formulario
   */
  const validateForm = () => {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
      if (!validateField(input)) {
        isValid = false;
      }
    });

    return isValid;
  };

  /**
   * Valida un campo individual
   */
  const validateField = (field) => {
    const value = field.value.trim();
    const type = field.type;
    let isValid = true;

    // Validación de campo requerido
    if (field.hasAttribute('required') && !value) {
      isValid = false;
    }

    // Validación de email
    if (type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(value);
    }

    // Validación de teléfono (opcional)
    if (type === 'tel' && value) {
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      isValid = phoneRegex.test(value);
    }

    // Aplicar estilos de validación
    if (isValid) {
      field.style.borderColor = 'var(--color-success)';
    } else {
      field.style.borderColor = 'var(--color-error)';
    }

    return isValid;
  };

  /**
   * Muestra un mensaje de feedback
   */
  const showMessage = (text, type) => {
    if (!messageContainer) return;

    messageContainer.textContent = text;
    messageContainer.className = `form__message form__message--${type}`;
    messageContainer.style.display = 'block';

    // Auto-ocultar después de 5 segundos
    setTimeout(() => {
      messageContainer.style.display = 'none';
    }, 5000);
  };

  return {
    init
  };
})();

/**
 * ============================================
 * MÓDULO: INTERSECTION OBSERVER
 * Animaciones al entrar en viewport
 * ============================================
 */

const ScrollAnimations = (() => {
  let observer = null;

  /**
   * Inicializa las animaciones
   */
  const init = () => {
    const elements = document.querySelectorAll(CONFIG.selectors.animatedElements);
    if (!elements.length) return;

    createObserver();
    
    elements.forEach(el => {
      observer.observe(el);
    });
  };

  /**
   * Crea el Intersection Observer
   */
  const createObserver = () => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    observer = new IntersectionObserver(handleIntersection, options);
  };

  /**
   * Maneja la intersección de elementos
   */
  const handleIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(CONFIG.classes.visible);
        observer.unobserve(entry.target);
      }
    });
  };

  return {
    init
  };
})();

/**
 * ============================================
 * MÓDULO: PERFORMANCE MONITORING
 * Monitoreo de rendimiento (opcional)
 * ============================================
 */

const Performance = (() => {
  /**
   * Inicializa el monitoreo
   */
  const init = () => {
    if (!('performance' in window)) return;

    logMetrics();
  };

  /**
   * Registra métricas de rendimiento
   */
  const logMetrics = () => {
    window.addEventListener('load', () => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      const connectTime = perfData.responseEnd - perfData.requestStart;
      
      console.log('⚡ Performance Metrics:');
      console.log(`📊 Page Load Time: ${pageLoadTime}ms`);
      console.log(`🔌 Connect Time: ${connectTime}ms`);
    });
  };

  return {
    init
  };
})();

/**
 * ============================================
 * INICIALIZACIÓN DE LA APLICACIÓN
 * ============================================
 */

const App = (() => {
  /**
   * Punto de entrada principal
   */
  const init = () => {
    // Verificar que el DOM esté listo
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initModules);
    } else {
      initModules();
    }
  };

  /**
   * Inicializa todos los módulos
   */
  const initModules = () => {
    console.log('🚀 Iniciando aplicación...');

    // Inicializar módulos en orden
    MobileMenu.init();
    StickyHeader.init();
    SmoothScroll.init();
    ContactForm.init();
    ScrollAnimations.init();
    Performance.init();

    console.log('✅ Aplicación iniciada correctamente');
  };

  return {
    init
  };
})();

// Iniciar la aplicación
App.init();

/**
 * ============================================
 * EXPORTAR MÓDULOS (si usas ES6 modules)
 * ============================================
 */

// export { MobileMenu, StickyHeader, SmoothScroll, ContactForm };
