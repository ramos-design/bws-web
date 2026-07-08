(function () {
  'use strict';

  // Header shadow on scroll
  const header = document.getElementById('site-header');
  const onScroll = () => {
    if (window.scrollY > 4) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Smooth scroll with header offset for in-page anchors
  const headerHeight = () => header.getBoundingClientRect().height;
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight() + 1;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // Reveal on scroll
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // GA4 event tracking — no-op na stránkách bez gtag (např. v2.html)
  const track = (name, params) => {
    if (typeof window.gtag === 'function') window.gtag('event', name, params || {});
  };

  // Hlavní konverze: kliknutí na telefonní číslo
  document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
    link.addEventListener('click', () => {
      track('phone_call_click', {
        // odkud v rámci stránky uživatel volal (header, hero, patička…)
        link_location: link.className || 'unknown',
        phone_number: link.getAttribute('href').replace('tel:', ''),
      });
    });
  });

  // FAQ — rozkliknutí otázky
  document.querySelectorAll('details.faq-item').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      const q = item.querySelector('summary h3');
      track('faq_open', { question: q ? q.textContent.trim() : '' });
    });
  });

  // Scroll do kontaktní sekce (měkká konverze — jednou za návštěvu)
  const contact = document.getElementById('kontakt');
  if (contact && 'IntersectionObserver' in window) {
    const contactIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            track('view_contact');
            contactIo.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    contactIo.observe(contact);
  }
})();
