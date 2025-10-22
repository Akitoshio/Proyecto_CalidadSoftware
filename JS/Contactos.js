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

// 2️⃣ Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 3️⃣ Enviar formulario
const form = document.getElementById('contactForm');
const respuesta = document.getElementById('respuesta');
// --- Ejemplo de guardado ---
const formComentario = document.getElementById("contactForm");

if (formComentario) {
  formComentario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombreApellido = document.getElementById("nombre").value;
    const correo = document.getElementById("email").value;
   const mensaje = document.getElementById("mensaje").value;

    try {
      await db.collection("comentarios").add({
        nombreApellido,
        correo,
        mensaje,
        fecha: new Date()
      });

      alert("✅ Gracias por tu comentario, " + nombreApellido + "!");
      contactForm.reset();
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("❌ Error al guardar el comentario.");
    }
  });
}