import styles from './LandingCard.module.css';
import { Link } from 'react-router-dom';
const LandingCard = () => {
    return (
        <div className={`container ${styles.cardContainer}`}>
            <div className="row g-4">
                {/* Tarjeta 1 */}
                <div className="col-lg-4">
                    <div className={styles.cardWrapper}>
                        <div className={styles.imageContainer}>
                            <img 
                                src="https://res.cloudinary.com/dge1sssip/image/upload/v1738741576/cngsuqtkcejr7awnznd8.jpg"
                                alt="Lina Maria - Jewelry Designer" 
                                className={styles.cardImage}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Lina Maria Escalante</h2>
                            <div className={styles.cardText}>
                                <p>Diseñadora especializada en joyería con más de 40 años de experiencia, creando piezas que reflejan elegancia y sofisticación.</p>
                            </div>
                            <Link className={`btn btn-warning`} to="/about-lina">Solicitar Turno</Link>
                        </div>
                    </div>
                </div>

                {/* Tarjeta 2 */}
                <div className="col-lg-4">
                    <div className={styles.cardWrapper}>
                        <div className={styles.imageContainer}>
                            <img 
                                src="https://res.cloudinary.com/dge1sssip/image/upload/v1738743500/flzpebgmfhfx41uqbo7a.jpg"
                                alt="Gestor de Turnos" 
                                className={styles.cardImage}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Gestor de Turnos</h2>
                            <div className={styles.cardText}>
                                <p>Gestionamos tus solicitudes para productos personalizados con un sistema de turnos que asegura atención exclusiva y a medida.</p>
                            </div>
                            <Link className={`btn btn-warning`} to="/login">Solicitar Turno</Link>
                        </div>
                    </div>
                </div>

                {/* Tarjeta 3 */}
                <div className="col-lg-4">
                    <div className={styles.cardWrapper}>
                        <div className={styles.imageContainer}>
                            <img 
                                src="https://res.cloudinary.com/dge1sssip/image/upload/v1738742573/pxh704ll2zpcgpjofxjt.jpg"
                                alt="Productos Únicos" 
                                className={styles.cardImage}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Productos Únicos</h2>
                            <div className={styles.cardText}>
                                <p>Descubre piezas exclusivas diseñadas por Lina, cada una con un carácter único y estilo distintivo que las hace especiales.</p>
                            </div>
                            <Link className={`btn btn-warning`} to="/products">Solicitar Turno</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingCard;