import express, { json } from "express";
import dotenv from "dotenv";
import { clientesRouter, contactosRouter, proyectosRouter, reunionesRouter} from "./routes/index.js";
import db from "./config/db.js"
import cors from 'cors';

dotenv.config()
const app = express()

//habilitar cors 
const whiteList = [process.env.URL_FRONTEND];
const corsOptions = {
	origin: function(origin, callback) {
		if(whiteList.includes(origin)) {
			//dominio habilitado para API
			callback(null, true);
		}else{
			callback(new Error('Error de cors', origin));
		}
	}
}
app.use( cors() );

//conexion a base de datos 
try {
	await db.authenticate()
	db.sync() //crear tabla si no existe
	console.log('Conexion correcta a la bdd')
} catch (error) {
	console.log('bdd error', error)
}


//habilitar lectura json 
app.use(express.json())



//Rutas
app.use('/clientes', clientesRouter)
app.use('/contactos', contactosRouter)
app.use('/proyectos', proyectosRouter)
app.use('/reuniones', reunionesRouter)

const port = process.env.PORT || 4000
app.listen(port, (req, res) => {
	console.log('Servidor corriendo', port)
})