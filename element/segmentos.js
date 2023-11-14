import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/header";


function Segmentos() {
    return (
      <>
        <section className="content-inner-2">
			<div className="container">
				<div className="align-items-center justify-content-center">
					
						<div className="section-head style-3 text-center">
							<h2 className="title pt-4">Segmentos</h2>
							<h3 className="sub-title m-b20">Com o Gestor24h diversas atividades podem ser automáticas,<br/> aumentando assim a produtividade de sua equipe e empresas.</h3>
						</div>
						
						<div className="row funcoes mb-5 justify-content-center">
							
							<div class="seg d-flex col-lg-2 col-md-12 align-items-center justify-content-center">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-md" data-aos="fade-up" data-aos-duration="300">
										<img src="images/icon/assessoria.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="500">
										<h6 class="">Assessorias</h6>
									</div>
								</div>
							</div>
							
							<div class="seg d-flex col-lg-2 col-md-12 align-items-center justify-content-center">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-md" data-aos="fade-up" data-aos-duration="700">
										<img src="images/icon/cerimonial.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="900">
										<h6 class="">Cerimonial</h6>
									</div>
								</div>
							</div>
							<div class="seg d-flex col-lg-2 col-md-12 align-items-center justify-content-center">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-md" data-aos="fade-up" data-aos-duration="1100">
										<img src="images/icon/consultoria.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="1300">
										<h6 class="">Consultorias</h6>
									</div>
								</div>
							</div>					
							<div class="seg d-flex col-lg-2 col-md-12 align-items-center justify-content-center">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-md" data-aos="fade-up" data-aos-duration="1500">
										<img src="images/icon/palestra.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="1700">
										<h6 class="">Palestras</h6>
									</div>
								</div>
							</div>
							<div class="seg d-flex col-lg-2 col-md-12 align-items-center justify-content-center">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-md" data-aos="fade-up" data-aos-duration="1500">
										<img src="images/icon/eventos.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="1700">
										<h6 class="">Eventos</h6>
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
  
  export default Segmentos;