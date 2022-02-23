//importo la clase CONTENEDOR para poder usarlas
const ContenedorTXT = require("./modulos/ContenedorTXT.js");
const ContenedorMEMORIA = require("./modulos/ContenedorMEMORIA.js");
const ContenedorBD = require("./modulos/ContenedorBD.js");
const knexBDProductos = require("./DB/db_dbproductos");

//set de datos para poder realizar pruebas 
const productos = [     
    {title:'Escuadra 2', price:123.45, type:'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'},
    {title:'Calculadora 2', price:234.56, type:'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png'},
    {title:'Globo Terráqueo 2', price:345.67, type:'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png'},                                                                                                                                                
];

//creo funcion para probar ya que await solo es válido en funcion async
function main(){

    // TESTING DEL save(Object): Number  Y getAll(): Object[] (save llama a getall)
    //recorro el archivo Productos.txt y lo cargo en el archivo.
    //const contenedorProductos = new ContenedorTXT("./productos.txt");
    //const contenedorProductos = new ContenedorMEMORIA();
    const contenedorProductos = new ContenedorBD(knexBDProductos, "productos");

    //creo la tabla
    try{
  //      contenedorProductos.crearTablaProductos();
    }
    catch(error){
        console.log(error.message);
    }    

    //doy de alta algunos productos definidos anteriormente
    try{
        for (const producto of productos) {
  //          await contenedorProductos.save(producto);  
        }
    }
    catch(error){
        console.log(error.message);
    }     

    // TESTING DEL getById(Number): Object 
    console.log("\n1- Mostrar el objeto del id 1 (getById(Number): Object )");
    contenedorProductos.getById(1).then(objeto1 => console.log(objeto1)).catch(error=>console.log(error.message)); 
    
    //TESTING DEL deleteById(Number): void
    //console.log("\n2- Borrar el objeto del id 2 (deleteById(Number): void)");
    //contenedorProductos.deleteById(2).then(() => console.log(" Se borró el objeto con id 2")).catch(error=>console.log(error.message));
    
    // TESTING del getAll
    //console.log("\n3- Mostrar todos los productos (getAll(): Object )");
    //contenedorProductos.getAll().then(objeto1 => console.log(objeto1)).catch(error=>console.log(error.message)); 
           
    //TESTING DEL  deleteAll(): void 
    //console.log("\n4- Borrar el contenido del archivo (deleteAll(): void )"); 
    //contenedorProductos.deleteAll().then(()=>console.log(" Se borró todo el contenido del archivo Productos")); 

 
}

//ejecuto la funcion principal
main();