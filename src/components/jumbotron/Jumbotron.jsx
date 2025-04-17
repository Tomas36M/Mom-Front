import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Jumbotron = () => {
    const { currentUser } = useContext(UserContext);
    return (
        <div>
            <div className="container my-3">
                <div className="p-2 text-center rounded-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="mt-3 bi bi-brilliance" viewBox="0 0 16 16">
                        <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16M1 8a7 7 0 0 0 7 7 3.5 3.5 0 1 0 0-7 3.5 3.5 0 1 1 0-7 7 7 0 0 0-7 7" />
                    </svg>
                    <h1 className="text-body-emphasis mt-3">{`¡Hola, ${currentUser.user.name || 'Usuario'}!`}</h1>
                    <p className="col-lg-8 mx-auto fs-5 text-muted mt-3">
                        {`${currentUser.user.name || 'Usuario'}`} nos alegra verte de nuevo. Explora nuestras novedades y gestiona tus citas fácilmente. Si necesitas ayuda, estamos aquí para asistirte. ¡Disfruta de tu experiencia!
                    </p>
                    <div className="d-inline-flex gap-2 mb-3">
                        <Link to="/newappointment" className="d-inline-flex align-items-center btn btn-warning btn-lg px-4 rounded-pill" type="button">
                            Agendar Cita
                        </Link>
                        <Link to="/jewelry" className="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
                            Explorar Joyería
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron
