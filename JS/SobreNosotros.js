document.addEventListener('DOMContentLoaded', function() {
    const rating = document.querySelector('.rating');
    const description = document.querySelector('.description');
    const descTexts = document.querySelectorAll('.desc-text');
    const labels = rating.querySelectorAll('label');
    let selectedRating = 0; // 0 = no seleccionado; trackea la selección fija

    // Función para actualizar el texto y color
    function updateDescription(ratingValue) {
        descTexts.forEach(text => {
            text.classList.remove('active');
            text.style.opacity = '0';
        });
        
        let targetDesc;
        let descColor = '#ccc'; // Default gris
        
        if (ratingValue > 0) {
            targetDesc = document.getElementById('desc' + ratingValue);
            descColor = '#a5e352'; // Verde para hovered/seleccionado
        } else {
            targetDesc = document.getElementById('default-desc');
        }
        
        if (targetDesc) {
            targetDesc.classList.add('active');
            setTimeout(() => { // Para fade-in suave
                targetDesc.style.opacity = '1';
            }, 10);
        }
        
        description.style.color = descColor;
    }

    // Hover: Cambia temporalmente al pasar mouse (progresivo por label)
    labels.forEach((label, index) => {
        const ratingValue = 5 - index; // star5 (índice 0) = 5, star1 (índice 4) = 1
        label.addEventListener('mouseenter', () => {
            if (selectedRating === 0) { // Solo si no hay selección fija
                updateDescription(ratingValue);
            }
        });
    });

    // Salir del rating: Reset a default si no seleccionado
    rating.addEventListener('mouseleave', () => {
        if (selectedRating === 0) {
            updateDescription(0);
        }
    });

    // Selección (click): Fija el texto y el radio
    labels.forEach((label, index) => {
        const ratingValue = 5 - index;
        label.addEventListener('click', (e) => {
            e.preventDefault(); // Opcional: previene submit inmediato si es necesario
            selectedRating = ratingValue;
            updateDescription(ratingValue);
            // Marca el radio correspondiente (para envío del form)
            const input = document.getElementById('star' + ratingValue);
            if (input) input.checked = true;
        });
    });

    // Inicial: Muestra default
    updateDescription(0);
});