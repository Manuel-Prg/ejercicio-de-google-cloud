const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Configuración de la conexión a MySQL
const pool = mysql.createPool({
    host: 'YOUR_MYSQL_HOST',
    user: 'YOUR_MYSQL_USER',
    password: 'YOUR_MYSQL_PASSWORD',
    database: 'YOUR_MYSQL_DATABASE',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.post('/api/registrar', async (req, res) => {
    const { nombre, edad, email } = req.body;

    try {
        const [results] = await pool.execute(
            'INSERT INTO personas (nombre, edad, email) VALUES (?, ?, ?)',
            [nombre, edad, email]
        );

        res.json({ success: true, message: 'Persona registrada con éxito' });
    } catch (error) {
        console.error('Error al registrar la persona:', error);
        res.status(500).json({ success: false, message: 'Error al registrar la persona' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});