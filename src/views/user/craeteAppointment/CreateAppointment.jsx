import AppointmentForm from "../../../components/forms/newAppointment/NewAppointment";
import styles from "./CreateAppointment.module.css";

const CreateAppointment = () => {
    return (
        <div className={styles.registerContainer}>
            {/* Añadido g-0 para eliminar espacios entre columnas */}
            <div className={`row g-0 ${styles.registerRow}`}>
                {/* Contenedor del formulario */}
                <div className="col-md-6 d-flex align-items-center">
                    <div className={`d-flex flex-column ${styles.leftContainer}`}>
                        <div className={styles.loginFormContainer}>
                            <AppointmentForm />
                        </div>
                    </div>
                </div>

                {/* Contenedor de la imagen */}
                <div className={`col-md-6 ${styles.imgContainer}`}>
                    <img 
                        src="https://res.cloudinary.com/dge1sssip/image/upload/v1738741955/tdqglvmg9b9m9pvgkwm9.jpg" 
                        alt="Decorativa" 
                        className={styles.registerImage} 
                    />
                </div>
            </div>
        </div>
    );
};

export default CreateAppointment;