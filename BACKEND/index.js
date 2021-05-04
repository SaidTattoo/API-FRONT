const app = require('./app')
const {createConnection} = require('./db/database')

createConnection()

 function main () {
     app.listen(3000)
    console.log('running on port', 3000)
}
main ()