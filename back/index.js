import soap from "soap"
import http from "http"
import { bookService } from "./services/book.service.js"
import { authorService } from "./services/author.service.js"
import fs from "fs"

import Book from "./models/book.model.js"
import Author from "./models/author.model.js"
Book.sync()
Author.sync()

//https://stackoverflow.com/questions/22884513/simple-webservice-with-node-soap
const server = http.createServer((request, response) =>
    response.end("404: Not Found: " + request.url)
)

server.listen(8001)

soap.listen(server, '/wsauthor', authorService, fs.readFileSync('./wsdl/author.wsdl', 'utf8'))
soap.listen(server, '/wsbook', bookService, fs.readFileSync('./wsdl/book.wsdl', 'utf8'))

console.log("Server running...")