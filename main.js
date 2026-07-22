// ── Mobile nav toggle ──
const toggle = document.querySelector('.nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      mobileMenu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

// ── Infinite scroll marquee ──
const track = document.getElementById('marquee-track');
if (track) {
  // Duplicate all cards to create seamless loop
  const cards = track.innerHTML;
  track.innerHTML = cards + cards;
}

// ── Access modal (e.g. Amber's Magic Pictures) ──
const modalTriggers = document.querySelectorAll('[data-modal]');
modalTriggers.forEach(trigger => {
  const modal = document.getElementById(trigger.dataset.modal);
  if (!modal) return;

  const open = () => {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  trigger.addEventListener('click', open);
  trigger.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
  });

  modal.querySelector('.modal-close')?.addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) close();
  });
});

// ── Nav shadow on scroll ──
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 20
      ? '0 2px 20px rgba(0,0,0,0.06)'
      : 'none';
  }, { passive: true });
}
