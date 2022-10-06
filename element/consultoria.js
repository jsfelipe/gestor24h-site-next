import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/header";


function Consultoria() {
    return (
      <>
        <section className="content-inner-2 pb-5 ">
			<div className="container">
				<div className="row justify-content-center align-items-center">

					<div className="col-6 col-md-2 mr-4 mb-mob">
						<img src="images/banner/Ligia.jpg" alt="" width={400} />
					</div>
					<div className="col-12 col-md-7">
						<h2 className="title">Mentoria</h2>
						<h6 className="sub-title">Precisa de um maior acompanhamento ou uma mentoria?</h6>
						<p>Se sua empresa precisa de um acompanhamento financeiro estratégico, nossa parceira e consultora poderá realizar acompanhamentos e mentorias moldadas para sua empresa.</p>
						<a href="https://www.instagram.com/ligiarodriguez.lrf/" target="_blank" data-aos="fade-up" data-aos-duration="300" className="btn btn-primary btn-round center-mob">Tenho interesse</a>
					</div>

				</div>
			</div>
						
		</section>
    </>
  );
}
  
  export default Consultoria;