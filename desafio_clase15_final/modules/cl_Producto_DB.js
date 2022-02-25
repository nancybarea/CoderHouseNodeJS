const knex = require("knex");

//Clase de productos para Base de datos
class cl_Producto {

    #conexionDB; //para crear y cerrar conexiones en cada metodo

    constructor (datosConexion, table){
        //this.conexion = knex(dbOptions);
        this.conexion = datosConexion;
        this.datosConexion = datosConexion;
        this.tabla = table;
    
        const arrProductos = [
            {
                id: 1,
                codigo: "A001",
                fechaHora: "01/03/2020 11:11:11",
                nombre: "Arnes",
                descripcion: "arnes de mujer",
                precio: 12500,
                imagenURL: "/images/arnes1_400.jpg",
                stock: 3,
            },
            {
                id: 2,
                codigo: "A001",
                fechaHora: "07/01/2021 11:11:11",
                nombre: "Casco",
                descripcion: "casco grande",
                precio: 18000,
                imagenURL: "/images/casco2_400.jpg",
                stock: 3,
            },
            {
                id: 3,
                codigo: "A001",
                fechaHora: "10/02/2022 11:11:11",
                nombre: "Pédulas",
                descripcion: "pedulas grande",
                precio: 23000,
                imagenURL: "/images/pedula1_400.jpg",
                stock: 3,
            },
        ];

        //creo la tabla 
        //this.crearTablaProductos()
        //.then(
            //cargo productos
            // this.setProducto(arrProductos)
          //  )
    }

    static #arrProductos = []

    //crear tabla Productos    
    async crearTablaProductos(){
    
        return new Promise((res, rej) => {
            this.conexion.schema.dropTableIfExists("productos").then(() => {
                this.conexion.schema
                .createTable("productos", (table) => {
                    table.increments("id").primary().notNullable();
                    table.float("codigo");
                    table.string("fechaHora");
                    table.string("nombre");
                    table.string("descripcion");
                    table.float("precio");
                    table.string("imagenURL");
                    table.float("stock");
                })
                .then((data) => {
                    console.log("La tabla de productos fue creada correctamente");
                })
                .catch((err) => {
                    console.log(`La tabla no fue creada. sqlMessage: ${err.sqlMessage} - error sql ${err.sql}`);
                })
                .finally(() => {
                    this.conexion.destroy();
                });
            }); // this.conexion
        }); // new  Promise
    }

    //obtengo el máximo id (lo uso en setProducto)
    //#getMaxId(){
    //    return cl_Producto.#arrProductos.length === 0 ? 0 : cl_Producto.#arrProductos.reduce((acum,proximo)=> acum>proximo.id? acum:proximo.id,0);
    //}

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
            console.log(`Se agregaron los elementos a la BD ${rtaBD}`);
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