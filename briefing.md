# Briefing — TORNO

**Joalheria autoral de alto padrão**
Versão 1.0 · Responsável: Day · 26/10/2026 · Status: pronto para design

---

## 1. Visão geral

| Item | Definição |
|---|---|
| **Nicho** | Joalheria autoral e alta ourivesaria — peças únicas e sob medida, ouro reciclado e pedras raras |
| **Público** | Adultos de 30 a 55 anos, alto poder aquisitivo, sensíveis a design e artesanato. Compram para marcar ocasiões ou colecionar; não têm pressa e não respondem a desconto. |
| **Objetivo do site** | Agendar uma visita ao atelier e apresentar o processo autoral. Venda assistida, não e-commerce de impulso. |
| **Local fictício** | Atelier na Rua Girassol, 620 — Vila Madalena, São Paulo/SP. Visitas por hora marcada. |
| **Tom de voz** | Contido, preciso e sensorial. Frases curtas, sem superlativos. Fala de matéria, tempo e mão — nunca de status. |

**Promessa central:** uma joia que existe para ser usada por décadas, não para a temporada.

**Conversões principais**
1. Agendar visita ao atelier (primária).
2. Conhecer uma coleção.
3. Iniciar uma peça sob medida.

---

## 2. Sentimento alvo

**Sentimento alvo: sofisticação, exclusividade e permanência.**

**Declaração:** o visitante deve sentir que entrou em um espaço silencioso, onde cada objeto foi escolhido e nada está tentando vendê-lo.

Como o design produz isso:

- **Luxo silencioso:** marfim, espresso e ouro fosco. Sem dourado brilhante, sem gradiente, sem brilho.
- **Assimetria contida:** grid rígido de 12 colunas, mas conteúdo ocupando 5 ou 6 colunas com grande vazio ao redor. O vazio é o luxo.
- **Tipografia editorial:** Cormorant Garamond em pesos 300–400, tamanhos grandes e entrelinha curta; Jost em versalete para metadados. Nada de sans pesada.
- **Hairlines:** divisores de 1 px em `#D9D2C4`; nenhuma sombra, nenhum cartão.
- **Fotografia macro:** detalhe de textura, mão trabalhando, pedra sob luz lateral. Fundo neutro, grão fino, sem modelo posando.
- **Ritmo lento:** entradas de 800 ms, imagens que revelam em 1.200 ms. Nenhum movimento brusco.
- **Numeração e catálogo:** cada peça tem número, ano, material e dimensões — linguagem de acervo, não de loja.

---

## 3. Identidade verbal

**Nome:** TORNO
**Justificativa:** o torno é a ferramenta circular do artesão, o gesto de dar forma pelo movimento repetido. Tem som curto e grave, é uma palavra portuguesa concreta e não evoca "luxo" de forma óbvia.

**Tagline:** *Feito à mão. Para durar gerações.*

**Headlines de exemplo**
1. "Uma joia começa antes do metal."
2. "Ouro reciclado. Pedras raras. Nenhuma pressa."
3. "Cada peça existe uma vez."
4. "Venha ver de perto. O atelier recebe por hora marcada."
5. "Feito para durar mais que a ocasião."

**Microcopy de apoio**
- CTA principal: "Agendar uma visita"
- CTA secundário: "Ver coleções"
- Formulário: "Conte o que você imagina." (campo livre, opcional)
- Confirmação: "Recebido. Retornamos em até dois dias úteis com horários disponíveis."
- Rodapé: "Peças numeradas. Ouro 18k reciclado. Pedras com certificação de origem."

**Vocabulário preferido:** peça, matéria, mão, tempo, forma, série, atelier, acervo.
**Vocabulário proibido:** luxo, exclusivo, imperdível, coleção limitada, desconto, "eleve seu estilo", "brilhe".

---

## 4. Paleta de cores

| Papel | Nome | HEX | Uso |
|---|---|---|---|
| Primária | Ouro fosco | `#A98B5B` | Filetes, ícones, detalhes, numeração; texto apenas sobre fundo escuro |
| Secundária | Espresso | `#3B342B` | Blocos escuros, rodapé, botões secundários |
| Acento | Ouro escuro | `#7A6340` | Texto pequeno em versalete sobre marfim, links |
| Fundo | Marfim | `#F5F1E8` | Fundo global |
| Superfície | Pedra | `#D9D2C4` | Faixas, placeholders de imagem, bordas |
| Texto | Tinta | `#1A1814` | Títulos e corpo |
| Texto suave | Oliva cinza | `#6B6559` | Legendas, créditos, texto auxiliar |
| Borda | Linha | `#D9D2C4` | Hairlines de 1 px |

**Regras de contraste (WCAG 2.2)**

| Combinação | Razão | Nível |
|---|---|---|
| `#1A1814` sobre `#F5F1E8` | 15,7:1 | AAA |
| `#3B342B` sobre `#F5F1E8` | 10,9:1 | AAA |
| `#6B6559` sobre `#F5F1E8` | 5,1:1 | AA |
| `#7A6340` sobre `#F5F1E8` | 5,1:1 | AA |
| `#A98B5B` sobre `#1A1814` | 5,5:1 | AA |
| `#F5F1E8` sobre `#1A1814` | 15,7:1 | AAA |
| `#A98B5B` sobre `#F5F1E8` | 2,9:1 | **Apenas decorativo** (não usar em texto) |

**Restrições:** ouro `#A98B5B` nunca é cor de texto sobre marfim; para texto usar `#7A6340`. Nenhum gradiente metálico. Nenhum preto puro `#000`. Nenhum dourado saturado tipo `#FFD700`.

---

## 5. Tipografia

| Papel | Fonte | Peso | Uso |
|---|---|---|---|
| Display / editorial | **Cormorant Garamond** (Google Fonts) | 300, 400, 500 + itálico 300/400 | H1, H2, citações, nomes de coleção |
| Texto / UI | **Jost** (Google Fonts) | 300, 400, 500 | Corpo, navegação, labels, botões, legendas |

**Escala desktop (base 16 px)**

| Token | px | rem | Entrelinha | Letter-spacing |
|---|---:|---:|---:|---:|
| Display | 88 | 5.5 | 92 px (1.05) | −0,02em |
| H1 | 60 | 3.75 | 64 px (1.07) | −0,015em |
| H2 | 44 | 2.75 | 50 px (1.14) | −0,01em |
| H3 | 32 | 2.0 | 40 px (1.25) | 0 |
| Lead | 22 | 1.375 | 34 px (1.55) | 0 |
| Corpo | 16 | 1.0 | 28 px (1.75) | 0,005em |
| Corpo grande | 18 | 1.125 | 30 px (1.67) | 0 |
| Legenda | 13 | 0.8125 | 20 px (1.54) | 0,01em |
| Overline | 11 | 0.6875 | 16 px (1.45) | 0,18em, caixa alta |
| Número de peça | 12 | 0.75 | 16 px (1.33) | 0,12em, monoespaçado via Jost tabular |

**Escala mobile (≤ 767 px):** Display 52/56; H1 40/44; H2 32/38; H3 26/32; Lead 20/30; Corpo 16/27; Legenda 12/18; Overline 10/15.

**Regras:** corpo nunca menor que 16 px; Cormorant só a partir de 26 px; itálico apenas em citações e nomes de série; overline sempre em Jost 500 caixa alta; entrelinha de corpo 1,75 para leitura lenta; largura de linha entre 55 e 68 caracteres.

---

## 6. Layout e componentes

### Direção de layout — **editorial impresso, grade rígida com vazio**

Largura máxima **1440 px**, margens laterais `clamp(32px, 8vw, 128px)`, grid de **12 colunas**, gutter **24 px**. O conteúdo editorial ocupa as colunas **2–7** (máx. 620 px); imagens ocupam **7–12** e podem sangrar até a borda direita. Nenhum bloco é centralizado, exceto citações e a página de peça única.

- Espaçamento vertical entre seções: **160 px** no desktop, **96 px** no mobile.
- Imagens em **3:4** (vertical), **1:1** (macro) e **16:9** (atelier). Sem raio (0 px) e sem sombra.
- Legendas **abaixo** da imagem, alinhadas à esquerda, em 13 px oliva, com número e material.
- Filetes horizontais de 1 px `#D9D2C4`, com 24 px de respiro acima e abaixo.
- Índice de coleções fixo à esquerda em desktop (posição sticky, 96 px do topo), em overline vertical.
- Navegação no topo com 88 px, fundo marfim sólido, links em Jost 400 13 px caixa alta com letter-spacing 0,12em. Sem CTA colorido; "Agendar visita" é um link sublinhado.
- Rodapé em espresso `#3B342B` com texto marfim, ocupando 100% da largura.

### Breakpoints

| Nome | Largura | Grid | Comportamento |
|---|---:|---|---|
| XS | 360–479 | 4 col, gutter 16 | Margens 24 px; imagens full-bleed; índice vira seletor no topo |
| SM | 480–767 | 4 col, gutter 16 | Texto em coluna única; legendas abaixo |
| MD | 768–1023 | 8 col, gutter 20 | Texto 6 col; imagem 8 col sangrando à direita |
| LG | 1024–1279 | 12 col, gutter 24 | Assimetria 6/6; índice sticky aparece |
| XL | 1280–1439 | 12 col, gutter 24 | Margens 96 px; imagem pode sangrar |
| 2XL | ≥ 1440 | 12 col | Margens 128 px; conteúdo fixo em 1440 px |

### Componentes e estados

**Botão primário (retangular)**
- Default: fundo `#1A1814`, texto `#F5F1E8`, altura 52 px, padding 32 px, raio 0, Jost 400 13 px, caixa alta, letter-spacing 0,14em.
- Hover: fundo `#3B342B`; borda interna ouro de 1 px aparece; transição 300 ms.
- Focus: contorno `#1A1814` de 2 px com offset 3 px + filete ouro de 1 px.
- Active: fundo `#000` (não usar preto puro em grandes áreas).
- Disabled: opacidade 40%, sem hover.
- Loading: texto "ENVIANDO…" e filete ouro de 1 px animado da esquerda para a direita em 1.200 ms.

**Link editorial:** texto em Jost 400 13 px caixa alta, sublinhado de 1 px com offset 4 px; hover: ouro escuro e sublinhado de 2 px.

**Campo de formulário:** apenas linha inferior de 1 px `#1A1814`, fundo transparente, altura 56 px, label em overline 11 px; foco: linha de 2 px `#7A6340` + label escurece; erro: linha `#8C3B2E` + mensagem 13 px.

**Card de peça:** sem card. Imagem 3:4, número da peça em overline acima, nome em Cormorant 26 px, material em 13 px oliva, preço sob consulta. Hover: segunda imagem (detalhe) em fade de 700 ms + linha ouro de 1 px sob o nome. Em mobile, o detalhe é acessível por toque e por um botão "Ver detalhe".

**Índice de coleções:** lista vertical em overline, item ativo com filete ouro à esquerda e texto tinta; inativos em oliva. Sem animação de fundo.

**Bloco de citação:** Cormorant itálico 40 px, centralizado, largura 720 px, com filete ouro de 48 px acima.

**Galeria de peça:** imagem principal 3:4 + 3 thumbnails 1:1; troca por fade de 600 ms; setas discretas de 32 px; zoom sob clique (lightbox) com fundo espresso.

### Animações

- Entrada de texto: opacidade 0→1 + `translateY(12px)`, 800 ms, `cubic-bezier(0.25, 0.1, 0.25, 1)`.
- Imagem: `scale(1.03)` em 1.200 ms no hover; revelação por máscara vertical de 8% em 1.000 ms.
- Transição de página: cortina marfim de 500 ms.
- Nenhum bounce, nenhum parallax, nenhum contador, nenhum autoplay.
- `prefers-reduced-motion`: todas as entradas instantâneas; troca de imagem sem fade.

---

## 7. Estrutura de páginas e conteúdo

### Mapa do site

1. Home
2. Coleções — Série Terra, Série Sal, Série Noite
3. Peça (página individual)
4. Atelier (processo e equipe)
5. Sob medida
6. Diário (ensaios e bastidores)
7. Visita e contato

### Wireframe — Home

```
┌──────────────────────────────────────────────────────────────┐
│ TORNO        COLEÇÕES   ATELIER   SOB MEDIDA   DIÁRIO  [VISITA]│ 88px
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  overline: JOALHERIA AUTORAL · SÃO PAULO                     │
│                                                              │
│  Uma joia começa                                             │
│  antes do metal.                              ┌────────────┐ │
│                                               │ macro: mão │ │
│  lead: Peças únicas em ouro reciclado         │ e ouro     │ │
│  e pedras de origem certificada.              │ 3:4        │ │
│                                               │            │ │
│  [AGENDAR UMA VISITA]  Ver coleções →         └────────────┘ │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│  filete 1px                                                  │
│  O PROCESSO — 3 colunas com muito vazio                       │
│  01 ESCOLHA DA PEDRA   02 CONSTRUÇÃO   03 ACABAMENTO         │
│  texto 3 linhas cada, sem ícone                               │
├──────────────────────────────────────────────────────────────┤
│  SÉRIE TERRA — imagem full-bleed 16:9 à direita, texto à esq.│
│  "O que vem do chão."  [VER A SÉRIE →]                       │
├──────────────────────────────────────────────────────────────┤
│  PEÇAS SELECIONADAS — 3 imagens 3:4 em grid assimétrico      │
│  anel 01 · brinco 04 · colar 02 (números, material, preço)   │
├──────────────────────────────────────────────────────────────┤
│  CITAÇÃO central: "O tempo é o único material insubstituível."│
├──────────────────────────────────────────────────────────────┤
│  ATELIER — foto 1:1 à esquerda, texto 5 col à direita        │
│  "Um só ourives por peça. Nenhuma etapa terceirizada."       │
├──────────────────────────────────────────────────────────────┤
│  SOB MEDIDA — bloco espresso, texto marfim, CTA fantasma      │
├──────────────────────────────────────────────────────────────┤
│  DIÁRIO — 3 entradas em lista, data + título + tempo de leitura│
├──────────────────────────────────────────────────────────────┤
│  VISITA — endereço, horários, "somente com hora marcada"      │
├──────────────────────────────────────────────────────────────┤
│  Rodapé espresso: contato, Instagram, política, CNPJ          │
└──────────────────────────────────────────────────────────────┘
```

### Conteúdo por página

**Home**
- Hero: overline, H1, lead de 2 linhas, CTA principal e link de coleções, imagem macro 3:4.
- Processo: 3 etapas numeradas, 40 palavras cada.
- Séries: 3 blocos alternando lado, um por coleção, com frase-manifesto e link.
- Peças selecionadas: 3 peças, numeração, material, "preço sob consulta".
- Citação: uma frase sobre tempo e matéria.
- Atelier: foto do bancário, texto sobre processo e origem do ouro.
- Sob medida: CTA "Conversar sobre uma peça" com bloco escuro.
- Diário: 3 posts (ex.: "Por que não usamos ouro de mineração nova", "A pedra que esperou 40 anos", "Como nasce um engaste").
- Visita: endereço, horários (ter–sex 10h–18h, sáb 10h–14h), agendamento obrigatório, estacionamento com manobrista.

**Coleção:** abertura full-bleed com nome da série e texto de 120 palavras; lista de peças em grid 3 col (desktop) com numeração; filtros por tipo (anéis, brincos, colares) em overline; ordenação por série, nunca por "mais vendido".

**Peça:** imagem principal 3:4 + detalhes, nome, número, ano, materiais, dimensões, peso em gramas, pedra e certificação, história de 80 palavras, "preço sob consulta", CTA de visita e "solicitar imagem adicional". Peças únicas recebem selo "Peça única — 1 de 1".

**Sob medida:** processo em 5 etapas (conversa, desenho, seleção de pedra, construção, entrega), prazo médio de 6 a 10 semanas, sinal de 50%, formulário de briefing com 6 campos.

**Visita:** formulário com nome, e-mail, telefone, interesse (coleção, sob medida, restauro) e horário preferido; confirmação manual em até 2 dias úteis.

---

## 8. Acessibilidade e performance

**Acessibilidade**
- Contraste AA em todo texto; ouro `#A98B5B` nunca em texto sobre marfim.
- Foco visível: contorno tinta de 2 px + offset 3 px + filete ouro; testado sobre marfim e espresso.
- Corpo mínimo de 16 px; legendas de 13 px apenas para informação não essencial.
- Imagens de joias com alt específico ("Anel em ouro 18k com safira azul de 2,1 ct, aro 16"), nunca "joia".
- Galeria operável por teclado, com botões anterior/próximo, contador "2 de 4" e tecla Esc no lightbox.
- Nenhuma informação apenas em hover: detalhes acessíveis por toque e foco.
- Formulários com label visível, erros vinculados, `autocomplete`; sem campos obrigatórios além do necessário.
- `prefers-reduced-motion` remove fades e máscaras.
- Menu mobile com foco preso e fechamento por Esc.
- Vídeos do atelier sem autoplay, com legendas.

**Performance (metas)**
- LCP < 2,2 s em 4G; CLS < 0,04; INP < 150 ms.
- Home < 1,0 MB; imagens em AVIF/WebP com `srcset` (480/960/1440/1920); hero com `fetchpriority="high"`.
- Fontes WOFF2 com subset latino; preload de Cormorant 400 e Jost 400; `font-display: swap`.
- Sem biblioteca de animação; transições em CSS.
- Lightbox e mapa carregados sob demanda.
- Lighthouse ≥ 95 em Performance, Acessibilidade e SEO no mobile.

---

## 9. O que NÃO fazer

**Anti-padrões visuais proibidos**
- Dourado brilhante, gradiente metálico, glitter, reflexo, "luxo" de shopping.
- Preto puro com dourado saturado; vermelho de promoção; cores de desconto.
- Tipografia script, caligráfica ou com swashes decorativos.
- Cards com sombra, cantos arredondados, botões pill, badges "NOVO".
- Carrossel automático, zoom automático, música, vídeo de fundo com modelo.
- Fotos de banco de imagem com casal de terno, champanhe ou carro.
- Copy com "exclusivo", "imperdível", "últimas peças", contagem regressiva ou preço riscado.
- Excesso de ouro: no máximo 3 pontos de ouro por viewport.
- Layout simétrico de e-commerce com grid de 4 produtos iguais e filtros coloridos.
- Texto centralizado em blocos longos; corpo pequeno (< 16 px); entrelinha apertada.

---

## 10. Diferenciação vs os outros briefings

**Como esse site é diferente dos outros 4**

| Eixo | TORNO (este) | CASULO | BRASA | GIRA | LASTRO |
|---|---|---|---|---|---|
| Base cromática | Marfim + espresso + ouro fosco | Creme + sálvia + terracota | Preto + volt + vermelho | Creme + coral + amarelo | Branco + navy + teal |
| Tipografia | Serif editorial + sans geométrica leve | Serif humanista + sans calorosa | Condensada industrial | Rounded + sans arredondada | Sans técnica + mono |
| Forma | Hairlines, 0 raio, grade rígida | Curvas orgânicas, arcos | Diagonais, 0 raio | Blobs, cartões 32 px | Grid modular, 8 px |
| Densidade | Muito baixa, vazio intencional | Baixa, respiro | Média-alta, tipo gigante | Média, colagem | Alta, dados |
| Ritmo de motion | Muito lento (800–1200 ms) | Lento (600–700 ms) | Rápido (120–180 ms) | Saltitante (280–420 ms) | Discreto (150–200 ms) |
| Emoção | Exclusividade | Acolhimento | Urgência | Diversão | Controle |

- **vs CASULO:** os dois são claros e usam serifa, mas CASULO é quente, curvo e terapêutico; TORNO é frio, reto, com ouro e vazio. CASULO usa fotos de pessoas; TORNO usa macro de matéria e mão.
- **vs BRASA:** TORNO não tem urgência, CTA colorido, caixa alta condensada nem diagonais. O preto de TORNO é espresso, não preto-brasa; não há volt nem vermelho.
- **vs GIRA:** TORNO não tem curvas, cores saturadas, ilustração ou linguagem infantil. A única cor quente de GIRA é coral; TORNO usa ouro fosco.
- **vs LASTRO:** TORNO não tem dashboard, tabela, gráfico ou densidade. LASTRO não tem fotografia autoral nem vazio editorial.

**Teste de diferenciação:** sem logo e sem texto, TORNO é reconhecível pelo marfim, pelos filetes de 1 px, pela ausência de raio e pela foto macro com muito espaço vazio. É o único briefing que usa ouro e o único com entrelinha de corpo 1,75.
