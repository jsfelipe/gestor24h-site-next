import Link from "next/link";
import Image from 'next/image';
import * as Unicons from '@iconscout/react-unicons';

function BoxFinanceiro() {
  return (
    <>
      <section>
			<div className="container">
				<div className="row align-items-center mb-4">
					<div className="col-lg-7 col-sm-7 section-head style-3 center-mob">
                    	<h2 className="title">Financeiro</h2>
                    	<p>Financeiro completo integrado com o orçamento e custos de produção.<br/> Controle também as despesas fixas da sua empresa e tenha todo o controle num único sistema.</p>
						<div className="d-flex center-mob">
							<ul>
								<li><Unicons.UilCheck /> Conciliação bancária</li>
								<li><Unicons.UilCheck /> Contas a pagar</li>
								<li><Unicons.UilCheck /> Contas a receber</li>
								<li><Unicons.UilCheck /> Faturamento</li>
							</ul>
						</div>
						<div className="center-mob">
							<ul>
								<li><Unicons.UilCheck /> Nota Fiscal Eletrônica</li>
								<li><Unicons.UilCheck /> Fluxo de caixa</li>
								<li><Unicons.UilCheck /> Plano de contas</li>
							</ul>
						</div>
                    </div>
					<div className="col-lg-5 col-sm-5">
						<div data-aos="fade-up" data-aos-duration="400">
							<Image src="/images/banner/losango-integracao.png" alt="" width={525} height={584} />
						</div>
                    </div>  
                </div>
			</div>
		</section>
    </>
  )
}

export default BoxFinanceiro;