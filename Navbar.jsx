import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Accueil', href: '#hero' },
  { name: 'À propos', href: '#about' },
  { name: 'Projets', href: '#projects' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Parcours', href: '#experience' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      style={{
        background: 'var(--white)',
        boxShadow: '0 2px 16px rgba(60,59,110,0.07)',
        padding: '0.8rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 90,
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem'
      }}
    >
      {navLinks.map(link => (
        <a key={link.name} href={link.href}>{link.name}</a>
      ))}
    </motion.nav>
  );
}