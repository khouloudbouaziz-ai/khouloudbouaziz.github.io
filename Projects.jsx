import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Anomaly Detection in Water Flow Systems (IoT + ML)',
    img: '/project1.jpg',
    desc: 'Détection d’anomalies en temps réel dans des systèmes d’eau connectés via IoT et Machine Learning.',
    link: 'https://github.com/khouloudbouaziz/water-anomaly-detection'
  },
  {
    title: 'Bias and Fairness in Machine Learning (AI Ethics)',
    img: '/project2.jpg',
    desc: 'Analyse de l’équité et des biais dans les modèles d’apprentissage automatique.',
    link: 'https://github.com/khouloudbouaziz/ai-bias-fairness'
  },
  {
    title: 'Fraud Detection System (Bank Transactions)',
    img: '/project3.jpg',
    desc: 'Détection de fraudes dans les transactions bancaires à l’aide de modèles prédictifs.',
    link: 'https://github.com/khouloudbouaziz/fraud-detection'
  },
  {
    title: 'Dashboarding with Power BI',
    img: '/project4.jpg',
    desc: 'Création de dashboards interactifs pour la visualisation de données métiers.',
    link: 'https://github.com/khouloudbouaziz/powerbi-dashboard'
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projets</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem'
      }}>
        {projects.map((proj, i) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.18 }}
            viewport={{ once: true }}
            style={{
              background: 'var(--white)',
              borderRadius: '14px',
              boxShadow: '0 2px 16px rgba(60,59,110,0.09)',
              width: 'min(330px, 100%)',
              padding: '1.2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <img src={proj.img} alt={proj.title} style={{
              width: '100%',
              height: 140,
              objectFit: 'cover',
              borderRadius: '10px'
            }} />
            <h3 style={{ margin: '1rem 0 0.5rem' }}>{proj.title}</h3>
            <p style={{ fontSize: '0.95rem', minHeight: 60 }}>{proj.desc}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              <button style={{ marginTop: '0.8rem' }}>Voir sur GitHub</button>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}