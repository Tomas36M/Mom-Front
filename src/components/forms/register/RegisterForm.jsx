import { useState } from 'react';
import axios from 'axios';
import styles from './RegisterForm.module.css';
import { validateFormData } from '../../../helpers/formValidator';
import { showSuccessAlert, showErrorAlert } from '../../../helpers/alertService';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        birthdate: '',
        nDni: '',
        password: '',
        active: true,
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newErrors = validateFormData(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                setIsSubmitting(true);
                const data = new FormData();
                for (const key in formData) {
                    data.append(key, formData[key]);
                }

                await axios.post('https://mom-webpage.onrender.com/users/register', data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                showSuccessAlert('Registered successfully', 'Welcome!');
                navigate('/login');
            } catch (error) {
                showErrorAlert('Registration failed', error.response?.data?.message || 'Error desconocido');
                console.error('Error:', error.response ? error.response.data : error.message);
            } finally {
                setIsSubmitting(false);
            }
        }
    }

    return (
        <div className='pb-4'>
            <form className={`mb-4 p-4 ${styles.registerForm}`} onSubmit={handleSubmit}>
                <h2 className="mb-4">Regístrate</h2>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input
                        type="text"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        id="name"
                        placeholder="Escribe tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        name="name"
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        placeholder="Escribe tu email"
                        value={formData.email}
                        onChange={handleChange}
                        name="email"
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Usuario</label>
                    <input
                        type="text"
                        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                        id="username"
                        placeholder="Escribe tu nombre de usuario"
                        value={formData.username}
                        onChange={handleChange}
                        name="username"
                    />
                    {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="birthdate" className="form-label">Fecha de nacimiento</label>
                    <input
                        type="date"
                        className={`form-control ${errors.birthdate ? 'is-invalid' : ''}`}
                        id="birthdate"
                        value={formData.birthdate}
                        onChange={handleChange}
                        name="birthdate"
                    />
                    {errors.birthdate && <div className="invalid-feedback">{errors.birthdate}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="nDni" className="form-label">Numero de identidad</label>
                    <input
                        type="text"
                        className={`form-control ${errors.nDni ? 'is-invalid' : ''}`}
                        id="nDni"
                        placeholder="Escribe tu numero de identidad"
                        value={formData.nDni}
                        onChange={handleChange}
                        name="nDni"
                    />
                    {errors.nDni && <div className="invalid-feedback">{errors.nDni}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        id="password"
                        placeholder="Escoge una contraseña"
                        value={formData.password}
                        onChange={handleChange}
                        name="password"
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <button
                    type="submit"
                    className="btn btn-warning"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <span
                                className="spinner-border spinner-border-sm"
                                role="status"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Cargando...</span>
                        </>
                    ) : (
                        'Regístrate'
                    )}
                </button>
            </form>
        </div>
    );
};
export default RegisterForm;