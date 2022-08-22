import Sequelize from 'sequelize'
import dotenv from "dotenv";
dotenv.config({path: '.env'})

const name = process.env.BDD_NAME
const username = process.env.BDD_USERNAME
const password = process.env.BDD_PASSWORD || '';
const host = process.env.BDD_HOST
const port = process.env.BDD_PORT

const db = new Sequelize(
  name, username, password, {
	host,
	port,
	dialect: 'mysql',
	define: {
		timestamps: true,
	},
	pool: {
		max: 5, 
		min: 0,
		acquire: 30000,
		idle: 10000
	},
	
})

export default db
