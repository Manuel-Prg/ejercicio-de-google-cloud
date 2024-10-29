const form = document.getElementById('registroForm');
const mensajeElement = document.getElementById('mensaje');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const email = document.getElementById('email').value;

    try {
        const response = await fetch('/api/registrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre, edad, email }),
        });

        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }

        const data = await response.json();
        
        mensajeElement.textContent = 'Persona registrada con éxito!';
        mensajeElement.className = 'success';
        form.reset();
    } catch (error) {
        console.error("Error al registrar la persona: ", error);
        mensajeElement.textContent = 'Error al registrar la persona. Por favor, intente de nuevo.';
        mensajeElement.className = 'error';
    }
});