import { Clientes } from "../models/index.js";
import { Sequelize } from "sequelize";

const crearCliente = async (req, res) => {
  const { nombre, cedula, direccion } = req.body;
  try {
    const clienteGuardado = await Clientes.create({
      nombre,
      cedula,
      direccion,
    });
    res.status(201).json({ msg: "Cliente creado", cliente: clienteGuardado });
  } catch (error) {
    console.log("error, crearCliente", error);
  }
};

/**
 * Listado de clientes con paginacion
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const obtenerClientes = async (req, res) => {
  try {
    //req.query 
    //query parampaginacion
    const {pagina: paginaActual} = req.query;

    const expresion = /^[1-9]\d*$/
    if(!expresion.test(paginaActual)){
      res.redirect('/clientes?pagina=1')
    }

    const limit = 2;
    const offset = (paginaActual * limit) - limit

    const [clientes, total] = await Promise.all([
      Clientes.findAll({limit, offset}),
      Clientes.count()
    ])

    if (clientes.length > 0) {
      res.json({clientes, total, paginaActual, limit});
      return;
    }

  } catch (error) {
    console.log("error, obtenerClientes", error);
  }
};

const obtenerCliente = async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Clientes.findByPk(id);
    if (cliente) {
      res.json(cliente);
    }
  } catch (error) {
    console.log("error, obtener cliente", error);
  }
};

const editarCliente = async (req, res) => {
  const { id } = req.params;
  const { nombre, cedula, direccion } = req.body;

  try {
    const cliente = await Clientes.findByPk(id);
    if (cliente) {
      cliente.set({
        nombre,
        cedula,
        direccion,
      });
      await cliente.save();
      res.json({ msg: "Datos actualizados", cliente });
      return;
    }
    res.json({ msg: `El cliente con el id: ${id}, no esta registrado` });
  } catch (error) {
    console.log("error, editarCliente", error);
  }
};

const eliminarCliente = async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Clientes.findByPk(id);
    if (cliente) {
      await cliente.destroy();
      res.json({ msg: `Cliente: ${cliente.nombre} -id: ${cliente.id}, eliminado correctamente` });
      return;
    }
    return res.json({ msg: `No se encuentra el cliente registrado con el id: ${id}` });
  } catch (error) {
    console.log("error, eliminarCliente", error);
  }
};

const buscarCliente = async (req, res) => {
	const { termino } = req.body;

  console.log(termino)
  
	if (!termino.trim()) {
	  return res.json({ msg: "termino incorrecto" });
	}
  
	try {
	  //consultar las propiedades
	  const propiedades = await Clientes.findAll({
		where: {
		  nombre: {
			[Sequelize.Op.like]: "%" + termino + "%",
		  },
		},
	  });
  
	  if(propiedades){
		  res.json(propiedades);
		  return
	  }
	  return res.json({msg: `No se encontraron resultados con la palabra: ${termino}`})
  
  
	} catch (error) {
	  console.log('error, buscarCliente', error)
	}
  };

export {
  crearCliente,
  obtenerClientes,
  obtenerCliente,
  editarCliente,
  eliminarCliente,
  buscarCliente,
};
