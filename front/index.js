const soap = require('soap')
const url = 'http://localhost:8001/wscalc1?wsdl'

soap.createClientAsync(url)
    .then(client => {
        // console.log(client.describe().ws.calc)

        client.multiplicarAsync({ a: 4, b: 3 })
            .then(val => console.log(val[0]))
            .catch(console.error)

        client.sumarAsync({ a: 4, b: 3 })
            .then(val => console.log(val[0]))
            .catch(console.error)

        return client
    })
    .catch(console.error)