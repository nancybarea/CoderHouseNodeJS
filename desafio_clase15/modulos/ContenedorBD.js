//Clase CONTENEDOR para BASE DE DATOS
class Contenedor{

    //constructor
    constructor(objConexion, tablaBD){

        this.objConexion = objConexion;
        this.tablaBD = tablaBD;
        
        if (tablaBD = "productos"){            
           // this.crearTablaProductos();
        }else{
            console.log("No existe metodo con el nombre de la tabla enviado");
        }

    }

    //crear tabla Productos    
    crearTablaProductos(){
        
        this.objConexion.schema.dropTableIfExists("productos").then(() => {
            this.objConexion.schema
            .createTable("productos", (table) => {
                table.increments("id").primary().notNullable();
                table.string("title");
                table.float("price");
                table.string("type");
            })
            .then((data) => {
                console.log("La tabla de productos fue creada correctamente");
            })
            .catch((err) => {
                Promise.reject(new Error(`La tabla no fue creada. sqlMessage: ${err.sqlMessage} - error sql ${err.sql}`));
            })
            .finally(() => {
                this.objConexion.destroy();
            });
        });

    }
  

    //getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo
    async getAll(){
        try{
            this.objConexion("productos")
            .select("id", "title", "price", "type")
            .then((rows) => {
                let arrProductos = [];
                let objProductoOUT; 
                for (let row of rows) {
                    objProductoOUT =  {   
                        id:row.id,
                        title:row.title,
                        price:row.price,
                        type:row.type,
                    };
                    arrProductos.push(objProductoOUT)
                }
                console.log(arrProductos);
                return Promise.resolve(arrProductos);
            })
            .catch((err) => {
                Promise.reject(new Error(`Error en el método "getAll" error sqlMessage: ${err.sqlMessage} - error sql ${err.sql} - error msg ${err.message}`));
            })
            .finally(() => {
                this.objConexion.destroy();
            });
            }
        catch(error){
            //throw Error(`Error en el método "getAll": ${error.message}`);
            Promise.reject(new Error(`Error en el método "getAll": ${error.message}`));
        }        
    }

    //save(Object): Number - Recibe un objeto, lo guarda en la base de datos, devuelve el id asignado
    async save(object){
        if(object != undefined){ // si el objeto existe
            try{
                this.objConexion("productos")
                .insert(object)
                .then((object) => {
                    console.log(object);
                    console.log("Agrego nuevo registro correctamente");
                    return Promise.resolve(object.id);//devuelvo el id del nuevo objeto
                })
                .catch((err) => {
                    Promise.reject(new Error(`Error en el método "getAll" error sqlMessage: ${err.sqlMessage} - error sql ${err.sql}`));
                })
                .finally(() => {
                    this.objConexion.destroy();
                });
            }
            catch(error){
                //throw Error(`Error en el método "save 22222": ${error.message}`);
                Promise.reject(new Error(`Error en el método "save": ${error.message}`));
            }
        }else{
            Promise.reject(new Error(`Error en el método "save": No existe el objeto recibido`));
        }   
    }

    //getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
    async getById(id){

        return new Promise ((res, rej) => {
            if(id!==undefined && typeof(id) === "number"){ //valido el valor ingresado

                let arrProductos = [];
                let objProductoOUT;

                this.objConexion("productos")
                .select("id", "title", "price", "type")
                .where("id", "=", id)
                .then ( (rows) => {
                    for (let row of rows) {
                       objProductoOUT =  {   
                            id:row.id,
                            title:row.title,
                            price:row.price,
                            type:row.type
                        };
                       arrProductos.push(objProductoOUT);
                    }
                   
                    if(arrProductos!==undefined){   
                        console.log(`El producto con : ${id} fue encontrado`);   
                        console.log(arrProductos);  
                                        
                        res(arrProductos);
                    }else{
                        console.log(`El producto con : ${id} no existe`);
                        res(null);;
                    }
                    
                })
                .catch((err) => {
                    Promise.reject(new Error(`Error en el método "getById" error sqlMessage: ${err.sqlMessage} - error sql ${err.sql} - error Msg ${err.message}`));
                })
                .finally(() => {
                    this.objConexion.destroy();
                });
            }else{
                //throw Error(`Error en el método "getById": El id ingresado es inválido`);
                Promise.reject(new Error(`Error en el método "getById": El id ingresado es inválido`));
            }
        });
    

/*
        try{
            if(id!==undefined && typeof(id) === "number"){ //valido el valor ingresado

                let arrProductos = [];
                let objProductoOUT;

                this.objConexion("productos")
                .select("id", "title", "price", "type")
                .where("id", "=", id)
                .then ( (rows) => {
                    for (let row of rows) {
                       objProductoOUT =  {   
                            id:row.id,
                            title:row.title,
                            price:row.price,
                            type:row.type
                        };
                       arrProductos.push(objProductoOUT);
                    }
                   
                    if(arrProductos!==undefined){   
                        console.log(`El producto con : ${id} fue encontrado`);   
                        console.log(arrProductos);  
                                        
                        return arrProductos;
                    }else{
                        console.log(`El producto con : ${id} no existe`);
                        return null;
                    }

                })
                .catch((err) => {
                    Promise.reject(new Error(`Error en el método "getById" error sqlMessage: ${err.sqlMessage} - error sql ${err.sql} - error Msg ${err.message}`));
                })
                .finally(() => {
                    this.objConexion.destroy();
                });

            }else{
                //throw Error(`Error en el método "getById": El id ingresado es inválido`);
                Promise.reject(new Error(`Error en el método "getById": El id ingresado es inválido`));
            }
        }
        catch(error){
            //throw Error(`Error en el método "getById": ${error.message}`);
            Promise.reject(new Error(`Error en el método "getById": ${error.message}`));
        }
    */
    }

    //deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
    async deleteById(id){
        try{
            if(id!==undefined && typeof(id) === "number"){//valido el valor ingresado
                this.objConexion("productos")
                .where("id", "=", id)
                .del()
                .then(
                    console.log (`registro con id ${id} borrado`)
                )
                .catch((err) => {
                    Promise.reject(new Error(`Error en el método "getAll" error sqlMessage: ${err.sqlMessage} - error sql ${err.sql}`));
                })
                .finally(() => {
                    this.objConexion.destroy();
                });          
            }else{
                //throw Error(`Error en el método "deleteById": El id ingresado es inválido`);
                Promise.reject(new Error(`Error en el método "deleteById": El id ingresado es inválido`));
            }
        }
        catch(error){
            //throw Error(`Error en el método "deleteById": ${error.message}`);
            Promise.reject(new Error(`Error en el método "deleteById": ${error.message}`));
        }
        
    }

    //deleteAll(): void - Elimina todos los objetos presentes en el archivo.
    async deleteAll(){
        try{
            this.objConexion("productos")
            .del()
            .then(
                console.log (`Todos los registros de la tabla "productos" fueron borrados correctamente`)
            )
            .catch((err) => {
                Promise.reject(new Error(`Error en el método "getAll" error sqlMessage: ${err.sqlMessage} - error sql ${err.sql}`));
            })
            .finally(() => {
                this.objConexion.destroy();
            });    
        }
        catch(error){
            //throw Error(`Error en el método "deleteAll": ${error.message}`);
            Promise.reject(new Error(`Error en el método "deleteAll": ${error.message}`));
        }
    }
}

//Exporto la clase CONTENEDOR para poder usarla desde main.js
module.exports = Contenedor;