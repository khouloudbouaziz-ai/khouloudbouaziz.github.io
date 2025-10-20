import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const formRef = useRef();

  // Pour le traitement réel du formulaire, tu peux ajouter un service (formspree, getform ou emailjs)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé ! (fonctionnalité à connecter)');
    formRef.current.reset();
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          maxWidth: 400,
          margin: 'auto'
        }}
      >
        <input name="name" type="text" placeholder="Nom" required style={{ fontSize: '1rem', padding: '0.6rem', borderRadius: '8px', border: '1px solid #E8E8E8' }} />
        <input name="email" type="email" placeholder="Email" required style={{ fontSize: '1rem', padding: '0.6rem', borderRadius: '8px', border: '1px solid #E8E8E8' }} />
        <textarea name="message" placeholder="Message" required rows={5} style={{ fontSize: '1rem', padding: '0.6rem', borderRadius: '8px', border: '1px solid #E8E8E8' }} />
        <button type="submit">Envoyer</button>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', marginTop: '1rem' }}>
          <a href="https://www.linkedin.com/in/khouloudbouaziz/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/khouloudbouaziz" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:khouloud.bouaziz@email.com">Email</a>
        </div>
        <a href="/CV.pdf" download>
          <button type="button" style={{ background: 'var(--accent)', color: 'var(--primary)', marginTop: '1rem' }}>
            Télécharger le CV
          </button>
        </a>
      </motion.form>
    </section>
  );
}