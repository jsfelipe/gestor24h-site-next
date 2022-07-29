import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useScrollPosition from "use-scroll-position";
//import "../css/skin/skin-1.css";
//import "../css/skin/skin-3.css";
//import "../css/style.css";
// import "../css/skin/skin-2.css";
import "../styles/globals.css";
// import "../styles/switcher.css";
import "../scss/main.css";
import AOS from 'aos';
import Document, { Html, Main, NextScript } from 'next/document'




function MyApp({ Component, pageProps })  {

  
  
  const [toggle1, setToggle1] = useState(false);
  const [body_, setbody_] = useState();
  const [layout, setLayout] = useState("wide");
  
  const [sliderValu, setSliderValu] = useState(20);

  useEffect(() => {
    setbody_(document.querySelector("body"));
    window.scroll({top: 5, left: 0, behavior: 'smooth' })
    window.addEventListener('scroll', handleScroll);
    
  }, []);

  // useEffect(() => {
  //   AOS.init({
  //     duration : 2000
  //   });
  // }, []);

  function handleScroll(){
    AOS.init();
  }
  
  let scrollPosition = useScrollPosition();
  function toggle() {
    setToggle1(!toggle1);
  }

  const backGroundImage = (value) => {
    body_.style.backgroundImage = `url(${value})`;
    body_.style.backgroundSize = "auto";
  };
  

  const onChange = (value) => {
    setSliderValu(value);
    body_.style.padding = value + "px";
  };
  

  return (
    <>
		<Head>
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      
			<title>Gestor 24h - Sistema de Gestão para Serviços, orçamentos e financeiro</title>
      <meta property="og:description" content="Gestor 24h - Sistema de Gestão para Serviços, orçamentos e financeiro" />
      <meta name="description" content="Gestor 24h - Sistema de Gestão para Serviços, orçamentos e financeiro" />
      <meta property="og:url" content="https://meets.com.br/" />
      <meta property="og:site_name" content="Gestor 24h - Gestão de Serviços Online" />
			<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.png"/>
      
      <script
          dangerouslySetInnerHTML={{
            __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="2cab397e-de12-42af-9bfb-caeb9a42b0cb";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
        `,
          }}
        />
      
      
      
      
      {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-2333523-28`}
          />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-2333523-28', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5GJQK9J');
        `,
          }}
        /> */}


     

        </Head>	
      <div className="page-wraper">
        <Component {...pageProps} />
      </div>
      <div className="chat-widget"></div>
      <a href="#top">
        {/* <button
          className="scroltop icon-up"
          type="button"
          style={{ display: "inline-block" }}
        >
          <i className="fa fa-arrow-up" />
        </button> */}
      </a>
      {/* <a
        href="https://themeforest.net/cart/configure_before_adding/32950742/?license=regular"
        target="_blank"
        className="bt-buy-now theme-btn"
      >
        <i className="ti-shopping-cart" />
        <span>Buy Now</span>
      </a>
      <a
        href="https://support.w3itexperts.com"
        target="_blank"
        className="bt-support-now theme-btn"
      >
        <i className="ti-headphone-alt" />
        <span>Support</span>
      </a> */}
      
    </>
  );
}

export default MyApp;
