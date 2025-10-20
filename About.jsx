import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>À propos de moi</h2>
      <p>
        Ingénieure en Data Engineering et Systèmes Décisionnels, passionnée par la Data Science, l’IA, et le MLOps.<br />
        Curieuse, responsable et créative, j’aime concevoir des solutions intelligentes basées sur les données pour résoudre des problèmes réels.
      </p>
      <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '1.5rem' }}>
        <li>🧠 Machine Learning, Deep Learning, MLOps</li>
        <li>⚙️ Data Engineering (ETL, Big Data, SQL, Python)</li>
        <li>📊 Power BI, Tableau, Excel</li>
        <li>☁️ Cloud & DevOps (Azure, Docker)</li>
      </ul>
    </motion.section>
  );
}