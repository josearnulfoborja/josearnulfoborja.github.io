const body = document.body;
const toggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');

const setTheme = theme => {
  body.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

toggle.addEventListener('click', () => {
  const next = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  setTheme(next);
});

// Reveal on scroll
const revealTargets = document.querySelectorAll('[data-animate]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

revealTargets.forEach(el => observer.observe(el));

// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
