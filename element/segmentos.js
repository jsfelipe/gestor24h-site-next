import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/header";


function Segmentos() {
    return (
      <>
        <section className="content-inner-2">
				<div className="container">
						<div className="section-head style-3 text-center pt-4">
							<h2 className="title">Segmentos</h2>
							<h3 className="sub-title m-b20">Com o Gestor24h diversas atividades podem ser automáticas,<br/> aumentando assim a produtividade de sua equipe e empresas.</h3>
						</div>
						
						<div className="row funcoes mb-5">
							<div class="seg d-flex col-lg-3 col-md-4 col-6 align-items-center justify-content-center">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-md" data-aos="fade-up" data-aos-duration="300">
										<img src="images/icon/arquitetura.svg" alt="" />
									</div>
									<div class="icon-content text-center" data-aos="fade-up" data-aos-duration="500">
										<h6 class="">Arquitetura</h6>
									</div>
								</div>
							</div>
							<div class="seg d-flex col-lg-3 col-md-4 col-6 align-items-center justify-content-center">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-md" data-aos="fade-up" data-aos-duration="300">
										<img src="images/icon/assessoria.svg" alt="" />
									</div>
									<div class="icon-content text-center" data-aos="fade-up" data-aos-duration="500">
										<h6 class="">Assessorias</h6>
									</div>
								</div>
							</div>
							<div class="seg d-flex col-lg-3 col-md-4 col-6 align-items-center justify-content-center">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-md" data-aos="fade-up" data-aos-duration="300">
										<img src="images/icon/assistencia.svg" alt="" />
									</div>
									<div class="icon-content text-center" data-aos="fade-up" data-aos-duration="500">
										<h6 class="">Assitência técnica</h6>
									</div>
								</div>
							</div>
							<div class="seg d-flex col-lg-3 col-md-4 col-6 align-items-center justify-content-center">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-md" data-aos="fade-up" data-aos-duration="700">
										<img src="images/icon/cerimonial.svg" alt="" />
									</div>
									<div class="icon-content text-center" data-aos="fade-up" data-aos-duration="900">
										<h6 class="">Cerimonial</h6>
									</div>
								</div>
							</div>
							<div class="seg d-flex col-lg-3 col-md-4 col-6 align-items-center justify-content-center">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-md" data-aos="fade-up" data-aos-duration="1100">
										<img src="images/icon/consultoria.svg" alt="" />
									</div>
									<div class="icon-content text-center" data-aos="fade-up" data-aos-duration="1300">
										<h6 class="">Consultorias</h6>
									</div>
								</div>
							</div>
							<div class="seg d-flex col-lg-3 col-md-4 col-6 align-items-center justify-content-center">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-md" data-aos="fade-up" data-aos-duration="1500">
										<img src="images/icon/decoracao.svg" alt="" />
									</div>
									<div class="icon-content text-center" data-aos="fade-up" data-aos-duration="1700">
										<h6 class="">Decoração</h6>
									</div>
								</div>
							</div>
							<div class="seg d-flex col-lg-3 col-md-4 col-6 align-items-center justify-content-center">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-md" data-aos="fade-up" data-aos-duration="1500">
										<img src="images/icon/fotografia.svg" alt="" />
									</div>
									<div class="icon-content text-center" data-aos="fade-up" data-aos-duration="1700">
										<h6 class="">Fotografia</h6>
									</div>
								</div>
							</div>
							<div class="seg d-flex col-lg-3 col-md-4 col-6 align-items-center justify-content-center">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-md" data-aos="fade-up" data-aos-duration="1500">
										<img src="images/icon/palestra.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="1700">
										<h6 class="">Palestras</h6>
									</div>
								</div>
							</div>
							<div class="seg d-flex col-lg-3 col-md-4 col-6 align-items-center justify-content-center">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-md" data-aos="fade-up" data-aos-duration="1500">
										<img src="images/icon/eventos.svg" alt="" />
									</div>
									<div class="icon-content text-center" data-aos="fade-up" data-aos-duration="1700">
										<h6 class="">Eventos</h6>
									</div>
								</div>
							</div>
							<div class="seg d-flex col-lg-3 col-md-4 col-6 align-items-center justify-content-center">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-md" data-aos="fade-up" data-aos-duration="1500">
										<img src="images/icon/estetica.svg" alt="" />
									</div>
									<div class="icon-content text-center" data-aos="fade-up" data-aos-duration="1700">
										<h6 class="">Clínicas/Estética</h6>
									</div>
								</div>
							</div>
							<div class="seg d-flex col-lg-3 col-md-4 col-6 align-items-center justify-content-center">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-md" data-aos="fade-up" data-aos-duration="1500">
										<img src="images/icon/construcao.svg" alt="" />
									</div>
									<div class="icon-content text-center" data-aos="fade-up" data-aos-duration="1700">
										<h6 class="">Construção</h6>
									</div>
								</div>
							</div>
							<div class="seg d-flex col-lg-3 col-md-4 col-6 align-items-center justify-content-center">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-md" data-aos="fade-up" data-aos-duration="1500">
										<img src="images/icon/treinamentos.svg" alt="" />
									</div>
									<div class="icon-content text-center" data-aos="fade-up" data-aos-duration="1700">
										<h6 class="">Treinamentos</h6>
									</div>
								</div>
							</div>
						</div>
					
				</div>
		</section>
    </>
  );
}
  
  export default Segmentos;