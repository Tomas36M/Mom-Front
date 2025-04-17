import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { showSuccessAlert, showErrorAlert } from '../helpers/alertService';
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const getUserSession = () => {
    const session = localStorage.getItem('userSession');
    return session ? JSON.parse(session) : null;
};

export const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(() => getUserSession());
    const [appointments, setAppointments] = useState([]);

    const setUserSession = (user) => {
        if (user) {
            localStorage.setItem('userSession', JSON.stringify(user));
        } else {
            localStorage.removeItem('userSession');
        }
    };

    const login = async (username, password) => {
        try {
            const response = await axios.post('https://mom-webpage.onrender.com/users/login', { username, password }, {
                headers: {
                    'Content-Type': 'application/json',
                    'token': 'auth',
                },
            });
            const userData = response.data;
            setCurrentUser(userData);
            setUserSession(userData);
            showSuccessAlert('Inicio de sesion exitoso', 'Bienvenido!');
            navigate('/home');
        } catch (error) {
            showErrorAlert(error.response.data.message || 'Error iniciando sesion', 'Por favor intente nuevamente');
            console.log(error)
        }
    };

    const logout = () => {
        setCurrentUser(null);
        setUserSession(null);
        showSuccessAlert('Cierre de sesion exitoso', 'Que vuelvas pronto!');
        navigate('/login');
    };

    const getUserAppointments = async () => {
        if (!currentUser?.user?.id) return;
        try {
            const { data } = await axios.get(`https://mom-webpage.onrender.com/users/${currentUser.user.id}`);
            setAppointments(data.appointments);
        } catch (error) {
            console.error('Error fetching appointments:', error);
        }
    };

    const createAppointment = async (appointmentData) => {
        if (!currentUser?.user?.id) {
            showErrorAlert('Hubo un error en la autenticacion, por favor inicie sesion nuevamente');
            return;
        }

        try {
            await axios.post(`https://mom-webpage.onrender.com/appointments/${currentUser.user.id}`, appointmentData);
            showSuccessAlert('Turno creado!', 'El turno fue creado con exito');
            getUserAppointments();
            navigate('/appointments');
        } catch (error) {
            showErrorAlert(error.response.data.message || 'Error creando turno', 'Por favor intente nuevamente');
        }
    };

    const cancelAppointment = async (appointmentId) => {
        try {
            await axios.put(`https://mom-webpage.onrender.com/appointments/${appointmentId}`, { appointmentId: currentUser.user.id });
            setAppointments(prev => prev.map(appt => appt.id === appointmentId ? { ...appt, status: "cancelled" } : appt));
        } catch (error) {
            console.error('Error cancelling appointment:', error);
        }
    };

    const deleteAppointment = async (appointmentId) => {
        try {
            await axios.delete(`https://mom-webpage.onrender.com/appointments/${appointmentId}`);
            setAppointments(prev => prev.map(appt => appt.id === appointmentId ? { ...appt, status: "cancelled" } : appt));
            getUserAppointments();
        } catch (error) {
            console.error('Error cancelling appointment:', error);
        }
    };

    useEffect(() => {
        getUserAppointments();
    }, [currentUser]);

    const values = {
        currentUser,
        login,
        logout,
        appointments,
        createAppointment,
        cancelAppointment,
        deleteAppointment,
        getUserAppointments
    };

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired
};