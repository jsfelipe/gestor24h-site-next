import Link from "next/link";
import Image from 'next/image';
import Footer from "../layout/footer";
import Header from "../layout/header";

function BoxRelatorios() {
    return (
      <>
		<section className="container">
			<div className="row align-items-center">
				
				<div className="col-lg-7 col-sm-7 style-3">
					<h2 className="title">Relatórios</h2>
					<p>Você conta com diversos relatórios para facilitar a análise completa das suas informações.</p>
					<p>Tenha uma visão em tempo real dos gastos dos orçamentos, relatório de resultado financeiro anual, relatório por planos de contas, contas pagas e recebidas, lançamentos e faturamento.</p>
					
				</div>
				<div className="col-lg-5 col-sm-5 d-flex align-items-center justify-content-center center-mob">
					<Image src="/images/banner/homem-relatorio.png" alt="" width={444} height={595} />
				</div>  
			</div>
		</section>
    </>
  );
}
  
  export default BoxRelatorios;