const {Router} = require('express')
const { check } = require('express-validator')
const { login, register } = require('../controllers/auth')
const { validarCampos } = require('../middlewares/validarCampos')

const router = Router()
/**

 * 
 * @swagger
 * components:
 *  schemas:
 *    Register:
 *      type: object
 *      properties:
 *          nombre:
 *              type: string
 *          correo: 
 *              type: string
 *          password: 
 *              type: string
 *          img:
 *              type: string
 *          rol: 
 *              type: string
 *          estado: 
 *              type: boolean
 *    Response:
 *      example:
 *        token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
 *        codeResponse: 200
 *        usuario : {
 *          nombre: Said,
 *          correo: said@mail.cl,
 *          img: data:image/jpeg;base64/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTE,
 *          rol: ADMIN_ROLE,
 *          estado: true,
 *        }
 *            
 *    Login:
 *      type: object
 *      properties:
 *        correo:
 *          type: string
 *          description: Correo del propietario de la cuenta
 *        password :
 *          type: string
 *          description: contraseña
 *      required:
 *        - correo
 *        - contraseña
 *      example:
 *        correo: said.tattoo@gmail.com
 *        password : '123456'
 *
 */

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *    summary: Logearse en la plataforma
 *    tags: [Login]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Login'
 *    responses:
 *      200:
 *        description: the tasks was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Response'
 *
 */
router.post('/login',[ 
    check('correo', 'el correo es obligatorio').isEmail(),
    check('password', "el password es obligatorio").not().isEmpty(),
    validarCampos
], login )
/**
 * @swagger
 * /api/auth/register:
 *  post:
 *    summary: Crear una nueva cuenta 
 *    tags: [Login]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Register'
 *    responses:
 *      200:
 *        description: the tasks was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Register'
 *
 */
router.post('/register',[ 
    // check('correo', 'el correo es obligatorio').isEmail(),
    // check('password', "el password es obligatorio").not().isEmpty(),
    // validarCampos
], register)

module.exports = router