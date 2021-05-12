const {Router} = require('express')

const { check } = require('express-validator')

const {
    validarCampos,
    validarJWT,
    esAdminRole,
    tieneRole
} = require('../middlewares/index')


const { rolValido, emailExiste } = require('../helpers/db-validators')
const { usuariosGet , registrarUsuario, eliminarUsuario } = require('../controllers/usuarios')
const router = Router()

router.get('/', usuariosGet )

router.delete('/:id', [
    validarJWT,
    //esAdminRole,
    tieneRole('ADMIN_ROLE','VENTAS_ROLE'),
    check("id", "no es un id valido").isMongoId(),
] ,eliminarUsuario )

router.post('/', [
    check('nombre', 'el nombre  es obligatorio').not().isEmpty(),
    check('correo').custom( emailExiste ), 
    check('correo', 'el correo no es valido').isEmail(),
    check('password', "el password es obligatorio y mas de 6 letras").isLength({min:6}),
   // check('rol', 'el correo no es valido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom( rolValido ), 
   validarCampos
] ,registrarUsuario)

module.exports = router

