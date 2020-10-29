import { Sequelize } from "sequelize"
import { config } from 'dotenv'
config()

const dbConnector = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    port: parseInt(process.env.DB_PORT),
    host: process.env.DB_HOST,
    dialect: 'mysql'
})

export default dbConnector