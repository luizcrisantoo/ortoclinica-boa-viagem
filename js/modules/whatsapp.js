/* ============================================================
   Ortoclínica Boa Viagem — js/modules/whatsapp.js
   Monta os links de WhatsApp a partir de OBV.clinic.whatsapp.
   Uso no HTML: <a href="#" data-wa="default">...</a>
   ============================================================ */
'use strict';

window.OBV = window.OBV || {};

OBV.whatsapp = (function () {

  /** Monta um link wa.me seguro (apenas dígitos no número). */
  function buildLink(key) {
    const wa = OBV.clinic.whatsapp;
    const number = String(wa.number).replace(/\D/g, '');
    const msg = wa.messages[key] || wa.messages.default;
    return 'https://wa.me/' + number + '?text=' + encodeURIComponent(msg);
  }

  /** Preenche todos os <a data-wa="..."> da página. */
  function init() {
    document.querySelectorAll('a[data-wa]').forEach(function (a) {
      a.href = buildLink(a.getAttribute('data-wa'));
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    });
  }

  return { init: init, buildLink: buildLink };
})();
