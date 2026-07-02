/* ============================================================
   Ortoclínica Boa Viagem — js/script.js
   Ponto de entrada: inicializa todos os módulos.
   Ordem de carregamento no HTML:
   data.js → whatsapp.js → menu.js → scroll.js → render.js →
   chatbot.js → script.js (todos com defer)
   ============================================================ */
'use strict';

document.addEventListener('DOMContentLoaded', function () {
  OBV.whatsapp.init();  /* links data-wa */
  OBV.menu.init();      /* menu mobile */
  OBV.render.init();    /* stats, convênios, equipe, avaliações */
  OBV.chatbot.init();   /* assistente de dúvidas */
  OBV.scroll.init();    /* reveal + mapa lazy */
});
