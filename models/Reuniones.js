import {DataTypes} from 'sequelize'
import db from '../config/db.js'

const Reuniones = db.define('reuniones', {
	nombre: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	descripcion: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	fecha: {
		type: DataTypes.STRING,
		allowNull: false
	},
	hora:{
		type: DataTypes.TIME,
		allowNull: false
	}
})

export default Reuniones