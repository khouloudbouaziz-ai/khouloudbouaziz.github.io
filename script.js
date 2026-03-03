'use strict';

/* ── Year ── */
document.getElementById('yr').textContent = new Date().getFullYear();

/* ── CV download buttons ── */
const CV_PATH = 'cv_bouaziz_khouloud.pdf';
['cvBtn', 'cvBtnHero', 'cvBtnAbout', 'cvBtnContact'].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.setAttribute('href', CV_PATH);
    el.setAttribute('download', 'CV_Khouloud_Bouaziz.pdf');
  }
});

/* ── Auto-load real photo if available ── */
const photoEl = document.getElementById('photoEl');
const img = new Image();
img.onload = () => {
  photoEl.innerHTML = '';
  img.style.cssText = 'width:100%;height:100%;object-fit:cover;border-radius:32px';
  photoEl.appendChild(img);
};
img.src = 'photo.jpg'; /* replace with actual photo filename */

/* ── Custom cursor ── */
const c  = document.getElementById('c');
const cr = document.getElementById('cr');
let rx = 0, ry = 0, mx = 0, my = 0;

if (window.matchMedia('(pointer:fine)').matches) {
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    c.style.left = mx + 'px';
    c.style.top  = my + 'px';
  });
  (function tick() {
    rx += (mx - rx) * .1;
    ry += (my - ry) * .1;
    cr.style.left = rx + 'px';
    cr.style.top  = ry + 'px';
    requestAnimationFrame(tick);
  })();
} else {
  c.style.display = cr.style.display = 'none';
}

/* ── Navbar: pin on scroll ── */
const nav = document.getElementById('nav');
const handleScroll = () => nav.classList.toggle('pinned', window.scrollY > 40);
window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

/* ── Mobile menu toggle ── */
const burger = document.getElementById('burger');
burger.addEventListener('click', () => {
  const isOpen = document.body.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(isOpen));
});

/* ── Smooth scroll + close mobile nav ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    document.body.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ── Scroll reveal ── */
const revObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (!entry.isIntersecting) return;
    setTimeout(() => entry.target.classList.add('on'), i * 70);
    revObs.unobserve(entry.target);
  });
}, { threshold: .09, rootMargin: '0px 0px -45px 0px' });

document.querySelectorAll('.r-up, .r-left').forEach(el => revObs.observe(el));

/* ── Count-up animation ── */
const cntObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el     = entry.target;
    const target = parseInt(el.dataset.count, 10);
    let n = 0;
    const iv = setInterval(() => {
      n = Math.min(n + 1, target);
      el.textContent = n;
      if (n >= target) clearInterval(iv);
    }, 60);
    cntObs.unobserve(el);
  });
}, { threshold: 1 });

document.querySelectorAll('[data-count]').forEach(el => cntObs.observe(el));
