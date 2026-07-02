/* ============================================================
   Ortoclínica Boa Viagem — js/modules/chatbot.js
   Assistente de dúvidas frequentes: casa palavras-chave dos
   fluxos em OBV.chatbotFlows e responde. Sem redes externas.

   Segurança: mensagens inseridas com textContent (nunca
   innerHTML) — o input do usuário jamais vira HTML.
   ============================================================ */
'use strict';

window.OBV = window.OBV || {};

OBV.chatbot = (function () {

  let popup, msgs, input;

  /** Normaliza texto para busca (minúsculas, sem acentos). */
  function normalize(text) {
    return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  /** Adiciona uma bolha de mensagem. */
  function addMessage(text, isUser, withWaButton) {
    const bubble = document.createElement('div');
    bubble.className = 'msg ' + (isUser ? 'msg--user' : 'msg--bot');
    bubble.textContent = text;

    if (withWaButton) {
      const link = document.createElement('a');
      link.className = 'msg__wa';
      link.textContent = 'Falar no WhatsApp';
      link.href = OBV.whatsapp.buildLink('chatbot');
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      bubble.appendChild(document.createElement('br'));
      bubble.appendChild(link);
    }

    msgs.appendChild(bubble);
    msgs.scrollTop = msgs.scrollHeight;
  }

  /** Resolve a resposta de um fluxo (string ou função). */
  function resolveResponse(flow) {
    return typeof flow.response === 'function' ? flow.response() : flow.response;
  }

  /** Procura um fluxo pelas palavras-chave. */
  function matchFlow(question) {
    const q = normalize(question);
    return OBV.chatbotFlows.find(function (flow) {
      return flow.keywords.some(function (kw) { return q.indexOf(normalize(kw)) !== -1; });
    });
  }

  function handleQuestion(question) {
    addMessage(question, true, false);
    const flow = matchFlow(question);
    window.setTimeout(function () {
      if (flow) addMessage(resolveResponse(flow), false, false);
      else addMessage(OBV.chatbotFallback, false, true);
    }, 350);
  }

  function init() {
    popup = document.getElementById('chatbot');
    msgs = document.getElementById('chatbot-msgs');
    input = document.getElementById('chatbot-input');
    const openBtn = document.getElementById('chatbot-open');
    const closeBtn = document.getElementById('chatbot-close');
    const sendBtn = document.getElementById('chatbot-send');
    const quick = document.getElementById('chatbot-quick');
    if (!popup || !msgs) return;

    /* atalhos de dúvidas frequentes */
    OBV.chatbotFlows.forEach(function (flow) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = flow.label;
      btn.addEventListener('click', function () { handleQuestion(flow.label); });
      quick.appendChild(btn);
    });

    openBtn.addEventListener('click', function () {
      const open = popup.classList.toggle('is-open');
      if (open && !msgs.hasChildNodes()) {
        addMessage('Olá! Sou o assistente virtual da ' + OBV.clinic.name + '. Como posso ajudar?', false, false);
      }
      if (open) input.focus();
    });
    closeBtn.addEventListener('click', function () { popup.classList.remove('is-open'); });
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape') popup.classList.remove('is-open');
    });

    function send() {
      const value = input.value.trim();
      if (!value) return;
      input.value = '';
      handleQuestion(value);
    }
    sendBtn.addEventListener('click', send);
    input.addEventListener('keydown', function (ev) { if (ev.key === 'Enter') send(); });
  }

  return { init: init };
})();
