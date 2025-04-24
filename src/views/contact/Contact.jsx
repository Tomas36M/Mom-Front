import styles from './Contact.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className={`container py-5 ${styles.contactSection}`}>
            <div className="row">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className={styles.contactInfo}>
                        <h2 className={styles.infoTitle}>Información de Contacto</h2>
                        
                        <div className={styles.infoItem}>
                            <FaMapMarkerAlt className={styles.infoIcon} />
                            <div>
                                <h3 className={styles.infoLabel}>Dirección</h3>
                                <p>Calle 123 #45-67, Bogotá, Colombia</p>
                            </div>
                        </div>
                        
                        <div className={styles.infoItem}>
                            <FaPhone className={styles.infoIcon} />
                            <div>
                                <h3 className={styles.infoLabel}>Teléfono</h3>
                                <p>+57 1 234 5678</p>
                                <p>+57 300 123 4567 (WhatsApp)</p>
                            </div>
                        </div>
                        
                        <div className={styles.infoItem}>
                            <FaEnvelope className={styles.infoIcon} />
                            <div>
                                <h3 className={styles.infoLabel}>Email</h3>
                                <p>info@linajoyeria.com</p>
                                <p>ventas@linajoyeria.com</p>
                            </div>
                        </div>
                        
                        <div className={styles.infoItem}>
                            <FaClock className={styles.infoIcon} />
                            <div>
                                <h3 className={styles.infoLabel}>Horario de Atención</h3>
                                <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                                <p>Sábados: 10:00 AM - 2:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-6">
                    <form className={styles.contactForm}>
                        <h2 className={styles.formTitle}>Envía un Mensaje</h2>
                        
                        <div className="mb-3">
                            <label htmlFor="name" className={styles.formLabel}>Nombre Completo</label>
                            <input 
                                type="text" 
                                id="name" 
                                className={`form-control ${styles.formInput}`}
                                placeholder="Tu nombre"
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="email" className={styles.formLabel}>Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                className={`form-control ${styles.formInput}`}
                                placeholder="tu@email.com"
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="phone" className={styles.formLabel}>Teléfono</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                className={`form-control ${styles.formInput}`}
                                placeholder="+57 300 123 4567"
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="subject" className={styles.formLabel}>Asunto</label>
                            <select id="subject" className={`form-select ${styles.formInput}`}>
                                <option value="">Selecciona un asunto</option>
                                <option value="consulta">Consulta sobre producto</option>
                                <option value="personalizado">Diseño personalizado</option>
                                <option value="cita">Solicitud de cita</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="message" className={styles.formLabel}>Mensaje</label>
                            <textarea 
                                id="message" 
                                rows="5" 
                                className={`form-control ${styles.formInput}`}
                                placeholder="Escribe tu mensaje aquí..."
                            ></textarea>
                        </div>
                        
                        <button type="submit" className={`btn btn-warning ${styles.submitButton}`}>
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;