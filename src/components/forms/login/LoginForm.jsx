import { useState, useContext } from 'react';
import styles from './LoginForm.module.css';
import { validateUsername, validatePassword } from '../../../helpers/userValidations';
import { UserContext } from '../../../context/UserContext';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ username: '', password: '' });

    const { login } = useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newErrors = { username: '', password: '' };

        if (!username) {
            newErrors.username = 'Username is required';
        } else if (!validateUsername(username)) {
            newErrors.username = 'Invalid username';
        }

        if (!password) {
            newErrors.password = 'Password is required';
        } else if (!validatePassword(password)) {
            newErrors.password = 'Password must contain at least one uppercase letter, one number, and one special character';
        }

        setErrors(newErrors);

        if (!newErrors.username && !newErrors.password) {
            await login(username, password)
        }
    };

    return (
        <div>
            <form className={`mb-4 ${styles.loginForm}`} onSubmit={handleSubmit}>
                <h2 className="mb-4">Inicia Sesión</h2>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Usuario</label>
                    <input
                        type="text"
                        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                        id="username"
                        placeholder="Escribe tu nombre usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        name="username"
                    />
                    {errors.username && (
                        <div className="invalid-feedback">{errors.username}</div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        id="password"
                        placeholder="Escribe tu contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        style={{ backgroundColor: errors.password ? '#f8d7da' : '' }}
                    />
                    {errors.password && (
                        <div className="invalid-feedback">{errors.password}</div>
                    )}
                </div>
                <button type="submit" className="btn btn-warning">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default LoginForm;