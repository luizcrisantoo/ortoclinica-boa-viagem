/* ============================================================
   Ortoclínica Boa Viagem — js/modules/scroll.js
   Animações on-scroll (IntersectionObserver) e carregamento
   tardio do mapa do Google (performance).
   ============================================================ */
'use strict';

window.OBV = window.OBV || {};

OBV.scroll = (function () {

  /** Revela elementos .reveal quando entram na tela. */
  function initReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  }

  /** Só carrega o iframe do mapa quando a seção se aproxima da viewport. */
  function initLazyMap() {
    const frame = document.querySelector('iframe[data-src]');
    if (!frame) return;

    function load() {
      frame.src = frame.getAttribute('data-src');
      frame.addEventListener('load', function () {
        const ph = document.querySelector('.map-ph');
        if (ph) ph.style.display = 'none';
      });
    }

    if (!('IntersectionObserver' in window)) { load(); return; }
    const io = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { load(); io.disconnect(); }
    }, { rootMargin: '400px' });
    io.observe(frame);
  }

  function init() {
    initReveal();
    initLazyMap();
  }

  return { init: init };
})();
