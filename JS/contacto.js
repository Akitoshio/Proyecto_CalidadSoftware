
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('consultaForm');
    const statusMessage = document.getElementById('statusMessage');
    const submitButton = document.querySelector('.submit-button');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita la recarga de la página

        // Ocultar mensaje anterior
        statusMessage.classList.remove('visible', 'success', 'error');
        statusMessage.classList.add('hidden');
        statusMessage.textContent = '';
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';

        // Simulación de envío de datos
        setTimeout(() => {
            const success = Math.random() > 0.1; // 90% de éxito simulado

            if (success) {
                statusMessage.textContent = '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.';
                statusMessage.classList.add('success', 'visible');
                form.reset(); // Limpia el formulario
            } else {
                statusMessage.textContent = 'Hubo un error al enviar tu mensaje. Inténtalo de nuevo.';
                statusMessage.classList.add('error', 'visible');
            }

            statusMessage.classList.remove('hidden');
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar Consulta';

        }, 1500); // Espera 1.5 segundos para simular el proceso de envío
    });
});