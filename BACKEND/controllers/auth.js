const { response } = require("express");
const Usuario = require("../models/usuario");
const bcryptjs = require("bcryptjs");
const { generarJWT } = require("../helpers/generarJWT");
const login = async (req, res = response) => {
  const { correo, password } = req.body;

  try {
    //existe el email
    const usuario = await Usuario.findOne({ correo });
    if (!usuario) {
      return res.status(400).json({
        codeResponse:400,
        msg: "usuario | password no son correctos",
      });
    }
    //esta activo el usuario
    if (!usuario.estado) {
      return res.status(400).json({
        codeResponse:400,
        msg: "usuario | password no son correctos",
      });
    }
    //verificar password
    const validPassword = bcryptjs.compareSync(password, usuario.password);
    if (!validPassword) {
      return res.status(400).json({
        codeResponse:400,
        msg: "usuario | password no son correctos",
      });
    }
    //generar token
    const token = await generarJWT(usuario.id)

    res.json({
      codeResponse:200,
      usuario:usuario,
      token:token
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      codeResponse:500,
      msg: "hable con el administrador",
    });
  }
};

const register = async(req, res = response) => {
  const { nombre, correo, password, rol ,img} = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol , img});
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync( password, salt );
 // Guardar en BD
 await usuario.save();
    res.json({
        codeResponse:200,
        usuario
    });
    console.log(req.body)
}

module.exports = {
  login,
  register
};
