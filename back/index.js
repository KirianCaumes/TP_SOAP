const soap = require('soap')
const http = require('http')

//https://stackoverflow.com/questions/22884513/simple-webservice-with-node-soap
const service = {
    ws: {
        calc: {
            sumar: function (args) {
                var n = 1 * args.a + 1 * args.b
                return { sumres: n }
            },

            multiplicar: function (args) {
                var n = args.a * args.b
                return { mulres: 'caca' }
            }
        }
    }
}

const server = http.createServer(function (request, response) {
    response.end("404: Not Found: " + request.url)
})

server.listen(8001)
soap.listen(server, '/wscalc1', service, require('fs').readFileSync('myservice.wsdl', 'utf8'))
console.log("Running...")