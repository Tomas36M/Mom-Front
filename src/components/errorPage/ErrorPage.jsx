import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import './ErrorPage.css'; // Importa los estilos

const ErrorPage = () => {
    const { currentUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        setTimeout(() => {
            clearInterval(countdownInterval);
            navigate(currentUser ? '/home' : '/');
        }, 5000);

        return () => clearInterval(countdownInterval);
    }, [navigate, currentUser]);

    return (
        <div className="error-page">
            <div className="error-icon">🚧</div>
            <h1>Page Not Found</h1>
            <p>The page you are looking for does not exist or is under development.</p>
            <p>Redirecting to {currentUser ? "home" : "main"} page in {countdown} seconds...</p>
        </div>
    );
}

export default ErrorPage;