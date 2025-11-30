// Basic interactions: mobile nav, smooth scroll, video modal, year
document.addEventListener('DOMContentLoaded', () => {
  // year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const body = document.body;
  toggle?.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', (!expanded).toString());
    body.classList.toggle('nav-open');
  });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // close mobile nav
      body.classList.remove('nav-open');
    });
  });

  // VIDEO MODAL
  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  const modalSource = document.getElementById('modalSource');
  const closeBtn = document.querySelector('.modal-close');
  const backdrop = document.querySelector('.modal-backdrop');

  // open video when play button clicked
  document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const videoFile = btn.getAttribute('data-video');
      if (!videoFile) return;
      modalSource.setAttribute('src', videoFile);
      modalVideo.load();
      modal.classList.add('show');
      modal.setAttribute('aria-hidden', 'false');
      // autoplay (optional)
      modalVideo.play().catch(()=>{/* autoplay blocked */});
    });
  });

  // close modal
  function closeModal() {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    modalVideo.pause();
    modalSource.setAttribute('src', '');
    modalVideo.load();
  }

  closeBtn?.addEventListener('click', closeModal);
  backdrop?.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

});
