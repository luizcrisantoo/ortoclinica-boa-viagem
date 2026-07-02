/* ============================================================
   Ortoclínica Boa Viagem — js/modules/menu.js
   Menu mobile (hambúrguer): abre/fecha e fecha ao navegar.
   ============================================================ */
'use strict';

window.OBV = window.OBV || {};

OBV.menu = (function () {

  function init() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? '✕' : '☰';
    });

    /* Fecha o menu ao clicar em qualquer link */
    nav.addEventListener('click', function (ev) {
      if (ev.target.closest('a')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = '☰';
      }
    });
  }

  return { init: init };
})();
