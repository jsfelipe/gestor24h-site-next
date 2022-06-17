import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/header";


function BoxFuncionalidades() {
    return (
      <>
        <section className="content-inner-2 pb-2">
			<div className="container">
				<div className="row align-items-center">
				<div className="">
						{/* <div className="section-head style-3 text-center">
							<h2 className="title">Funcionalidades</h2>
							<h3 className="sub-title m-b20">lorem ipsum</h3>
						</div> */}
						<div className="row funcoes mb-5">
							<div class="col-lg-3 col-md-12 lr lb">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="300">
										<img src="images/icon/servicos.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="500">
										<h6 class="">Visão consolidada de várias empresas</h6>
										<p>lorem ipsum</p>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-12 lr lb">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="300">
										<img src="images/icon/servicos.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="500">
										<h6 class="">Usuários ilimitados</h6>
										<p>lorem ipsum</p>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-12 lr lb">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="300">
										<img src="images/icon/servicos.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="500">
										<h6 class="">Notas fiscais e boletos</h6>
										<p>+ R$50,00 você tem NFS-e ilimitadas</p>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-12 lb">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="700">
										<img src="images/icon/vendas.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="900">
										<h6 class="">Gestão por centro  de custo e projeto</h6>
										<p>lorem ipsum</p>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-12 lr">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="1100">
										<img src="images/icon/marketing.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="1300">
										<h6 class="">Faturamentos recorrentes com emissão de NFS-e ou recibo</h6>
										<p>lorem ipsum</p>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-12 lr">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="1500">
										<img src="images/icon/estrutura.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="1700">
										<h6 class="">Conciliação bancária por <br/>OFX  e Arquivo CNAB</h6>
										<p>lorem ipsum</p>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-12 lr">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="1500">
										<img src="images/icon/estrutura.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="1700">
										<h6 class="">Adicione tarefas e delege ao responsável</h6>
										<p>Gerencie as tarefas da sua equipe de forma simples e organizada.</p>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="1500">
										<img src="images/icon/estrutura.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="1700">
										<h6 class="">Armazenamento ilimitado</h6>
										<p>Trabalhe tranquilo, seu </p>
									</div>
								</div>
							</div>
						</div>
				</div>
				</div>
			</div>
		</section>
    </>
  );
}
  
  export default BoxFuncionalidades;