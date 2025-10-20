import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience">
      <h2>Parcours</h2>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{ marginBottom: '2rem' }}
      >
        <h3>Formation</h3>
        <p>École Nationale d’Électronique et des Télécommunications de Sfax</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3>Expériences</h3>
        <ul>
          <li>Stage en Data Science – Détection d’anomalies dans les systèmes d’eau en temps réel</li>
          <li>Projets académiques & personnels en ML, IoT, et Cloud.</li>
        </ul>
      </motion.div>
    </section>
  );
}