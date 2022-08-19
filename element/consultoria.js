import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/header";


function Consultoria() {
    return (
      <>
        <section className="content-inner-2 pb-5 ">
			<div className="container">
				<div className="row justify-content-center align-items-center">

					
					<div className="d-flex col-12 col-md-6">
						<div className="mr-4 mb-mob">
							<img src="images/banner/Ligia.jpg" alt="" width={400} />
						</div>
						<div>
							<h2 className="title center-mob">Mentoria</h2>
							<h6 className="sub-title">Precisa de um maior acompanhamento ou uma mentoria?</h6>
							<p>Se sua empresa precisa de um acompanhamento financeiro estratégico, nossa parceira e consultora poderá realizar acompanhamentos e mentorias moldadas para sua empresa.</p>
							<a href="https://www.instagram.com/ligiarodriguez.lrf/" target="_blank" data-aos="fade-up" data-aos-duration="300" className="btn btn-interesse btn-primary btn-round center-mob">Tenho interesse</a>
						</div>
					</div>
					<div className="d-flex col-12 col-md-6">
						<div className="mr-4 mb-mob">
							<img src="images/logo/dinheiro-com-alma.jpg" alt="" width={400} />
						</div>
						<div>
							<h2 className="title center-mob">Parceria</h2>
							<h6 className="sub-title">Dinheiro com alma</h6>
							<p>Deseja terceirizar a gestão financeira da sua empresa? A dinheiro com alma é parceira do gestor24h e disponhe de uma equipe qualificada e pronta para fazer uma excelente gestão.</p>
							<a href="https://www.instagram.com/dinheirocomalma/?igshid=YmMyMTA2M2Y%3D" target="_blank" data-aos="fade-up" data-aos-duration="300" className="btn btn-interesse btn-primary btn-round center-mob">Tenho interesse</a>
						</div>
					</div>
				</div>
			</div>
						
		</section>
    </>
  );
}
  
  export default Consultoria;