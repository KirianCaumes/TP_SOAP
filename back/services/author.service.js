import Author from "../models/author.model.js"

export const authorService = {
    ws: {
        author: {
            searchAuthor: async () => {
                return (await Author.findAll())?.map(x => x.toJSON()) ?? {}
            },
            createAuthor: async args => {
                try {
                    return (await Author.create(args))?.toJSON() ?? {}
                } catch (error) {
                    console.log(error)
                    return null
                }
            },
            readAuthor: async args => {
                try {
                    return (await Author.findByPk(args.id))?.toJSON() ?? {}
                } catch (error) {
                    console.log(error)
                    return null
                }
            },
            updateAuthor: async args => {
                try {
                    await Author.update(
                        { ...args },
                        { where: { id: args.id } }
                    )
                    return (await Author.findByPk(args.id))?.toJSON() ?? {}
                } catch (error) {
                    console.log(error)
                    return null
                }
            },
            deleteAuthor: async args => {
                try {
                    await Author.destroy({
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