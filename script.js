// script.js
// Dark mode
document.querySelector('.dark-mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const icon = document.querySelector('.dark-mode-toggle i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});

// Particles.js background (very subtle)
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#0078d7" },
    "opacity": { "value": 0.3 },
    "size": { "value": 3 },
    "line_linked": { "enable": true, "distance": 150, "color": "#0078d7", "opacity": 0.2, "width": 1 },
    "move": { "speed": 2 }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": true, "mode": "repulse" } }
  }
});
