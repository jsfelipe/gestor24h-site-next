import Link from "next/link";
import Tabs from 'react-bootstrap/Tabs';
import Footer from "../layout/footer";
import Header from "../layout/header";
import SejaParceiro from "../element/seja-parceiro";
import Head from "next/head";

function Parceiros() {

  return (
    <>
    <Head>
    <title>Parceiros | Meets CRM</title>
    </Head>
      <Header />
      <div className="page-content">
        {/* <!-- Banner  --> */}
        <div className="dlab-bnr-inr style-2 ">
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Parceiros</h1>
              <h5>A parceria ideal para alavancar seus negócios</h5>
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}


        <section className="parceiros">

              <div className="container">
                <div className="row align-items-center shadow pl-5 banner-inner rounded pos-top m-mob">
                  <div className="col-lg-6 col-sm-6">
                    <h3 className="title m-b20">Deseja se tornar um parceiro meets?</h3>
                    <p className="mb-0">Torne-se parceiro do CRM que mais cresce no Brasil, entregando acessibilidade e o suporte necessário para que sua empresa aumente as vendas.</p>
                  </div>
                  <div className="col-lg-6 col-sm-6 box-parceiros p-relative">
                    <img className="p-absolute img-parceiro" src="images/banner/parceiros.png" alt="" />
                  </div>  
                </div>
              </div>

              <div className="container">
  
                <div className="row align-items-center">
                      <div className="col-lg-5 col-sm-5 text-center" data-wow-duration="2s" data-wow-delay="0.1s">
                        <img src="images/banner/afiliados.png" alt="" />
                      </div>
                      <div className="col-lg-7 col-sm-7">
                        <h3 className="center-mob">Afiliados</h3>
                        <p>O programa de Afiliados do Meets CRM inclui benefícios incríveis para começar a alavancar ainda mais suas vendas.</p>
                        <p>Com oportunidades de ganho de comissões, o programa de Afiliados visa recompensar aqueles que indicarem novos clientes para o Meets, tornando-se proporcional o valor da comissão ao consumo de cada novo cliente na contratação e renovação de produtos da família Meets. Afiliar-se ao Meets é ter oportunidade de trabalhar com mais liberdade e aumentando seus lucros.</p>
                      </div> 
                    </div>  
                    <div className="row align-items-center mb-5 flex-row-reverse"> 
                      <div className="col-lg-5 col-sm-5 text-center" data-wow-duration="2s" data-wow-delay="0.1s">
                        <img src="images/banner/beneficios.png" alt="" />
                      </div>
                      <div className="col-lg-7 col-sm-7">
                      <h3 className="center-mob">Benefícios</h3>
                      <p>Ao ser aceito no programa, o comissionado ganhará o equivalente a 20% do consumo do novo cliente Meets, integrando-se na nossa plataforma através do link específico do comissionado. O ganho (em dinheiro) será ofertado de forma recorrente enquanto o cliente indicado mantiver ativa sua conta no Meets.</p>
                      <p>Na tabela abaixo, demonstramos as faixas de recorrência que o Afiliado poderá se encaixar, dependendo da quantidade de novos clientes que trouxerem no mês corrente.</p>
                      <table className="porcentagem w-100">
                        <tr>
                          <td>
                          Novos clientes por mês/ganho mensal (sobre o consumo dos indicados)
                          </td>
                          <td>
                          Novos clientes por mês/ganho mensal (sobre o consumo dos indicados)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            De 0 a 20 - 20%
                          </td>
                          <td>
                            De 21 a 40 - 30%
                          </td>
                        </tr>
                      </table>
                    
                    </div>  
                </div>

                <div className="row">
                  
                </div>

                <div className="row">
                    <div className="col-lg-6 col-sm-6">
                    <h3 className="center-mob">Não há limite máximo de ganhos para os afiliados.</h3>
                    <p>Quanto mais novos clientes forem indicados, mais o Afiliado ganhará.</p>
                    <p>Não perca comissões imperdíveis e acompanhamento de suas vendas.</p>
                    </div>  
                    <div className="col-lg-6 col-sm-6">
                    <h3 className="center-mob">Quem pode participar do programa de afiliados Meets?</h3>
                    <p>O programa de Afiliados é restrito para quem recebe o convite da equipe do Meets ou é aprovado por nossa equipe após pedido de participação. Diferentemente do programa de Indicação, disponível para todos os usuários do Meets.</p>
                    </div>  
                </div>

              </div>

           
              <SejaParceiro />

        </section> 

       
      </div>
      <Footer />
    </>
  );
}

export default Parceiros;
