import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';

const Navbar = () => {
    const { currentUser, logout } = useContext(UserContext);

    return (
        <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
            <div className="container-fluid">
                <Link to={currentUser ? 'home' : '/'} className={`navbar-brand ${styles.navbarBrand}`}>
                    Lina Maria Escalante
                </Link>
                
                <button 
                    className={`navbar-toggler ${styles.navbarToggler}`} 
                    type="button" 
                    data-bs-toggle="offcanvas" 
                    data-bs-target="#offcanvasNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div 
                    className="offcanvas offcanvas-end" 
                    id="offcanvasNavbar"
                >
                    <div className={`offcanvas-header ${styles.offcanvasHeader}`}>
                        <h5 className="offcanvas-title">Menú</h5>
                        <button 
                            type="button" 
                            className="btn-close" 
                            data-bs-dismiss="offcanvas"
                        ></button>
                    </div>
                    
                    <div className="offcanvas-body">
                        {currentUser ? (
                            <div className="d-flex flex-grow-1 justify-content-center justify-content-md-end">
                                <ul className="navbar-nav align-items-center">
                                    <li className="nav-item">
                                        <Link className={`nav-link ${styles.navLink}`} to="/home">Home</Link>
                                    </li>
                                    
                                    <li className="nav-item dropdown">
                                        <a 
                                            className={`nav-link ${styles.navLink} dropdown-toggle`} 
                                            data-bs-toggle="dropdown"
                                        >
                                            Citas
                                        </a>
                                        <ul className={`dropdown-menu ${styles.dropdownMenu}`}>
                                            <li>
                                                <Link className={`dropdown-item ${styles.dropdownItem}`} to="/appointments">
                                                    Tus Citas
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className={`dropdown-item ${styles.dropdownItem}`} to="/newappointment">
                                                    Agendar Cita
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link className={`nav-link ${styles.navLink}`} to="/profile">Perfil</Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <button 
                                            onClick={logout} 
                                            className={`nav-link ${styles.logoutButton}`}
                                        >
                                            Cerrar Sesión
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <div className="d-flex flex-grow-1 justify-content-center justify-content-md-end">
                                <ul className="navbar-nav align-items-center">
                                    <li className="nav-item">
                                        <Link className={`nav-link ${styles.navLink}`} to="/login">Ingresar</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${styles.navLink}`} to="/register">Registrarse</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;