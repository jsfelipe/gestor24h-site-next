import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/header";


function Vantagens() {
    return (
      <>
        <section id="vantagens" className="vantagens mb-5">
			<div className="container">
				<div className="row align-items-center">
					<div className="">
						<div className="section-head style-3 text-center">
							<h2 className="title">Vantagens</h2>
							<h3 className="sub-title mb-0">Com o Gestor24h sua empresa trabalha de forma simples e organizada<br/> facilitando assim o seu dia-a-dia e aumentando a produtividade.</h3>
						</div>
						<div className="row">
							<div class="col-lg-4 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="300">
										<img src="images/icon/seguranca.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="500">
										<h5 class="dlab-tilte">Segurança</h5>
										<p>Endereço seguro, back-ups automáticos, replicação de bases. Fazemos tudo para você focar apenas no seu negócio.</p>
									</div>
								</div>
							</div>
							<div class="col-lg-4 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="700">
										<img src="images/icon/empresa.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="900">
										<h5 class="dlab-tilte">Multi empresas</h5>
										<p>Ideal para empresas que possuem inumeras filiais! Mantenha suas informações organizadas e separadas por unidade.</p>
									</div>
								</div>
							</div>
							<div class="col-lg-4 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="1100">
										<img src="images/icon/usuarios.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="1200">
										<h5 class="dlab-tilte">Múltiplos usuários</h5>
										<p>Cadastre quantos usuários quiser e defina as tarefas de cada um dentro do gestor24h.</p>
									</div>
								</div>
							</div>
							<div class="col-lg-4 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="1100">
										<img src="images/icon/custo.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="1200">
										<h5 class="dlab-tilte">Gestão por centro de custo <br/> e projeto</h5>
										<p>Controle o que cada usuário pode ter acesso, crie perfis de usuários</p>
									</div>
								</div>
							</div>
							<div class="col-lg-4 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="1100">
										<img src="images/icon/bancaria.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="1200">
										<h5 class="dlab-tilte">Conciliação bancária por OFX e Arquivo CNAB</h5>
										<p>Controle o que cada usuário pode ter acesso, crie perfis de usuários</p>
									</div>
								</div>
							</div>
							<div class="col-lg-4 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="1100">
										<img src="images/icon/nfse.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="1200">
										<h5 class="dlab-tilte">Faturamentos com emissão de NFS-e ou recibo</h5>
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