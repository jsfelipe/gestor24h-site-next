import { useState } from "react";
import Image from 'next/image';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

function PerguntasFrequentes() {
    const [open, setOpen] = useState("p2")
    return (
      <>



 {/* <!-- Team --> */}
 <section id="box-perguntas" className="content m-3">
 <div className="container">
        
          <div className="section-head style-3 text-center pt-5">
            <h2 className="title">Perguntas Frequentes</h2>
          </div>

   <div className="row pb-5">
   

    
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
        O Gestor24h possui algum tipo de limite?

        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Não existe limite de cadastros ou de qualquer tipo de informação do sistema. Apenas é cobrado o valor por usuário.</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
        O Gestor24h é multiempresa?

        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>No Gestor24h você pode adicionar quantas empresas você precisar sem custo adicional. E os relatórios podem ser consolidados ou separados.</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2">
        Existe treinamento para o Gestor24h?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>Sim. Nós acreditamos que para um bom funcionamento do sistema e da empresa é necessário que os usuários tenham um acompanhamento e treinamento nas principais funções do sistema fazendo com que se consiga atingir os resultados esperados.</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="3">
        Existe suporte técnico?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <Card.Body>Sim! Nossa equipe está disponível para tirar dúvidas online no horário comercial através do nosso chat ou whatsapp. Também utilizamos as video chamadas para maior eficiência na comunicação.</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="4">
        E se eu não quiser mais usar o sistema? Como ficam meus dados?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="4">
          <Card.Body> Seus dados são armazenados em um banco de dados seguro e fazemos backups diariamente. Caso você não queira mais utilizar o sistema, poderá nos solicitar todo o backup que será entregue no formato de arquivos excel junto com um link para download dos arquivos anexados.</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  
   </div>


 </div>
     
 </section>
 </>
    )
  }
  
  export default PerguntasFrequentes;