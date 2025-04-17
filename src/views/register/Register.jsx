import RegisterForm from "../../components/forms/register/RegisterForm";
import styles from './Register.module.css';

const Register = () => {
    return (
        <div className={styles.registerContainer}>
            {/* Añadido g-0 para eliminar espacios entre columnas */}
            <div className={`row g-0 ${styles.registerRow}`}>
                <div className="col-md-6">
                    <div className={styles.leftContainer}>
                        <div className={styles.loginFormContainer}>
                            <RegisterForm />
                        </div>
                    </div>
                </div>
                
                {/* Contenedor de imagen con altura forzada */}
                <div className={`col-md-6 ${styles.imgContainer}`}>
                    <img 
                        src="https://res.cloudinary.com/dge1sssip/image/upload/v1738742319/vidkjkducmjqachmemm1.jpg"
                        alt="Decorativa" 
                        className={styles.registerImage} 
                    />
                </div>
            </div>
        </div>
    );
}

export default Register;