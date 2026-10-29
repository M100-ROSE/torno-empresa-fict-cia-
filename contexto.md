# Contexto do Projeto — TORNO

## Visão do Projeto
Site institucional one-page da **TORNO**, joalheria autoral de alto padrão em São Paulo (Vila Madalena). Foco em agendamento de visitas ao atelier, apresentação do processo artesanal e peças únicas em ouro 18k reciclado e pedras certificadas.

## Stack Atual
- **Framework**: Vue 3 + Vite (projeto dentro de `site/`)
- **Linguagem**: JavaScript (ES Modules), SFCs (.vue)
- **CSS**: Arquivo global único (`site/src/styles.css`), sem scoped styles, sem CSS-in-JS
- **Build**: Vite 8, saída em `site/dist/`
- **Node**: ≥20.19 (ambiente atual: 24.18)

## Comandos Principais
```bash
cd site
npm install        # instala dependências
npm run dev        # servidor de desenvolvimento (porta 5173)
npm run build      # build de produção em dist/
npm run preview    # preview do build de produção
```

## Estrutura de Pastas/Arquivos
```
site/
├── index.html              # Entry Vite (metas, fontes, #app, /src/main.js)
├── package.json
├── vite.config.js
├── .gitignore
├── package-lock.json
└── src/
    ├── main.js             # createApp(App).mount("#app") + import CSS global
    ├── App.vue             # Skip link + SiteHeader + main (4 sections) + SiteFooter
    ├── styles.css          # CSS global preservado (idêntico ao original, exceto comentário de cabeçalho)
    ├── data/
    │   ├── navegacao.js    # Itens do menu: label + href
    │   ├── pecas.js        # Array das 3 peças: num, nome, meta, preco, variante da arte
    │   ├── atelier.js      # Textos do ateliê
    │   ├── contato.js      # Intro, ações mailto, nota, lista dl
    │   └── rodape.js       # Colunas do rodapé (endereço, links, notas)
    └── components/
        ├── SiteHeader.vue  # Cabeçalho fixo: marca, nav, CTA
        ├── SiteFooter.vue  # Rodapé: marca, tagline, 3 colunas, base
        ├── ui/
        │   ├── Overline.vue       # <p class="overline"> com num opcional
        │   ├── BotaoLink.vue      # <a class="botao"> com href e label
        │   ├── LinkEditorial.vue  # <a class="link-editorial"> com href e label
        │   └── FiguraArte.vue     # Figura com arte CSS (variantes: hero, anel, brinco, colar, atelier)
        └── sections/
            ├── HeroSection.vue     # Hero com texto, ações, figura
            ├── PecasSection.vue    # Grid de peças (usa PecaCard)
            ├── PecaCard.vue        # Card individual de peça
            ├── AtelierSection.vue  # Figura + texto do ateliê
            ├── ContatoSection.vue  # Intro, ações mailto, DadosContato
            └── DadosContato.vue    # <dl> com dados do atelier
```

## Dados (`src/data/`)
Cada arquivo exporta um array/objeto com o conteúdo estático. Mudanças de copy/imagens só exigem editar estes arquivos — componentes consomem via `import`.

## Política de CSS
- **Único arquivo global**: `src/styles.css` importado em `main.js`.
- Nenhum `<style scoped>` em componentes.
- Seletores, variáveis, animações e media queries idênticos ao site estático original.
- Alterações de estilo → editar `src/styles.css` diretamente.

## Histórico da Migração
- **Data**: 29/10/2026
- **Autor**: Anna (front-end), supervisionada por Bebell (lead)
- **O que foi feito**:
  1. Convertido HTML estático (`site/index.html` + `site/styles.css`) para projeto Vite + Vue 3 dentro de `site/`.
  2. CSS movido para `site/src/styles.css` (apenas 2 linhas de comentário de cabeçalho alteradas).
  3. Conteúdo extraído para `src/data/` (5 arquivos).
  4. Componentes criados: 2 de layout, 4 de UI, 6 de seções.
  5. Build validado: `npm install` (0 vulnerabilidades), `npm run build` OK (28 módulos, CSS 10.73 kB gzip 2.96 kB, JS 71.45 kB gzip 27.83 kB).
  6. DOM renderizado idêntico ao original (comparação SSR: 5.352 chars, markup/textos iguais).
  7. EOL normalizado para LF em `src/styles.css`.
  8. Commit `d324a49`: "Migra site TORNO para Vue 3 + Vite modularizado" + push para GitHub.

## Pendências
1. **Revisão visual no browser** pela Day (CSS/DOM idênticos, mas confirmação pixel-perfect pendente).
2. **`base` do Vite para deploy em subpasta** (ex.: GitHub Pages `/repo/`) — hoje está no padrão `'/'`. Definir conforme destino de deploy.
3. **Favicon inexistente** — original não tinha; browser pode logar 404 em `/favicon.ico`. Adicionar se necessário.
4. **`.gitattributes` para fixar LF** — `core.autocrlf=true` global causa avisos de conversão CRLF no working tree. Recomenda-se adicionar `.gitattributes` na raiz com `site/** text eol=lf` (não criado para não afetar arquivos fora de `site/` sem alinhamento do time).
5. **`.opencode/`** (config dos agentes) está untracked — aguarda decisão de commit.

---
*Atualizado automaticamente ao final do ciclo de migração.*
