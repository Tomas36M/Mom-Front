import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import './ErrorPage.css';

const ErrorPage = () => {
    const { currentUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);
    const [isRedirecting, setIsRedirecting] = useState(false);

    useEffect(() => {
        if (isRedirecting) return;

        const countdownInterval = setInterval(() => {
            setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        const redirectTimer = setTimeout(() => {
            setIsRedirecting(true);
            clearInterval(countdownInterval);
            navigate(currentUser ? '/home' : '/', { replace: true });
        }, 5000);

        return () => {
            clearInterval(countdownInterval);
            clearTimeout(redirectTimer);
        };
    }, [navigate, currentUser, isRedirecting]);

    const handleManualRedirect = () => {
        navigate(currentUser ? '/home' : '/', { replace: true });
    };

    return (
        <div className="error-page">
            <div className="error-icon">⚠️</div>
            <h1>Página No Encontrada</h1>
            <p>Lo sentimos, la página que buscas no existe o está en desarrollo.</p>
            <p>Puede que la URL sea incorrecta o que la página haya sido movida.</p>
            
            <div className="countdown-message">
                Redirigiendo a {currentUser ? "inicio" : "la página principal"} en {countdown} segundos...
            </div>
            
            <button 
                onClick={handleManualRedirect}
                className="error-redirect-button"
            >
                Volver ahora
            </button>
        </div>
    );
};

export default ErrorPage;