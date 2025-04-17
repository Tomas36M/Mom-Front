import styles from './Carousel.module.css';
import { Link } from 'react-router-dom';

const Carousel = () => {
    return (
        <section className={`d-flex flex-column justify-content-center align-items-center> ${styles.cacarousel}`}>
            <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className={`carousel-item active ${styles["carousel-item"]}`}>
                        <img src='https://www.jewelrynloan.com/wp-content/uploads/2015/04/21766796334_8ab6aa4506_b.jpg' className="bd-placeholder-img" width="100%" height="100%" alt="Fine Jewelry by Lina Maria Escalante" />

                        <div className="container">
                            <div className={`carousel-caption text-start ${styles["carousel-caption"]}`}>
                                <h1>Descubre la Joyería Personalizada</h1>
                                <p>Conoce a Lina Maria Escalante, diseñadora especializada en joyería, y crea piezas únicas que reflejan tu estilo y personalidad.</p>
                                <p><Link className={`btn btn-lg btn-warning`} to="/login">Inicia Sesión</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className={`carousel-item ${styles["carousel-item"]}`}>
                        <img src='https://res.cloudinary.com/dge1sssip/image/upload/v1738744261/collar3_dl6iya.jpg' className="bd-placeholder-img" width="100%" height="100%" alt="Exclusive Jewelry Collection" />

                        <div className="container">
                            <div className={`carousel-caption ${styles["carousel-caption"]}`} >
                                <h1>Accede a Ventajas Exclusivas</h1>
                                <p>Regístrate ahora para desbloquear características exclusivas y mejorar tu experiencia en nuestra plataforma de joyería.</p>
                                <p><Link className={`btn btn-lg btn-warning`} to="/register">Regístrate</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className={`carousel-item ${styles["carousel-item"]}`}>
                        <img src='https://berwickjewellers.com.au/cdn/shop/files/Fishers_Jewellers_Ring_Stones_Supplied_Reset_4f1d76f4-21df-459e-8677-1700c4e88181.webp?v=1689077716&width=1500' className="bd-placeholder-img" width="100%" height="100%" alt="Jewelry Product Catalog" />

                        <div className="container">
                            <div className={`carousel-caption text-end ${styles["carousel-caption"]}`}>
                                <h1>Catálogo de Productos</h1>
                                <p>Descubre una exquisita colección de joyas diseñadas para cada ocasión.</p>
                                <p><Link className={`btn btn-lg btn-warning`} to="/catalog">Ver Catálogo</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
};

export default Carousel;