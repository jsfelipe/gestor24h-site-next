import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/header";


function Segmentos() {
    return (
      <>
        <section className="content-inner automatize">
			<div className="container">
				<div className="row align-items-center">
					<div className="">
						<div className="section-head style-3 text-center">
							<h2 className="title">Segmentos</h2>
							<h3 className="sub-title m-b20">Com o Meets diversas atividades podem ser automáticas,<br/> aumentando assim a produtividade de sua equipe e empresas.</h3>
						</div>
						<div className="row">
							<div class="col-lg-4 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="300">
										<img src="images/icon/funil.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="500">
										<h4 class="dlab-tilte text-capitalize">Indústria</h4>
										<p>Configure e deixe seu funil automatizado para as ações repetitivas do dia a dia.</p>
									</div>
								</div>
							</div>
							<div class="col-lg-4 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="700">
										<img src="images/icon/cadencia.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="900">
										<h4 class="dlab-tilte text-capitalize">Comércio</h4>
										<p>Crie cadências organizadas de acordo com o estágio de suas leads.</p>
									</div>
								</div>
							</div>
							<div class="col-lg-4 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="1100">
										<img src="images/icon/tarefas.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="1200">
										<h4 class="dlab-tilte text-capitalize">Serviços</h4>
										<p>Defina tarefas para cada etapa do funil de acordo com os gatilhos.</p>
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
  
  export default Segmentos;