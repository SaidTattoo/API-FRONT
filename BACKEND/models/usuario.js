const { Schema, model } = require('mongoose')

const UsuarioSchema = Schema({
    nombre:{
        type:String,
    },
    correo:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    img:String,
    rol:{
        type:String,
    },
    estado:{
        type:Boolean,
        default:true
    }
})

UsuarioSchema.methods.toJSON = function() {
    const { __v, password,_id, ...usuario  } = this.toObject();
    usuario.uid = _id
    return usuario;
}

module.exports = model('Usuario',UsuarioSchema)