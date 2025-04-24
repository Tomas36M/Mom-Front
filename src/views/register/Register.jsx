import RegisterForm from "../../components/forms/register/RegisterForm";
import styles from './Register.module.css';

const Register = () => {
    return (
        <div className={styles.registerContainer}>
            <div className={styles.registerWrapper}>
                <div className={styles.registerRow}>
                    {/* Tarjeta del Formulario (50%) */}
                    <div className={styles.formCard}>
                        <div className={styles.loginFormContainer}>
                            <RegisterForm />
                        </div>
                    </div>
                    
                    {/* Tarjeta de la Imagen (50%) */}
                    <div className={styles.imageCard}>
                        <img 
                            src="https://res.cloudinary.com/dge1sssip/image/upload/v1738742319/vidkjkducmjqachmemm1.jpg"
                            alt="Diseños exclusivos de joyería"
                            className={styles.registerImage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;