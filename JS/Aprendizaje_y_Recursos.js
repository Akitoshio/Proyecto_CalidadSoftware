// --- Animación de aparición al hacer scroll ---
const fadeSections = document.querySelectorAll('.fade-in');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  fadeSections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < triggerBottom) {
      sec.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);