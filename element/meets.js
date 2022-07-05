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
						<h2 className="title">Parceiro oficial Meets</h2>
						<h6 className="sub-title">Somos parceiros oficial do Meets CRM, entre em contato com um de nossos consultores para conhecer o Meets e adquirir com condições especiais.</h6>
					</div>
					<div className="col-12 col-md-3 d-flex justify-content-center center-mob">
						<Link href="/teste-gratis/"><a className="btn btn-primary btn-round" data-aos="fade-right" data-aos-duration="400" target="_blank">Quero saber mais<i className="fa fa-angle-right m-l10"></i></a></Link>
					</div>
				</div>
			</div>
		</section>
    </>
  )
}

export default Meets;