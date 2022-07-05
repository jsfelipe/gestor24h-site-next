import { useState } from "react";
import Image from 'next/image';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/card';

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
          lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor 
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
        lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>lorem ipsum dolor lorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2">
        lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>lorem ipsum dolor lorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="3">
        lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <Card.Body>lorem ipsum dolor lorem ipsum lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor Hello! I'm another body</Card.Body>
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