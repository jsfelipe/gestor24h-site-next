import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Bot from "../element/bot";

function BotCommerce() {
  return (
    <>
      <Header />
      <div className="page-content bg-cinza">
        {/* <!-- Banner  --> */}
        <div className="dlab-bnr-inr style-2">
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Bot Commerce + Whatsapp</h1>
              <h5>Transforme seu WhatsApp em uma máquina de vendas.</h5>
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}


        <section className="solucoes">

            <div className="pb-5">

              <div className="container">
                <div className="row align-items-center shadow banner-inner rounded pos-top box-bot">
                  <div className="col-lg-7 col-sm-7" data-wow-duration="2s" data-wow-delay="0.1s">
                    <h6 class="sub-title text-primary m-b15 center-mob">Vendas muito mais!</h6>
                    <h3 className="center-mob">Sua loja online atendendo e vendendo diretamente no seu WhatsApp</h3>
                    <p>Ao operar uma loja inteira online, uma das tarefas mais difíceis para qualquer comerciante é converter os visitantes em clientes de longo prazo e garantir uma ótima experiência do cliente.</p>
                    <p>É aí que entra o WhatsApp, pois você poderá direcionar o tráfego da sua loja virtual para o WhatsApp, onde seus clientes já estão presentes.</p>
                  </div>
                  <div className="col-lg-5 col-sm-5 p-relative" data-wow-duration="2s" data-wow-delay="0.1s">
                    <img className="bot-vendas p-absolute" src="/images/banner/bot-vendas.png" alt="" />
                  </div>  
                </div>
              </div>

              <div className="container">
                <div className="row align-items-center pt-mob">
                    <div className="col-lg-5 col-sm-5 text-center img-mob center-mob" data-wow-duration="2s" data-wow-delay="0.1s">
                    <img src="/images/banner/personalizar-whatsapp.png" alt="" />
                    </div>
                    <div className="col-lg-7 col-sm-7" data-wow-duration="2s" data-wow-delay="0.1s">
                    <h6 class="sub-title text-primary m-b15 center-mob">Modelos de Mensagens</h6>
                    <h2 className="center-mob">Personalize suas mensagens para vender no Whatsapp</h2>
                    <p>Quando se trata de vender, velocidade é tudo. Desse modo, aumente seu tempo de resposta com nossos modelos de mensagens personalizadas.</p>
                    <p>A melhor parte: você pode personalizar as mensagens com informações do perfil do lead (o nome, por exemplo), para que o atendimento se torne mais próximo e que nenhuma mensagem pareça robótica.</p>
                    </div>
                </div>
              </div>

              <div className="container-fluid bg-white">    
                <div className="container">
                  <div className="row vantagens-bot text-center pt-5 pb-5">
                    
                      <div className="w-100">
                        <h2 className="text-center pl-5 pr-5 pb-5">Vantagens poderosas de ter um <br/>bot de vendas diretamente no WhatsApp</h2>
                      </div>

                      <div className="col-lg-3 col-sm-3">
                        <img src="/images/icon/catalogo.svg" alt="" />
                        <h5>Catálogos de produtos</h5>
                        <p>Visualize os produtos e serviços da sua loja no WhatsApp facilitando a compra de seus clientes</p>
                      </div>
                      <div className="col-lg-3 col-sm-3">
                        <img src="/images/icon/mensagens.svg" alt="" />
                        <h5>Mensagens</h5>
                        <p>Recuperação de carrinho abandonado automatizada, confirmação de pedido e mensagens de atualização de entrega</p>
                      </div>
                      <div className="col-lg-3 col-sm-3">
                        <img src="/images/icon/recuperacao.svg" alt="" />
                        <h5>Recuperação de carrinho</h5>
                        <p>Envie mensagens de recuperação de carrinho abandonado baseadas em modelo para seus clientes</p>
                      </div>
                      <div className="col-lg-3 col-sm-3">
                        <img src="/images/icon/suporte-24h.svg" alt="" />
                        <h5>Suporte em tempo real</h5>
                        <p>Fale com seus clientes via WhatsApp em um painel da web que suporta vários agentes de bate-papo</p>
                      </div>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="row pt-mob">

                    <div className="w-100 section-head text-center">
                      <h2 className="title pt-5 pl-5 pr-5">Plataformas suportadas</h2>
                      <h6 className="sub-title">Até o momento o bot de vendas é suportado para e-commerces que utilizam Shopify e Vtex</h6>
                    </div>

                    <div className="col-lg-6 col-sm-6 text-center img-mob center-mob" data-wow-duration="2s" data-wow-delay="0.1s">
                      <img src="/images/logo/shopify-02.png" alt="" />        
                      <div className="pt-2 fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
                        <p>Shopify tornou-se uma das maiores plataformas de comércio eletrônico do mundo, alimentando mais de 1,7 milhão de empresas em mais de 175 países.</p>
                        <p>Com seu alcance global, a plataforma tem sido constantemente procurada por empresas e comerciantes que buscam impulsionar suas vendas.</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 text-center img-mob center-mob" data-wow-duration="2s" data-wow-delay="0.1s">
                      <img src="/images/logo/vtex-02.png" alt="" />        
                      <div className="pt-2 fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
                        <p>A VTEX é a plataforma de comércio digital para empresas que permite que grandes marcas e varejistas alcancem um time-to-market mais rápido, e atinjam seus clientes em qualquer canal.</p>
                        <p>Atende mais de 3.200 lojas online em 38 países, entre elas estão, Sony, Walmart, Whirlpool, Coca-Cola, Stanley Black & Decker, AB InBev e Nestlé.</p>
                      </div>
                    </div>
                </div>
              </div>




                <div className="pt-5 pb-5"><Bot /></div>
              
            </div>

            <div className="text-center estatistica-whats pb-5">
                    
                    <div className="container">
                      <div className="">
                        <h6 class="sub-title m-b15">Estatística</h6>
                        <h4 className="">O WhatsApp tem mais de 2 bilhões de usuários ativos por mês em todo o mundo.</h4>
                        <h5 className="">E está classificado entre os aplicativos de mensagens móveis mais populares do mundo.</h5>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-sm-3 pt-4">
                          <img src="/images/icon/brasil.svg" alt="" />
                          <h2>120 Milhões</h2>
                          <p className="mb-0">de brasileiros utilizam o Whatsap.</p>
                        </div>
                        <div className="col-lg-3 col-sm-3 pt-4">
                          <img src="/images/icon/celular.svg" alt="" />
                          <h2>99%</h2>
                          <p className="mb-0">dos celulares brasileiros tem o Whatsap instalado.</p>
                        </div>
                        <div className="col-lg-3 col-sm-3 pt-4">
                          <img src="/images/icon/whats-diario.svg" alt="" />
                          <h2>98%</h2>
                          <p className="mb-0">dos brasileiros usam o Whatsapp diariamente.</p>
                        </div>
                        <div className="col-lg-3 col-sm-3 pt-4">
                          <img src="/images/icon/whats-business.svg" alt="" />
                          <h2>5 Milhões</h2>
                          <p className="mb-0">de usuários já utilizam o whatsapp business.</p>
                        </div>
                      </div>
                    </div>
                </div>

        </section> 
       
      </div>
      <Footer />
    </>
  );
}

export default BotCommerce;
