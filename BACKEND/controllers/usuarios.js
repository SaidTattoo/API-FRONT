const { request , response} = require('express');
const bcryptjs = require('bcryptjs');

var retricon = require('retricon-without-canvas');
var fmt = require('util').format;

const Usuario = require('../models/usuario');

const usuariosGet = async(req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [ total, usuarios ] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        usuarios
    });
}


const registrarUsuario = async(req, res = response) => {
    
    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });
    //existe email 
    // Encriptar la contraseña
     const salt = bcryptjs.genSaltSync();
     usuario.password = bcryptjs.hashSync( password, salt );
    // Guardar en BD
    await usuario.save();
    res.json({
        codeResponse:200,
        usuario
    });
}

const eliminarUsuario = async( req, res ) => {

    const {id} = req.params
    const usuario = await Usuario.findByIdAndUpdate(id,{estado: false})
    const usuarioAutenticado = req.usuario

    res.json({
        usuario,
        usuarioAutenticado
    })
}


module.exports = {
    usuariosGet,
    registrarUsuario,
    eliminarUsuario
}