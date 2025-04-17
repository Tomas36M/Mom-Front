import { useContext } from "react";
import { UserContext } from "../../../context/UserContext"
import styles from './UserProfile.module.css';

const UserProfile = () => {

    const { currentUser } = useContext(UserContext);

    return (
        <div className={styles.profileContainer}>
            <div className={styles.coverPhoto}>
                <div className={styles.profileImageContainer}>
                    <img
                        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3svapm_Jf8HXI1IaOl6fEk_yw9y89YIoI5Q&s`}
                        alt="Profile"
                        className={styles.profileImage}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/default-profile.png';
                        }}
                    />
                </div>
            </div>

            <div className={`container ${styles.detailsContainer}`}>
                <div className="row mb-4">
                    <div className="col">
                        <h2>{currentUser.name}</h2>
                        <p className="text-muted">@{currentUser.user.credentials.username}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className={styles.detailItem}>
                            <div className="d-flex justify-content-between">
                                <span className={styles.detailLabel}>Email:</span>
                                <span>{currentUser.user.email}</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <div className={styles.detailItem}>
                            <div className="d-flex justify-content-between">
                                <span className={styles.detailLabel}>Status:</span>
                                <span>{currentUser.user.active ? "Active" : "Inactive"}</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <div className={styles.detailItem}>
                            <div className="d-flex justify-content-between">
                                <span className={styles.detailLabel}>Birthdate:</span>
                                <span>{new Date(currentUser.user.birthdate).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <div className={styles.detailItem}>
                            <div className="d-flex justify-content-between">
                                <span className={styles.detailLabel}>DNI:</span>
                                <span>{currentUser.user.nDni}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
