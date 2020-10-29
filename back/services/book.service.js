import Author from "../models/author.model.js"
import Book from "../models/book.model.js"

export const bookService = {
    ws: {
        book: {
            searchBook: async () => {
                return (await Book.findAll({ include: [{ model: Author, as: 'author' }] }))?.map(x => x.toJSON()) ?? {}
            },
            createBook: async args => {
                try {
                    const { id } = /** @type {any} */(await Book.create(args))?.toJSON()
                    return (await Book.findByPk(id, { include: [{ model: Author, as: 'author' }] }))?.toJSON() ?? {}
                } catch (error) {
                    console.log(error)
                    return null
                }
            },
            readBook: async args => {
                try {
                    return (await Book.findByPk(args.id, { include: [{ model: Author, as: 'author' }] }))?.toJSON() ?? {}
                } catch (error) {
                    console.log(error)
                    return null
                }
            },
            updateBook: async args => {
                try {
                    await Book.update(
                        { ...args },
                        { where: { id: args.id } },
                    )
                    return (await Book.findByPk(args.id, { include: [{ model: Author, as: 'author' }] }))?.toJSON() ?? {}
                } catch (error) {
                    console.log(error)
                    return null
                }
            },
            deleteBook: async args => {
                try {
                    await Book.destroy({
                        where: {
                            id: args.id
                        }
                    })
                    return
                } catch (error) {
                    console.log(error)
                    return null
                }
            }
        }
    }
}