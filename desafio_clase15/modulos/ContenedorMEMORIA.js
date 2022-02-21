//Clase CONTENEDOR que recibe el nombre del archivo
class Contenedor{

    //array con los productos 
    static #arrProductos = [
        {
            id: 1,
            title: "Escuadra",
            price: 200,
            type: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
        },
        {
            id: 2,
            title: "Calculadora",
            price: 150,
            type: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
        },
        {
            id: 3,
            title: "Globo Terráqueo",
            price: 400,
            type: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
        },
    ];

    //obtengo el máximo id (lo uso en save)
    #getMaxId(){
        return Contenedor.#arrProductos.length === 0 ? 0 : Contenedor.#arrProductos.reduce((acum,proximo)=> acum>proximo.id? acum:proximo.id,0);
    }

    //getAll(): Object[] - Devuelve un array con los objetos presentes en memoria (array)
    async getAll(){
        return  Contenedor.#arrProductos.length === 0 ? null : Contenedor.#arrProductos;    
    }

    //save(Object): Number - Recibe un objeto, lo guarda en memoria(array), devuelve el id asignado
    async save(object){
        if(object.title != undefined && 
            (object.price != undefined && parseInt(object.price) != NaN) && 
            (object.type != undefined && object.type != "")){

            let id = this.#getMaxId(); //obtengo el máximo id del array de productos
            id++; //sumo en 1 para asginar al nuevo producto            
            object.id = id; //asigno id al nuevo producto
            
            //armo el objetoProducto a agregar y devolver con el nuevo id asignado
            let objProductoOUT =  {   
                id:object.id,
                title:object.title,
                price:object.price,
                type:object.type,
            };
            Contenedor.#arrProductos.push(objProductoOUT); // lo agrego a mi arrayProductos
            //return objProductoOUT; // lo devuelvo con el nuevo id asignado
            return objProductoOUT.id; //Devuelve el id asignado
        }else{
            return null;
        }
    }

    //getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
    async getById(id){
        return id != undefined && typeof(id) === "number" ? Contenedor.#arrProductos.find(producto=> producto.id === id): null;
    }

    //deleteById(Number): void - Elimina de memoria(array) el objeto con el id buscado.
    async deleteById(id){

        if(id != undefined && typeof(id) === "number"){
            //obtengo la posicion en el arrayProductos del id producto ingresado como parametro
            let posicion = Contenedor.#arrProductos.findIndex(element=> element.id === id);
            
            if( posicion > -1){
                Contenedor.#arrProductos.splice(posicion,1); //borro producto
                return true; // retorno OK la eliminacion
            }
        }
        return false; // retorno false si no se cumple nada de lo anterior (ambos if)
        
    }

    //deleteAll(): void - Elimina todos los objetos presentes en memoria(array).
    async deleteAll(){
        Contenedor.#arrProductos = [];
    }
}

//Exporto la clase CONTENEDOR para poder usarla desde main.js
module.exports = Contenedor;