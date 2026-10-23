require('dotenv').config();

const app = require('./app');
const db = require('./config/db');

const PORT = process.env.PORT || 3000;

//Comprobamos que la conexion con Mysql funciona
db.query('SELECT 1')
    .then(() => console.log('Conectado a Mysql'))
    .catch((error) => console.error('Error al conectar con MySQL:', error.message));

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});