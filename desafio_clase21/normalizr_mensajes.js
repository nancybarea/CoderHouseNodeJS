const {normalize, denormalize, schema} = require('normalizr')

const chat = {
    id: 1,
    autor: [
        {
            id: 1,
            email: "nancybarea@gmail.com",
            nombre: "pepe",
            apellido: "perez"
        }, {
            id: 2,
            email: "karinasaez@gmail.com",
            nombre: "Karina",
            apellido: "Saez"
        }, {
            id: 3,
            email: "fernandamurcia@uol.com.ar",
            nombre: "Fernanda",
            apellido: "Murcia"
        }
    ],
    mensajes: [
        {
            id: 1000,
            email: "nancybarea@gmail.com",
            fecha: '7 de Abril 2022',
            mensaje: "Hola, como estas?"
        }, {
            id: 1001,
            email: "karinasaez@gmail.com",
            fecha: '7 de Abril 2022',
            mensaje: "Hola, como va?"
        }, {
            id: 1002,
            email: 'nancybarea@gmail.com',
            fecha: '7 de Abril 2022',
            mensaje: "nos vemos mañana?"
        }, {
            id: 1003,
            email: 'nancybarea@gmail.com',
            fecha: '7 de Abril 2022',
            mensaje: "tengo la tarde libre"
        }, {
            id: 1004,
            email: 'fernandamurcia@uol.com.ar',
            fecha: '7 de Abril 2022',
            mensaje: "yo puedo"
        }
    ]
}

const emailSchema = new schema.Entity('email')
const mensajeSchema = new schema.Entity('mensajes')

const postSchema = new schema.Entity('post',{
    email: [emailSchema],
    mensajes:[mensajeSchema]
})

const chatSchema = new schema.Entity('chat',{
    chat:[postSchema]
})


const normalizeObj = normalize(chat, postSchema);

// Muestra por pantalla el objeto original
const util = require('util')
function print(objeto) {
     console.log(util.inspect(objeto,false,12,true))
}

console.log("--------- objeto original ----------")
console.log(JSON.stringify(chat).length);

console.log("--------- objeto normalizado ----------")
console.log(JSON.stringify(normalizeObj).length);
print(normalizeObj);

console.log("--------- objeto desnormalizado ----------")
const denormalizeObj = denormalize(normalizeObj.result, postSchema, normalizeObj.entities);
console.log(JSON.stringify(denormalizeObj).length);