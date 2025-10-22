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

// 1️⃣ Configuración de Firebase (Pega aquí tus datos)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxf8I0krJXoguj4SW4Zw6iaW6nkIjeom8",
  authDomain: "contactoweb-38058.firebaseapp.com",
  projectId: "contactoweb-38058",
  storageBucket: "contactoweb-38058.firebasestorage.app",
  messagingSenderId: "381135526165",
  appId: "1:381135526165:web:975d6241d85b4a2e22311c",
  measurementId: "G-QHQF1R9VEF"
};
// --- Inicializar Firebase ---
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// --- Ejemplo de guardado ---
const formComentario = document.getElementById("formComentario");

if (formComentario) {
  formComentario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
   const mensaje = document.getElementById("mensaje").value;
    const rating = document.querySelector('input[name="rating"]:checked')?.value || "Sin calificación";

    try {
      await db.collection("comentarios").add({
        nombre,
        email,
        mensaje,
        rating,
        fecha: new Date()
      });

      alert("✅ Gracias por tu comentario, " + nombre + "!");
      formComentario.reset();
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("❌ Error al guardar el comentario.");
    }
  });
}