import Link from "next/link";


function Meets() {
  return (
    <>
      <section className="content pb-5">
			<div className="container shadow rounded meets">
				<div className="row align-items-center m-mob">
					<div className="col-12 col-md-2 center-mob mb-mob">
						<img src="images/logo/parceiro.svg" alt="" width={350} />
					</div>
					<div className="col-12 col-md-7">
						<h2 className="title">Integração com o Meets CRM*</h2>
						<h6 className="sub-title">Somos parceiros oficial do Meets CRM e em breve o Gestor24h estará integrado a um dos melhores CRM do mercado. </h6>
					</div>
					<div className="col-12 col-md-3 d-flex justify-content-center center-mob">
						<Link href="https://www.meets.com.br"><a className="btn btn-primary btn-round" data-aos="fade-right" data-aos-duration="400" target="_blank">Conhecer o Meets<i className="fa fa-angle-right m-l10"></i></a></Link>
					</div>
				</div>
			</div>
		</section>
    </>
  )
}

export default Meets;