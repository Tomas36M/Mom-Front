import PropTypes from 'prop-types';
import styles from './Appointment.module.css';

const Appointment = ({ appointment, cancelAppointment, deleteAppointment }) => {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch">
            <div className={`card border-secondary mb-3 flex-fill d-flex flex-column ${styles.card}`} style={{ maxWidth: '18rem' }}>
                <div className="card-header d-flex justify-content-between align-items-center">
                    <span>{appointment.title || `Turno: ${appointment.id}`}</span>
                    <span className={`badge border ${appointment.status === 'active' ? 'border-success text-success' : 'border-danger text-danger'}`} style={{ backgroundColor: 'transparent' }}>                        {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}                    </span>
                </div>
                <div className="card-body text-secondary flex-grow-1">
                    <div className="mb-3">
                        <strong>Fecha:</strong> {appointment.date.slice(0, 10)}
                        <br />
                        <strong>Hora:</strong> {appointment.time}
                    </div>
                    <div className="card-text mb-3">
                        <strong>Descripción:</strong><br /> {appointment.description}
                    </div>
                </div>
                <div className="card-footer bg-transparent d-flex justify-content-start">
                    {appointment.status !== 'cancelled' ? (
                        <button
                            className="btn btn-outline-danger me-2"
                            onClick={() => cancelAppointment(appointment.id)}
                        >
                            Cancelar
                        </button>
                    ) : (
                        <button
                            className="btn btn-outline-danger me-2"
                            onClick={() => deleteAppointment(appointment.id)}
                        >
                            Eliminar
                        </button>
                    )}
                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => alert('Funcionalidad para reprogramar próximamente')}
                    >
                        Reprogramar
                    </button>
                </div>
            </div>
        </div>
    );
}

Appointment.propTypes = {
    appointment: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string,
        date: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
    }).isRequired,
    cancelAppointment: PropTypes.func.isRequired,
    deleteAppointment: PropTypes.func.isRequired,
};

export default Appointment;