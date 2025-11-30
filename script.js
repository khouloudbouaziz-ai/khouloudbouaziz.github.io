// Dark Mode Toggle
const toggle = document.querySelector('.dark-mode-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const icon = toggle.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});

// Subtle Particles Animation (bleu Azure, faible densité pour propreté)
particlesJS("particles-js", {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 800 } },
    color: { value: "#0078d7" },
    shape: { type: "circle" },
    opacity: { value: 0.3, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: "#0078d7", opacity: 0.2, width: 1 },
    move: { enable: true, speed: 1, direction: "none", random: true }
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
    modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
  },
  retina_detect: true
});
