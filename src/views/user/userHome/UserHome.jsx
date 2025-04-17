import styles from "./UserHome.module.css";
import { Link } from "react-router-dom";
import Jumbotron from "../../../components/jumbotron/Jumbotron";

const UserHome = () => {

    return (
        <div className={`container ${styles["cover-container"]} d-flex flex-column align-items-center p-1`}>
            <Jumbotron />
            <main className="flex-grow-1 w-100">
                <div className="row">
                    <div className="col-md-4 mb-4 d-flex align-items-stretch">
                        <div className={`card shadow-sm flex-fill ${styles.card}`}>
                            <img height={`250px`} src="https://static.vecteezy.com/system/resources/previews/007/883/612/non_2x/handmade-copper-wire-working-tools-on-the-table-with-accessoires-handicraft-people-art-concept-photo.jpg" className="card-img-top fixed-height" alt="Citas" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Gestiona tus Citas</h5>
                                <p className="card-text">Agenda una visita para consultas, reparaciones o estimaciones de precio.</p>
                                <Link to="/appointments" className="btn btn-warning mt-auto">Crear Cita</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4 d-flex align-items-stretch">
                        <div className={`card shadow-sm flex-fill ${styles.card}`}>
                            <img height={`250px`} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA2_NS_-QIR1PUCC8ZsSJSPqGXvg_YT5Zgeg&s" className="card-img-top fixed-height" alt="Colección de Joyería" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Explora Nuestra Joyería</h5>
                                <p className="card-text">Descubre nuestra colección de anillos, pulseras, collares y más.</p>
                                <Link to="/jewelry" className="btn btn-warning mt-auto">Ver Colección</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4 d-flex align-items-stretch">
                        <div className={`card shadow-sm flex-fill ${styles.card}`}>
                            <img height={`250px`} src="https://forniturasdelarosa.com/modules/ph_simpleblog/covers/52.jpg" className="card-img-top fixed-height" alt="Cotización o Reparación" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Solicita Cotización o Reparación</h5>
                                <p className="card-text">¿Necesitas una reparación o una estimación de precio para una pieza personalizada?</p>
                                <Link to="/services" className="btn btn-warning mt-auto">Comenzar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default UserHome;