import React, { useEffect, useState } from 'react';
import Link from "next/link";




function Sucesso() {


  return (
    <>


      <div className="page-content page-teste d-flex align-items-center">
      <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5GJQK9J"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>

        <section className="teste-gratis">

                <div className="col-12 d-flex justify-content-center">
                    <div className="sucesso d-flex align-items-center justify-content-center flex-wrap col-md-5 p-5 text-center">
                      <img src="../images/icon/check.png"  />
                      <h2 className="text-white">Seu Cadastro foi Realizado com Sucesso!</h2>
                      <h5 className="text-primary">Clique no link abaixo para realizar seu login e começar a usar o Meets CRM.</h5>
                      <a href="https://acesso.meets.com.br/auth" className="btn btn-primary border-0 mt-3">Meu primeiro login</a>
                    </div>
                </div>

        </section>
       
      </div>

    </>
  );
}

export default Sucesso;
