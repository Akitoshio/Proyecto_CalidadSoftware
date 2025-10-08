document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // --- Lógica del Acordeón para Preguntas Frecuentes ---
    // ----------------------------------------------------
    
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // 1. Alternar la clase 'active' en el item actual
            item.classList.toggle('active');

            // 2. Controlar la altura de la respuesta para la animación
            const answer = item.querySelector('.faq-answer');
            
            if (item.classList.contains('active')) {
                // Si está activo, establece la altura real (scrollHeight)
                answer.style.maxHeight = answer.scrollHeight + "px"; 
                
            } else {
                // Si se desactiva, vuelve a max-height: 0
                answer.style.maxHeight = '0';
            }
        });
    });

    // ----------------------------------------------------
    // --- Animación de aparición al hacer scroll (Tu código original) ---
    // ----------------------------------------------------
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
    
    // Ejecutar al cargar
    revealOnScroll(); 
});