export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '1rem 0',
      background: 'var(--primary)',
      color: 'var(--secondary)'
    }}>
      © {new Date().getFullYear()} Khouloud Bouaziz – Portfolio 2025
    </footer>
  );
}