const jwt = require("jsonwebtoken");
const Usuario = require("../models/usuario");

const validarJWT = async(req, res, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      msg: "no hay token",
    });
  }
  try {
    const { uid } =  jwt.verify(token , process.env.SECRETKEY)
    //leer el usuario
    const usuario = await Usuario.findById(uid)
    if(!usuario){
        return res.status(401).json({
            msg: "usuario no existe",
        });
    }
    //verificar si el uid esta en estado true
    if(!usuario.estado){
        return res.status(401).json({
            msg: "token no valido",
        });
    }
    //se guarda el usuario en la request 
    req.usuario = usuario
    next();
  } catch (error) {
    return res.status(401).json({
      msg: "token no valido",
    });
  }
};

module.exports = {
  validarJWT,
};
