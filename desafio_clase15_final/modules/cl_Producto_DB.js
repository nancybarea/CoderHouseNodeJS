const knex = require("knex");

//Clase de productos para Base de datos
class cl_Producto {

    #conexionDB; //para crear y cerrar conexiones en cada metodo

    constructor (datosConexion, table){
        this.datosConexion = datosConexion;
        this.tabla = table;
    }

     //crear tabla Productos    
    async crearTablaProductos(){
        
        console.log("crearTablaProductos - Inicio")
        
        this.#conexionDB.schema.hasTable(this.tabla)
        .then(function (exists) {
            if (!exists) {
              console.log("La tabla PRODUCTOS no existe => la creo");
              this.#conexionDB.schema
                .createTable(this.tabla, (campo) => {
                    campo.increments("id").primary().notNullable();
                    campo.float("codigo");
                    campo.string("fechaHora");
                    campo.string("nombre");
                    campo.string("descripcion");
                    campo.float("precio");
                    campo.string("imagenURL");
                    campo.float("stock");
                })
                .then((data) => {
                  console.log("La tabla PRODUCTOS fue creada correctamente");
                })
                .catch((err) => {
                  console.log(err.sqlMessage);
                  console.log(err.sql);
                })
                .finally(() => {
                    this.#conexionDB.destroy();
                });
            } else {
                console.log("La tabla PRODUCTOS ya existe => no la creo");
            }
          });
              
    }

     //devuelve todos los productos
    async getProductos() {

        console.log("getProductos - INICIO")
        try{
            this.#conexionDB=knex(this.datosConexion);
            let rtaBD = await this.#conexionDB(this.tabla)
            return rtaBD; 
        }
        catch(error){
            //console.error(error.sqlMessage);
            //console.error(error.sql);
            console.error(`${error}`);
        }
        finally{
            this.#conexionDB.destroy();
        }
      };


    //devuelve un producto según el id ingresado como parametro
    async getProductoById(idProducto){
       
        try{
            this.#conexionDB=knex(this.datosConexion);
            let rtaBD = await this.#conexionDB(this.tabla).where("id",idProducto);
            return rtaBD;
        }
        catch(error){
            console.error(`${error}`);
        }
        finally{
            this.#conexionDB.destroy();
        }
    
    }

    //recibe y agrega un producto, y lo devuelve con su id asignado
    async setProducto(objProductoIN){

        try{
            this.#conexionDB=knex(this.datosConexion);
            let rtaBD = await this.#conexionDB(this.tabla).insert(objProductoIN);
            console.log(`El producto fue agregado con exito y generó el id producto: ${rtaBD}`);
            return rtaBD;
        }
        catch(error){
            console.error(`${error}`);
        }
        finally{
            this.#conexionDB.destroy();
        }
  
    }
    

    async updateProducto(idProducto,objProducto){

        try{
            this.#conexionDB=knex(this.datosConexion);
            return await this.#conexionDB(this.tabla).where("id",idProducto).update(objProducto);
        }
        catch(error){
            console.error(`${error}`);
        }
        finally{
            this.#conexionDB.destroy();
        }

    }

    //elimina un producto según su id.
    async deleteProducto(idProducto){
        try{
            this.#conexionDB=knex(this.datosConexion);
            return await this.#conexionDB(this.tabla).where("id",idProducto).del();
        }
        catch(error){
            console.error(`${error}`);
        }
        finally{
            this.#conexionDB.destroy();
        }
    }

}




module.exports = cl_Producto;