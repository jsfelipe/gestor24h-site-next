import Link from "next/link";
import Slider from "react-slick";
import Image from 'next/image';

function Slider3 () {
    return (
      <>
        
		<div className="banner-three">
			<div className="container">
				<div className="">
					<div className="row align-items-center">
						<div className="col-md-6 ">
							<div className="center-mob pt-5" data-aos="fade-right" data-aos-duration="0">
								<Image src="/images/banner/posso-ajudar.png" alt="" width={496} height={574} />
							</div>
						</div>
						<div className="col-md-6">
							<div className="banner-content text-white">
								{/* <h1 className="m-b20 crm-mais" data-aos="fade-up" data-aos-duration="300">CRM <img src="images/banner/mais.png" data-aos="fade-up" data-aos-duration="500" alt=""/></h1> */}
								<h1 className="mb-3 c-at center-mob" data-aos="fade-right" data-aos-duration="100">Seu Sistema de Gestão Definitivo.</h1>
								<h3>Completo, mas sem complicar.</h3>
								<h6 className="sub-title text-primary mt-2 center-mob" data-aos="fade-right" data-aos-duration="200">Gestão de propostas, orçamentos, financeiro completo e relatórios</h6>

								<div class="d-flex center-mob mt-4">
								<a href="teste-gratis" data-aos="fade-up" data-aos-duration="300" className="btn btn-primary mr-3 btn-round">Começar agora</a>
								<a href="https://api.whatsapp.com/send?phone=5581992971917" target="_blank" data-aos="fade-up" data-aos-duration="300" className="btn btn-light btn-round">Solicitar apresentação</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
      </>
    )
  }
  
  export default Slider3;