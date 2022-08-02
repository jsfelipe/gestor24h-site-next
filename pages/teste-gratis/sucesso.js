import React, { useEffect, useState } from 'react';
import Link from "next/link";




function Sucesso() {


  return (
    <>


      <div className="page-content page-teste d-flex align-items-center">
      

        <section className="teste-gratis">

                <div className="col-12 d-flex justify-content-center">
                    <div className="sucesso d-flex align-items-center justify-content-center flex-wrap col-md-5 p-5 text-center">
                      {/* <img src="../images/icon/check.png"  /> */}
                      <h2 className="text-white">Obrigado, seu Cadastro foi realizado com sucesso!</h2>
                      <h5 className="text-primary">Aguarde que entraremos em contato o mais breve possível para liberar seu período de teste.</h5>
                      
                    </div>
                </div>

        </section>
       
      </div>

    </>
  );
}

export default Sucesso;
