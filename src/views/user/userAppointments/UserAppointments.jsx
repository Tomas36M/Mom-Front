import { Link } from "react-router-dom";
import AppointmentsList from "../../../components/appointments/AppointmetCards";

const UserAppointments = () => {

    return (
        <div>
            <div className="text-secondary px-4 py-1 text-center">
                <div className="py-5">
                    <h1 className="display-5 fw-bold text-black">Gestión de Turnos</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="fs-5 mb-4 text-">Esta sección te permite gestionar tus citas para diseñar y crear piezas únicas y personalizadas. Aquí puedes agendar, cancelar, eliminar o reprogramar tus citas de manera sencilla y eficiente.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <Link to="/newappointment" type="button" className="btn btn-warning btn-lg px-4 me-sm-3">Agendar Cita</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-4">
                <AppointmentsList />
            </div>
        </div>
    );
};

export default UserAppointments;