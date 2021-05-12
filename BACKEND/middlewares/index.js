const  validarCampos  = require('../middlewares/validarCampos')
const  validarJWT = require('../middlewares/validarJWT')
const validaRoles = require('../middlewares/validarRol')

module.exports = {
    ...validarJWT,
    ...validarCampos,
    ...validaRoles
}
