import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/header";


function Inter() {
    return (
      <>
        <section className="mt-5 mb-5">
			<div className="container">
						
				<div className="row">
					
					<div className="col-lg-12 col-md-12 d-flex box-inter">
						<div class="col-lg-7 col-md-12 align-items-center inter d-flex">
							<img src="images/icon/inter.png" className="mr-4" alt="" />
							<h4>Com a nova integração com o Banco Inter, <span>agora você pode gerar boletos e Pix</span> para receber pagamentos dos seus clientes dentro do próprio Gestor 24h.</h4>
						</div>
						<div class="col-lg-5 col-md-12 msg-inter">
							<h5>E o melhor, o dinheiro cai diretamente na sua conta, sem nenhum custo adicional.</h5>
							<p>Crie agora mesmo sua conta no Gestor 24h e agilize o processo de cobrança da sua empresa.</p>
							<a href="teste-gratis" data-aos="fade-up" data-aos-duration="300" className="btn btn-primary mr-3 btn-round btn-inter">Criar conta</a>
						</div>			
					</div>				
					
				</div>
					
			</div>
		</section>
    </>
  );
}
  
  export default Inter;