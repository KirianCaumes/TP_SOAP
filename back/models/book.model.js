import sequelize from 'sequelize'
const { DataTypes } = sequelize
import dbConnector from "../models/_dbConnector.js"
import Author from './author.model.js'

const Book = dbConnector.define('Book', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})
Book.belongsTo(Author, { foreignKey: 'authorId', as: 'author' })

export default Book