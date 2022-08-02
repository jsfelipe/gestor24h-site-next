import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import axios from 'axios';
import Head from "next/head";
import ReactLoading from 'react-loading';
import { Exception } from 'sass';

// url: 'http://jobbadmin.sistemajobb.com.br/access/cadastro-via-site-cliente/',
// https://apijobbadmin.sistemajobb.com.br/api
//           type: 'POST',
const api = axios.create({
  baseURL: 'https://apijobbadmin.sistemajobb.com.br/api',
  timeout: 30000,
});


function Index() {
  const router = useRouter();


  const [state, setState] = useState({
    nome: null,
    contato: null,
    email: null,
    telefone: null,
    uf_nfe: null,
  });

  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleInputChangeTelefone = (e) => {
    const { name, value } = e.target;

    // place a phone mask on the input. Brazilian phone mask
    const phoneMask = value.replace(/\D/g, '').match(/(\d{2})(\d{5})(\d{4})/);
    if (phoneMask) {
      setState({ ...state, [name]: `${phoneMask[1]}${phoneMask[2]}${phoneMask[3]}` });
    }
  }


 

  async function saveRegister(event) {

    event.preventDefault();
    
    setLoading(true)

    // if(state.password !== state.confirm_password){
    //   console.log('Senha está diferente');
    //   setState({ ...state, showErrorPassword: true });
    //   setLoading(false)
    //   return false
    // } else {
    //   setLoading(true)
    //   setState({ ...state, showErrorPassword: false });
    // } 
    
    //setLoading(true);
    const response = await api.post('testegratis', state);

    console.log(response.data);

    const status = response.data.status ? response.data.status : false

    if(status){

      console.log("Cadastro sucesso");
      

      router.push('/teste-gratis/sucesso')
    } else {
      setLoading(false)
      if(response.data.code === 'E101'){
        setState({ ...state, showErrorEmailExist: true });
        return false
      }
    }
    //setLoading(false);
   
  }

  


  return (
    <>
     <Head>
    <title>Teste Grátis | Gestor24h CRM</title>
    </Head>

      <div className="page-content page-teste d-flex align-items-center justify-content-center">

        <section className="teste-gratis">

                <div className="col-12 d-flex justify-content-center">
                    <div className="d-flex align-content-between flex-wrap col-md-4 p-5 chamada-teste text-white justify-content-end text-right" >
                      {/* <img src="images/logo/logo-meets.svg" alt="" /> */}
                      <h2 className="text-white">Vamos começar seu período de testes!</h2>
                      <h5 className="text-white">Aproveite!</h5>
                    </div>
                    <div className="justify-content-between col-md-4 p-5 formulario-teste" > 
                      <div className="">
                        <form className="dlab-form dzForm" onSubmit={saveRegister}>
                          <div className=""></div>
                          <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                            <div className="w-100">
                              <div className="input-group">
                                <input name="contato" id="contato" onChange={handleInputChange} required type="text" className="form-control" placeholder="Nome" />
                              </div>
                            </div>
                            <div className="w-100">
                              <div className="input-group">
                                <input name="nome" id="nome" onChange={handleInputChange} required type="text" className="form-control" placeholder="Empresa" />
                              </div>
                            </div>
                            <div className="w-100">
                              <div className="input-group">
                                <input name="email" id="email" onChange={handleInputChange} title="Preencha o e-mail corretamente." required type="email" className="form-control" placeholder="E-mail" />
                              </div>
                            </div>
                            
                            <div className="w-100">
                              <div className="input-group">
                                <input name="telefone" id="telefone" onChange={handleInputChangeTelefone} required type="text" className="form-control" placeholder="Celular" />
                              </div>
                            </div>
                            <div className="w-100">
                              <div className="input-group">
                                {/* select with all states from brazil */}
                                <select name="uf_nfe" id="uf_nfe" onChange={handleInputChange} required className="form-control">
                                  <option value="">Estado</option>
                                  <option value="AC">Acre</option>
                                  <option value="AL">Alagoas</option>
                                  <option value="AP">Amapá</option>
                                  <option value="AM">Amazonas</option>
                                  <option value="BA">Bahia</option>
                                  <option value="CE">Ceará</option>
                                  <option value="DF">Distrito Federal</option>
                                  <option value="ES">Espírito Santo</option>
                                  <option value="GO">Goiás</option>
                                  <option value="MA">Maranhão</option>
                                  <option value="MT">Mato Grosso</option>
                                  <option value="MS">Mato Grosso do Sul</option>
                                  <option value="MG">Minas Gerais</option>
                                  <option value="PA">Pará</option>
                                  <option value="PB">Paraíba</option>
                                  <option value="PR">Paraná</option>
                                  <option value="PE">Pernambuco</option>
                                  <option value="PI">Piauí</option>
                                  <option value="RJ">Rio de Janeiro</option>
                                  <option value="RN">Rio Grande do Norte</option>
                                  <option value="RS">Rio Grande do Sul</option>
                                  <option value="RO">Rondônia</option>
                                  <option value="RR">Roraima</option>
                                  <option value="SC">Santa Catarina</option>
                                  <option value="SP">São Paulo</option>
                                  <option value="SE">Sergipe</option>
                                  <option value="TO">Tocantins</option>
                                </select>


                              </div>
                            </div>
                            
                           
                            <div className="w-100">
                              <button name="submit" type="submit" value="Submit"className="btn btn-primary">
                                Começar
                              </button>
                            </div>

                            <div className={loading === true ? 'show' : 'd-none'}>
                               <ReactLoading type='bubbles' color='#000' height='34px' width='34px' />
                            </div>
                           
                        </form>
                      </div>
                    </div>
                </div>

        </section>
       
      </div>

    </>
  );
}

export default Index;
