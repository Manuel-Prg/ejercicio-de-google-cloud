
import { db } from './firebase-config.js'; // Importar db
import * as formModule from './form-module.js'; // Asegúrate de que estás importando correctamente el módulo del formulario
import * as databasemodule from './database-module.js'; // Asegúrate de que estás importando correctamente el módulo de la base de datos
console.log('Iniciando aplicación...');

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');
    
    // Firebase ya está inicializado en firebase-config.js
    console.log('Firebase está inicializado correctamente');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Formulario enviado');
        
        const persona = formModule.obtenerDatosFormulario();
        console.log('Datos del formulario:', persona);

        databaseModule.addPerson(persona) // Cambié guardarPersona a addPerson
            .then(() => {
                console.log('Registro exitoso en Firebase');
                formModule.mostrarMensaje('Persona registrada con éxito');
                formModule.limpiarFormulario();
            })
            .catch((error) => {
                console.error('Error al registrar en Firebase:', error);
                formModule.mostrarMensaje('Error al registrar la persona: ' + error.message, true);
            });
    });
});
