# Ortoclínica Boa Viagem — Site institucional

Site one-page da Ortoclínica Boa Viagem (traumato-ortopedia, Recife-PE), construído no padrão **GSD PRO**: HTML semântico, CSS com design tokens, JavaScript modular e dados centralizados.

## Estrutura

```
/ortoclinica-boa-viagem
├── index.html
├── favicon.ico
├── /assets
│   ├── /images          → logo, emblema, og-image, /convenios, /equipe
│   └── /icons           → favicons
├── /css
│   ├── variables.css    → tokens de design (cores, fontes, espaçamentos)
│   └── styles.css       → estilos organizados por seção
└── /js
    ├── script.js        → ponto de entrada
    └── /modules
        ├── data.js      → TODOS os dados da clínica (edite só aqui)
        ├── whatsapp.js  → links wa.me
        ├── menu.js      → menu mobile
        ├── scroll.js    → animações on-scroll + mapa lazy
        ├── render.js    → convênios, equipe, avaliações, stats
        └── chatbot.js   → assistente de dúvidas frequentes
```

## Onde editar o quê

| Quero mudar…                       | Arquivo                        |
|------------------------------------|--------------------------------|
| Telefone, WhatsApp, endereço, horários | `js/modules/data.js` (`OBV.clinic`) |
| Médicos e CRMs                     | `js/modules/data.js` (`OBV.doctors`) |
| Convênios                          | `js/modules/data.js` (`OBV.agreements`) |
| Respostas do chatbot               | `js/modules/data.js` (`OBV.chatbotFlows`) |
| Cores/fontes do site inteiro       | `css/variables.css`            |
| Textos das seções e SEO            | `index.html`                   |

## Pendências

- **CRMs**: preencher o campo `crm` de cada médico em `data.js`.
- **Fotos da equipe**: salvar em `assets/images/equipe/` e apontar no campo `photo`.
- **Fotos da estrutura**: a galeria usa fotos do perfil do Google (hotlink). Recomendado baixá-las para `assets/images/estrutura/` e trocar os `src` no `index.html` — URLs do Google podem expirar.
- **Logos de convênios**: 30 de 30 aplicados (coloridos em `assets/images/convenios/`, brancos em `convenios/branco/`). O da Gama Saúde é uma recriação fiel (texto "gama" sobre azul-royal) — substituir pelo arquivo oficial se desejar precisão tipográfica.
- **Domínio**: confirmar `ortoclinicaboaviagem.com.br` (usado no SEO/Open Graph).

## Publicação

Site 100% estático — basta subir a pasta em qualquer hospedagem (Netlify, Vercel, GitHub Pages, cPanel). Configurar os headers de segurança indicados no comentário do `<head>` do `index.html`.
