
import Link from "next/link";
import Image from 'next/image';
import Tabs from 'react-bootstrap/Tabs';
import Footer from "../layout/footer";
import Header from "../layout/header";

function TermosDeUso() {

  return (
    <>
      <Header />

      <div className="page-content">
        {/* <!-- Banner  --> */}
        <div className="dlab-bnr-inr style-2 ">
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Termos de uso</h1>
              <h5>Leia com atenção nossos termos de uso antes de iniciar o uso do Gestor24h.</h5>
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}
        
        <section class="section">

          <div class="content-inner-2">
            <div class="container pt-5 pb-5">
              <div className="row align-items-center">
                <div class="col-md-2 d-flex justify-content-center">
                  <Image src="/images/banner/atencao.svg" alt="" width={80} height={80} />
                </div>
                <div class="col-md-10">
                  <h6>Leia com atenção os termos que regem nossa relação. Antes de usar o Gestor 24h é importante que você leia e concorde com estes termos.</h6>
                  <h6>Ao efetuar seu cadastro para utilização dos serviços, ou aceitar estes termos, você concorda com os termos, sem modificações.</h6>
                </div>
              </div>
            </div>
          </div>

          
          <div class="container">
            <div class="row pt-5">
              
              <div class="col s12 m12 l12">
                <h5 class="tit_verde">Contrato de Licença de Usuário Final</h5>
                <div class="col s12 m6 l6">
                  <p>Este Contrato de Licença de Usuário Final é um acordo legal entre o licenciado (pessoa física ou jurídica) (o “LICENCIADO”) e a Unity Brasil Tecnologia da Informação Ltda, pessoa jurídica de direito privado, inscrita no CNPJ sob n. 06.013.344/0001-11, com sede na RUA PROFESSOR ALOISIO PESSOA DE ARAUJO, 80 - Boa Viagem, Recife/PE, CEP: 51021-410 - Brasil, (a “LICENCIANTE”) para uso do programa de computador denominado Sistema Jobb, disponibilizado neste ato pela LICENCIANTE (o “SOFTWARE”), pelo prazo determinado pelo LICENCIADO no ato do licenciamento do SOFTWARE, o que inclui o programa de computador e pode incluir os meios físicos associados, quaisquer materiais impressos, e qualquer documentação “online” ou eletrônica.</p>
                </div>
                <div class="col s12 m6 l6">
                  <p>Ao utilizar o SOFTWARE, mesmo que parcial ou a título de teste, o licenciado estará vinculado a este contrato, concordando com os mesmos, principalmente CONSENTINDO COM O ACESSO, COLETA, ARMAZENAMENTO, TRATAMENTO E TÉCNICAS DE PROTEÇÃO ÀS INFORMAÇÕES do LICENCIADO para a integral execução das funcionalidades ofertadas pelo SOFTWARE.</p>
                  <p>Em caso de discordância dos termos aqui apresentados, a utilização do SOFTWARE deve ser imediatamente interrompida.</p>
                </div>
              </div>

            </div>
          </div>

          <div class="container">
            <div class="row pt-5">
              
              <div class="col-md-6">
                  <h5 class="tit_verde">Propriedade de software</h5>
                  <p>O PRESENTE software (sistema) foi desenvolvido e criado pela empresa LICENCIANTE, e todos os seus direitos pertencem à mesma.</p>
                  <p>O LICENCIADO não adquire, pelo presente instrumento, nenhum direito de propriedade intelectual ou outros direitos exclusivos, incluindo patentes, desenhos, marcas, direitos autorais ou direitos sobre informações confidenciais ou segredos de negócio, sobre ou relacionados ao SOFTWARE ou nenhuma parte dele. Quaisquer direitos não expressamente concedidos sob o presente instrumento são reservados.</p>
              </div>
              <div class="col-md-6">
                  <h5 class="tit_verde">Licença de uso de software</h5>
                  <p>Sujeito aos termos e condições do presente instrumento, este TERMO concede ao LICENCIADO uma licença revogável, não exclusiva e intransferível para usar o SOFTWARE. O LICENCIADO não poderá utilizar e nem permitir o uso do SOFTWARE para uma outra finalidade que não seja o uso interno. Esta licença não implica na capacidade de acessar outros softwares além daqueles originalmente localizados no SOFTWARE. Em nenhuma hipótese o LICENCIADO terá acesso ao código fonte do SOFTWARE ora licenciado, por este se tratar de propriedade intelectual da LICENCIANTE.</p>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row pt-5">
              
              <div class="col-md-6">
                  <h5 class="tit_verde">Pagamento e cancelamento</h5>
                  <p>O LICENCIADO deve pagar à LICENCIANTE o valor do respectivo plano escolhido de acordo com a periodicidade definida entre as opções de pagamento disponibilizadas ao LICENCIADO.</p>
                  <p>Caso o LICENCIADO, no decorrer da vigência do presente instrumento, opte por outro plano de licenciamento, os valores serão alterados de acordo com o respectivo plano escolhido.</p>
                  <p>A falta de pagamento nas datas determinadas para seu vencimento acarretará na suspensão de acesso ao SOFTWARE até que as pendências financeiras sejam regularizadas.</p>
                  <p>Caso a suspensão permaneça por prazo superior a 90 (noventa) dias, a LICENCIANTE poderá excluir integralmente as informações lançadas no SOFTWARE pelo LICENCIADO.</p>
                  <p>Os valores estabelecidos no ato do licenciamento do SOFTWARE serão atualizados anualmente ou no menor lapso de tempo legalmente permitido pelo IGPM-FGV acumulado no período, ou no caso de extinção deste, de outro índice oficial que venha a substituí-lo.</p>
              </div>
              <div class="col-md-6">
                  <h5 class="tit_verde">Banco de dados e arquivos anexados</h5>
                  <p>Suspenso o acesso ao SOFTWARE, a LICENCIANTE manterá as informações do LICENCIADO lançadas no mesmo pelo período de 3 (três) meses, contados da suspensão de acesso. Neste período, a LICENCIANTE tornará as informações do LICENCIADO disponíveis para serem extraídas do SOFTWARE em formato .xls (excel) relativo ao banco de dados e também disponibilizará os arquivos anexados na sua conta como .pdf, imagens.</p>
                  <p>Passados os 6 (seis) meses da suspensão do presente contrato, todas as INFORMAÇÕES do LICENCIADO, incluindo as pessoas, de conta e financeiras, em poder da LICENCIANTE serão excluídos permanentemente do banco de dados da LICENCIANTE, tendo sido extraídas ou não pelo LICENCIADO.</p>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row pt-5">
              
              <div class="col-md-6">
                  <h5 class="tit_verde">Da segurança da informação e política de privacidade</h5>
                  <p>Todas as medidas de segurança necessárias são tomadas para garantir a privacidade dos dados armazenados, incluindo-se proteção contra acesso, roubo, alteração ou destruição. As técnicas de proteção utilizadas são as mais sofisticadas do mercado, aplicadas em várias camadas para garantir a confiabilidade e o sigilo das informações. Também são realizados backups automáticos dos dados 2 vezes ao dia em servidores espelhados, utilizando serviços de hospedadem Cloud Computer.</p>
                  <p>As Informações da Conta do Usuário são protegidas com senha por medida de segurança e garantia da privacidade, sendo de total e integral responsabilidade do mesmo o sigilo e a confidencialidade da referida senha e o uso dos serviços com a mesma.</p>
                  <p>Não divulgamos em hipótese alguma dados pessoais cadastrados em nosso sistema. Restringimos o acesso a informações pessoais por parte de funcionários que necessitam ter acesso as informações para suporte ou manutenções programadas, e que estão sujeitos a obrigações contratuais de confidencialidade, podendo ser processados se deixarem de cumprir o contrato.</p>
              </div>
              <div class="col-md-6">
                  <h5 class="tit_verde">Prazo</h5>
                  <p>O presente Termo entra em vigor na data de seu aceite pelo LICENCIADO e vigorará por prazo indeterminado.</p>
                  <h5 class="tit_verde">Recisão</h5>
                  <p>Quanto à rescisão, O LICENCIADO poderá solicitar a qualquer tempo, desde que esteja sem saldo devedor e que seja comunicado expressamente à LICENCIANTE por escrito. A LICENCIANTE fica isenta de quaisquer reembolso de parcelas pagas.</p>
                  <h5 class="tit_verde">Fórum</h5>
                  <p>Fica eleito o Fórum da cidade do Recife/PE para esclarecer quaisquer dúvidas, caso estas venham a ocorrer no tocante ao cumprimento das Cláusulas pactuadas neste Contrato.</p>
              </div>
            </div>
          </div>

        </section>

      </div>

      <Footer />
      </>
    );
  }
  
  export default TermosDeUso;