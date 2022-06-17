import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Pricing2 from "../element/pricing-2";
import PlanoPersonalizado from "../element/plano-personalizado";
import LeadChat from "../element/lead-chat";
import * as Unicons from '@iconscout/react-unicons';
import Tabela from "../element/tabela";
import Head from "next/head";
function Planos() {
  return (
    <>
    <Head>
    <title>Planos | Gestor24h CRM</title>
    </Head>
      <Header />
      <div className="page-content">
        {/* <!-- Banner  --> */}
        <div className="dlab-bnr-inr style-2">
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="mb-3">Planos</h1>
              <h5 className="mb-0">Comece com o CRM e escolha o que melhor atende seu negócio</h5>
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}


        <section className="solucoes">
              
              <div className="container">
                <div className="row align-items-center shadow banner-inner rounded pos-top m-mob p-4">
                  <div className="col-lg-4 col-sm-4 box-whats p-relative">
                    <img className="p-absolute central-whats" src="images/banner/central-whatsapp.png" alt="" />
                  </div>  
                  <div className="col-lg-4 col-sm-4 fadeInUp">
                    <h2 className="mb-3 center-mob">Central Whatsapp</h2>
                    <h3 className="preco mb-0 center-mob">R$239,00<small class="pricingtable-type">/mês</small></h3>
                    <p className="center-mob">+ 64,90 Mensal e 59,90 anual</p>
                    <ul className="pricingtable-features">
											<li><Unicons.UilCheck /> Vários atendentes para uma linha</li>
											<li><Unicons.UilCheck /> Integrado ao Gestor24h CRM</li>
											<li><Unicons.UilCheck /> 1 número Whatsapp</li>
                      <li className="center-mob mb-mob"><a href="teste-gratis" className="btn btn-primary border-0 mt-3">Solicite um teste</a></li>
										</ul>
                  </div>
                  <div className="col-lg-4 col-sm-4 fadeInUp">
                    <h5 className="mb-3 center-mob">Sob consulta:</h5>
                    <ul className="pricingtable-features">
											<li><Unicons.UilCheck /> Vários atendentes para uma linha</li>
											<li><Unicons.UilCheck /> Integrado ao Gestor24h CRM</li>
											<li><Unicons.UilCheck /> Vários números Whatsapp</li>
                      <li><Unicons.UilCheck /> Chatbots</li>
                      <li><Unicons.UilCheck /> WhatsApp Business API</li>
                      <li className="center-mob mb-mob"><Link href="https://api.whatsapp.com/send?phone=81992971917"><a className="btn btn-primary border-0 mt-3" target="_blank" data-aos="fade-up" data-aos-duration="400">consultar plano</a></Link></li>
										</ul>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 col-sm-12 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
                    <Pricing2 />
                    </div>
                </div>
              </div>

              <section className="content-inner-2 pb-5 pt-5">
                <div className="container">
                  <div className="row p-2 justify-content-md-center">
                      <Tabela />
                  </div>
                </div>

                <div className="container">
                  <div className="row align-items-center justify-content-center pt-3 pb-3">
                    <p className="center-mob">
                      A integração com Infoprodutos está disponível no plano Premium com contratação separadamente. No Plano Enterprise já vem incluída. <br/>
                      *O Whats App Business API está disponível a partir do plano Premium com contratação separadamente. Consulte.
                    </p>
                  </div>
                </div>
              </section>



              {/* <div className="container">
                <div className="row align-items-center justify-content-center pt-3 pt-5 pb-5 mb-5 m-mob">
                  <h3>Extensão LeadBooster</h3>
                  <p className="">Disponível na Nova Central do Gestor24h! Com a Extensão LeadBooster, sua empresa conseguirá captar mais leads, engajá-las e convertê-las. Incluso Chatbot, Formulários Web, Live Chat.</p>
                  <p>Escolha o melhor plano para tomar decisões assertivas na sua empresa. O CRM é uma ferramenta essencial para sua equipe de vendas, marketing e para realização de pontos de contato. Com o Gestor24h, haverá uma melhoria expressiva na gestão de relacionamento com o cliente, no funil de vendas, nos processos comerciais e no pós-venda. Os planos também estão disponíveis para serem aplicados em PME (Pequenas e Médias Empresas), empresas de cobranças, de seguro, de energia solar e as que atuam na área educacional.</p>
                  <p>A integração com Infoprodutos está disponível no plano Premium com contratação separadamente. No Plano Enterprise já vem incluída.</p>
                </div>
              </div> */}

              

              <div className="container">
                <PlanoPersonalizado />
              </div>

              
        </section> 
       
      </div>
      <Footer />
    </>
  );
}

export default Planos;
