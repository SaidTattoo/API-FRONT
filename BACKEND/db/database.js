const Lowdb = require('lowdb')

const FileAsync = require('lowdb/adapters/FileAsync')

let db

async function createConnection(){
    const adapter = new FileAsync('db.json')
    db = await Lowdb(adapter)
    db.defaults({
        task:[],
        user:[]
    }).write()
}
const getConnection = () => db


module.exports = {
    createConnection,getConnection
}