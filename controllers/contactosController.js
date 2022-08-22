import { Contactos } from "../models/index.js";

const crearContacto = async(req, res) => {
	try {
		const {nombre, cargo, email, cel, clienteId} = req.body;
		const contacto = await Contactos.create({
			nombre,
			cargo,
			email,
			cel,
			clienteId
		}) 
		if(contacto){
			return res.status(201).json({msg: "Conctacto registrado", contacto})
		}
	} catch (error) {
		console.log('error, crearContacto', error)
	}
}

const obtenerContactos = async(req, res) => {
	try {
		const contactos = await Contactos.findAll();
		if(contactos){
			return res.json(contactos)
		}
	} catch (error) {
		console.log('error, obtenerContactos', error)
	}
}

const obtenerContacto = async(req, res) => {
	const { id } = req.params
	try {
		const contacto = await Contactos.findByPk(id)
		if(contacto) {
			return res.json(contacto)
		}
	} catch (error) {
		console.log('error, obtenerContacto', error)
	}
}

const editarContacto =async(req, res) => {
	const { id } = req.params
	const {nombre, cargo, email, cel, clienteId} = req.body;
	try {
		const contacto = await Contactos.findByPk(id)
		if(contacto) {
			contacto.set({
				nombre,
				cargo,
				email,
				cel,
				clienteId
			})
			const contactoActualizado = await contacto.save()
			return res.json({msg: "contacto actualizado", contacto})
		}
	} catch (error) {
		console.log('error, editarContacto', error)
	}
}

const eliminarContacto = async(req, res) => {
	const { id } = req.params
	try {
		const contacto = await Contactos.findByPk(id)
		if(contacto){
			await contacto.destroy()
			return res.json({msg: "contacto eliminado correctamente"})
		}
		return res.json({msg: `No se encuentra contacto con el id: ${id}`})
	} catch (error) {
		console.log('error, eliminarContacto', error)
	}
}

export {
	crearContacto,
	obtenerContactos,
	obtenerContacto,
	editarContacto,
	eliminarContacto
}