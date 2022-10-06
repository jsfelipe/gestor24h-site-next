import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/header";
import {Tabs, Tab} from 'react-bootstrap';
import Image from 'next/image';

import BoxOrcamento from "../element/box-orcamento";
import BoxFinanceiro from "../element/box-financeiro";
import BoxRelatorios from "../element/box-relatorios";

function OsRecursos() {

    return (
      <>
        <section id="box-recursos" className="pt-5">
			<div className="container">
				<div className="row align-items-center">
					
					<Tabs defaultActiveKey="Orcamentos" id="uncontrolled-tab-example" className="pb-3 col-md-12 justify-content-center">

                        <Tab eventKey="Orcamentos" title="Orçamentos" className="align-items-center">
							              <BoxOrcamento />
                        </Tab>
                        <Tab eventKey="Financeiro" title="Financeiro" className="align-items-center">
                            <BoxFinanceiro />
                        </Tab>
                        <Tab eventKey="Relatorios" title="Relatórios" className="align-items-center">
							              <BoxRelatorios />
                        </Tab>
                    </Tabs>		
					
				</div>

			</div>
		</section>
    </>
  );
}
  
  export default OsRecursos;