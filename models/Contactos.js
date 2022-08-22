import {DataTypes} from 'sequelize'
import db from '../config/db.js'

const Contactos = db.define('contactos', {
	nombre: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	cargo: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	email: {
		type: DataTypes.STRING(20),
		allowNull: false
	},
	cel:{
		type: DataTypes.STRING,
		allowNull: false
	}
})

export default Contactos