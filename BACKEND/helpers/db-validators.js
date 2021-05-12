const roles = require("../models/rol");
const Usuario = require("../models/usuario")


const rolValido = async (rol = "") => {
  const existeRol = await roles.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El rol ${rol} no esta registrado en la base de datos `);
  }
};

const emailExiste = async (correo = "") => {
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    throw new Error(`El correo ${correo} ya esta registrado`);
  }
};

module.exports = {
  rolValido,
  emailExiste
};
