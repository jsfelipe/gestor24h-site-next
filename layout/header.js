import Link from 'next/link';
import { useEffect, useState } from "react";
import * as Unicons from '@iconscout/react-unicons';
import useScrollPosition from "use-scroll-position";
function Header() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");
    const [header, setHeader] = useState("fixed");
    const [header_, setHeader_] = useState();
    let scrollPosition = useScrollPosition();

    useEffect(() => {
        
        setHeader_(document.getElementsByClassName("main-bar-wraper"));
      }, []);

      const chageHeader = (value) => {
        setHeader(value);
        if (value === "fixed") {
          header_[0].classList.add("sticky-header");
          header_[0].classList.remove("sticky-no");
        } else {
          header_[0].classList.add("sticky-no");
          header_[0].classList.remove("sticky-header");
          header_[0].classList.remove("is-fixed");
        }
      };

      
    header === "fixed" && scrollPosition > 10
    ? header_ && header_[0].classList.add("is-fixed")
    : header_ && header_[0].classList.remove("is-fixed");
  
    return (
        <>

            {/* <div className="breve">
            <p><Unicons.UilInstagram /> Aguarde, em breve o Instagram estará integrado ao Gestor24h.</p>
            </div> */}

            <header className="site-header mo-left header-transparent">

                <div className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar clearfix ">
                        <div className="container clearfix">
                            {/* <!-- Website Logo --> */}
                            <div className="logo-header mostion logo-dark">
                                <Link href="/">
                                    <a>
                                        <img className="custom-logo-white" src="../images/logo/logo-gestor.svg" alt="" />
                                        <img className="custom-logo" src="../images/logo/logo-gestor-verde.svg" alt="" />
                                    </a>
                                </Link>
                            </div>
                            {/* <!-- Nav Toggle Button --> */}
                            <button
                                className={`navbar-toggler collapsed navicon justify-content-end ${
                                    show ? "open" : ""
                                }`}
                                onClick={() => setShow(!show)}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            {/* <!-- Extra Nav --> */}
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <Link href="/teste-gratis/" target="_blank">
                                        <a className="btn btn-primary rounded-xl" target="_blank" rel="noreferrer">Teste Grátis</a>
                                    </Link>
                                    <Link href="https://acesso.meets.com.br" >
                                        <a className="btn btn-login rounded-xl" target="_blank" rel="noreferrer">Login</a>
                                    </Link>
                                </div>
                            </div>
                            <div
                                className={`header-nav navbar-collapse collapse justify-content-end ${
                                    show ? "show" : ""
                                }`}
                                id="navbarNavDropdown"
                            >
                                <div className="logo-header">
                                    <Link href="/index">
                                        <a>
                                            <img src="images/logo/logo-gestor.svg" alt="" />
                                        </a>
                                    </Link>
                                </div>

                                <ul className="nav navbar-nav navbar">                    
									<li><Link href="/recursos/comunicacao/"><a>Recursos</a></Link></li>
                                    <li><Link href="/solucoes"><a>Soluções</a></Link></li>
                                    <li><Link href="/planos"><a>Planos</a></Link></li>
                                    <li><Link href="https://ajuda.meets.com.br" ><a target="_blank" rel="noreferrer" >Ajuda</a></Link></li>
                                </ul>
                                 <div className="dlab-social-icon">
                                    <div className="extra-cell d-flex flex-column">
                                        <Link href="teste-gratis">
                                            <a className="btn btn-primary rounded-xl shadow" target="_blank" rel="noreferrer" >Teste Grátis</a>
                                        </Link>
                                        <Link href="login">
                                            <a className="btn btn-login rounded-xl border border-white border-5" target="_blank" rel="noreferrer">Login</a>
                                        </Link>
                                    </div>
     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Main Header End --> */}
            </header>
        </>
    );
}

export default Header;
