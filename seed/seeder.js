import db from '../config/db.js'
import { exit } from 'node:process'

import { Clientes, Contactos, Proyectos, Reuniones} from "../models/index.js"
import clientes from './clientes.js';
import contactos from './contactos.js';
import proyectos from './proyectos.js';
import reuniones from './reuniones.js';

const importarDatos = async() => {
	try {
		//Autenticar 
		await db.authenticate();
		//Generar las columnas 
		await db.sync();
		//Insertar los datos
		await Promise.all([
			//Categoria.bulkCreate(categorias),
			Clientes.bulkCreate(clientes),
			Contactos.bulkCreate(contactos),
			Proyectos.bulkCreate(proyectos),
			Reuniones.bulkCreate(reuniones)
		])

		console.log('Datos importados correctamente')
		exit()

	} catch (error) {
		console.log('Error DB SEED!', error)
		exit(1)
	}
}

const eliminarDatos = async() => {
	try {
		await db.sync({force: true});
		console.log('Datos eliminados correctamente')
		exit()
	} catch (error) {
		console.log(error)
		exit(1)
	}
}

/******
 * package.json - scripts 
 * "db:importar": "node ./seed/seeder.js -i"
 * process.argv[2] --> [0]:node, [1]:./seed/seeder.js, [2]: -i
 */
if(process.argv[2] === "-i"){
	importarDatos()
}

if(process.argv[2] === "-e"){
	eliminarDatos()
}
