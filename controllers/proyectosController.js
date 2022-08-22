import { Proyectos } from "../models/index.js";

const crearProyecto = async(req, res) => {
	try {
		const {nombre, descripcion, fechaEntrega, clienteId} = req.body;
		const proyecto = await Proyectos.create({
			nombre,
			descripcion,
			fechaEntrega,
			clienteId
		}) 
		if(proyecto){
			return res.status(201).json({msg: "Proyecto registrado", proyecto})
		}
	} catch (error) {
		console.log('error, crearProyecto', error)
	}
}

const obtenerProyectos = async(req, res) => {
	try {
		const proyectos = await Proyectos.findAll();
		if(proyectos){
			return res.json(proyectos)
		}
	} catch (error) {
		console.log('error, obtenerProyectos', error)
	}
}

const obtenerProyecto = async(req, res) => {
	const { id } = req.params
	try {
		const proyecto = await Proyectos.findByPk(id)
		if(proyecto) {
			return res.json(proyecto)
		}
	} catch (error) {
		console.log('error, obtenerProyecto', error)
	}
}

const editarProyecto = async(req, res) => {
	const { id } = req.params
	const {nombre, descripcion, fechaEntrega, clienteId} = req.body;
	try {
		const proyecto = await Proyectos.findByPk(id)
		if(proyecto) {
			proyecto.set({
				nombre,
				descripcion,
				fechaEntrega,
				clienteId
			})
			const proyectoActualizado = await proyecto.save()
			return res.json({msg: "proyecto actualizado", proyecto})
		}
	} catch (error) {
		console.log('error, editarProyecto', error)
	}
}

const eliminarProyecto = async(req, res) => {
	const { id } = req.params
	try {
		const proyecto = await Proyectos.findByPk(id)
		if(proyecto){
			await proyecto.destroy()
			return res.json({msg: "proyecto eliminado correctamente"})
		}
		return res.json({msg: `No se encuentra proyecto con el id: ${id}`})
	} catch (error) {
		console.log('error, eliminarProyecto', error)
	}
}

export {
	crearProyecto,
	obtenerProyectos,
	obtenerProyecto,
	editarProyecto,
	eliminarProyecto
}