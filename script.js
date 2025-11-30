// Basic interaction: year, mobile nav, smooth scroll
document.addEventListener("DOMContentLoaded", function() {
  // year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');
  toggle?.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });

  // smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if (href === "#" || href === "" ) return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
      // close mobile nav after click
      if (document.body.classList.contains('nav-open')) document.body.classList.remove('nav-open');
    });
  });
});
