export const rodape = {
  marca: 'Torno',
  tagline: 'Feito à mão. Para durar gerações.',
  colunas: [
    {
      titulo: 'Atelier',
      tipo: 'endereco',
      linhas: [
        'Rua Girassol, 620',
        'Vila Madalena · São Paulo/SP',
        'Visitas por hora marcada',
      ],
    },
    {
      titulo: 'Contato',
      tipo: 'links',
      links: [
        { label: 'visita@torno.com.br', href: 'mailto:visita@torno.com.br', externo: false },
        {
          label: 'Instagram · @torno.atelier',
          href: 'https://www.instagram.com/',
          externo: true,
        },
      ],
    },
    {
      titulo: 'Notas',
      tipo: 'texto',
      texto:
        'Peças numeradas. Ouro 18k reciclado. Pedras com certificação de origem.',
    },
  ],
  base: ['© 2026 TORNO Joalheria', 'Sem cookies. Sem rastreamento.'],
}
