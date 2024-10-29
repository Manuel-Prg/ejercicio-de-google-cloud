// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById('registroForm');
const mensajeElement = document.getElementById('mensaje');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const email = document.getElementById('email').value;

    try {
        await addDoc(collection(db, "personas"), {
            nombre: nombre,
            edad: parseInt(edad),
            email: email
        });
        
        mensajeElement.textContent = 'Persona registrada con éxito!';
        mensajeElement.className = 'success';
        form.reset();
    } catch (error) {
        console.error("Error al agregar el documento: ", error);
        mensajeElement.textContent = 'Error al registrar la persona. Por favor, intente de nuevo.';
        mensajeElement.className = 'error';
    }
});