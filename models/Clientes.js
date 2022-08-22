import {DataTypes} from 'sequelize'
import db from '../config/db.js'

const Clientes = db.define('clientes', {
	nombre: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	cedula: {
		type: DataTypes.STRING(20),
		allowNull: false
	},
	direccion:{
		type: DataTypes.STRING,
		allowNull: false
	}
})

export default Clientes