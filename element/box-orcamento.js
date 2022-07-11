


import Link from "next/link";
import Image from 'next/image';
import Footer from "../layout/footer";
import Header from "../layout/header";
import ReactPlayer from 'react-player';

function BoxOrcamento() {
    return (
      <>
		<section className="container">
			<div className="row align-items-center pt-3 pb-3">
				
				<div className="col-lg-5 col-sm-5">
					<h2 className="title">Orçamento</h2>
					<h5>O Gestor24h é o melhor sistema para gestão de orçamentos de serviços, controle de custos com fornecedores e financeiro completo.  Tudo integrado num único sistema.  </h5>
					<p>Monte seu orçamento como se estivesse no excel, adicionando fornecedores, comissões, imposto, taxas e ainda calculando lucratividade ( cálculo markup aplicado) tudo de maneira simplificada e com agilidade.</p>
					<p>Envie sua proposta por pdf ou através de um link acessível pelo seu cliente.</p>
					<p>Controle todos os custos envolvidos, terceiros/fornecedores contratados e despesas extras, tudo integrado ao contas a pagar e receber.</p>
					
				</div>  
				<div className="col-lg-7 col-sm-7 center-mob notebook">
					{/* <ReactPlayer playing loop  url='/images/video/orcamento-1.mp4'  /> */}
					<Image src="/images/banner/top-browser.png" alt="" width={650} height={24} layout='responsive' />
					<Image src="/images/video/video.gif" alt="" width={650} height={350} layout='responsive' />
					<Image src="/images/banner/footer-browser.png" alt="" width={650} height={24} layout='responsive' />
				</div>
			</div>
		</section>
		</>
  );
}
  
  export default BoxOrcamento;