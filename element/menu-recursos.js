import Link from "next/link";


function MenuRecursos() {
    return (
      <>
        <section className="col-md-12 menu-recursos d-flex justify-content-center p-5">

            <ul className="d-flex align-items-center justify-content-center">
                <li><Link href="/recursos/comunicacao"><a className="btn rounded-xl">Comunicação</a></Link></li>
                <li><Link href="/recursos/oportunidades"><a className="btn rounded-xl">Oportunidades</a></Link></li>
                <li><Link href="/recursos/atendimento"><a className="btn rounded-xl">Atendimento</a></Link></li>
                <li><Link href="/recursos/atividades"><a className="btn rounded-xl">Atividades</a></Link></li>
                <li><Link href="/recursos/funil-de-vendas"><a className="btn rounded-xl">Funil de vendas</a></Link></li>
                <li><Link href="/recursos/importacoes"><a className="btn rounded-xl">Importações</a></Link></li>
                <li><Link href="/recursos/relatorios"><a className="btn rounded-xl">Relatórios</a></Link></li>
            </ul>
					
		</section>
    </>
  );
}
  
  export default MenuRecursos;