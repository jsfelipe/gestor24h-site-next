
import Link from 'next/link';

function Footer() {
  return (
    <>
    {/* <!-- Footer --> */}
    <footer className="site-footer" id="footer">
		<div className="footer-top">
            <div className="container">
				<div className="row d-flex align-items-center justify-content-center">

                        <div className="">
							<ul className="d-flex justify-content-center center-mob links  mb-3">
								<li>
									<Link href="/termos-de-uso/" ><a target="_blank">Termos de Uso</a></Link>
								</li>
								<li className='barra mob-none'>|</li>
								<li>
									<Link href="/seguranca/" ><a target="_blank">Segurança</a></Link>
								</li>
							</ul>
							<ul className="dlab-social-icon d-flex justify-content-center center-mob">
								<li><a className="fa fa-facebook" href="https://www.facebook.com/gestor24h/" target="_blank"></a></li>
								<li><a className="fa fa-instagram" href="https://instagram.com/gestor24h" target="_blank"></a></li>
								<li><a className="fa fa-linkedin" href="https://www.linkedin.com/company/gestor24h" target="_blank"></a></li>
								{/* <li><a className="fa fa-twitter" href="https://twitter.com/" target="_blank"></a></li> */}
								<li><a className="fa fa-youtube" href="https://www.youtube.com/channel/UCwYBI8UnzVB1ryq1fILBl_Q" target="_blank"></a></li>
								
							</ul>
							<div className="footer-logo align-items-center justify-content-center center-mob">
								<a href="https://api.whatsapp.com/send?phone=5581994994603" target="_blank" data-aos="fade-up" data-aos-duration="300" className="btn btn-light btn-round"><i className="fa fa-whatsapp fa-lg"></i> WhatsApp</a>
						</div>
							
							<div className="footer-logo align-items-center justify-content-center center-mob">
								<img src="images/logo/aws.png" alt="" className='mr-3' />
								<img src="images/logo/google-safe-browsing.png" alt="" className='google' />
							</div>
						</div>
                </div>
            </div>
		</div>
        {/* <!-- footer bottom part --> */}
        <div className="footer-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-12 text-center"> 
						<span className="copyright-text">Copyright © 2023 Gestor24h. Todos os direitos reservados.</span> 
					</div>
                </div>
            </div>
        </div>

		<div className="icon-whats">
		  <a href="https://api.whatsapp.com/send?phone=5581994994603" className="whats" target="_blank"><span className="fa fa-whatsapp"></span></a>
		  </div>
		
    </footer>
    {/* <!-- Footer End --> */}
    </>
  )
}

export default Footer;
