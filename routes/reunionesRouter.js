import express from 'express';
import {
	crearReunion,
	obtenerReuniones,
	obtenerReunion,
	editarReunion,
	eliminarReunion
 } from '../controllers/reunionesController.js';

const router = express.Router();

router.get('/', obtenerReuniones)
router.get('/:id', obtenerReunion)
router.post('/', crearReunion)
router.put('/:id', editarReunion)
router.delete('/:id', eliminarReunion)

export default router