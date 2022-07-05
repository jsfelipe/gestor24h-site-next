import Link from "next/link";
import Image from 'next/image';
import Footer from "../layout/footer";
import Header from "../layout/header";

function BoxRelatorios() {
    return (
      <>
		<section className="container">
			<div className="row">
				<div className="col-lg-5 col-sm-5 d-flex align-items-center justify-content-center center-mob">
					<Image src="/images/banner/gupshup.gif" alt="" width={230} height={452} />
				</div>
				<div className="col-lg-7 col-sm-7 section-head style-3">
					<h2 className="title">Relatórios</h2>
					<p>Você conta com diversos relatórios para facilitar a análise completa das suas informações.</p>
					<p>Tenha uma visão em tempo real dos gastos dos orçamentos, relatório de resultado financeiro anual, relatório por planos de contas, contas pagas e recebidas, lançamentos e faturamento.</p>
					
					<a href="/Relatorios-commerce" className="wow fadeInUp btn btn-info shadow rounded-xl" data-aos="fade-up" data-aos-duration="300">Saiba mais sobre o BotCommerce</a>
				</div>  
			</div>
		</section>
    </>
  );
}
  
  export default BoxRelatorios;