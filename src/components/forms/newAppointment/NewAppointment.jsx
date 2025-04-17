// Formulario.jsx
import { useState, useContext } from 'react';
import { validateForm } from '../../../helpers/appointmentsValidations';
import { UserContext } from '../../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import styles from './NewAppointment.module.css';

const Formulario = () => {

    const navigate = useNavigate();

    const { createAppointment } = useContext(UserContext);

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = async(e) => {
        e.preventDefault();
        const validationErrors = validateForm(date, time, description);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            try {
                setErrors({});
            await createAppointment({ date, time, description, status: 'active' });
            } catch (error) {
                console.log(error)
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`${styles.appointmentForm}`} noValidate>
            <h2 className="mb-3">Agendar Cita</h2>
            <p>Por favor, ten en cuenta que nuestras políticas de agendamiento establecen que las citas solo pueden ser programadas de lunes a viernes, en el horario comprendido entre las 7:00 de la mañana y las 5:00 de la tarde. Además, es importante señalar que no es posible agendar citas en fechas pasadas ni en fechas que superen un año a partir de la fecha actual. Si tienes alguna consulta adicional o necesitas asistencia para programar tu cita, no dudes en contactarnos.</p>
            <p>Para agendar una cita, por favor completa el siguiente formulario:</p>
            <hr />
            <div className="mb-3">
                <label htmlFor="date" className="form-label">Fecha:</label>
                <input
                    type="date"
                    className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                {errors.date && <div className="invalid-feedback">{errors.date}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="time" className="form-label">Hora:</label>
                <input
                    type="time"
                    className={`form-control ${errors.time ? 'is-invalid' : ''}`}
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                />
                {errors.time && <div className="invalid-feedback">{errors.time}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Descripción:</label>
                <textarea
                    className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                {errors.description && <div className="invalid-feedback">{errors.description}</div>}
            </div>
            <button type="submit" className="btn btn-warning">Enviar</button>
        </form>
    );
};

export default Formulario;