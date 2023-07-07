import { useEffect } from "react";
import Gestor24hCrm from "../element/box-funcionalidades";
import Clients2 from "../element/clients-2";
import SliderSolucoes from "../element/slider-solucoes";
import BoxOrcamento from "../element/box-orcamento";
import BoxCentral from "../element/box-central";
import BoxFinanceiro from "../element/box-financeiro";
import BoxRelatorios from "../element/box-relatorios";
import BoxRecursos from "../element/box-recursos";
import BoxFuncionalidades from "../element/box-funcionalidades";
import Segmentos from "../element/segmentos";
import Vantagens from "../element/vantagens";
import Slider3 from "../element/slider-3";
import PerguntasFrequentes from "../element/perguntas-frequentes";
import Planos from "../element/planos";
import Consultoria from "../element/consultoria";
import Meets from "../element/meets";
import Cta from "../element/cta";
import Footer from "../layout/footer"
import Header from '../layout/header';
// import "../css/skin/skin-1.css"


function Index2() {
 
  return (
    <>
      <Header />
      <div className="page-content">
        <Slider3 />
        <BoxRecursos />
        <Segmentos /> 
        <div id="action-home">
        <Cta />
        </div> 
        <Vantagens />
        {/* <SliderDepoimentos /> */}
         <Planos />
         <Consultoria />
         <PerguntasFrequentes />
         {/* <Meets /> */}
      </div>
      <Footer />
    </>
  );
}

export default Index2;
