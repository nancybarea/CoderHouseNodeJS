const { MongoClient, ObjectId } = require ('mongodb');
const { faker } = require("@faker-js/faker");

const mongo_url = 'mongodb+srv://equipo9:Lj30sffXYx13Zy4V@cluster0.tferq.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(mongo_url, { serverSelectionTimeOutMS: 5000 });
//await client.connect();
client.connect();

//Clase de productos para Base de datos 
class cl_Producto {

    constructor (){
        this.collection = client.db("coderhouse").collection("productos")
    }

     //devuelve todos los productos
    async getProductos() {
        try{
            const array = await this.collection.find().toArray()
            return array
        }
        catch(error){
            console.error(`${error}`);
        }
      }

    
    async addProductosAleatorios () {

        try{
            let nombre 
            let precio 
            let foto 
            let producto

            //genero datos aleatorios y lo voy agregando uno x uno 
            for (let i = 0; i < 5; i++) {
            nombre = faker.name.firstName();
            precio = faker.finance.amount(); //amount(0,20,0) o sea que va del 0 al 20 y no tiene decimales
            foto = faker.image.avatar();
            producto = {
                    id: i,
                    title: nombre,
                    price: precio,
                    thumbnail: foto,
                }
            // Guardar en BD
            await this.collection.insertOne(producto);
            }
            console.log("Los 5 productos aleatorios fueron agregados con éxito en la base de datos MONGO")
        }
        catch(error){
            console.error(`${error}`);
        }
    }


    // //devuelve un producto según el id ingresado como parametro
    // async getProductoById(idProducto){
       
    //     try{
    //         this.#conexionDB=knex(this.datosConexion);
    //         let rtaBD = await this.#conexionDB(this.tabla).where("id",idProducto);
    //         return rtaBD;
    //     }
    //     catch(error){
    //         console.error(`${error}`);
    //     }
    //     finally{
    //         this.#conexionDB.destroy();
    //     }
    
    // }

    // //recibe y agrega un producto, y lo devuelve con su id asignado
    // async setProducto(objProductoIN){

    //     try{
    //         this.#conexionDB=knex(this.datosConexion);
    //         let rtaBD = await this.#conexionDB(this.tabla).insert(objProductoIN);
    //         console.log(`El producto fue agregado con exito y generó el id producto: ${rtaBD}`);
    //         return rtaBD;
    //     }
    //     catch(error){
    //         console.error(`${error}`);
    //     }
    //     finally{
    //         this.#conexionDB.destroy();
    //     }
  
    // }
    

    // async updateProducto(idProducto,objProducto){

    //     try{
    //         this.#conexionDB=knex(this.datosConexion);
    //         return await this.#conexionDB(this.tabla).where("id",idProducto).update(objProducto);
    //     }
    //     catch(error){
    //         console.error(`${error}`);
    //     }
    //     finally{
    //         this.#conexionDB.destroy();
    //     }

    // }

    // //elimina un producto según su id.
    // async deleteProducto(idProducto){
    //     try{
    //         this.#conexionDB=knex(this.datosConexion);
    //         return await this.#conexionDB(this.tabla).where("id",idProducto).del();
    //     }
    //     catch(error){
    //         console.error(`${error}`);
    //     }
    //     finally{
    //         this.#conexionDB.destroy();
    //     }
    // }

}




module.exports = cl_Producto;