import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/header";


function Vantagens() {
    return (
      <>
        <section className="automatize">
			<div className="container">
				<div className="row align-items-center">
					<div className="">
						<div className="section-head style-3 text-center">
							<h2 className="title">Vantagens</h2>
							<h3 className="sub-title m-b20">Com o Gestor24h diversas atividades podem ser automáticas,<br/> aumentando assim a produtividade de sua equipe e empresas.</h3>
						</div>
						<div className="row">
							<div class="col-lg-4 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="300">
										<img src="images/icon/funil.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="500">
										<h4 class="dlab-tilte text-capitalize">Segurança</h4>
										<p>Endereço seguro, back-ups automáticos, replicação de bases. Fazemos tudo para você focar apenas no seu negócio.</p>
									</div>
								</div>
							</div>
							<div class="col-lg-4 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="700">
										<img src="images/icon/cadencia.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="900">
										<h4 class="dlab-tilte text-capitalize">Multi empresas</h4>
										<p>Ideal para empresas que possuem inumeras filiais! Mantenha suas informações organizadas e separadas por unidade.</p>
									</div>
								</div>
							</div>
							<div class="col-lg-4 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="1100">
										<img src="images/icon/tarefas.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="1200">
										<h4 class="dlab-tilte text-capitalize">Múltiplos usuários</h4>
										<p>Controle o que cada usuário pode ter acesso, crie perfis de usuários</p>
									</div>
								</div>
							</div>
							<div class="col-lg-4 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="1100">
										<img src="images/icon/tarefas.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="1200">
										<h4 class="dlab-tilte text-capitalize">Gestão por centro de custo e projeto</h4>
										<p>Controle o que cada usuário pode ter acesso, crie perfis de usuários</p>
									</div>
								</div>
							</div>
							<div class="col-lg-4 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="1100">
										<img src="images/icon/tarefas.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="1200">
										<h4 class="dlab-tilte text-capitalize">Conciliação bancária por OFX e Arquivo CNAB</h4>
										<p>Controle o que cada usuário pode ter acesso, crie perfis de usuários</p>
									</div>
								</div>
							</div>
							<div class="col-lg-4 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="1100">
										<img src="images/icon/tarefas.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="1200">
										<h4 class="dlab-tilte text-capitalize">Faturamentos recorrentes com emissão de NFS-e ou recibo</h4>
										<p>Controle o que cada usuário pode ter acesso, crie perfis de usuários</p>
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
  
  export default Vantagens;