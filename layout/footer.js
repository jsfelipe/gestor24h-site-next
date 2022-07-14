
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
								<li><a className="fa fa-facebook" href="https://www.facebook.com/meetscrm/?ref=br_rs" target="_blank"></a></li>
								<li><a className="fa fa-instagram" href="https://www.instagram.com/meetscrm/" target="_blank"></a></li>
								<li><a className="fa fa-linkedin" href="https://www.linkedin.com/company/meetscrm/" target="_blank"></a></li>
								<li><a className="fa fa-twitter" href="https://twitter.com/meets_crm" target="_blank"></a></li>
								<li><a className="fa fa-youtube" href="https://www.youtube.com/c/MeetsBr" target="_blank"></a></li>
								<li><a className="fa fa-pinterest" href="https://br.pinterest.com/meetscrm1/" target="_blank"></a></li>
							</ul>
							
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
						<span className="copyright-text">Copyright © 2022 <a href="https://dexignzone.com/" target="_blank">Gestor 24h</a>. Todos os direitos reservados.</span> 
					</div>
                </div>
            </div>
        </div>
		
		<noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5GJQK9J"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
		
	
    </footer>
    {/* <!-- Footer End --> */}
    </>
  )
}

export default Footer;