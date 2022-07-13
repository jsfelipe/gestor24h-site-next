
import Link from "next/link";
import Image from 'next/image';
import Footer from "../layout/footer";
import Header from "../layout/header";
import { useEffect, useState } from "react";


import * as Unicons from '@iconscout/react-unicons';

function BoxOrcamento() {

	// create a function to increase the video speed in the tag video above
	// function increaseVideoSpeed() {
	// 	var video = document.getElementById("video");
	// 	video.playbackRate = 1.5;
	// }
	// useEffect(() => {
	// 	increaseVideoSpeed();
	//   }, []);

    return (
      <>
		<section className="container">
			<div className="row align-items-center pt-3 pb-3">
				
				<div className="col-lg-5 col-sm-5">
					<h2 className="title">Orçamento</h2>
					<h5>O Gestor24h é o melhor sistema para gestão de orçamentos de serviços, controle de custos com fornecedores e financeiro completo.  Tudo integrado num único sistema.  </h5>
					<ul>
						<li className="d-flex mb-3">
							<div>
							<Unicons.UilArrowCircleRight className="bullet" />
							</div>
							<p className="ml-2">Monte seu orçamento como se estivesse no excel, adicionando fornecedores, comissões, imposto, taxas e ainda calculando lucratividade ( cálculo markup aplicado) tudo de maneira simplificada e com agilidade.</p>
						</li>
						<li className="d-flex mb-3">
							<div>
							<Unicons.UilArrowCircleRight className="bullet" />
							</div>
							<p className="ml-2">Controle todos os custos envolvidos, terceiros/fornecedores contratados e despesas extras, tudo integrado ao contas a pagar e receber.</p>
						</li>
						<li className="d-flex mb-3">
							<div>
							<Unicons.UilArrowCircleRight className="bullet" /> 
							</div>
							<p className="ml-2">Envie sua proposta por pdf ou através de um link acessível pelo seu cliente.</p>
						</li>
					</ul>
					
				</div>  
				<div className="col-lg-7 col-sm-7 center-mob notebook">
					<Image src="/images/banner/top-browser.png" alt="" width={650} height={24} layout='responsive' />
					<video width="670px" loop="true" autoplay="autoplay" controls muted>
						<source src="/images/video/orcamento-1.mp4" type="video/mp4" />
						{/* <source src="http://www.tuscorlloyds.com/CorporateVideo.ogv" type="video/ogv" />
						<source src="http://www.tuscorlloyds.com/CorporateVideo.webm" type="video/webm" /> */}
					</video>
					{/* <Image src="/images/video/video.gif" alt="" width={650} height={350} layout='responsive' /> */}
					<Image src="/images/banner/footer-browser.png" alt="" width={650} height={24} layout='responsive' />
				</div>
			</div>
		</section>
		</>
  );
}
  
  export default BoxOrcamento;