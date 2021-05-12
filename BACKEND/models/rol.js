const {Schema, model} =  require('mongoose')

const RoleSchema = Schema({
    rol:{
        type:String,
        required:true
    }
})  

module.exports = model('roles', RoleSchema)