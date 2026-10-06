// Inicializar Lucide Icons
if (window.lucide) {
  lucide.createIcons();
}

// Switcher de Viewports (Desktop / Tablet / Celular)
const vpButtons = document.querySelectorAll('.vp-btn');
const previewContainer = document.getElementById('previewContainer');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileDrawer = document.getElementById('mobileDrawer');

vpButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    vpButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const vp = btn.getAttribute('data-vp');
    previewContainer.classList.remove('vp-desktop', 'vp-tablet', 'vp-mobile');
    previewContainer.classList.add(`vp-${vp}`);
    
    // Cerrar drawer si cambia de viewport
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
  });
});

// Mobile Drawer Toggle
if (mobileMenuBtn && mobileDrawer) {
  mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = mobileDrawer.classList.toggle('open');
    mobileMenuBtn.classList.toggle('active', isOpen);
  });
}

// Cerrar drawer al hacer click en links
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
  });
});

// Efecto de scroll dinámico en el header
const previewFrame = document.getElementById('previewContainer');
const mainHeader = document.getElementById('mainHeader');

if (previewFrame && mainHeader) {
  previewFrame.addEventListener('scroll', () => {
    if (previewFrame.scrollTop > 20) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }
  });
}

// Controles del Carrusel de Trabajos
const carousel = document.getElementById('portfolioCarousel');
const prevBtn = document.getElementById('carouselPrevBtn');
const nextBtn = document.getElementById('carouselNextBtn');

if (carousel && prevBtn && nextBtn) {
  const getScrollStep = () => {
    const slide = carousel.querySelector('.carousel-slide-item');
    return slide ? slide.offsetWidth + 24 : 380;
  };

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
  });
}

// Controles del Carrusel de Servicios Modulares
const servicesCarousel = document.getElementById('servicesCarousel');
const servicesPrevBtn = document.getElementById('servicesPrevBtn');
const servicesNextBtn = document.getElementById('servicesNextBtn');

if (servicesCarousel && servicesPrevBtn && servicesNextBtn) {
  const getServiceScrollStep = () => {
    const slide = servicesCarousel.querySelector('.service-slide-item');
    return slide ? slide.offsetWidth + 18 : 298;
  };

  servicesPrevBtn.addEventListener('click', () => {
    servicesCarousel.scrollBy({ left: -getServiceScrollStep(), behavior: 'smooth' });
  });

  servicesNextBtn.addEventListener('click', () => {
    servicesCarousel.scrollBy({ left: getServiceScrollStep(), behavior: 'smooth' });
  });
}
