const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc")
const {dbConnection} = require("../database/config")
const  options  = require("../swaggerOptions")
class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT
    //rutas
    this.usuariosPath = '/api/usuarios'
    this.authPath = '/api/auth'
    this.conectarDB()
    this.middleware()
    this.routes()

  }

  async conectarDB(){
      await dbConnection()
  }

  middleware(){
      this.app.use(cors())
      this.app.use( express.json() );
      const specs = swaggerJSDoc(options)
      this.app.use('/docs',swaggerUI.serve , swaggerUI.setup(specs))
  }

  routes() {
    this.app.use( this.usuariosPath , require('../routes/usuarios')  );
    this.app.use( this.authPath , require('../routes/auth')  );
  }

  listen() {
    this.app.listen( this.port , () => {
      console.log("corriendo en el puerto", this.port );
    });
  }
}

module.exports = Server;
