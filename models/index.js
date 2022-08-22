import Clientes from "./Clientes.js";
import Contactos from "./Contactos.js";
import Proyectos from "./Proyectos.js";
import Reuniones from "./Reuniones.js";

//relaciones
//Precio.hasOne(Propiedad, {foreignKey: 'precioId'})
Clientes.hasMany(Contactos, {foreignKey: 'clienteId'})
Clientes.hasMany(Proyectos, {foreignKey: 'clienteId'})
Clientes.hasMany(Reuniones, {foreignKey: 'clienteId'})

Contactos.belongsTo(Clientes)
Proyectos.belongsTo(Clientes)
Reuniones.belongsTo(Clientes)

export {
	Clientes,
	Contactos, 
	Proyectos,
	Reuniones
}