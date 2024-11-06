const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3001;

// Configuración de middleware
app.use(cors());
app.use(bodyParser.json());

// Configuración de la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Cambia esto si tu usuario es diferente
    password: '', // Cambia esto si tu contraseña es diferente
    database: 'mamacoco_db',
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado a la base de datos MySQL.');
});

// Ruta de registro
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10); // Encriptar la contraseña

    db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, result) => {
        if (err) {
            return res.status(400).json({ success: false, message: 'Error al registrar el usuario.' });
        }
        res.json({ success: true, message: 'Usuario registrado con éxito.' });
    });
});

// Ruta de inicio de sesión
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
        if (err || results.length === 0) {
            return res.status(401).json({ success: false, message: 'Usuario o contraseña incorrectos.' });
        }

        const user = results[0];
        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if (isPasswordValid) {
            res.json({ success: true, message: 'Inicio de sesión exitoso.' });
        } else {
            res.status(401).json({ success: false, message: 'Usuario o contraseña incorrectos.' });
        }
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
