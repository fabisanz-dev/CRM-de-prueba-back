import { Reuniones } from "../models/index.js"

const crearReunion = async(req, res) => {
	try {
		const {nombre, descripcion, fecha, hora, clienteId} = req.body;
		const reunion = await Reuniones.create({
			nombre,
			descripcion,
			fecha,
			hora,
			clienteId
		}) 
		if(reunion){
			return res.status(201).json({msg: "Reunion registrada", reunion})
		}
	} catch (error) {
		console.log('error, crearReunion', error)
	}
}

const obtenerReuniones = async(req, res) => {
	try {
		const reuniones = await Reuniones.findAll();
		if(reuniones){
			return res.json(reuniones);
		}
	} catch (error) {
		console.log('error, obtenerReuniones', error)
	}
}

const obtenerReunion = async(req, res) => {
	const { id } = req.params
	try {
		const reunion = await Reuniones.findByPk(id)
		if(reunion) {
			return res.json(reunion)
		}
	} catch (error) {
		console.log('error, obtenerReuniones', error)
	}
}

const editarReunion = async(req, res) => {
	const { id } = req.params
	const {nombre, descripcion, fecha, hora, clienteId} = req.body;
	try {
		const reunion = await Reuniones.findByPk(id)
		if(reunion) {
			reunion.set({
				nombre,
				descripcion,
				fecha,
				hora,
				clienteId
			})
			const reunionActualizado = await reunion.save()
			return res.json({msg: "reunion actualizada", reunion})
		}
	} catch (error) {
		console.log('error, editarProyecto', error)
	}
}

const eliminarReunion = async(req, res) => {
	const { id } = req.params
	try {
		const reuniones = await Reuniones.findByPk(id)
		if(reuniones){
			await reuniones.destroy()
			return res.json({msg: "reunion eliminado correctamente"})
		}
		return res.json({msg: `No se encuentra reuniones con el id: ${id}`})
	} catch (error) {
		console.log('error, eliminarReunion', error)
	}
}

export {
	crearReunion,
	obtenerReuniones,
	obtenerReunion,
	editarReunion,
	eliminarReunion
}