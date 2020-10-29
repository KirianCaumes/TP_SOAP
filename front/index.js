import soap from 'soap'
import faker from "faker"

    ;
(async () => {
    /**
     * @typedef {object} Author
     * @property {number=} id
     * @property {string=} firstName Firstname
     * @property {string=} lastName
     */
    /**
     * @typedef {object} Book
     * @property {number=} id
     * @property {string=} title
     * @property {number=} authorId
     * @property {Author=} user
     */

    const authorClient = await soap.createClientAsync('http://localhost:8001/wsauthor?wsdl')
    // console.log(client.describe().ws.author)

    console.log(
        "Get all: ",
        (await authorClient.searchAuthorAsync())?.[0]
    )

    console.log(
        "Create one: ",
        (await authorClient.createAuthorAsync(/** @type {Author} */({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName()
        })))?.[0]
    )

    console.log(
        "Read one by id: ",
        (await authorClient.readAuthorAsync(/** @type {Author} */({
            id: 1
        })))?.[0]
    )

    console.log(
        "Update one by id: ",
        (await authorClient.updateAuthorAsync(/** @type {Author} */({
            id: 1,
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName()
        })))?.[0]
    )

    // console.log(
    //     "Delete one by id: ",
    //     (await authorClient.deleteAuthorAsync(/** @type {Author} */({ id: 1 })))?.[0]
    // )

    const bookClient = await soap.createClientAsync('http://localhost:8001/wsbook?wsdl')
    // console.log(client.describe().ws.book)

    console.log(
        "Get all: ",
        (await bookClient.searchBookAsync())?.[0]
    )

    console.log(
        "Create one: ",
        (await bookClient.createBookAsync(/** @type {Book} */({
            title: faker.lorem.sentence(),
            authorId: 1
        })))?.[0]
    )

    console.log(
        "Read one by id: ",
        (await bookClient.readBookAsync(/** @type {Author} */({
            id: 1
        })))?.[0]
    )

    console.log(
        "Update one by id: ",
        (await bookClient.updateBookAsync(/** @type {Author} */({
            id: 1,
            title: faker.lorem.sentence(),
            authorId: 1
        })))?.[0]
    )

    // console.log(
    //     "Delete one by id: ",
    //     (await bookClient.deleteBookAsync(/** @type {Author} */({ id: 1 })))?.[0]
    // )
})()