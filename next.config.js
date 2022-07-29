
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
      // {
      //   source: '/frases-prontas-para-atendimento-no-whatsapp',
      //   destination: 'https://blog.meets.com.br/frases-prontas-para-atendimento-no-whatsapp',
      //   permanent: true,
      // },
      // {
      //   source: '/estrategias-para-foco-no-cliente',
      //   destination: 'https://blog.meets.com.br/estrategias-para-foco-no-cliente',
      //   permanent: true,
      // },
      
  
   
   
    
   

    ]
  },
}