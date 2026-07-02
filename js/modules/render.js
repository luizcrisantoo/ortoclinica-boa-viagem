/* ============================================================
   Ortoclínica Boa Viagem — js/modules/render.js
   Renderização dinâmica: estatísticas do hero, convênios,
   equipe (com filtro) e carrossel de avaliações.

   Segurança: todo conteúdo dinâmico é inserido com
   createElement/textContent — nunca innerHTML com dados.
   ============================================================ */
'use strict';

window.OBV = window.OBV || {};

OBV.render = (function () {

  /* ---------- helpers ---------- */

  /** Cria elemento com classe e texto (sempre via textContent). */
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null && text !== '') node.textContent = text;
    return node;
  }

  /** Iniciais de um nome ("Fábio Guimarães" → "FG"). */
  function initials(name) {
    const parts = name.trim().split(/\s+/);
    const first = parts[0] ? parts[0][0] : '';
    const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
    return (first + last).toUpperCase();
  }

  /* ---------- hero: estatísticas ---------- */
  function renderStats() {
    const box = document.getElementById('hero-stats');
    if (!box) return;
    OBV.clinic.stats.forEach(function (s) {
      const item = el('div');
      item.appendChild(el('strong', null, s.value));
      item.appendChild(el('span', null, s.label));
      box.appendChild(item);
    });
  }

  /* ---------- convênios ---------- */
  function renderAgreements() {
    const box = document.getElementById('plans-grid');
    if (!box) return;
    OBV.agreements.forEach(function (a) {
      const card = el('div', 'plan');
      const img = document.createElement('img');
      img.src = 'assets/images/convenios/branco/' + encodeURIComponent(a.logo);
      img.alt = 'Convênio ' + a.name;
      img.loading = 'lazy';
      card.appendChild(img);
      card.appendChild(el('span', null, a.name));
      box.appendChild(card);
    });
  }

  /* ---------- equipe (com filtro por subespecialidade) ---------- */
  function renderTeam() {
    const filters = document.getElementById('team-filters');
    const grid = document.getElementById('team-grid');
    if (!filters || !grid) return;

    const groups = ['Todos'];
    OBV.doctors.forEach(function (d) {
      if (groups.indexOf(d.group) === -1) groups.push(d.group);
    });

    function draw(active) {
      grid.textContent = '';
      OBV.doctors
        .filter(function (d) { return active === 'Todos' || d.group === active; })
        .forEach(function (d) {
          const card = el('article', 'doctor reveal is-visible');

          const avatar = el('div', 'doctor__avatar');
          if (d.photo) {
            const img = document.createElement('img');
            img.src = 'assets/images/equipe/' + encodeURIComponent(d.photo);
            img.alt = d.name + ', ' + d.role;
            img.loading = 'lazy';
            avatar.appendChild(img);
          } else {
            avatar.textContent = initials(d.name);
          }
          card.appendChild(avatar);

          card.appendChild(el('h3', null, d.name));
          card.appendChild(el('p', 'role', d.role));
          card.appendChild(el('span', 'sub', 'Cirurgia — ' + d.group));
          if (d.crm) card.appendChild(el('span', 'crm', d.crm));
          grid.appendChild(card);
        });
    }

    groups.forEach(function (g, i) {
      const chip = el('button', 'chip' + (i === 0 ? ' is-active' : ''), g);
      chip.type = 'button';
      chip.addEventListener('click', function () {
        filters.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('is-active'); });
        chip.classList.add('is-active');
        draw(g);
      });
      filters.appendChild(chip);
    });

    draw('Todos');

    /* Cards de especialidade rolam até a equipe já filtrada */
    document.querySelectorAll('[data-team-group]').forEach(function (card) {
      card.addEventListener('click', function () {
        const group = card.getAttribute('data-team-group');
        const target = document.getElementById('equipe');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        filters.querySelectorAll('.chip').forEach(function (c) {
          c.classList.toggle('is-active', c.textContent === group);
        });
        draw(group);
      });
      card.addEventListener('keydown', function (ev) {
        if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); card.click(); }
      });
    });
  }

  /* ---------- avaliações: carrossel ---------- */
  function renderReviews() {
    const track = document.getElementById('reviews-track');
    const dotsBox = document.getElementById('reviews-dots');
    const prev = document.getElementById('reviews-prev');
    const next = document.getElementById('reviews-next');
    if (!track) return;

    OBV.reviews.items.forEach(function (r) {
      const card = el('article', 'review');
      card.appendChild(el('div', 'stars', '★★★★★'));
      card.appendChild(el('p', null, '“' + r.text + '”'));

      const foot = el('footer');
      foot.appendChild(el('div', 'review__avatar', initials(r.name)));
      const who = el('div', 'who');
      who.appendChild(el('strong', null, r.name));
      const time = el('time', null, r.date);
      who.appendChild(time);
      foot.appendChild(who);
      card.appendChild(foot);
      track.appendChild(card);
    });

    /* paginação */
    let page = 0;

    function perPage() {
      const w = window.innerWidth;
      if (w <= 768) return 1;
      if (w <= 1024) return 2;
      return 3;
    }

    function pages() { return Math.max(1, Math.ceil(OBV.reviews.items.length / perPage())); }

    function update() {
      const total = pages();
      if (page >= total) page = total - 1;
      track.style.transform = 'translateX(calc(-' + (page * 100) + '% - ' + page + ' * var(--sp-3)))';
      if (dotsBox) {
        dotsBox.textContent = '';
        for (let i = 0; i < total; i++) {
          const dot = el('span', i === page ? 'is-active' : '');
          dotsBox.appendChild(dot);
        }
      }
    }

    /* auto-avanço: desligado para quem prefere menos movimento;
       pausa no hover/foco; interação manual reinicia a contagem */
    let timer = null;
    function stopAuto() { if (timer) { window.clearInterval(timer); timer = null; } }
    function startAuto() {
      stopAuto();
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      timer = window.setInterval(function () { page = (page + 1) % pages(); update(); }, 8000);
    }

    if (prev) prev.addEventListener('click', function () { page = (page - 1 + pages()) % pages(); update(); startAuto(); });
    if (next) next.addEventListener('click', function () { page = (page + 1) % pages(); update(); startAuto(); });
    window.addEventListener('resize', update);

    const shell = track.closest('.carousel');
    if (shell) {
      shell.addEventListener('mouseenter', stopAuto);
      shell.addEventListener('mouseleave', startAuto);
      shell.addEventListener('focusin', stopAuto);
      shell.addEventListener('focusout', startAuto);
    }
    startAuto();
    update();
  }

  function init() {
    renderStats();
    renderAgreements();
    renderTeam();
    renderReviews();
  }

  return { init: init };
})();
