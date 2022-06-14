


import Link from "next/link";
import Image from 'next/image';
import Footer from "../layout/footer";
import Header from "../layout/header";

function BoxOrcamento() {
    return (
      <>
        <section className="content-inner-2 pb-5">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-5 col-sm-5 d-flex align-items-center justify-content-center center-mob">
						<Image src="/images/banner/gupshup.gif" alt="" width={230} height={452} />
                    </div>
					<div className="col-lg-7 col-sm-7 section-head style-3">
						<h2 className="title">Orçamentos</h2>
						<p>Nunca foi tão rápido e fácil criar um orçamento.<br/>Faça seu orçamento como se estivesse no Excel, criando seu modelo de orçamento você já inicia com os dados previamente preenchidos.</p>
						<p>Crie um layout para sua proposta em PDF e envie diretamente para seu cliente por e-mail.</p>
						<a href="/bot-commerce" className="wow fadeInUp btn btn-info shadow rounded-xl" data-aos="fade-up" data-aos-duration="300">Saiba mais sobre o BotCommerce</a>
                    </div>  
				</div>
			</div>
		</section>
    </>
  );
}
  
  export default BoxOrcamento;