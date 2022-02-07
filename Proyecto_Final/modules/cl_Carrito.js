//Clase CONTENEDOR que recibe el nombre del archivo
module.exports = class cl_Carrito {

    //array con los productos 
    static #arrCarritos = [
        {
            id: 1,
            productos: [
                {
                id_producto: 1,
                cantidad: 2,
                },
                {
                id_producto: 1,
                cantidad: 1,
                }
            ],        
        },
        {
            id: 2,
            productos: [
                {
                id_producto: 3,
                cantidad: 1,
                },
                {
                id_producto: 2,
                cantidad: 1,
                }
            ],        
        },
    ];

    //obtengo el máximo id (lo uso en setCarrito)
    #getMaxId(){
        return cl_Carrito.#arrCarritos.length === 0 ? 0 : cl_Carrito.#arrCarritos.reduce((acum,proximo)=> acum>proximo.id? acum:proximo.id,0);
    }

    //devuelve todos los carritos 
    getCarritos(){
        return  cl_Carrito.#arrCarritos.length === 0 ? null : cl_Carrito.#arrCarritos;
    }

    //devuelve el contenido de un carrito en particular 
    getProductosCarritoById(idCarrito){
        return idCarrito != undefined && typeof(idCarrito) === "number" ? cl_Carrito.#arrCarritos.find(carrito=> carrito.id === idCarrito): null;
    }

    //crea carrito y devuelve el objeto con el nuevo id asignado
    setCarrito(){
        let id = this.#getMaxId(); //obtengo el máximo id del array de carritos
        id++; //sumo en 1 para asginar al nuevo carrito      
        //armo el objetoCarritoNuevo
        let objCarritoNuevo =  {   
            id:id,
            productos: [{}],
        };
        cl_Carrito.#arrCarritos.push(objCarritoNuevo); // lo agrego a mi arrayCarritos
        return objCarritoNuevo; // lo devuelvo con el nuevo id asignado  
    }

    //agrego un producto al carrito
    agregarProductoCarrito(idProducto,objCarrito){
        console.log("cl_Carrito.js: agregarProductoCarrito: INCIO")
        console.log("El producto agregar: " + idProducto)
        console.log(objCarrito)

        if(objCarrito.id != undefined && 
          (idProducto != undefined && typeof(idProducto) === "number")){
            
            //valido con el idProducto exista (tengo q ver en el array de productos o llamar metodo productos)
            //PENDIENTE AGREGAR

            //busco la posicion en el array del carrito a modificar
            let posicion = cl_Carrito.#arrCarritos.findIndex(carrito=> carrito.id === objCarrito.id);
            
            //si la posicion existe , actualizo
            if( posicion > -1){

                //valido si ya existe.
                //existe, sumo cantidad en 1 
                //no existe, lo agrego
                //agrego el producto nuevo
                console.log(cl_Carrito.#arrCarritos[posicion])
                cl_Carrito.#arrCarritos[posicion].productos.push({
                    id_producto: idProducto,
                    cantidad: 1,
                })
                return true; // retorno OK la actualizacion
            }
        }
        return false; // retorno false si no se cumple nada de lo anterior (ambos if)
    }

    //elimina un producto del carrito
    eliminarProductoCarrito(idProducto,objCarrito){
        if(objCarrito.id != undefined && 
          (idProducto != undefined && typeof(idProducto) === "number")){
            
            //valido con el idProducto exista (tengo q ver en el array de productos o llamar metodo productos)
            //PENDIENTE AGREGAR

            //busco la posicion en el array del carrito a modificar
            let posicion = cl_Carrito.#arrCarritos.findIndex(carrito=> carrito.id === objCarrito.id);
            
            //si la posicion existe , actualizo
            if( posicion > -1){

                 //valido si ya existe.
                //no existe no hago nada o tiro error que no existe producto
                //existe elimino el producto nuevo: recorro array y elimino
                console.log(cl_Carrito.#arrCarritos[posicion])
                cl_Carrito.#arrCarritos[posicion].productos.push({
                    id_producto: idProducto,
                    cantidad: 0,
                })
                return true; // retorno OK la actualizacion
            }
        }
        return false; // retorno false si no se cumple nada de lo anterior (ambos if)
    }

    //elimina un carrito
    deleteProducto(idCarrito){

        if(idCarrito != undefined && typeof(idCarrito) === "number"){
            //obtengo la posicion en el arrayCarritos del id carrito ingresado como parametro
            let posicion = cl_Carrito.#arrCarritos.findIndex(element=> element.id === idCarrito);
            
            if( posicion > -1){
                cl_Carrito.#arrCarritos.splice(posicion,1); //borro producto
                return true; // retorno OK la eliminacion
            }
        }
        return false; // retorno false si no se cumple nada de lo anterior (ambos if)
    }
}

