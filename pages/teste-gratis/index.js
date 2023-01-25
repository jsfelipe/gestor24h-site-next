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
 // baseURL: 'https://apijobbadmin.sistemajobb.com.br/api',
  baseURL: 'https://gestor24hadmin.gestor24h.com.br/',
  timeout: 30000,
});

const api_meets = axios.create({
  baseURL: 'https://acesso.meets.com.br/',
  timeout: 10000,
});


function Index() {
  const router = useRouter();


  const [state, setState] = useState({
    nome: null,
    contato: null,
    email: null,
    telefone: null,
    uf_nfe: null,
    tipo_jobb: '24',
    tipo_cliente: 'T',
    // data_cadastro today date format YYYY-MM-DD HH:MM:SS
    data_cadastro: new Date().toISOString().slice(0, 19).replace('T', ' '),
    // data_vencimento today date format YYYY-MM-DD plus 16 days
    data_vencimento: new Date(new Date().setDate(new Date().getDate() + 16)).toISOString().split('T')[0],
    data_prorrogacao: new Date(new Date().setDate(new Date().getDate() + 16)).toISOString().split('T')[0],
    
  });

  const [msg,setMsg] = useState('');

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
    setMsg('')

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

    //const response = await api.post('testegratis', state);

    const formData = new FormData();

    formData.append('nome',state.nome)
    formData.append('contato',state.contato)
    formData.append('email',state.email)
    formData.append('telefone',state.telefone)
    formData.append('uf_nfe',state.uf_nfe)
    //formData.append('tipo_jobb',state.tipo_jobb)
    formData.append('subdominio',state.subdominio)

    //const response = await api.post('/access/cadastro-cliente', formData);
    //let id_cliente = response.data.id_cliente

    // if(response.data.code == 0){
    //   setMsg(response.data.msg)
    //   setLoading(false)
    //   return
    // }

    
    formData.append('login',state.login)
    formData.append('senha',state.senha)
    //formData.append('id_cliente',id_cliente)

    const responseData = await api.post('/access/cadastro-via-site', formData); 

    //console.log({responseData});

    //const status = responseData.data.code == 1 ? true : false
    const status = responseData.status == 200 ? true : false

    if(status){
 
      try {
        const oportunidade = await api_meets.post('oportunidade/salvar', {
          id_origem: '125597',
          id_status: "[\"79927\",\"77920\"]",
          tipo_pessoa:'PJ',
          usar_distribuicao: 1,
          id_equipe: 1790,
          razao_cliente: state.nome,
          fantasia: state.contato,
          celular_cliente: state.telefone,
          email_cliente:state.email
        }, {
          headers: {
            'Authorization': 'DE68BB5A-3010-9827-9ED3-E219B894F40F' 
          }
        })
        console.log({oportunidade});
        
      } catch (error) {
        console.log("Erro na integração com o Meets");
      }
            
      router.push('/teste-gratis/sucesso')


    } else {   
      setLoading(false)
      responseData.data.code  == 0 ? setMsg(responseData.data.msg) : ''
      
      if(response.data.code === 'E101'){
        setState({ ...state, showErrorEmailExist: true });
        return false
      }
    }
    setLoading(false);
   
  }

  


  return (
    <>
     <Head>
    <title>Teste Grátis | Gestor24h</title>
    </Head>

      <div className="page-content page-teste d-flex align-items-center justify-content-center">

        <section className="teste-gratis">

                <div id='teste' className="col-12 d-flex justify-content-center">
                    <div className="d-flex align-content-between flex-wrap col-md-4 chamada-teste text-white justify-content-end text-right" >
                      <img src="images/logo/logo-gestor-branco.svg" alt="" />
                      <h2 className="text-white">Vamos começar seu período de testes!</h2>
                      <h5 className="text-white">Aproveite!</h5>
                    </div>
                    <div className="justify-content-between col-md-4 formulario-teste" > 
                      <h6>Dados de Cadastro:</h6>
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
                              <h6>Crie sua conta:</h6>
                              <div className="input-group">
                                <input name="subdominio" id="subdominio" onChange={handleInputChange} required type="text" className="form-control" placeholder="Dominio. Ex: nomeempresa" />                        
                              </div>
                              {
                                msg && 
                                <small><strong >Este dominío já está cadastrado para outra conta.</strong><br/></small> 
                              }                              
                            </div>

                            <div className="w-100">
                              <div className="input-group">
                                <input name="login" id="login" onChange={handleInputChange} required type="text" className="form-control" placeholder="Login. Ex: admin" />
                              </div>
                            </div>

                             <div className="w-100">
                              <div className="input-group">
                                <input name="senha" id="senha" onChange={handleInputChange} required type="password" className="form-control" placeholder="Senha" />
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
