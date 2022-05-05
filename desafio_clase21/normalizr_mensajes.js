const {normalize, denormalize, schema} = require('normalizr')

const chat = {
    id: 1,
    autor: [
        {
            id: 1,
            email: "nancybarea@gmail.com",
            nombre: "Nancy",
            apellido: "Barea"
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
            fecha: '4/5/2022 21:17:04',
            mensaje: "Hola, como estas?"
        }, {
            id: 1001,
            email: "karinasaez@gmail.com",
            fecha: '4/5/2022 21:17:08',
            mensaje: "Hola, como va?"
        }, {
            id: 1002,
            email: 'nancybarea@gmail.com',
            fecha: '4/5/2022 21:17:14',
            mensaje: "nos vemos mañana?"
        }, {
            id: 1003,
            email: 'nancybarea@gmail.com',
            fecha: '4/5/2022 21:17:15',
            mensaje: "tengo la tarde libre"
        }, {
            id: 1004,
            email: 'fernandamurcia@uol.com.ar',
            fecha: '4/5/2022 21:18:04',
            mensaje: "yo puedo"
        }, {
            id: 1005,
            email: "nancybarea@gmail.com",
            fecha: '4/5/2022 21:18:06',
            mensaje: "super"
        }, {
            id: 1006,
            email: "karinasaez@gmail.com",
            fecha: '4/5/2022 21:18:18',
            mensaje: "yo tambien"
        }, {
            id: 1007,
            email: 'nancybarea@gmail.com',
            fecha: '4/5/2022 21:18:19',
            mensaje: "genial, nos vemos!"
        }
    ]
}

const autorSchema = new schema.Entity('autor')
const mensajeSchema = new schema.Entity('mensajes')

const chatSchema = new schema.Entity('chat',{
    autor: [autorSchema],
    mensajes:[mensajeSchema]
})

const normalizeObj = normalize(chat, chatSchema);

// Muestra por pantalla el objeto original
const util = require('util')
function print(objeto) {
     console.log(util.inspect(objeto,false,12,true))
}

console.log("--------- estructra del objeto normalizado ----------")
print(normalizeObj);

console.log("--------- cant original ----------")
console.log(JSON.stringify(chat).length);

console.log("--------- cant normalizado ----------")
console.log(JSON.stringify(normalizeObj).length);

console.log("--------- cant desnormalizado ----------")
const denormalizeObj = denormalize(normalizeObj.result, chatSchema, normalizeObj.entities);
console.log(JSON.stringify(denormalizeObj).length);


console.log("--------- compresion ----------")
console.log((JSON.stringify(normalizeObj).length*100)/JSON.stringify(chat).length);