export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      aria-label="Activer/désactiver le mode sombre"
      style={{
        position: 'fixed',
        top: 18,
        right: 18,
        zIndex: 99,
        background: darkMode ? '#E8E8E8' : '#3C3B6E',
        color: darkMode ? '#3C3B6E' : '#E8E8E8',
        borderRadius: '50%',
        width: 40,
        height: 40,
        boxShadow: '0 1px 8px rgba(60,59,110,0.12)'
      }}
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? '🌞' : '🌙'}
    </button>
  );
}