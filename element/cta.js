import Link from "next/link";


function Cta() {
  return (
    <>
      <section>
			<div className="container cta">
				<div className="row action-box style-1 shadow rounded align-items-center m-mob">
					<div className="col-xl-7 col-lg-7 col-md-7">
						<div className="center-mob">
							<h2 className="title m-b20">Fale com um consultor</h2>
							<h5 className="sub-title">Veja na prática todas as vantagens do Gestor 24h.</h5>
						</div>
					</div>
					<div className="col-xl-5 col-lg-5 col-md-5 d-flex justify-content-center justify-content-md-end center-mob">
						<Link href="/teste-gratis/"><a className="btn btn-primary btn-round" data-aos="fade-right" data-aos-duration="400" target="_blank">Solicitar apresentação<i className="fa fa-angle-right m-l10"></i></a></Link>
					</div>
				</div>
			</div>
		</section>
    </>
  )
}

export default Cta;