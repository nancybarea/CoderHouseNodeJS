const { MongoClient, ObjectId } = require ('mongodb');
const {normalize, denormalize, schema} = require('normalizr')

const mongo_url = 'mongodb+srv://equipo9:Lj30sffXYx13Zy4V@cluster0.tferq.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(mongo_url, { serverSelectionTimeOutMS: 5000 });

//await client.connect();
client.connect();


//Clase de productos para Base de datos 
class cl_MensajesMongo {

    constructor (){
        this.collection = client.db("coderhouse").collection("mensajes")
    }

     //devuelve todos los mensajes
     async getMensajes() {
        try{
            return await this.collection.find().toArray()
        }
        catch(error){
            console.error(`${error}`);
        }
      }


    //Agregar mensajes a la base de datos
      async insertMensaje (objMensaje) {

        try{
            await this.collection.insertOne(objMensaje);            
            console.log("El mensaje fue agregado con exito a la base de datos MONGO")
        }
        catch(error){
            console.error(`${error}`);
        }
    }

    //Agregar mensajes a la base de datos
    async normalizar () {

        try{
            const arrayAutores =  await client.db("coderhouse").collection("autores").find().toArray();
            const arrayMensajes =  await client.db("coderhouse").collection("mensajes").find().toArray();

            const chat = {
                id: 1,
                autor: arrayAutores,
                mensajes: arrayMensajes              
            }

            console.log(chat)

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

            return normalizeObj

        }
        catch(error){
            console.error(`${error}`);
        }
    }

}


module.exports = cl_MensajesMongo;