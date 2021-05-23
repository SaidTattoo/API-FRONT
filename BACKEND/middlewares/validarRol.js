const { response } = require("express");

const esAdminRole = (req, res = response, next) => {
  if (!req.usuario) {
    return res.status(500).json({
      msg: "se quiere verificar el rol sin validar el token",
    });
  }
  const { rol, nombre } = req.usuario;
  if (rol !== "ADMIN_ROLE") {
    return res.status(401).json({
      msg: `El usuario ${nombre} no tiene el rol de administrador`,
    });
  }
  next();
};

const tieneRole = (...roles ) => {

  return (req, res, next) => {
    if (!req.usuario) {
      return res.status(500).json({
        msg: "se quiere verificar el rol sin validar el token",
      });
    }

    if(!roles.includes(req.usuario.rol)){
      return res.status(401).json({
        msg: `tu rol es ${req.usuario.rol} y El servicio requiere uno de estos roles ${roles}`,
      });
    }
    console.log(roles, req.usuario.rol)
    next()
  }

} 

module.exports = {
  esAdminRole,
  tieneRole
};
