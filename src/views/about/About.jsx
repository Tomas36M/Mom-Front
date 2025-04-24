import styles from './About.module.css';
import { FaGraduationCap, FaAward, FaGem, FaPalette, FaHandsHelping } from 'react-icons/fa';

const AboutLina = () => {
    // Datos de estudios y certificaciones
    const education = [
        {
            icon: <FaGraduationCap />,
            title: "Diseño de Joyería Avanzado",
            institution: "Instituto de Artes y Diseño de Bogotá",
            year: "1995-1998",
            description: "Especialización en técnicas contemporáneas de diseño y fabricación de joyas."
        },
        {
            icon: <FaAward />,
            title: "Certificación en Gemología",
            institution: "GIA (Gemological Institute of America)",
            year: "2002",
            description: "Identificación y evaluación de piedras preciosas y perlas."
        },
        {
            icon: <FaGem />,
            title: "Tallado de Piedras Preciosas",
            institution: "Escuela de Artes y Oficios de Medellín",
            year: "2005",
            description: "Técnicas tradicionales de tallado y pulido de gemas."
        }
    ];

    // Muestras de trabajo/proyectos destacados
    const featuredWorks = [
        {
            title: "Colección 'Raíces'",
            year: "2015",
            description: "Serie inspirada en la flora colombiana, utilizando esmeraldas y oro verde.",
            image: "https://res.cloudinary.com/dge1sssip/image/upload/v1738744261/collar3_dl6iya.jpg"
        },
        {
            title: "Línea 'Mariposas'",
            year: "2018",
            description: "Piezas móviles que imitan el vuelo de las mariposas, con diamantes y zafiros.",
            image: "https://res.cloudinary.com/dge1sssip/image/upload/v1738743500/flzpebgmfhfx41uqbo7a.jpg"
        },
        {
            title: "Serie 'Abstracciones'",
            year: "2020",
            description: "Diseños geométricos contemporáneos en platino y diamantes negros.",
            image: "https://res.cloudinary.com/dge1sssip/image/upload/v1738742573/pxh704ll2zpcgpjofxjt.jpg"
        }
    ];

    return (
        <div className={styles.aboutPage}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={`container ${styles.heroContainer}`}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Lina María Escalante</h1>
                        <p className={styles.heroSubtitle}>Maestra Joyera · Diseñadora · Artesana</p>
                        <p className={styles.heroText}>Con más de 40 años transformando metales y gemas en obras de arte que cuentan historias.</p>
                    </div>
                    <div className={styles.heroImageWrapper}>
                        <img 
                            src="https://res.cloudinary.com/dge1sssip/image/upload/v1738741576/cngsuqtkcejr7awnznd8.jpg" 
                            alt="Lina María Escalante" 
                            className={styles.heroImage}
                        />
                    </div>
                </div>
            </section>

            {/* Biografía */}
            <section className={`container ${styles.bioSection}`}>
                <div className={styles.sectionHeader}>
                    <FaPalette className={styles.sectionIcon} />
                    <h2 className={styles.sectionTitle}>Mi Historia</h2>
                </div>
                
                <div className={styles.bioCard}>
                    <div className={styles.bioContent}>
                        <p>Nací en el corazón de Bogotá en una familia de artesanos, donde aprendí desde niña el valor de crear con las manos. A los 15 años tallé mi primera piedra y supe que mi vida estaría dedicada a la joyería.</p>
                        
                        <p>Mi estilo fusiona técnicas ancestrales con diseño contemporáneo, siempre buscando resaltar la belleza natural de los materiales. Cada pieza que creo lleva un pedazo de mi esencia y la historia de quien la llevará.</p>
                        
                        <p>He tenido el privilegio de exhibir mis obras en galerías de París, Nueva York y Tokio, pero mi mayor satisfacción sigue siendo ver la sonrisa de mis clientes cuando reciben una pieza creada especialmente para ellos.</p>
                    </div>
                    <div className={styles.bioImageWrapper}>
                        <img 
                            src="https://res.cloudinary.com/dge1sssip/image/upload/v1738744261/collar3_dl6iya.jpg" 
                            alt="Trabajo de Lina" 
                            className={styles.bioImage}
                        />
                        <div className={styles.bioImageCaption}>Técnica de engaste invisible desarrollada por Lina</div>
                    </div>
                </div>
            </section>

            {/* Educación y Certificaciones */}
            <section className={`container ${styles.educationSection}`}>
                <div className={styles.sectionHeader}>
                    <FaGraduationCap className={styles.sectionIcon} />
                    <h2 className={styles.sectionTitle}>Estudios y Certificaciones</h2>
                </div>
                
                <div className="row g-4">
                    {education.map((item, index) => (
                        <div key={index} className="col-md-4">
                            <div className={styles.educationCard}>
                                <div className={styles.educationIcon}>{item.icon}</div>
                                <h3 className={styles.educationTitle}>{item.title}</h3>
                                <div className={styles.educationMeta}>
                                    <span className={styles.educationInstitution}>{item.institution}</span>
                                    <span className={styles.educationYear}>{item.year}</span>
                                </div>
                                <p className={styles.educationDescription}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trabajo Destacado */}
            <section className={`container ${styles.workSection}`}>
                <div className={styles.sectionHeader}>
                    <FaGem className={styles.sectionIcon} />
                    <h2 className={styles.sectionTitle}>Proyectos Destacados</h2>
                </div>
                
                <div className="row g-4">
                    {featuredWorks.map((work, index) => (
                        <div key={index} className="col-md-4">
                            <div className={styles.workCard}>
                                <div className={styles.workImageWrapper}>
                                    <img 
                                        src={work.image} 
                                        alt={work.title} 
                                        className={styles.workImage}
                                    />
                                </div>
                                <div className={styles.workContent}>
                                    <h3 className={styles.workTitle}>{work.title}</h3>
                                    <span className={styles.workYear}>{work.year}</span>
                                    <p className={styles.workDescription}>{work.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Filosofía */}
            <section className={`container ${styles.philosophySection}`}>
                <div className={styles.sectionHeader}>
                    <FaHandsHelping className={styles.sectionIcon} />
                    <h2 className={styles.sectionTitle}>Mi Filosofía</h2>
                </div>
                
                <div className={styles.philosophyGrid}>
                    <div className={styles.philosophyCard}>
                        <h3 className={styles.philosophyTitle}>Arte con Propósito</h3>
                        <p>Creo que la joyería debe trascender lo decorativo. Cada pieza debe tener un significado personal para quien la lleva, convirtiéndose en un talismán de sus sueños y memorias.</p>
                    </div>
                    
                    <div className={styles.philosophyCard}>
                        <h3 className={styles.philosophyTitle}>Sostenibilidad</h3>
                        <p>Uso metales reciclados y gemas de origen ético. Trabajo con mineros artesanales colombianos que comparten mi respeto por la tierra y sus recursos.</p>
                    </div>
                    
                    <div className={styles.philosophyCard}>
                        <h3 className={styles.philosophyTitle}>Tradición Innovadora</h3>
                        <p>Respeto las técnicas ancestrales pero las combino con tecnología moderna. Cada generación de joyeros debe aportar su visión al oficio.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutLina;