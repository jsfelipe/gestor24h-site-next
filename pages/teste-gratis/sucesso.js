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
                      <h2 className="text-white">Seu Cadastro foi Realizado com Sucesso!</h2>
                      <h5 className="text-primary">Verifique seu e-mail com o login e senha e clique no link abaixo para realizar seu login e começar a usar o Gestor24h.</h5>
                      <a href="https://appv2.gestor24h.com.br/" className="btn btn-primary border-0 mt-3">Faça seu login</a>
                      
                    </div>
                </div>

        </section>
       
      </div>

    </>
  );
}

export default Sucesso;
