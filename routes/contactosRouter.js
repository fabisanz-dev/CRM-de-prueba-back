import express from 'express';
import { 
	crearContacto,
	obtenerContactos,
	obtenerContacto,
	editarContacto,
	eliminarContacto
 } from '../controllers/contactosController.js';

const router = express.Router()

router.get('/', obtenerContactos)
router.get('/:id', obtenerContacto)
router.post('/', crearContacto)
router.put('/:id', editarContacto)
router.delete('/:id', eliminarContacto)

export default router