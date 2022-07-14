import Link from "next/link";
import Image from 'next/image';
import Footer from "../layout/footer";
import Header from "../layout/header";
import Head from "next/head";

function Seguranca() {
  return (
    <>
    <Head>
    <title>Sobre | Meets CRM</title>
    </Head>
      <Header />
      <div className="page-content">

        <div className="dlab-bnr-inr style-2 ">
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Segurança</h1>
              <h5 class="revealOnScroll animated fadeInUp" data-animation="fadeInUp" data-timeout="500">Fique tranquilo em relação aos seus dados, nós cuidamos bem deles.</h5>
            </div>
          </div>
        </div>

      <section class="section">

        <div class="content-inner-2">
          <div class="container pt-5 pb-5">
            <div className="row align-items-center">
              <div class="col-md-4 d-flex justify-content-center" data-animation="fadeInUp" data-timeout="600">
                <Image src="/images/banner/amazon.jpg" alt="" width={145} height={145} />
              </div>
              <div class="col-md-8" data-animation="fadeInUp" data-timeout="700">
                <h3 class="tit_verde">Estamos hospedados na Amazon Web Service</h3>
                <p>A Amazon Web Services é um dos maiores data center mundial focados em Cloud Computer. A estrutura Amazon atua em 35 zonas de disponibilidade em 13 regiões geográficas em todo o mundo, com mais 9 zonas de disponibilidade. Oferece alta disponibilidade e replicação entre regiões.</p>
                <p>Esses serviços contam com a confiança das maiores empresas e startups numa diversidade de trabalhos que incluem: aplicativos web e móveis, processamento e armazém de dados, armazenamento, arquivamento e diversos outros. <a href="https://aws.amazon.com/pt/solutions/case-studies/?nc2=h_l2_cc" target="_blank">Conheça alguns clientes Amazon Cloud Computer</a></p>
              </div>
            </div>
          </div>
        </div>

          <div className="container pt-5 pb-5">
            <div class="row"> 
              <div class="col-md-6 d-flex">
                <div className="mr-4">
                <Image src="/images/banner/https.svg" alt="" width={150} height={150} />
                </div>
                <div>
                <h3 class="tit_verde">Endereço seguro</h3>
                <p>Isso quer dizer que tudo que você está digitando e enviando para o nosso servidor é confidencial e criptografado, dificultando a interceptação das informações e aumentando significativamente a segurança dos dados</p>
                </div>
              </div>

              
              <div class="col-md-6 d-flex">
                <div className="mr-4">
                <Image src="/images/banner/backups.svg" alt="" width={150} height={150} />
                </div>
                <div>
                <h3 class="tit_verde">Back-ups automáticos</h3>
                <p>Seus dados são o que há de mais importante para nós. Realizamos back-ups diários automáticos e espelhamento de bases diminuindo a quase 0% a chance de perda de informação.</p>
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

export default Seguranca;
