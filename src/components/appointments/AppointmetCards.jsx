import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Appointment from '../cards/appointment/Appointment';

const AppointmentsList = () => {
    const { appointments, cancelAppointment, deleteAppointment } = useContext(UserContext);

    if(appointments.length === 0) return <p style={{height: "50vh"}}>No hay turnos agendados.</p>;

    return (
        <main>
                <div className="row">
                    {appointments && appointments.map((appointment) => (
                        <Appointment key={appointment.id} appointment={appointment} cancelAppointment={cancelAppointment} deleteAppointment={deleteAppointment} />
                    ))}
                </div>
            </main>
    );
};

export default AppointmentsList;