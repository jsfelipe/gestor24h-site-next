import Link from "next/link";


function PlanoPersonalizado() {
  return (
    <>
      <section>
			<div className="container pb-5">
				<div className="row action-box align-items-center shadow rounded box-meu-plano">
					<div className="col-xl-8 col-lg-8 col-md-8 p-5">
						<div className="center-mob">
							<h3 className="title m-b20 text-white">Deseja Personalizar/negociar um plano?</h3>
							<h5 className="sub-title text-white mb-3">Fale com um de nossos consultores.</h5>
							<p className="mb-4 text-white">Nossa equipe de vendas/atendimento está preparada para entender e atender as necessidades da sua empresa. Entre em contato conosco que faremos um plano personalizado para você.</p>
							<Link href="https://api.whatsapp.com/send?phone=5581994994603" target="_blank"><a className="btn btn-info btn-round" data-aos="fade-up" data-aos-duration="400">Negociar um plano</a></Link>
						</div>
					</div>
					<div className="col-xl-4 col-lg-4 col-md-4 text-right p-relative meu-plano bg-black-blue center-mob">
						<img className="p-absolute mulher-planos img-mob" data-aos="fade-up" data-aos-duration="400" src="images/banner/mulher-planos.png" alt="" />
					</div>
				</div>
			</div>
		</section>
    </>
  )
}

export default PlanoPersonalizado;