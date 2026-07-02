/* ============================================================
   Ortoclínica Boa Viagem — js/modules/data.js
   FONTE ÚNICA de dados do site. Para alterar telefone, equipe,
   convênios ou respostas do chatbot, edite APENAS este arquivo.

   Obs.: os módulos usam scripts clássicos com um único
   namespace global (window.OBV) para funcionar também ao abrir
   o index.html direto do disco (file://), onde ES Modules
   são bloqueados pelo navegador.
   ============================================================ */
'use strict';

window.OBV = window.OBV || {};

OBV.clinic = {
  name: 'Ortoclínica Boa Viagem',
  tagline: 'Ortopedia e Fisioterapia',
  siteUrl: 'https://luizcrisantoo.github.io/ortoclinica-boa-viagem/', /* TODO: trocar quando o domínio próprio for registrado */

  phones: [
    { label: '(81) 3076-9245', href: 'tel:+558130769245' },
    { label: '(81) 2129-1402', href: 'tel:+558121291402' },
    { label: '(81) 2129-1403', href: 'tel:+558121291403' },
  ],

  whatsapp: {
    number: '5581991168831', /* somente dígitos — formato wa.me */
    label: '(81) 99116-8831',
    messages: {
      default:   'Olá! Gostaria de agendar uma consulta na Ortoclínica Boa Viagem.',
      convenios: 'Olá! Gostaria de saber sobre os convênios aceitos na Ortoclínica Boa Viagem.',
      chatbot:   'Olá! Vim pelo site da clínica e tenho uma dúvida que o assistente não conseguiu responder.',
    },
  },

  address: {
    lines: ['Av. Visconde de Jequitinhonha, 1144 — Sala 402', 'Boa Viagem, Recife — PE', 'CEP 51030-020'],
    mapsUrl: 'https://maps.google.com/?q=Av.+Visconde+de+Jequitinhonha,+1144,+Boa+Viagem,+Recife',
  },

  hours: [
    { day: 'Seg a Sex', time: '07:00 – 18:00', closed: false },
    { day: 'Sábado',    time: 'Fechado',        closed: true },
    { day: 'Domingo',   time: 'Fechado',        closed: true },
  ],

  instagram: { handle: '@ortoclinicaboaviagem', url: 'https://instagram.com/ortoclinicaboaviagem' },

  stats: [
    { value: '9',   label: 'Especialidades' },
    { value: '11+', label: 'Especialistas' },
    { value: '30',  label: 'Convênios' },
  ],
};

/* ---------- Equipe ----------
   photo: nome do arquivo em assets/images/equipe/ (null = avatar com iniciais)
   crm:   TODO preencher os CRMs */
OBV.doctors = [
  { name: 'Marina Hirschle',  role: 'Médica Ortopedista', group: 'Coluna',           crm: '', photo: null },
  { name: 'Márcio Crisanto',  role: 'Médico Ortopedista', group: 'Coluna',           crm: 'CRM 12253', photo: null },
  { name: 'Róbson Kopke',     role: 'Médico Ortopedista', group: 'Joelho',           crm: '', photo: null },
  { name: 'Fábio Guimarães',  role: 'Médico Ortopedista', group: 'Joelho',           crm: 'CRM 11244', photo: null },
  { name: 'Fábio Kauffman',   role: 'Médico Ortopedista', group: 'Ombro e Cotovelo', crm: '', photo: null },
  { name: 'Airllan Alves',    role: 'Médico Ortopedista', group: 'Ombro e Cotovelo', crm: '', photo: null },
  { name: 'Sandrelli Melo',   role: 'Médico Ortopedista', group: 'Pé e Tornozelo',   crm: '', photo: null },
  { name: 'Lucas Severo',     role: 'Médico Ortopedista', group: 'Pé e Tornozelo',   crm: '', photo: null },
  { name: 'George Alencar',   role: 'Médico Ortopedista', group: 'Quadril',          crm: '', photo: null },
  { name: 'Ianele Braga',     role: 'Médica Ortopedista', group: 'Mão e Punho',      crm: '', photo: null },
  { name: 'Airton Casé',      role: 'Médico Ortopedista', group: 'Mão e Punho',      crm: '', photo: null },
];

/* ---------- Convênios ----------
   logo: arquivo em assets/images/convenios/
   Logos "(placeholder)" foram geradas com o nome do convênio —
   substitua pelo logo oficial mantendo o nome do arquivo. */
OBV.agreements = [
  { name: 'Allianz Saúde',    logo: 'logo-allianz-saude.png' },
  { name: 'Amepe',            logo: 'logo-amepe.png' },
  { name: 'Amil',             logo: 'logo-amil.png' },
  { name: 'Assefaz',          logo: 'logo-assefaz.png' },
  { name: 'BC Saúde',         logo: 'logo-bc-saude.png' },
  { name: 'Bradesco Seguros', logo: 'logo-bradesco-saude.png' },
  { name: 'Exmed',            logo: 'logo-exmed.png' },
  { name: 'Fachesf',          logo: 'logo-fachesf.png' },
  { name: 'FCA Saúde',        logo: 'logo-fca-saude.png' },
  { name: 'Fisco Saúde',      logo: 'logo-fisco-saude.png' },
  { name: 'Fusex',            logo: 'logo-fusex.png' },
  { name: 'Fusma',            logo: 'logo-fusma.png' },
  { name: 'Gama Saúde',       logo: 'logo-gama-saude.png' },
  { name: 'Geap Saúde',       logo: 'logo-geap.png' },
  { name: 'HGU Saúde',        logo: 'logo-hgu-saude.png' },
  { name: 'Life Empresarial', logo: 'logo-life-empresarial.png' },
  { name: 'Mediservice',      logo: 'logo-medservice.png' },
  { name: 'Medprev',          logo: 'logo-medprev.png' },
  { name: 'Plan-Assiste',     logo: 'logo-plan-assiste.png' },
  { name: 'Postal Saúde',     logo: 'logo-postal-saude.png' },
  { name: 'Saúde Caixa',      logo: 'logo-saude-caixa.png' },
  { name: 'Saúde Petrobras',  logo: 'logo-saude-petrobras.png' },
  { name: 'Saúde Recife',     logo: 'logo-saude-recife.png' },
  { name: 'Sismepe (PM-PE)',  logo: 'logo-sismepe.png' },
  { name: 'SulAmérica',       logo: 'logo-sulamerica.png' },
  { name: 'Telos',            logo: 'logo-telos.png' },
  { name: 'Transpetro',       logo: 'logo-transpetro.png' },
  { name: 'TRT6 Saúde',       logo: 'logo-trt6-saude.png' },
  { name: 'Unafisco Saúde',   logo: 'logo-unafisco-saude.png' },
  { name: 'Unimed',           logo: 'logo-unimed.png' },
];

/* ---------- Avaliações (fonte: Doctoralia) ---------- */
OBV.reviews = {
  score: '5.0',
  count: 166,
  url: 'https://www.doctoralia.com.br/clinicas/ortoclinica-boa-viagem',
  items: [
    { name: 'Alexsandra', date: 'Março 2026',
      text: 'Hoje foi o primeiro atendimento e a médica foi bastante atenciosa. Explicou e respondeu as minhas dúvidas.' },
    { name: 'Ney', date: 'Fevereiro 2026',
      text: 'Levei minha mãe, idosa, para tratar fortes dores na coluna. A médica avaliou com atenção, foi empática, solicitou exames complementares e indicou possível tratamento corretivo.' },
    { name: 'Avyner L.', date: 'Agosto 2025',
      text: 'Grato pelo excelente atendimento, diagnóstico e acompanhamento durante o tratamento.' },
    { name: 'Alba', date: 'Agosto 2025',
      text: 'Atenciosa e precisa! Pontual! Voltarei com exames! Avaliação de dores na cervical.' },
    { name: 'Fábio Eros', date: 'Agosto 2025',
      text: 'Uma médica muito profissional e bem objetiva com a necessidade do cliente.' },
    { name: 'Maria Yoneida M.', date: 'Junho 2025',
      text: 'Muito atenciosa e bem clara sobre o quadro e tratamento. Gostamos bastante.' },
    { name: 'Acrisio L. R.', date: 'Junho 2025',
      text: 'Gostei muito da Doutora, muito atenciosa e cordial.' },
  ],
};

/* ---------- Fluxos do chatbot ----------
   response pode ser string ou função (para dados dinâmicos). */
OBV.chatbotFlows = [
  {
    id: 'equipe',
    label: 'Nossa equipe',
    keywords: ['médic', 'doutor', 'equipe', 'profissional', 'especialista', 'cirurg'],
    response: function () {
      const groups = [];
      OBV.doctors.forEach(function (d) {
        if (groups.indexOf(d.group) === -1) groups.push(d.group);
      });
      return 'Nossa equipe tem ' + OBV.doctors.length + ' cirurgiões ortopédicos nas áreas de ' +
        groups.join(', ') + ', além de cardiologia, fisioterapia traumato-ortopédica e nutrição. ' +
        'Veja a seção "Equipe" do site para conhecer cada um.';
    },
  },
  {
    id: 'horarios',
    label: 'Horários',
    keywords: ['horário', 'hora', 'funciona', 'aberto', 'atende', 'funcionamento', 'sábado', 'domingo'],
    response: function () {
      const lines = OBV.clinic.hours.map(function (h) { return h.day + ': ' + h.time; });
      return lines.join('\n') + '\n\nTelefone: ' + OBV.clinic.phones[0].label;
    },
  },
  {
    id: 'agendar',
    label: 'Como agendar?',
    keywords: ['agendar', 'consulta', 'marcar', 'agendamento', 'agenda', 'retorno', 'custa', 'valor', 'preço', 'preco', 'quanto'],
    response: 'Para agendar, é só chamar no WhatsApp ' + '(81) 99116-8831' +
      ' ou ligar para (81) 3076-9245 / 2129-1402 / 2129-1403. Atendemos convênios e particular — o valor da consulta particular é informado na hora, pelo WhatsApp.',
  },
  {
    id: 'convenios',
    label: 'Convênios',
    keywords: ['plano', 'convênio', 'convenio', 'seguro', 'unimed', 'bradesco', 'amil', 'aceita', 'particular'],
    response: function () {
      return 'Aceitamos ' + OBV.agreements.length + ' convênios:\n\n' +
        OBV.agreements.map(function (a) { return a.name; }).join(' · ') +
        '\n\nTambém atendemos particular.';
    },
  },
  {
    id: 'acesso',
    label: 'Como chegar',
    keywords: ['acesso', 'elevador', 'andar', 'chegar', 'estacionamento', 'prédio', 'predio', 'cadeirante', 'acessibilidade'],
    response: 'A clínica fica na torre de consultórios anexa ao hospital (Av. Visconde de Jequitinhonha, 1144), com entrada exclusiva e elevadores até o 4º andar — salas 402 a 404. Sobre estacionamento e outras facilidades, é só perguntar no WhatsApp que a recepção orienta!',
  },
  {
    id: 'primeira',
    label: 'Primeira consulta',
    keywords: ['levar', 'primeira consulta', 'carteirinha', 'documento', 'preparo', 'preciso trazer'],
    response: 'Para a primeira consulta, traga um documento com foto, a carteirinha do convênio e, se tiver, exames de imagem anteriores (raio-X, ressonância, ultrassom). Chegando uns minutinhos antes, o atendimento flui melhor!',
  },
  {
    id: 'exames',
    label: 'Exames',
    keywords: ['exame', 'ultrassom', 'ultrassonografia', 'eletro', 'infiltração', 'bioimpedância', 'procedimento'],
    response: 'Realizamos na própria clínica: ultrassonografia musculoesquelética, infiltração com ácido hialurônico, eletrocardiograma e bioimpedância.',
  },
];

OBV.chatbotFallback =
  'Não consegui identificar sua dúvida com segurança. Para um atendimento mais rápido, fale direto com nossa equipe pelo WhatsApp:';
