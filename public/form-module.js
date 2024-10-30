// form-module.js
import { addPerson } from './database-module.js'; // Asegúrate de que la ruta sea correcta

const form = document.getElementById('registroForm');

// Maneja el evento de envío del formulario
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evita que la página se recargue

    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const correo = document.getElementById('correo').value;

    // Llama a la función para agregar la persona
    try {
        await addPerson({ nombre, edad, correo });
        mostrarMensaje('Persona registrada con éxito'); // Muestra mensaje de éxito
        form.reset(); // Limpia el formulario
    } catch (error) {
        console.error('Error al agregar la persona:', error);
        mostrarMensaje('Error al registrar la persona: ' + error.message, true); // Muestra mensaje de error
    }
});

// Función para mostrar mensajes
function mostrarMensaje(mensaje, error = false) {
    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.textContent = mensaje;
    mensajeDiv.style.color = error ? 'red' : 'green';
}
