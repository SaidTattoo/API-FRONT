// const dbConfig = require("../config/db.config.js");
// const Sequelize = require("sequelize");

// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//     host: dbConfig.HOST,
//     dialect: dbConfig.dialect,
//     operatorsAliases: false,
  
   
//   });
  
//   const db = {};
  
//   db.Sequelize = Sequelize;
//   db.sequelize = sequelize;
  
  
//   module.exports = db;

// const Lowdb = require('lowdb')

// const FileAsync = require('lowdb/adapters/FileAsync')

// let db

// async function createConnection(){
//     const adapter = new FileAsync('db.json')
//     db = await Lowdb(adapter)
//     db.defaults({
//         task:[],
//         user:[]
//     }).write()
// }
// const getConnection = () => db

// module.exports = {
//     createConnection,getConnection
// }