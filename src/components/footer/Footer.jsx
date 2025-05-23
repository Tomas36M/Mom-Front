import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={`${styles.footer} mt-auto py-4`}>
            <div className="container">
                <div className="row g-3 text-center text-md-start">
                    <div className="col-md-6 order-md-2">
                        <div className={`${styles.linksWrapper} d-flex flex-column flex-md-row gap-3 justify-content-md-end`}>
                            <Link className={styles.link} to="/contact">Contacto</Link>                     
                            <a href="https://www.instagram.com/linaescala/" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a>
                            <Link to="/about-lina" className={styles.link}>About</Link>
                            <a href="/login" className={styles.link}>Login</a>
                        </div>
                    </div>
                    <div className="col-md-6 order-md-1">
                        <div className={styles.contactInfo}>
                            <span className="text-muted">¿Quieres una página web como esta? </span>
                            <a href="mailto:tomasmunevar36@gmail.com" className={styles.emailLink}>
                                Contáctame
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col text-center text-muted">
                        <small>© {new Date().getFullYear()} Todos los derechos reservados</small>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;