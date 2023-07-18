import { useState } from "react";
import * as Unicons from '@iconscout/react-unicons';

function Planos() {
    const [open, setOpen] = useState("p2")
    return (
      <>



 {/* <!-- Team --> */}
 <section id="box-planos" className="content-inner-2 pt-5 pb-5">
 <div className="container">
        
          <div className="section-head style-3 text-center">
            <h2 className="title">Planos</h2>
          </div>

    <div className="row d-flex align-items-center justify-content-center valores">
     
        <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
          <img src="images/banner/menina-plano.png" alt="" width={335} />
        </div>
        <div className="col-12 col-md-5 pl-5 center-mob">
          <h6>a partir de</h6>
          <h3>R$ 59,90 no plano anual</h3>
          <h3>R$ 69,90 no plano semestral</h3>
          <h3>R$ 89,90 no plano mensal</h3>
          <h5 className="">Adquira seu plano e comece a<br/> transformar a gestão da sua empresa</h5>
          <a href="teste-gratis" data-aos="fade-up" data-aos-duration="300" className="btn btn-success btn-round">Solicitar proposta</a>
        </div>

    </div>


      <div className="row onboarding rounded" data-aos="fade-up" data-aos-duration="1000">
          
          <div className="col-md-2 center-mob mb-mob">
            <img src="images/icon/plano.svg" alt="" width={110} />
          </div>
          <div className="col-md-6">
            <h5>Onboarding Completo</h5>
            <p>Com o Gestor24h você e sua equipe recebem um treinamento completo da plataforma para ter uma melhor experiência de uso e tirar todas as suas dúvidas pessoalmente.</p>
          </div>
            <div className="col-md-4">
              <p className="mb-0">O onboarding inclui ainda treinamentos específicos voltados para:</p>
              <ul className="treinamento">
                <li><Unicons.UilCheckCircle /> Orçamento Completo</li>
                <li><Unicons.UilCheckCircle /> Financeiro Completo</li>
              </ul>
            </div>

      </div>

  
   
 </div>
     
 </section>
 </>
    )
  }
  
  export default Planos;