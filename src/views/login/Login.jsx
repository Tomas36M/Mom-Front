import styles from './Login.module.css';
import LoginForm from '../../components/forms/login/LoginForm';

const Login = () => {
    return (
        <div className={`${styles.loginContainer}`}>
            <div className={`row ${styles.loginRow}`}>
                <div className="col-md-6">
                    <div className={`d-flex flex-column ${styles.leftContainer}`}>
                        <div className={`${styles.loginFormContainer}`}>
                            <LoginForm />
                        </div>
                        <div className={`${styles.additionalImageContainer}`}>
                            <img src="https://nelsoncoleman.com/cdn/shop/files/Repairs_2.jpg?v=1724439095&width=2400" alt="Adicional" className={styles.additionalImage} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src="https://www.everlyjewellers.com.au/cdn/shop/files/Services_-_BESPOKE_-_Manufacturing_image_2.jpg?v=1690166239&width=2000" alt="Decorativa" className={styles.loginImage} />
                </div>
            </div>
        </div>
    );
};

export default Login;