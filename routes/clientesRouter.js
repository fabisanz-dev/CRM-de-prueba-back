import express from 'express';
import { crearCliente, editarCliente, eliminarCliente, obtenerCliente, obtenerClientes, buscarCliente } from '../controllers/clientesController.js';

const router = express.Router();

router.get('/', obtenerClientes)
router.get('/:id', obtenerCliente)
router.post('/', crearCliente)
router.put('/:id', editarCliente)
router.delete('/:id', eliminarCliente)

router.post('/buscar', buscarCliente)

export default router