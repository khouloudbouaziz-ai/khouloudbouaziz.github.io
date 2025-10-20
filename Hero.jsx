import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg'; // Remplace par ta photo

export default function Hero() {
  return (
    <section id="hero" style={{ textAlign: 'center' }}>
      <motion.img
        src={profilePic}
        alt="Khouloud Bouaziz"
        style={{
          width: 140,
          height: 140,
          objectFit: 'cover',
          borderRadius: '50%',
          boxShadow: '0 2px 16px rgba(60,59,110,0.12)',
          margin: '1rem auto'
        }}
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        style={{ fontWeight: 700, fontSize: '2.2rem' }}
      >
        Khouloud Bouaziz
      </motion.h1>
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        style={{ fontWeight: 400, fontSize: '1.3rem', color: 'var(--accent)' }}
      >
        Data Engineer & Future Data Scientist
      </motion.h2>
      <p style={{ fontStyle: 'italic', margin: '1rem 0 2rem' }}>
        “Passionnée par la Data, l’IA et l’automatisation intelligente.”
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <a href="#projects"><button>Voir mes projets</button></a>
        <a href="#contact"><button style={{ background: 'var(--accent)', color: 'var(--primary)' }}>Contactez-moi</button></a>
      </div>
    </section>
  );
}