import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import './ErrorPage.css';

const ErrorPage = () => {
    const { currentUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);
    const [isRedirecting, setIsRedirecting] = useState(false);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Crear partículas
        const newParticles = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            size: Math.random() * 5 + 3,
            left: Math.random() * 100,
            animationDuration: Math.random() * 10 + 5,
            delay: Math.random() * 5
        }));
        setParticles(newParticles);

        // Configurar redirección
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
            {/* Partículas de fondo */}
            {particles.map(particle => (
                <div 
                    key={particle.id}
                    className="particle"
                    style={{
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        left: `${particle.left}%`,
                        top: `-${particle.size}px`,
                        animation: `fall ${particle.animationDuration}s linear ${particle.delay}s infinite`
                    }}
                />
            ))}
            
            <div className="error-icon">🚨</div>
            <h1>404 - Lost in Space</h1>
            <p>Houston, we have a problem! The page youre looking for has disappeared into the digital void.</p>
            <div className="countdown">
                Launching to {currentUser ? "home" : "main"} base in {countdown}...
            </div>
            
            <button 
                onClick={handleManualRedirect}
                className="error-redirect-button"
            >
                Beam Me Up!
            </button>
        </div>
    );
};

export default ErrorPage;