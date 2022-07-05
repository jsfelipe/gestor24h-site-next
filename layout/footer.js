function Footer() {
  return (
    <>
    {/* <!-- Footer --> */}
    <footer className="site-footer" id="footer">
		<div className="footer-top">
            <div className="container">
				<div className="row">
					
					<div className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="widget style-1 center-mob">
							<h5 className="footer-title">Empresa</h5>
							<ul className="center-mob">
								<li><a href="/sobre">Sobre</a></li>
								<li><a href="https://blog.meets.com.br/" target="_blank">Blog</a></li>
								<li><a href="/parceiros">Parceiros</a></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="widget style-1 center-mob">
							<h5 className="footer-title">Soluções</h5>
							<ul className="center-mob">
								<li><a href="/solucoes/crm-para-infoprodutos">CRM para Infoprodutos</a></li>
								<li><a href="/solucoes/crm-para-agencias">CRM para Agências</a></li>
								<li><a href="/solucoes/crm-para-pme">CRM para PME</a></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="1.0s">
						<div className="widget style-1 center-mob">
							<h5 className="footer-title">Suporte</h5>
							<ul className="center-mob">
								<li><a href="https://ajuda.meets.com.br/" target="_blank">Ajuda</a></li>
								<li><a href="mailto:contato@meets.com.br">contato@meets.com.br</a></li>
								<li><a href="tel:+551131649266">+55 (11) 3164-9266</a></li>
								<li><a href="tel:+5581992971917">+55 (81) 99297-1917</a></li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-12 col-md-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="widget_about">
							<div className="dlab-social-icon center-mob">
								<h5 className="footer-title">Social</h5>
								<ul className="center-mob">
									<li><a className="fa fa-facebook" href="https://www.facebook.com/meetscrm/?ref=br_rs" target="_blank"></a></li>
									<li><a className="fa fa-instagram" href="https://www.instagram.com/meetscrm/" target="_blank"></a></li>
									<li><a className="fa fa-linkedin" href="https://www.linkedin.com/company/meetscrm/" target="_blank"></a></li>
									<li><a className="fa fa-twitter" href="https://twitter.com/meets_crm" target="_blank"></a></li>
									<li><a className="fa fa-youtube" href="https://www.youtube.com/c/MeetsBr" target="_blank"></a></li>
									<li><a className="fa fa-pinterest" href="https://br.pinterest.com/meetscrm1/" target="_blank"></a></li>
								</ul>
							</div>
							<div className="footer-logo center-mob">
								<img src="images/logo/aws.png" alt=""/>
								<img src="images/logo/google-safe-browsing.png" alt=""/>
							</div>
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