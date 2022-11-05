import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from './config/db.js';
import routes from './routes/routes.js';
dotenv.config(); // Para trabajar con las variables de entorno
const PORT = process.env.PORT || 4000;

const app = express();
app.use('/api', routes);
// Para trabajar con document JSON
app.use(express.json());

conectarDB();

app.listen( PORT, () => {
    console.log(` Serivdor encendido en el puerto # ${PORT} `);
});