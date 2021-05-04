const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const AvatarGenerator = require('avatar-generator')
app.use(bodyParser.json());

var cors = require('cors')
app.use(cors())
//npm init -> te crea el package json
//express "npm i express"


//rutas tipo get, post, put, delete
app.get('/',(request, response) => {
    response.json({
        id:1,
        nombre: "tonijua",
        direccion:'renca',
        creado: new Date()
    })
})  

app.post('/', async (request, response) => {
    if(request.body.name == "" || request.body.image == ""){
        response.json({
            codeResponse:100,
            data:{
                message:'no se ingresaron ambos campos'
            }
        })
    }else{
        response.json({
            codeResponse:200,
            data:{
                message:'no se ingresaron ambos campos'
            }
        })
    }
})

app.listen('3000')