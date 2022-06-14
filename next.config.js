
module.exports = {
  "plugins": [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        "autoprefixer": {
          "flexbox": "no-2009"
        },
        "stage": 3,
        "features": {
          "custom-properties": false
        }
      }
    ],
    [
      '@fullhuman/postcss-purgecss',
      {
        content: [
            './pages/**/*.{js,jsx,ts,tsx}',
            './components/**/*.{js,jsx,ts,tsx}'
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: ["html", "body"]
      }
    ],
  ],
  // Uncomment the line below to enable basePath, pages and
  // redirects will then have a path prefix (`/app` in this case)
  //
  // basePath: '/app',

  async redirects() {
    return [
      {
        source: '/frases-prontas-para-atendimento-no-whatsapp',
        destination: 'https://blog.meets.com.br/frases-prontas-para-atendimento-no-whatsapp',
        permanent: true,
      },
      {
        source: '/estrategias-para-foco-no-cliente',
        destination: 'https://blog.meets.com.br/estrategias-para-foco-no-cliente',
        permanent: true,
      },
      {
        source: '/suporte-meets',
        destination: 'https://ajuda.meets.com.br',
        permanent: true,
      },
      
     {
        source: '/endomarketing-e-importancia-para-a-empresa',
        destination: 'https://blog.meets.com.br/endomarketing-e-importancia-para-a-empresa',
        permanent: true,
      },
      
      {
        source: '/7-razoes-porque-seus-clientes-nao-acreditam-na-sua-empresa',
              destination: 'https://blog.meets.com.br/7-razoes-porque-seus-clientes-nao-acreditam-na-sua-empresa',
              permanent: true,
      },
      {
              source: '/23-dicas-para-voce-vender-mais-online',
              destination: 'https://blog.meets.com.br/23-dicas-para-voce-vender-mais-online',
              permanent: true,
      },
  
         {
         source: '/como-vender-mais-usando-o-meets',
         destination: 'https://blog.meets.com.br/como-vender-mais-usando-o-meets',
         permanent: true,
         },
  
        {
         source: '/como-vencer-na-crise',
         destination: 'https://blog.meets.com.br/como-vencer-na-crise',
         permanent: true,
         },
   
        {
        source: '/as-4-alavancas-de-vendas-tempo',
        destination: 'https://blog.meets.com.br/as-4-alavancas-de-vendas-tempo',
        permanent: true,
        },
  
        {
        source: '/as-4-alavancas-de-vendas-quantidade-de-oportunidades',
        destination: 'https://blog.meets.com.br/as-4-alavancas-de-vendas-quantidade-de-oportunidades',
        permanent: true,
        },
  
      {
       source: '/as-4-alavancas-de-vendas-margem-de-contribuicao-3',
       destination: 'https://blog.meets.com.br/as-4-alavancas-de-vendas-margem-de-contribuicao-3',
       permanent: true,
       },
  
   {
       source: '/as-4-alavancas-de-vendas-conversao-4',
       destination: 'https://blog.meets.com.br/as-4-alavancas-de-vendas-conversao-4',
       permanent: true,
       },
  
   {
       source: '/como-vender-para-os-clientes-que-dizem-nao',
       destination: 'https://blog.meets.com.br/como-vender-para-os-clientes-que-dizem-nao',
       permanent: true,
       },
  
   {
       source: '/qual-o-seu-limite',
       destination: 'https://blog.meets.com.br/qual-o-seu-limite',
       permanent: true,
       },
  
   {
     source: '/o-que-e-crm',
     destination: 'https://blog.meets.com.br/o-que-e-crm',
     permanent: true,
     },
  
   {
     source: '/como-implantar-um-crm-na-sua-empresa',
     destination: 'https://blog.meets.com.br/como-implantar-um-crm-na-sua-empresa',
     permanent: true,
     },
  
   {
     source: '/ego-de-vendedor',
     destination: 'https://blog.meets.com.br/ego-de-vendedor',   
     permanent: true,
     },
  
   {
     source: '/lidar-com-pessoas-dificeis',
     destination: 'https://blog.meets.com.br/lidar-com-pessoas-dificeis',   
     permanent: true,
     },
  
   {
     source: '/chamadas-de-vendas',
     destination: 'https://blog.meets.com.br/chamadas-de-vendas',   
     permanent: true,
     },
  
   {
     source: '/9-coisas-resolver-problemas',
     destination: 'https://blog.meets.com.br/9-coisas-resolver-problemas',   
     permanent: true,
     },
  
   {
     source: '/ligacoes-de-vendas',
     destination: 'https://blog.meets.com.br/ligacoes-de-vendas',   
     permanent: true,
     },
  
   {
     source: '/como-aumentar-a-produtividade-da-equipe-de-vendas',
     destination: 'https://blog.meets.com.br/como-aumentar-a-produtividade-da-equipe-de-vendas',   
     permanent: true,
     },
  
   {
     source: '/vender-todo-o-dia',
     destination: 'https://blog.meets.com.br/vender-todo-o-dia',   
     permanent: true,
     },
  
   {
     source: '/ferramentas-de-vendas-que-todo-vendedor-deve-usar',
     destination: 'https://blog.meets.com.br/ferramentas-de-vendas-que-todo-vendedor-deve-usar',   
     permanent: true,
     },
  
   {
     source: '/dicas-que-vao-ajudar-para-vender-mais',
     destination: 'https://blog.meets.com.br/dicas-que-vao-ajudar-para-vender-mais',   
     permanent: true,
     },
  
   {
     source: '/crm-online',
     destination: 'https://blog.meets.com.br/crm-online',   
     permanent: true,
     },
  
   {
     source: '/planilhas-de-vendas',
     destination: 'https://blog.meets.com.br/planilhas-de-vendas',   
     permanent: true,
     },
  
   {
     source: '/diferenca-entre-tatica-e-estrategia',
     destination: 'https://blog.meets.com.br/diferenca-entre-tatica-e-estrategia',   
     permanent: true,
     },
  
   {
     source: '/desempenho-do-departamento-comercial',
     destination: 'https://blog.meets.com.br/desempenho-do-departamento-comercial',   
     permanent: true,
     },
  
   {
     source: '/cadastro-de-clientes',
     destination: 'https://blog.meets.com.br/cadastro-de-clientes',   
     permanent: true,
     },
  
   {
     source: '/vendedor-perde-a-venda',
     destination: 'https://blog.meets.com.br/vendedor-perde-a-venda',   
     permanent: true,
     },
  
   {
     source: '/dinamica-de-grupo',
     destination: 'https://blog.meets.com.br/dinamica-de-grupo',   
     permanent: true,
     },
  
   {
     source: '/departamento-comercial',
     destination: 'https://blog.meets.com.br/departamento-comercial',   
     permanent: true,
     },
  
   {
     source: '/dicas-para-gestao-de-equipes',
     destination: 'https://blog.meets.com.br/dicas-para-gestao-de-equipes',   
     permanent: true,
     },
  
   {
     source: '/vendedores-altamente-eficazes',
     destination: 'https://blog.meets.com.br/vendedores-altamente-eficazes',   
     permanent: true,
     },
  
   {
     source: '/lideranca-em-vendas',
     destination: 'https://blog.meets.com.br/lideranca-em-vendas',   
     permanent: true,
     },
  
   {
     source: '/6-dicas-para-vender-mais-em-menos-tempo',
     destination: 'https://blog.meets.com.br/6-dicas-para-vender-mais-em-menos-tempo',   
     permanent: true,
     },
  
   {
     source: '/vendedor-superstar',
     destination: 'https://blog.meets.com.br/vendedor-superstar',   
     permanent: true,
     },
  
   {
     source: '/contratar-bons-vendedores',
     destination: 'https://blog.meets.com.br/contratar-bons-vendedores',   
     permanent: true,
     },
  
   {
     source: '/processo-de-vendas',
     destination: 'https://blog.meets.com.br/processo-de-vendas',   
     permanent: true,
     },
  
   {
     source: '/bater-metas-de-vendas',
     destination: 'https://blog.meets.com.br/bater-metas-de-vendas',   
     permanent: true,
     },
  
   {
     source: '/vender-em-tempos-de-incerteza',
     destination: 'https://blog.meets.com.br/vender-em-tempos-de-incerteza',   
     permanent: true,
     },
  
   {
     source: '/motivar-a-sua-equipe-vendas',
     destination: 'https://blog.meets.com.br/motivar-a-sua-equipe-vendas',   
     permanent: true,
     },
  
   {
     source: '/5-etapas-definir-metas-vendas-ajudem-empresa-crescer',
     destination: 'https://blog.meets.com.br/5-etapas-definir-metas-vendas-ajudem-empresa-crescer',   
     permanent: true,
     },
  
   {
     source: '/relacionamento-com-o-cliente',
     destination: 'https://blog.meets.com.br/relacionamento-com-o-cliente',   
     permanent: true,
     },
  
   {
     source: '/processo-de-vendas-2',
     destination: 'https://blog.meets.com.br/processo-de-vendas-2',   
     permanent: true,
     },
  
   {
     source: '/plano-de-vendas',
     destination: 'https://blog.meets.com.br/plano-de-vendas',   
     permanent: true,
     },
  
   {
     source: '/voce-precisa-um-crm',
     destination: 'https://blog.meets.com.br/voce-precisa-um-crm',   
     permanent: true,
     },
  
   {
     source: '/nao-siga-cegamente-os-teoricos-e-suas-regras',
     destination: 'https://blog.meets.com.br/nao-siga-cegamente-os-teoricos-e-suas-regras',   
     permanent: true,
     },
  
   {
     source: '/10-maneiras-de-melhorar-o-atendimento-online-e-porque-integra-lo-ao-crm',
     destination: 'https://blog.meets.com.br/10-maneiras-de-melhorar-o-atendimento-online-e-porque-integra-lo-ao-crm',   
     permanent: true,
     },
   {
     source: '/como-o-crm-otimiza-seu-funil-de-vendas',
     destination: 'https://blog.meets.com.br/como-o-crm-otimiza-seu-funil-de-vendas',   
     permanent: true,
     },
  
   {
     source: '/10-melhores-filmes-de-vendas',
     destination: 'https://blog.meets.com.br/10-melhores-filmes-de-vendas',   
     permanent: true,
     },
  
   {
     source: '/qual-o-melhor-crm-on-line-gratis-para-meu-negocio',
     destination: 'https://blog.meets.com.br/qual-o-melhor-crm-on-line-gratis-para-meu-negocio',   
     permanent: true,
     },
     {
      source: '/10-melhores-livros-de-vendas-para-voce-vender-mais',
      destination: 'https://blog.meets.com.br/10-melhores-livros-de-vendas-para-voce-vender-mais',   
      permanent: true,
      },
   
    {
      source: '/o-que-e-ticket-medio',
      destination: 'https://blog.meets.com.br/o-que-e-ticket-medio',   
      permanent: true,
      },
   
    {
      source: '/como-aumentar-a-produtividade-de-sua-equipe-com-um-crm',
      destination: 'https://blog.meets.com.br/como-aumentar-a-produtividade-de-sua-equipe-com-um-crm',   
      permanent: true,
      },
   
    {
      source: '/12-tecnicas-de-vendas-e-atendimento-para-seu-negocio',
      destination: 'https://blog.meets.com.br/12-tecnicas-de-vendas-e-atendimento-para-seu-negocio',   
      permanent: true,
      },
   
    {
      source: '/aumentar-a-retencao-de-seus-clientes-na-pratica',
      destination: 'https://blog.meets.com.br/aumentar-a-retencao-de-seus-clientes-na-pratica',   
      permanent: true,
      },
    {
      source: '/3-motivos-para-voce-integrar-um-crm-na-sua-estrategia-de-marketing-digital',
      destination: 'https://blog.meets.com.br/3-motivos-para-voce-integrar-um-crm-na-sua-estrategia-de-marketing-digital',   
      permanent: true,
      },
   
    {
      source: '/10-dicas-para-aumentar-suas-vendas-em-2020',
      destination: 'https://blog.meets.com.br/10-dicas-para-aumentar-suas-vendas-em-2020',   
      permanent: true,
      },
   
    {
      source: '/analise-swot-o-que-e-e-como-fazer',
      destination: 'https://blog.meets.com.br/analise-swot-o-que-e-e-como-fazer',   
      permanent: true,
      },
   
    {
      source: '/12-melhores-chats-online-para-vender-mais',
      destination: 'https://blog.meets.com.br/12-melhores-chats-online-para-vender-mais',   
      permanent: true,
      },
    {
      source: '/gerenciar-o-relacionamento-com-clientes',
      destination: 'https://blog.meets.com.br/gerenciar-o-relacionamento-com-clientes',   
      permanent: true,
      },
   
    {
      source: '/meets-podcast-comece-aqui',
      destination: 'https://blog.meets.com.br/meets-podcast-comece-aqui',   
      permanent: true,
      },
   
    {
      source: '/os-4-requisitos-para-implantacao-de-um-crm-na-sua-empresa',
      destination: 'https://blog.meets.com.br/os-4-requisitos-para-implantacao-de-um-crm-na-sua-empresa',   
      permanent: true,
      },
   
    {
      source: '/treine-sua-mente-para-alcancar-seus-objetivos',
      destination: 'https://blog.meets.com.br/treine-sua-mente-para-alcancar-seus-objetivos',   
      permanent: true,
      },
   
    {
      source: '/7-erros-mortais-que-voce-comete-ao-anunciar-imoveis',
      destination: 'https://blog.meets.com.br/7-erros-mortais-que-voce-comete-ao-anunciar-imoveis',   
      permanent: true,
      },
   
    {
      source: '/principio-de-pareto',
      destination: 'https://blog.meets.com.br/principio-de-pareto',   
      permanent: true,
      },
   
    {
      source: '/os-5-fundamentos-para-mudar-sua-empresa',
      destination: 'https://blog.meets.com.br/os-5-fundamentos-para-mudar-sua-empresa',   
      permanent: true,
      },
   
    {
      source: '/os-3-passos-para-aumentar-seus-resultados-em-2020',
      destination: 'https://blog.meets.com.br/os-3-passos-para-aumentar-seus-resultados-em-2020',   
      permanent: true,
      },
    {
      source: '/minimizando-o-impacto-do-coronavirus-em-seus-negocios-fisicos-e-digitais',
      destination: 'https://blog.meets.com.br/minimizando-o-impacto-do-coronavirus-em-seus-negocios-fisicos-e-digitais',   
      permanent: true,
      },
   
    {
      source: '/melhores-musicas-para-trabalhar-e-aumentar-sua-produtividade',
      destination: 'https://blog.meets.com.br/melhores-musicas-para-trabalhar-e-aumentar-sua-produtividade',   
      permanent: true,
      },
   
    {
      source: '/produtividade-no-trabalho-10-dicas-para-melhorar-%ef%bb%bf',
      destination: 'https://blog.meets.com.br/produtividade-no-trabalho-10-dicas-para-melhorar-%ef%bb%bf',   
      permanent: true,
      },
   
    {
      source: '/como-sobreviver-em-tempos-incertos',
      destination: 'https://blog.meets.com.br/como-sobreviver-em-tempos-incertos',   
      permanent: true,
      },
   
    {
      source: '/kit-de-sobrevivencia-para-o-trabalho-home-office',
      destination: 'https://blog.meets.com.br/kit-de-sobrevivencia-para-o-trabalho-home-office',   
      permanent: true,
      },
   
    {
      source: '/como-administrar-seus-negocios-durante-e-pos-a-crise-do-coronavirus',
      destination: 'https://blog.meets.com.br/como-administrar-seus-negocios-durante-e-pos-a-crise-do-coronavirus',   
      permanent: true,
      },
   
    {
      source: '/14-ferramentas-essenciais-para-trabalhar-em-casa',
      destination: 'https://blog.meets.com.br/14-ferramentas-essenciais-para-trabalhar-em-casa',   
      permanent: true,
      },
   
    {
      source: '/que-tipo-de-cliente-voce-quer',
      destination: 'https://blog.meets.com.br/que-tipo-de-cliente-voce-quer',   
      permanent: true,
      },
   
    {
      source: '/como-a-grow-digital-esta-ajudando-seus-clientes-na-quarentena',
      destination: 'https://blog.meets.com.br/como-a-grow-digital-esta-ajudando-seus-clientes-na-quarentena',   
      permanent: true,
      },
   
    {
      source: '/como-divulgar-minha-empresa-corretamente-na-internet',
      destination: 'https://blog.meets.com.br/como-divulgar-minha-empresa-corretamente-na-internet',   
      permanent: true,
      },
   
    {
      source: '/atencao-e-igual-a-resultados',
      destination: 'https://blog.meets.com.br/atencao-e-igual-a-resultados',   
      permanent: true,
      },
   
    {
      source: '/como-aumentar-sua-carteira-de-clientes-e-suas-vendas',
      destination: 'https://blog.meets.com.br/como-aumentar-sua-carteira-de-clientes-e-suas-vendas',   
      permanent: true,
      },
   
    {
      source: '/10-tecnicas-ki-para-aplicar-no-seu-negocio',
      destination: 'https://blog.meets.com.br/10-tecnicas-ki-para-aplicar-no-seu-negocio',   
      permanent: true,
      },
   
    {
      source: '/trabalho-em-equipe-8-formas-de-potencializa-lo',
      destination: 'https://blog.meets.com.br/trabalho-em-equipe-8-formas-de-potencializa-lo',   
      permanent: true,
      },
   
    {
      source: '/13-melhores-ferramentas-de-email-marketing',
      destination: 'https://blog.meets.com.br/13-melhores-ferramentas-de-email-marketing',   
      permanent: true,
      },
   
    {
      source: '/quando-o-crime-compensa-se-voce-e-inteligente',
      destination: 'https://blog.meets.com.br/quando-o-crime-compensa-se-voce-e-inteligente',   
      permanent: true,
      },
   
    {
      source: '/como-fazer-a-geracao-de-leads-e-automacao-no-whatsapp',
      destination: 'https://blog.meets.com.br/como-fazer-a-geracao-de-leads-e-automacao-no-whatsapp', 
   permanent: true,
      },
   
    {
      source: '/entusiasmo-e',
      destination: 'https://blog.meets.com.br/entusiasmo-e',   
      permanent: true,
      },
   
   
   
    {
      source: '/como-agregar-valor-para-seus-hospedes-e-seus-clientes',
      destination: 'https://blog.meets.com.br/como-agregar-valor-para-seus-hospedes-e-seus-clientes',   
      permanent: true,
      },
    {
      source: '/5-dicas-para-voce-chegar-ao-mercado-mais-rapido-que-a-concorrencia',
      destination: 'https://blog.meets.com.br/5-dicas-para-voce-chegar-ao-mercado-mais-rapido-que-a-concorrencia',   
      permanent: true,
      },
   
    {
      source: '/10-dicas-de-como-usar-o-e-mail-corretamente-para-vender',
      destination: 'https://blog.meets.com.br/10-dicas-de-como-usar-o-e-mail-corretamente-para-vender',   
      permanent: true,
      },
   
    {
      source: '/abandonando-a-perfeicao-do-seu-negocio',
      destination: 'https://blog.meets.com.br/abandonando-a-perfeicao-do-seu-negocio',   
      permanent: true,
      },
   
    {
      source: '/o-novo-clima-organizacional-nas-empresas',
      destination: 'https://blog.meets.com.br/o-novo-clima-organizacional-nas-empresas',   
      permanent: true,
      },
    {
      source:'/como-construir-um-plano-de-vendas',
      destination: 'https://blog.meets.com.br/como-construir-um-plano-de-vendas',   
      permanent: true,
      },
   
    {
      source:'/a-importancia-de-grandes-lideres-em-momentos-de-crise',
      destination: 'https://blog.meets.com.br/a-importancia-de-grandes-lideres-em-momentos-de-crise',   
      permanent: true,
      },
   
    {
      source:'/motivacao-da-equipe-como-melhorar-e-atingir-resultados',
      destination: 'https://blog.meets.com.br/motivacao-da-equipe-como-melhorar-e-atingir-resultados',   
      permanent: true,
      },
   
    {
      source:'/ataque-de-tubarao-a-mick-fanning-uma-licao-com-5-p-e-a-crise',
      destination: 'https://blog.meets.com.br/ataque-de-tubarao-a-mick-fanning-uma-licao-com-5-p-e-a-crise',   
      permanent: true,
      },
    {
      source:'/treinamento-de-vendas-como-fazer-e-porque-investir',
      destination: 'https://blog.meets.com.br/treinamento-de-vendas-como-fazer-e-porque-investir',   
      permanent: true,
      },
   
    {
      source:'/como-montar-sua-central-de-atendimento-via-whatsapp',
      destination: 'https://blog.meets.com.br/como-montar-sua-central-de-atendimento-via-whatsapp',   
      permanent: true,
      },
   
    {
      source:'/pos-venda-como-fazer-e-fidelizar-clientes',
      destination: 'https://blog.meets.com.br/pos-venda-como-fazer-e-fidelizar-clientes',   
      permanent: true,
      },
   
    {
      source:'/o-que-e-customer-success-pontos-chaves-do-sucesso-do-cliente',
      destination: 'https://blog.meets.com.br/o-que-e-customer-success-pontos-chaves-do-sucesso-do-cliente',   
      permanent: true,
      },
    {
      source:'/aumento-de-conversao-entenda-como-otimizar-resultados-e-gerar-mais-leads',
      destination: 'https://blog.meets.com.br/aumento-de-conversao-entenda-como-otimizar-resultados-e-gerar-mais-leads',   
      permanent: true,
      },
   
    {
      source:'/rotina-de-vendas-15-dicas-para-criar-a-sua',
      destination: 'https://blog.meets.com.br/rotina-de-vendas-15-dicas-para-criar-a-sua',   
      permanent: true,
      },
   
    {
      source:'/linguagem-corporal-em-vendas-10-dicas-para-melhorar-a-sua',
      destination: 'https://blog.meets.com.br/linguagem-corporal-em-vendas-10-dicas-para-melhorar-a-sua',   
      permanent: true,
      },
   
    {
      source:'/central-de-vendas-de-whatsapp-como-montar-e-organizar-sua-central',
      destination: 'https://blog.meets.com.br/central-de-vendas-de-whatsapp-como-montar-e-organizar-sua-central',   
      permanent: true,
      },
   
    {
      source:'/8-tecnicas-de-negociacao-para-comecar-a-usar-hoje',
      destination: 'https://blog.meets.com.br/8-tecnicas-de-negociacao-para-comecar-a-usar-hoje',   
      permanent: true,
      },
   
    {
      source:'/10-dicas-de-como-manter-o-foco-e-ser-mais-produtivo',
      destination: 'https://blog.meets.com.br/10-dicas-de-como-manter-o-foco-e-ser-mais-produtivo',   
      permanent: true,
      },
   
      {
      source:'/estrategias-de-inbound-marketing-no-ramo-odontologico',
      destination: 'https://blog.meets.com.br/estrategias-de-inbound-marketing-no-ramo-odontologico',   
      permanent: true,
      },
      
      {
      source:'/o-que-aprender-de-um-bordel-em-amsterdam',
      destination: 'https://blog.meets.com.br/o-que-aprender-de-um-bordel-em-amsterdam',   
      permanent: true,
      },
     
    {
      source:'/follow-up-de-vendas-o-que-e-e-como-fazer',
      destination: 'https://blog.meets.com.br/follow-up-de-vendas-o-que-e-e-como-fazer',   
      permanent: true,
      },

      {
        source: '/docs/introducao/horario-de-atendimento-do-meets',
        destination: 'https://ajuda.meets.com.br/docs/introducao/horario-de-atendimento-do-meets',
        permanent: true,
    },
  
    {
        source: '/docs/introducao/como-usar-o-meets-crm',
        destination: 'https://ajuda.meets.com.br/docs/introducao/como-usar-o-meets-crm',
        permanent: true,
    },
  
    {
        source: '/docs/introducao/como-importar-contatos',
        destination: 'https://ajuda.meets.com.br/docs/introducao/docs/introducao/como-importar-contatos',
        permanent: true,
    },
    {
    	source: '/docs/introducao/criar-oportunidade',
    	destination: 'https://ajuda.meets.com.br/docs/introducao/criar-oportunidade',
    	permanent: true,
  },

  {
    	source: '/docs/introducao/criar-oportunidade',
    	destination: 'https://ajuda.meets.com.br/docs/introducao/criar-oportunidade',
    	permanent: true,
  },


  {
    	source: '/docs/introducao/criar-oportunidade',
    	destination: 'https://ajuda.meets.com.br/docs/introducao/como-criar-uma-tarefa-lembrete-na-agenda',
    	permanent: true,
  },

 {
    	source: '/docs/introducao/como-criar-campos-personalizados',
    	destination: 'https://ajuda.meets.com.br/docs/introducao/como-criar-campos-personalizados',
    	permanent: true,
  },

 {
    	source: '/docs/introducao/como-personalizar-area-de-atuacao',
    	destination: 'https://ajuda.meets.com.br/docs/introducao/como-personalizar-area-de-atuacao',
    	permanent: true,
  },

 {
    	source: '/docs/introducao/o-que-e-crm',
    	destination: 'https://ajuda.meets.com.br/docs/introducao/o-que-e-crm',
    	permanent: true,
  },

 {
    	source: '/docs/introducao/o-que-e-gestao-de-leads-meets',
    	destination: 'https://ajuda.meets.com.br/docs/introducao/o-que-e-gestao-de-leads-meets',
    	permanent: true,
  },

 {
    	source: '/docs/introducao/como-posso-saber-se-o-meets-se-adequa-ao-meu-modelo-de-negocio',
    	destination: 'https://ajuda.meets.com.br/docs/introducao/como-posso-saber-se-o-meets-se-adequa-ao-meu-modelo-de-negocio',
    	permanent: true,
  },

 {
    	source: '/docs/introducao/como-meu-negocio-pode-melhorar-com-o-meets-crm',
    	destination: 'https://ajuda.meets.com.br/docs/introducao/como-meu-negocio-pode-melhorar-com-o-meets-crm',
    	permanent: true,
  },

 {
    	source: '/docs/introducao/ja-uso-um-crm-concorrente-posso-importar-meus-negocios',
    	destination: 'https://ajuda.meets.com.br/docs/introducao/ja-uso-um-crm-concorrente-posso-importar-meus-negocios',
    	permanent: true,
  },

 {
    	source: '/docs/duvidas-frequentes/o-meets-envia-lembretes-por-e-mail-das-minhas-tarefas',
    	destination: 'https://ajuda.meets.com.br/docs/duvidas-frequentes/o-meets-envia-lembretes-por-e-mail-das-minhas-tarefas',
    	permanent: true,
  },

 {
    	source: '/docs/duvidas-frequentes/e-possivel-enviar-e-mail-do-meets',
    	destination: 'https://ajuda.meets.com.br/docs/duvidas-frequentes/e-possivel-enviar-e-mail-do-meets',
    	permanent: true,
  },

 {
    	source: '/docs/duvidas-frequentes/o-sistema-faz-um-backup-dos-meus-dados',
    	destination: 'https://ajuda.meets.com.br/docs/duvidas-frequentes/o-sistema-faz-um-backup-dos-meus-dados',
    	permanent: true,
  },

{
    	source: '/docs/duvidas-frequentes/pra-que-serve-o-funil-de-vendas-e-atendimento',
    	destination: 'https://ajuda.meets.com.br/docs/duvidas-frequentes/pra-que-serve-o-funil-de-vendas-e-atendimento',
    	permanent: true,
  },

{
    	source: '/docs/duvidas-frequentes/como-consultar-clientes-pelo-campo-personalizado',
    	destination: 'https://ajuda.meets.com.br/docs/duvidas-frequentes/como-consultar-clientes-pelo-campo-personalizado',
    	permanent: true,
  },

{
    	source: '/docs/duvidas-frequentes/como-mudar-o-e-mail-do-meu-usuario-ou-do-cadastro-da-empresa',
    	destination: 'https://ajuda.meets.com.br/docs/duvidas-frequentes/como-mudar-o-e-mail-do-meu-usuario-ou-do-cadastro-da-empresa',
    	permanent: true,
  },

{
    	source: '/docs/duvidas-frequentes/existe-multa-para-cancelamento',
    	destination: 'https://ajuda.meets.com.br/docs/duvidas-frequentes/existe-multa-para-cancelamento',
    	permanent: true,
  },

{
    	source: '/docs/duvidas-frequentes/como-mudar-a-imagem-do-usuario',
    	destination: 'https://ajuda.meets.com.br/docs/duvidas-frequentes/como-mudar-a-imagem-do-usuario',
    	permanent: true,
  },

{
    	source: '/docs/duvidas-frequentes/existe-obrigacao-ou-fidelidade',
    	destination: 'https://ajuda.meets.com.br/docs/duvidas-frequentes/existe-obrigacao-ou-fidelidade',
    	permanent: true,
  },

{
    	source: '/docs/duvidas-frequentes/acabei-meu-periodo-de-teste-e-quero-ir-para-o-plano-gratuito',
    	destination: 'https://ajuda.meets.com.br/docs/duvidas-frequentes/acabei-meu-periodo-de-teste-e-quero-ir-para-o-plano-gratuito',
    	permanent: true,
  },

{
    	source: '/docs/duvidas-frequentes/e-possivel-enviar-sms-e-fazer-ligacoes-do-meets',
    	destination: 'https://ajuda.meets.com.br/docs/duvidas-frequentes/e-possivel-enviar-sms-e-fazer-ligacoes-do-meets',
    	permanent: true,
  },

{
    	source: '/docs/duvidas-frequentes/como-aumentar-a-quantidade-de-funis-de-vendas-e-de-atendimento',
    	destination: 'https://ajuda.meets.com.br/docs/duvidas-frequentes/como-aumentar-a-quantidade-de-funis-de-vendas-e-de-atendimento',
    	permanent: true,
  },

{
    	source: '/docs/duvidas-frequentes/qual-o-tamanho-do-armazenamento',
    	destination: 'https://ajuda.meets.com.br/docs/duvidas-frequentes/qual-o-tamanho-do-armazenamento',
    	permanent: true,
  },

{
    	source: '/docs/duvidas-frequentes/lembretes-de-tarefas',
    	destination: 'https://ajuda.meets.com.br/docs/duvidas-frequentes/lembretes-de-tarefas',
    	permanent: true,
  },

{
    	source: '/docs/duvidas-frequentes/seguranca-de-informacoes',
    	destination: 'https://ajuda.meets.com.br/docs/duvidas-frequentes/seguranca-de-informacoes',
    	permanent: true,
  },

{
    	source: '/docs/duvidas-frequentes/o-meets-mostra-as-oportunidades-em-kanban',
    	destination: 'https://ajuda.meets.com.br/docs/duvidas-frequentes/o-meets-mostra-as-oportunidades-em-kanban',
    	permanent: true,
  },

{
    	source: '/docs/uso-geral/como-compartilhar-varias-oportunidades',
    	destination: 'https://ajuda.meets.com.br/docs/uso-geral/como-compartilhar-varias-oportunidades',
    	permanent: true,
  },

{
    	source: '/docs/uso-geral/como-alterar-varios-registros-ao-mesmo-tempo',
    	destination: 'https://ajuda.meets.com.br/docs/uso-geral/como-alterar-varios-registros-ao-mesmo-tempo',
    	permanent: true,
  },

{
    	source: '/docs/uso-geral/como-cancelar-minha-conta-no-meets',
    	destination: 'https://ajuda.meets.com.br/docs/uso-geral/como-cancelar-minha-conta-no-meets',
    	permanent: true,
  },

{
    	source: '/docs/uso-geral/como-excluir-um-usuario-perco-os-dados',
    	destination: 'https://ajuda.meets.com.br/docs/uso-geral/como-excluir-um-usuario-perco-os-dados',
    	permanent: true,
  },

{
    	source: '/docs/uso-geral/como-unificar-cadastro-de-clientes-cadastros-repetidos',
    	destination: 'https://ajuda.meets.com.br/docs/uso-geral/como-unificar-cadastro-de-clientes-cadastros-repetidos',
    	permanent: true,
  },

{
    	source: '/docs/uso-geral/preciso-de-uma-consultoria-para-implantar-o-crm',
    	destination: 'https://ajuda.meets.com.br/docs/uso-geral/preciso-de-uma-consultoria-para-implantar-o-crm',
    	permanent: true,
  },

{
    	source: '/docs/uso-geral/metas-como-definir',
    	destination: 'https://ajuda.meets.com.br/docs/uso-geral/metas-como-definir',
    	permanent: true,
  },

{
    	source: '/docs/funcionalidades-do-sistema/como-aumentar-minha-conversao-de-boletos',
    	destination: 'https://ajuda.meets.com.br/docs/funcionalidades-do-sistema/como-aumentar-minha-conversao-de-boletos',
    	permanent: true,
  },

{
    	source: '/docs/funcionalidades-do-sistema/como-aumentar-minha-conversao-de-cartoes-cancelados',
    	destination: 'https://ajuda.meets.com.br/docs/funcionalidades-do-sistema/como-aumentar-minha-conversao-de-cartoes-cancelados',
    	permanent: true,
  },

{
    	source: '/docs/funcionalidades-do-sistema/como-aumentar-minha-conversao-de-abandono-de-check-out',
    	destination: 'https://ajuda.meets.com.br/docs/funcionalidades-do-sistema/como-aumentar-minha-conversao-de-abandono-de-check-out',
    	permanent: true,
  },

{
    	source: '/docs/funcionalidades-do-sistema/como-criar-um-funil-de-pos-venda',
    	destination: 'https://ajuda.meets.com.br/docs/funcionalidades-do-sistema/como-criar-um-funil-de-pos-venda',
    	permanent: true,
  },

{
    	source: '/docs/funcionalidades-do-sistema/como-fazer-um-upsell-ou-downsell-com-o-meets',
    	destination: 'https://ajuda.meets.com.br/docs/funcionalidades-do-sistema/como-fazer-um-upsell-ou-downsell-com-o-meets',
    	permanent: true,
  },

{
    	source: '/docs/funcionalidades-do-sistema/entendendo-o-seu-painel-dashboard',
    	destination: 'https://ajuda.meets.com.br/docs/funcionalidades-do-sistema/entendendo-o-seu-painel-dashboard',
    	permanent: true,
  },

{
    	source: '/docs/funcionalidades-do-sistema/como-parametrizar-uma-esteira-de-atendimento-pelo-meets',
    	destination: 'https://ajuda.meets.com.br/docs/funcionalidades-do-sistema/como-parametrizar-uma-esteira-de-atendimento-pelo-meets',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/integracoes-do-meets-crm',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/integracoes-do-meets-crm',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/whats-app-business-e-meets-veja-aqui-como-integrar',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/whats-app-business-e-meets-veja-aqui-como-integrar',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/como-integrar-com-o-whatsapp',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/como-integrar-com-o-whatsapp',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/como-integrar-com-a-google-agenda',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/como-integrar-com-a-google-agenda',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/adicionando-formulario-no-seu-site-ou-blog-integrado-ao-meets',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/adicionando-formulario-no-seu-site-ou-blog-integrado-ao-meets',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/usando-a-api',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/usando-a-api',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/integrar-o-facebook-ads-e-o-meets',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/integrar-o-facebook-ads-e-o-meets',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/como-integrar-com-o-mailchimp',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/como-integrar-com-o-mailchimp',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/como-enviar-um-email-do-meets-via-mailchimp',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/como-enviar-um-email-do-meets-via-mailchimp',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/como-integrar-com-o-google-contacts',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/como-integrar-com-o-google-contacts',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/como-integrar-com-a-eduzz',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/como-integrar-com-a-eduzz',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/como-integrar-com-o-hotmart',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/como-integrar-com-o-hotmart',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/como-integrar-com-a-monetizze',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/como-integrar-com-a-monetizze',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/como-integrar-com-o-rd-station',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/como-integrar-com-o-rd-station',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/como-integrar-o-meets-com-o-lahar',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/como-integrar-o-meets-com-o-lahar',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/como-criar-um-formulario-e-inserir-dentro-do-meu-site',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/como-criar-um-formulario-e-inserir-dentro-do-meu-site',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/como-integrar-com-o-totalvoice',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/como-integrar-com-o-totalvoice',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/como-configurar-o-e-mail-de-envio',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/como-configurar-o-e-mail-de-envio',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/como-integrar-com-o-google-forms-ao-meets',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/como-integrar-com-o-google-forms-ao-meets',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/entenda-as-integracoes-via-pluga-e-como-isso-pode-te-ajudar',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/entenda-as-integracoes-via-pluga-e-como-isso-pode-te-ajudar',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/como-integrar-com-o-phonetrack',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/como-integrar-com-o-phonetrack',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/integrar-com-activecampaign',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/integrar-com-activecampaign',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/como-integrar-com-gmail',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/como-integrar-com-gmail',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/como-integrar-com-o-leadlovers',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/como-integrar-com-o-leadlovers',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/como-integrar-com-o-e-goi',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/como-integrar-com-o-e-goi',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/como-integrar-com-o-pagseguro',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/como-integrar-com-o-pagseguro',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/como-integrar-com-o-shopify',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/como-integrar-com-o-shopify',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/como-integrar-com-o-bling',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/como-integrar-com-o-bling',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/como-integrar-com-o-messenger',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/como-integrar-com-o-messenger',
    	permanent: true,
  },

{
    	source: '/docs/integracoes/sentiu-falta-de-alguma-integracao-deixe-aqui-a-sua-sugestao',
    	destination: 'https://ajuda.meets.com.br/docs/integracoes/sentiu-falta-de-alguma-integracao-deixe-aqui-a-sua-sugestao',
    	permanent: true,
  },

{
    	source: '/docs/whats-app/o-que-e-o-whats-business-api',
    	destination: 'https://ajuda.meets.com.br/docs/whats-app/o-que-e-o-whats-business-api',
    	permanent: true,
  },

{
    	source: '/docs/whats-app/qual-a-diferenca-do-whats-business-e-o-whatsapp-web',
    	destination: 'https://ajuda.meets.com.br/docs/whats-app/qual-a-diferenca-do-whats-business-e-o-whatsapp-web',
    	permanent: true,
  },

{
    	source: '/docs/whats-app/o-que-eu-preciso-para-ter-o-whatsapp-business-api',
    	destination: 'https://ajuda.meets.com.br/docs/whats-app/o-que-eu-preciso-para-ter-o-whatsapp-business-api',
    	permanent: true,
  },

{
    	source: '/docs/whats-app/quais-sao-as-funcionalidades-do-meets-e-whatsapp',
    	destination: 'https://ajuda.meets.com.br/docs/whats-app/quais-sao-as-funcionalidades-do-meets-e-whatsapp',
    	permanent: true,
  },

{
    	source: '/docs/whats-app/posso-usar-o-meu-numero-atual-no-whats-app-business-api',
    	destination: 'https://ajuda.meets.com.br/docs/whats-app/posso-usar-o-meu-numero-atual-no-whats-app-business-api',
    	permanent: true,
  },

{
    	source: '/docs/whats-app/como-funciona-a-integracao-oficial-do-whatsapp',
    	destination: 'https://ajuda.meets.com.br/docs/whats-app/como-funciona-a-integracao-oficial-do-whatsapp',
    	permanent: true,
  },

{
    	source: '/docs/whats-app/o-que-o-whatsapp-considera-importante',
    	destination: 'https://ajuda.meets.com.br/docs/whats-app/o-que-o-whatsapp-considera-importante',
    	permanent: true,
  },

{
    	source: '/docs/whats-app/como-fazer-para-ter-a-conta-whats-business-funcionando-dentro-do-meets',
    	destination: 'https://ajuda.meets.com.br/docs/whats-app/como-fazer-para-ter-a-conta-whats-business-funcionando-dentro-do-meets',
    	permanent: true,
  },

{
    	source: '/docs/whats-app/como-posso-solicitar-uma-conta-autenticada',
    	destination: 'https://ajuda.meets.com.br/docs/whats-app/como-posso-solicitar-uma-conta-autenticada',
    	permanent: true,
  },

{
    	source: '/docs/whats-app/como-encontro-o-meu-codigo-do-facebook-manager',
    	destination: 'https://ajuda.meets.com.br/docs/whats-app/como-encontro-o-meu-codigo-do-facebook-manager',
    	permanent: true,
  },

{
    	source: '/docs/whats-app/o-whatsapp-pode-rejeitar-o-uso-pela-minha-empresa',
    	destination: 'https://ajuda.meets.com.br/docs/whats-app/o-whatsapp-pode-rejeitar-o-uso-pela-minha-empresa',
    	permanent: true,
  },

{
    	source: '/docs/whats-app/consigo-automatizar-o-whatsapp',
    	destination: 'https://ajuda.meets.com.br/docs/whats-app/consigo-automatizar-o-whatsapp',
    	permanent: true,
  },

{
    	source: '/docs/whats-app/quais-tipos-de-automacoes-existem-para-o-whatsapp',
    	destination: 'https://ajuda.meets.com.br/docs/whats-app/quais-tipos-de-automacoes-existem-para-o-whatsapp',
    	permanent: true,
  },

{
    	source: '/docs/whats-app/aa-conversa-do-whatsapp-ficara-registrada-no-meet',
    	destination: 'https://ajuda.meets.com.br/docs/whats-app/aa-conversa-do-whatsapp-ficara-registrada-no-meet',
    	permanent: true,
  },

{
    	source: '/docs/whats-app/que-tipo-de-arquivos-sao-permitidos-enviar-pelo-whatsapp-business-api',
    	destination: 'https://ajuda.meets.com.br/docs/whats-app/que-tipo-de-arquivos-sao-permitidos-enviar-pelo-whatsapp-business-api',
    	permanent: true,
  },

{
    	source: '/docs/whats-app/qual-a-vantagem-de-ter-as-conversas-registradas-no-meets',
    	destination: 'https://ajuda.meets.com.br/docs/whats-app/qual-a-vantagem-de-ter-as-conversas-registradas-no-meets',
    	permanent: true,
  },

{
    	source: '/docs/whats-app/posso-ter-as-conversas-ja-pre-definidas',
    	destination: 'https://ajuda.meets.com.br/docs/whats-app/posso-ter-as-conversas-ja-pre-definidas',
    	permanent: true,
  },

{
    	source: '/docs/whats-app/posso-fazer-uma-degustacao-do-sistema-antes-de-comprar',
    	destination: 'https://ajuda.meets.com.br/docs/whats-app/posso-fazer-uma-degustacao-do-sistema-antes-de-comprar',
    	permanent: true,
  },

{
    	source: '/docs/whats-app/quando-eu-inicio-o-pagamento-da-assinatura',
    	destination: 'https://ajuda.meets.com.br/docs/whats-app/quando-eu-inicio-o-pagamento-da-assinatura',
    	permanent: true,
  },

{
    	source: '/docs/whats-app/o-que-e-o-facebook-pay-e-como-posso-utilizar',
    	destination: 'https://ajuda.meets.com.br/docs/whats-app/o-que-e-o-facebook-pay-e-como-posso-utilizar',
    	permanent: true,
  },

{
    	source: '/docs/whats-app/o-que-acontece-quando-um-cliente-adiciona-o-numero-do-whatsapp-comercial-a-um-grupo-e-mensagens',
    	destination: 'https://ajuda.meets.com.br/docs/whats-app/o-que-acontece-quando-um-cliente-adiciona-o-numero-do-whatsapp-comercial-a-um-grupo-e-mensagens',
    	permanent: true,
  },

{
    	source: '/docs/whats-app/o-que-acontece-quando-um-cliente-usa-a-opcao-responder-para-no-whatsapp',
    	destination: 'https://ajuda.meets.com.br/docs/whats-app/o-que-acontece-quando-um-cliente-usa-a-opcao-responder-para-no-whatsapp',
    	permanent: true,
  },

{
    	source: '/docs/whats-app/o-que-acontece-quando-uma-mensagem-e-excluida-do-whatsapp-ele-tambem-sera-excluido-do-meets',
    	destination: 'https://ajuda.meets.com.br/docs/whats-app/o-que-acontece-quando-uma-mensagem-e-excluida-do-whatsapp-ele-tambem-sera-excluido-do-meets',
    	permanent: true,
  },

{
    	source: '/docs/whats-app/os-anexos-sao-suportados',
    	destination: 'https://ajuda.meets.com.br/docs/whats-app/os-anexos-sao-suportados',
    	permanent: true,
  },

{
    	source: '/docs/whats-app/sobre-banimento-de-sua-conta-do-whatsapp',
    	destination: 'https://ajuda.meets.com.br/docs/whats-app/sobre-banimento-de-sua-conta-do-whatsapp',
    	permanent: true,
  },

{
    	source: '/docs/whats-app/dicas-e-orientacoes-de-uso-do-meetszap',
    	destination: 'https://ajuda.meets.com.br/docs/whats-app/dicas-e-orientacoes-de-uso-do-meetszap',
    	permanent: true,
  },

{
    	source: '/docs/whatsapp-qr-code-com-o-crm/whatsapp-qr-code-como-criar-e-utilizar',
    	destination: 'https://ajuda.meets.com.br/docs/whatsapp-qr-code-com-o-crm/whatsapp-qr-code-como-criar-e-utilizar',
    	permanent: true,
  },

{
    	source: '/docs/whatsapp-qr-code-com-o-crm/instabilidade-na-opcao-de-integracao-via-qr-code-saiba-os-motivos',
    	destination: 'https://ajuda.meets.com.br/docs/whatsapp-qr-code-com-o-crm/instabilidade-na-opcao-de-integracao-via-qr-code-saiba-os-motivos',
    	permanent: true,
  },

{
    	source: '/docs/whatsapp-com-crm/como-funciona-o-whatsapp-com-crm',
    	destination: 'https://ajuda.meets.com.br/docs/whatsapp-com-crm/como-funciona-o-whatsapp-com-crm',
    	permanent: true,
  },

{
    	source: '/docs/whatsapp-com-crm/como-adicionar-um-numero-de-telefone-internacional',
    	destination: 'https://ajuda.meets.com.br/docs/whatsapp-com-crm/como-adicionar-um-numero-de-telefone-internacional',
    	permanent: true,
  },

{
    	source: '/docs/central-de-atendimento/atendimento-centralizado',
    	destination: 'https://ajuda.meets.com.br/docs/central-de-atendimento/atendimento-centralizado',
    	permanent: true,
  },

{
    	source: '/docs/central-de-atendimento/tenha-um-unico-numero-para-varios-atendentes',
    	destination: 'https://ajuda.meets.com.br/docs/central-de-atendimento/tenha-um-unico-numero-para-varios-atendentes',
    	permanent: true,
  },

{
    	source: '/docs/central-de-atendimento/mensagens-automatizadas',
    	destination: 'https://ajuda.meets.com.br/docs/central-de-atendimento/mensagens-automatizadas',
    	permanent: true,
  },

{
    	source: '/docs/central-de-atendimento/central-integrada-aos-funis-de-vendas-atendimento',
    	destination: 'https://ajuda.meets.com.br/docs/central-de-atendimento/central-integrada-aos-funis-de-vendas-atendimento',
    	permanent: true,
  },

{
    	source: '/docs/central-de-atendimento/pouca-memoria-livre-no-celular-saiba-como-isso-pode-afetar-o-recebimento-de-mensagens-na-central-de-vendas-atendimento-meets',
    	destination: 'https://ajuda.meets.com.br/docs/central-de-atendimento/pouca-memoria-livre-no-celular-saiba-como-isso-pode-afetar-o-recebimento-de-mensagens-na-central-de-vendas-atendimento-meets',
    	permanent: true,
  },

{
    	source: '/docs/bot-com-o-crm/bot-o-que-e-e-como-funcionam',
    	destination: 'https://ajuda.meets.com.br/docs/bot-com-o-crm/bot-o-que-e-e-como-funcionam',
    	permanent: true,
  },

{
    	source: '/docs/bot-com-o-crm/conheca-os-chatbots',
    	destination: 'https://ajuda.meets.com.br/docs/bot-com-o-crm/conheca-os-chatbots',
    	permanent: true,
  },

{
    	source: '/docs/suporte/qual-o-tipo-de-suporte-que-voces-tem',
    	destination: 'https://ajuda.meets.com.br/docs/suporte/qual-o-tipo-de-suporte-que-voces-tem',
    	permanent: true,
  },

{
    	source: '/docs/suporte/como-posso-entrar-em-contato',
    	destination: 'https://ajuda.meets.com.br/docs/suporte/como-posso-entrar-em-contato',
    	permanent: true,
  },

{
    	source: '/docs/suporte/voces-tem-suporte-via-whatsapp',
    	destination: 'https://ajuda.meets.com.br/docs/suporte/voces-tem-suporte-via-whatsapp',
    	permanent: true,
  },

{
    	source: '/docs/suporte/suporte-via-telefone',
    	destination: 'https://ajuda.meets.com.br/docs/suporte/suporte-via-telefone',
    	permanent: true,
  },

{
    	source: '/docs/suporte/abra-um-ticket-de-suporte-aqui',
    	destination: 'https://ajuda.meets.com.br/docs/suporte/abra-um-ticket-de-suporte-aqui',
    	permanent: true,
  },

{
    	source: '/docs/webinarios/visao-geral-do-meets-crm',
    	destination: 'https://ajuda.meets.com.br/docs/webinarios/visao-geral-do-meets-crm',
    	permanent: true,
  },

{
    	source: '/docs/webinarios/integracao-com-o-hotmart-funis',
    	destination: 'https://ajuda.meets.com.br/docs/webinarios/integracao-com-o-hotmart-funis',
    	permanent: true,
  },

{
    	source: '/docs/webinarios/aumentando-a-conversao-com-boletos',
    	destination: 'https://ajuda.meets.com.br/docs/webinarios/aumentando-a-conversao-com-boletos',
    	permanent: true,
  },

{
    	source: '/docs/webinarios/aumentando-a-conversao-com-boletos/320-2',
    	destination: 'https://ajuda.meets.com.br/docs/webinarios/aumentando-a-conversao-com-boletos/320-2',
    	permanent: true,
  },

{
    	source: '/docs/webinarios/integracao-com-o-whatsapp',
    	destination: 'https://ajuda.meets.com.br/docs/webinarios/integracao-com-o-whatsapp',
    	permanent: true,
  },

{
    	source: '/docs/webinarios/aumentando-a-conversao-com-infoprodutos',
    	destination: 'https://ajuda.meets.com.br/docs/webinarios/aumentando-a-conversao-com-infoprodutos',
    	permanent: true,
  },

{
    	source: '/docs/webinarios/integracao-meets-pluga',
    	destination: 'https://ajuda.meets.com.br/docs/webinarios/integracao-meets-pluga',
    	permanent: true,
  },

{
    	source: '/docs/funis-de-vendas-e-atendimento/quantos-funis-posso-ter-no-meets-em-cada-plano',
    	destination: 'https://ajuda.meets.com.br/docs/funis-de-vendas-e-atendimento/quantos-funis-posso-ter-no-meets-em-cada-plano',
    	permanent: true,
  },

{
    	source: '/docs/funis-de-vendas-e-atendimento/qual-a-diferenca-de-funil-de-vendas-e-funil-de-atendimento',
    	destination: 'https://ajuda.meets.com.br/docs/funis-de-vendas-e-atendimento/qual-a-diferenca-de-funil-de-vendas-e-funil-de-atendimento',
    	permanent: true,
  },

{
    	source: '/docs/funis-de-vendas-e-atendimento/posso-criar-um-funil-de-atividades-internas',
    	destination: 'https://ajuda.meets.com.br/docs/funis-de-vendas-e-atendimento/posso-criar-um-funil-de-atividades-internas',
    	permanent: true,
  },

{
    	source: '/docs/funis-de-vendas-e-atendimento/como-duplicar-clonar-os-funis',
    	destination: 'https://ajuda.meets.com.br/docs/funis-de-vendas-e-atendimento/como-duplicar-clonar-os-funis',
    	permanent: true,
  },

{
    	source: '/docs/equipes/qual-o-plano-que-suporta-equipes',
    	destination: 'https://ajuda.meets.com.br/docs/equipes/qual-o-plano-que-suporta-equipes',
    	permanent: true,
  },

{
    	source: '/docs/cobranca-e-assinatura/problemas-com-o-pagamento-como-resolve-los',
    	destination: 'https://ajuda.meets.com.br/docs/cobranca-e-assinatura/problemas-com-o-pagamento-como-resolve-los',
    	permanent: true,
  },

{
    	source: '/docs/cobranca-e-assinatura/como-cancelo-meu-plano',
    	destination: 'https://ajuda.meets.com.br/docs/cobranca-e-assinatura/como-cancelo-meu-plano',
    	permanent: true,
  },

{
    	source: '/docs/cobranca-e-assinatura/como-migro-meu-plano-para-o-plano-free',
    	destination: 'https://ajuda.meets.com.br/docs/cobranca-e-assinatura/como-migro-meu-plano-para-o-plano-free',
    	permanent: true,
  },

{
    	source: '/docs/cobranca-e-assinatura/como-cancelar-minha-conta',
    	destination: 'https://ajuda.meets.com.br/docs/cobranca-e-assinatura/como-cancelar-minha-conta',
    	permanent: true,
  },

{
    	source: '/docs/financeiro/posso-pagar-o-meets-atraves-de-boleto-bancari',
    	destination: 'https://ajuda.meets.com.br/docs/financeiro/posso-pagar-o-meets-atraves-de-boleto-bancari',
    	permanent: true,
  },

{
    	source: '/docs/financeiro/posso-pagar-o-meets-crm-anualmente',
    	destination: 'https://ajuda.meets.com.br/docs/financeiro/posso-pagar-o-meets-crm-anualmente',
    	permanent: true,
  },

{
    	source: '/docs/financeiro/o-plano-gratuito-tem-acesso-a-todas-as-funcionalidades',
    	destination: 'https://ajuda.meets.com.br/docs/financeiro/o-plano-gratuito-tem-acesso-a-todas-as-funcionalidades',
    	permanent: true,
  },

{
    	source: '/docs/financeiro/no-periodo-teste-tenho-acesso-a-todas-as-funcionalidades',
    	destination: 'https://ajuda.meets.com.br/docs/financeiro/no-periodo-teste-tenho-acesso-a-todas-as-funcionalidades',
    	permanent: true,
  },

{
    	source: '/docs/financeiro/estou-com-dificuldades-no-pagamento',
    	destination: 'https://ajuda.meets.com.br/docs/financeiro/estou-com-dificuldades-no-pagamento',
    	permanent: true,
  },

{
    	source: '/docs/financeiro/quais-os-modelos-de-precos-e-planos-oferecidos',
    	destination: 'https://ajuda.meets.com.br/docs/financeiro/quais-os-modelos-de-precos-e-planos-oferecidos',
    	permanent: true,
  },

{
    	source: '/docs/crm-white-label/crm-para-agencias',
    	destination: 'https://ajuda.meets.com.br/docs/crm-white-label/crm-para-agencias',
    	permanent: true,
  },

{
    	source: '/docs/crm-white-label/crm-white-label-para-imobiliarias',
    	destination: 'https://ajuda.meets.com.br/docs/crm-white-label/crm-white-label-para-imobiliarias',
    	permanent: true,
  },

{
    	source: '/docs/ebooks-e-white-papers/academia-de-vendas-meets-crm',
    	destination: 'https://ajuda.meets.com.br/docs/ebooks-e-white-papers/academia-de-vendas-meets-crm',
    	permanent: true,
  },

{
    	source: '/docs/ebooks-e-white-papers/como-gerenciar-sua-equipe-de-vendas-em-7-passos',
    	destination: 'https://ajuda.meets.com.br/docs/ebooks-e-white-papers/como-gerenciar-sua-equipe-de-vendas-em-7-passos',
    	permanent: true,
  },

{
    	source: '/docs/ebooks-e-white-papers/os-3-maiores-empecilhos-de-vendas',
    	destination: 'https://ajuda.meets.com.br/docs/ebooks-e-white-papers/os-3-maiores-empecilhos-de-vendas',
    	permanent: true,
  },

{
    	source: '/docs/ebooks-e-white-papers/plano-de-emergencia-para-trabalho-remoto',
    	destination: 'https://ajuda.meets.com.br/docs/ebooks-e-white-papers/plano-de-emergencia-para-trabalho-remoto',
    	permanent: true,
  },

{
    	source: '/docs/ebooks-e-white-papers/como-aumentar-suas-vendas-on-line-webinario',
    	destination: 'https://ajuda.meets.com.br/docs/ebooks-e-white-papers/como-aumentar-suas-vendas-on-line-webinario',
    	permanent: true,
  },

{
    	source: '/docs/educacao-informacoes-gerais/crm-gratuito',
    	destination: 'https://ajuda.meets.com.br/docs/educacao-informacoes-gerais/crm-gratuito',
    	permanent: true,
  },

{
    	source: '/docs/educacao-informacoes-gerais/blog-do-meets',
    	destination: 'https://ajuda.meets.com.br/docs/educacao-informacoes-gerais/blog-do-meets',
    	permanent: true,
  },

{
    	source: '/docs/educacao-informacoes-gerais/exemplo-de-formulario-html',
    	destination: 'https://ajuda.meets.com.br/docs/educacao-informacoes-gerais/exemplo-de-formulario-html',
    	permanent: true,
  },

{
    	source: '/docs/educacao-informacoes-gerais/politica-de-privacidade',
    	destination: 'https://ajuda.meets.com.br/docs/educacao-informacoes-gerais/politica-de-privacidade',
    	permanent: true,
  },

{
    	source: '/docs/educacao-informacoes-gerais/termos-e-condicoes-gerais',
    	destination: 'https://ajuda.meets.com.br/docs/educacao-informacoes-gerais/termos-e-condicoes-gerais',
    	permanent: true,
  },

{
    	source: '/docs/educacao-informacoes-gerais/termos-e-condicoes-do-meetszap',
    	destination: 'https://ajuda.meets.com.br/docs/educacao-informacoes-gerais/termos-e-condicoes-do-meetszap',
    	permanent: true,
  },

{
    	source: '/docs/educacao-informacoes-gerais/tratamento-de-dados',
    	destination: 'https://ajuda.meets.com.br/docs/educacao-informacoes-gerais/tratamento-de-dados',
    	permanent: true,
  },

{
    	source: '/docs/educacao-informacoes-gerais/cuide-dos-seus-dados-pessoais',
    	destination: 'https://ajuda.meets.com.br/docs/educacao-informacoes-gerais/cuide-dos-seus-dados-pessoais',
    	permanent: true,
  },

{
    	source: '/docs/reviews-e-analises/comparacao-meets-crm-x-amocrm',
    	destination: 'https://ajuda.meets.com.br/docs/reviews-e-analises/comparacao-meets-crm-x-amocrm',
    	permanent: true,
  },

{
    	source: '/docs/reviews-e-analises/comparacao-meets-crm-x-huggy',
    	destination: 'https://ajuda.meets.com.br/docs/reviews-e-analises/comparacao-meets-crm-x-huggy',
    	permanent: true,
  },

{
    	source: '/docs/reviews-e-analises/comparacao-meets-crm-x-octadesk',
    	destination: 'https://ajuda.meets.com.br/docs/reviews-e-analises/comparacao-meets-crm-x-octadesk',
    	permanent: true,
  },

{
    	source: '/docs/reviews-e-analises/comparacao-meets-crm-x-omnichat',
    	destination: 'https://ajuda.meets.com.br/docs/reviews-e-analises/comparacao-meets-crm-x-omnichat',
    	permanent: true,
  },

{
    	source: '/docs/reviews-e-analises/comparacao-meets-crm-x-onecode',
    	destination: 'https://ajuda.meets.com.br/docs/reviews-e-analises/comparacao-meets-crm-x-onecode',
    	permanent: true,
  },

{
    	source: '/docs/reviews-e-analises/comparacao-meets-crm-x-polichat',
    	destination: 'https://ajuda.meets.com.br/docs/reviews-e-analises/comparacao-meets-crm-x-polichat',
    	permanent: true,
  },

{
    	source: '/docs/reviews-e-analises/comparacao-meets-crm-x-sirena',
    	destination: 'https://ajuda.meets.com.br/docs/reviews-e-analises/comparacao-meets-crm-x-sirena',
    	permanent: true,
  },

{
    	source: '/docs/reviews-e-analises/comparacao-meets-crm-x-suiteshare',
    	destination: 'https://ajuda.meets.com.br/docs/reviews-e-analises/comparacao-meets-crm-x-suiteshare',
    	permanent: true,
  },

{
    	source: '/docs/reviews-e-analises/comparacao-meets-crm-x-utalk',
    	destination: 'https://ajuda.meets.com.br/docs/reviews-e-analises/comparacao-meets-crm-x-utalk',
    	permanent: true,
  },

{
    	source: '/docs/reviews-e-analises/comparacao-meets-crm-x-agendor',
    	destination: 'https://ajuda.meets.com.br/docs/reviews-e-analises/comparacao-meets-crm-x-agendor',
    	permanent: true,
  },

{
    	source: '/docs/reviews-e-analises/comparacao-meets-crm-x-bitrix-24',
    	destination: 'https://ajuda.meets.com.br/docs/reviews-e-analises/comparacao-meets-crm-x-bitrix-24',
    	permanent: true,
  },

{
    	source: '/docs/reviews-e-analises/comparacao-meets-crm-x-bulldesk',
    	destination: 'https://ajuda.meets.com.br/docs/reviews-e-analises/comparacao-meets-crm-x-bulldesk',
    	permanent: true,
  },

{
    	source: '/docs/reviews-e-analises/comparacao-meets-crm-x-hubspot',
    	destination: 'https://ajuda.meets.com.br/docs/reviews-e-analises/comparacao-meets-crm-x-hubspot',
    	permanent: true,
  },

{
    	source: '/docs/reviews-e-analises/comparacao-meets-crm-x-mercos',
    	destination: 'https://ajuda.meets.com.br/docs/reviews-e-analises/comparacao-meets-crm-x-mercos',
    	permanent: true,
  },

{
    	source: '/docs/reviews-e-analises/comparacao-meets-crm-x-monday-com',
    	destination: 'https://ajuda.meets.com.br/docs/reviews-e-analises/comparacao-meets-crm-x-monday-com',
    	permanent: true,
  },

{
    	source: '/docs/reviews-e-analises/comparacao-meets-crm-x-moskit',
    	destination: 'https://ajuda.meets.com.br/docs/reviews-e-analises/comparacao-meets-crm-x-moskit',
    	permanent: true,
  },

{
    	source: '/docs/reviews-e-analises/comparacao-meets-crm-x-pipe-run',
    	destination: 'https://ajuda.meets.com.br/docs/reviews-e-analises/comparacao-meets-crm-x-pipe-run',
    	permanent: true,
  },

{
    	source: '/docs/reviews-e-analises/comparacao-meets-crm-x-pipedrive',
    	destination: 'https://ajuda.meets.com.br/docs/reviews-e-analises/comparacao-meets-crm-x-pipedrive',
    	permanent: true,
  },

{
    	source: '/docs/reviews-e-analises/comparacao-meets-crm-x-rd-station',
    	destination: 'https://ajuda.meets.com.br/docs/reviews-e-analises/comparacao-meets-crm-x-rd-station',
    	permanent: true,
  },

{
    	source: '/docs/reviews-e-analises/comparacao-meets-crm-x-wepipe',
    	destination: 'https://ajuda.meets.com.br/docs/reviews-e-analises/comparacao-meets-crm-x-wepipe',
    	permanent: true,
  },

{
    	source: '/docs/sobre-o-covid/duvidas-ou-ajuda',
    	destination: 'https://ajuda.meets.com.br/docs/sobre-o-covid/duvidas-ou-ajuda',
    	permanent: true,
  },

{
    	source: '/docs/ainda-nao-encontrou-a-solucao-abra-um-ticket-aqui/abra-seu-ticket-aqui',
    	destination: 'https://ajuda.meets.com.br/docs/ainda-nao-encontrou-a-solucao-abra-um-ticket-aqui/abra-seu-ticket-aqui',
    	permanent: true,
  },

{
    	source: '/docs/ainda-nao-encontrou-a-solucao-abra-um-ticket-aqui/acompanhe-seu-chamado-aqui',
    	destination: 'https://ajuda.meets.com.br/docs/ainda-nao-encontrou-a-solucao-abra-um-ticket-aqui/acompanhe-seu-chamado-aqui',
    	permanent: true,
  },


    ]
  },
}