import express from 'express';
import { 
	crearProyecto,
	obtenerProyectos,
	obtenerProyecto,
	editarProyecto,
	eliminarProyecto 
} from '../controllers/proyectosController.js';

const router = express.Router();

router.get('/', obtenerProyectos)
router.get('/:id', obtenerProyecto)
router.post('/', crearProyecto)
router.put('/:id', editarProyecto)
router.delete('/:id', eliminarProyecto)

export default router