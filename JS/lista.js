
const firebaseConfig = {
  apiKey: "AIzaSyDxf8I0krJXoguj4SW4Zw6iaW6nkIjeom8",
  authDomain: "contactoweb-38058.firebaseapp.com",
  projectId: "contactoweb-38058",
  storageBucket: "contactoweb-38058.firebasestorage.app",
  messagingSenderId: "381135526165",
  appId: "1:381135526165:web:975d6241d85b4a2e22311c",
  measurementId: "G-QHQF1R9VEF"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// UID permitido
const MI_UID = "XNLU5MODyzdCIWIfg4N5F3DxMim2";

const loginSection = document.getElementById("login-section");
const panelSection = document.getElementById("panel-section");

document.getElementById("btn-login").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    if (userCredential.user.uid === MI_UID) {
      loginSection.style.display = "none";
      panelSection.style.display = "block";
      cargarDatos();
    } else {
      alert("No autorizado");
      await auth.signOut();
    }
  } catch (error) {
    alert("Error al iniciar sesión: " + error.message);
  }
});

async function cargarDatos() {
  const contactoBody = document.getElementById("contacto-body");
  const comentariosBody = document.getElementById("comentarios-body");

  // CONTACTOS
  const snapshotContacto = await db.collection("contactForm").get();
  contactoBody.innerHTML = snapshotContacto.empty
    ? `<tr><td colspan="4" class="vacio">No hay mensajes de contacto</td></tr>`
    : snapshotContacto.docs.map(doc => {
        const data = doc.data();
        const fecha = data.fecha ? new Date(data.fecha.seconds * 1000).toLocaleString() : "-";
        return `<tr>
          <td>${data.nombreApellido || "-"}</td>
          <td>${data.correoCont || "-"}</td>
          <td>${data.mensaje || "-"}</td>
          <td>${fecha}</td>
        </tr>`;
      }).join("");

  // COMENTARIOS
  const snapshotComentarios = await db.collection("comentarios").get();
  comentariosBody.innerHTML = snapshotComentarios.empty
    ? `<tr><td colspan="5" class="vacio">No hay comentarios</td></tr>`
    : snapshotComentarios.docs.map(doc => {
        const data = doc.data();
        const fecha = data.fecha ? new Date(data.fecha.seconds * 1000).toLocaleString() : "-";
        return `<tr>
          <td>${data.nombre || "-"}</td>
          <td>${data.email || "-"}</td>
          <td>${data.mensaje || "-"}</td>
          <td>${data.rating || "-"}</td>
          <td>${fecha}</td>
        </tr>`;
      }).join("");
}