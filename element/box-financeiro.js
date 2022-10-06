import Link from "next/link";
import Image from 'next/image';
import * as Unicons from '@iconscout/react-unicons';

function BoxFinanceiro() {
  return (
    <>
		<section className="container box-financeiro">
			<div className="row">
				<div className="col-12 col-lg-7 col-sm-7 style-3">
					<h2 className="title">Financeiro</h2>
					<h5>Financeiro completo integrado com o orçamento e custos de produção.</h5>
					<p>Controle também as despesas fixas da sua empresa e tenha todo o controle num único sistema.</p>
					<div className="d-flex">
						<ul className="row mt-3">
							<li className="col-12 col-md-6 d-flex  mb-3">
								<div>
								<Unicons.UilArrowCircleRight className="bullet" />
								</div>
								<div className="ml-3">
								<h6>Conciliação bancária por OFX e Arquivo CNAB</h6>
								<span>Ganhe tempo e praticidade com cobranças bancárias automatizadas</span>
								</div>
							</li>
							<li className="col-12 col-md-6 d-flex mb-3">
								<div>
								<Unicons.UilArrowCircleRight className="bullet" />
								</div>
								<div className="ml-3">
								<h6>Contas a pagar</h6>
								<p>Tenha total controle de todos os pagamentos, aprove-os e finalize através de um arquivo CNAB.</p>
								</div>
							</li>
							
							<li className="col-12 col-md-6 d-flex mb-3">
								<div>
								<Unicons.UilArrowCircleRight className="bullet" />
								</div>
								<div className="ml-3">
								<h6>Contas a receber</h6>
								<p>Veja o saldo total a receber e filtre por data de vencimento ou clientes devedores.</p>
								</div>
							</li>
							<li className="col-12 col-md-6 d-flex mb-3">
								<div>
								<Unicons.UilArrowCircleRight className="bullet" />
								</div>
								<div className="ml-3">
								<h6>Fluxo de caixa</h6>
								<p>Acompanhe o saldo do caixa diário, faça filtros por contas bancárias e veja o fluxo detalhado.</p>
								</div>
							</li>
							<li className="col-12 col-md-6 d-flex">
								<div>
								<Unicons.UilArrowCircleRight className="bullet" />
								</div>
								<div className="ml-3">
								<h6>Plano de contas</h6>
								<p>Crie ilimitados planos de contas, personalize como achar melhor.</p>
								</div>
							</li>
							<li className="col-12 col-md-6 d-flex mb-3">
								<div>
								<Unicons.UilArrowCircleRight className="bullet" />
								</div>
								<div className="ml-3">
								<h6>Nota Fiscal Eletrônica</h6>
								<p>Emita quantas NF-e precisar e envie para o email ou whatsapp do seu cliente.</p>
								</div>
							</li>
							<li className="col-12 col-md-6 d-flex mb-3">
								<div>
								<Unicons.UilArrowCircleRight className="bullet" />
								</div>
								<div className="ml-3">
								<h6>Faturamento</h6>
								<p>Faturamento com opções de faturamento parcial, faturamento agrupado com mais de um orçamento do mesmo cliente e envio de NFS-e.</p>
								</div>
							</li>
							
						</ul>
					</div>
				</div>
				<div className="d-flex col-lg-5 col-sm-5 pos-relative">
					<div data-aos="fade-up" data-aos-duration="400" className="mulher-fina center-mob pos-absolute">
						<img src="/images/banner/mulher-financeiro.png" alt="" className="mb-0" />
					</div>
				</div>  
			</div>
		</section>
    </>
  )
}

export default BoxFinanceiro;