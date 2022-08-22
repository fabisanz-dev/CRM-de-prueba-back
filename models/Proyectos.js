import {DataTypes} from 'sequelize'
import db from '../config/db.js'

const Proyectos = db.define('proyectos', {
	nombre: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	descripcion: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	fechaEntrega: {
		type: DataTypes.STRING,
		allowNull: false,
	}
})

export default Proyectos