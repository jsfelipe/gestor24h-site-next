
import Link from 'next/link';


function Error404() {
  return (
    <>
      <div className="page-content page-content-login">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr text-center">
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<img className="custom-logo-white mb-5" src="../images/logo/logo-gestor.svg" alt="" width={200} />
					<h1>Bem-vindo ao login do Gestor24h</h1>
					<h5>Qual a versão você deseja acessar?</h5>
				</div>
			</div>
        </div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Error Page --> */}
		<div className="section-full p-5">
			<div className="container">

				<div className="row justify-content-center">
					<div className="col-4 text-center">
						<div className='rounded shadow p-5 content-inner-2'>
							<h4 className="error-head">Acesso antigo</h4>
							<p>Nossa primeira versão ainda continua funcionando para que você faça a migração no tempo que achar necessário.</p>
							<Link href="/"><a className="btn btn-primary radius-no"><span className="p-lr15">Fazer login</span></a></Link>
						</div>
					</div>
					<div className="col-4 text-center">
						<div className='rounded shadow p-5 content-inner-2'>
							<h4 className="error-head">Acesso Novo 3.0</h4>
							<p>Nosso sistema passou por uma atualização recentemente, lançamos o Gestor24h 3.0 ainda mais simples e completo.</p>
							<Link href="/"><a className="btn btn-primary radius-no"><span className="p-lr15">Fazer login</span></a></Link>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
    </>
  )
}

export default Error404;