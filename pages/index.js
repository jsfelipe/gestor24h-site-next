import { useEffect } from "react";
import MeetsCrm from "../element/box-funcionalidades";
import Clients2 from "../element/clients-2";
import SliderSolucoes from "../element/slider-solucoes";
import BoxOrcamento from "../element/box-orcamento";
import BoxCentral from "../element/box-central";
import BoxFinanceiro from "../element/box-financeiro";
import BoxRelatorios from "../element/box-relatorios";
import BoxFuncionalidades from "../element/box-funcionalidades";
import Segmentos from "../element/segmentos";
import Vantagens from "../element/vantagens";
import Slider3 from "../element/slider-3";
import Counter2 from "../element/counter2";
import SliderDepoimentos from "../element/slider-depoimentos";
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
        {/* <BoxCentral /> */}
        <BoxOrcamento />
        <BoxFinanceiro />
        <BoxRelatorios />
        {/* <SliderSolucoes /> */}
        {/* <BoxRecursos /> */}
        <BoxFuncionalidades />
        <Segmentos /> 
        <div id="action-home">
        <Cta />
        </div> 
        <Vantagens />
        {/* <SliderDepoimentos /> */}
        {/* <Clients2 /> */}
        
      </div>
      <Footer />
    </>
  );
}

export default Index2;
