import sequelize from 'sequelize'
const { DataTypes } = sequelize

import dbConnector from "../models/_dbConnector.js"
// import Book from "../models/book.model.js"

const Author = dbConnector.define('Author', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

// Author.hasMany(Book, { foreignKey: 'authorId' })

export default Author