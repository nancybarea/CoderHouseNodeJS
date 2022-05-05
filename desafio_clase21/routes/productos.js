const express = require("express");
const { sendFile } = require("express/lib/response");
const router = express.Router();
const { faker } = require("@faker-js/faker");

const cl_Producto = require("../modules/cl_Producto"); //importo la clase cl_Producto
const cl_ProductoMongo = require("../modules/cl_ProductoMongo"); //importo la clase cl_Producto
const { isConstructorDeclaration } = require("typescript");
const Producto = new cl_Producto();
const ProductoMongo = new cl_ProductoMongo();

const getFormatoAleatorio = id => ({
     id,
     title: faker.name.firstName(),
     price: faker.finance.amount(),
     thumbnail: faker.image.avatar()
   })

//GET '/api/productos' -> devuelve todos los productos 
 router.get("/",(req, res)=>{
     res.status(200).json(Producto.getProductos()); 
});

//GET '/api/productos/mostrarTodos' -> muetra todos los documentos de la coleccion PRODUCTOS de la base de datos MONGO
router.get('/mostrarTodos', async (req, res) => {
    console.log("entro a router.get /productosMongo");
    res.status(200).json( await ProductoMongo.getProductos()); 
})

//GET '/api/productos/mostrarCincoAleatorios' - genera 5 casos aleatorios de PRODUCTOS con faker y los muestra, pero no los guarda
router.get('/mostrarCincoAleatorios', (req, res) => {
    //const numeroElementos = req.query.cant || 5
    const numeroElementos = 5
    const listadoProductosAleatorios = []
    console.log("entro al router GET /productos-test")
    for (let i=0; i < numeroElementos; i++){
        listadoProductosAleatorios.push(getFormatoAleatorio(i))
    }
    res.status(200).json(listadoProductosAleatorios)
})

 //GET '/api/productos/agregarCincoAleatorios' -> genera 5 casos aleatorios de PRODUCTOS con faker, los muestra y guarda en la base de datos MONGO
 router.get("/agregarCincoAleatorios",async (req,res)=>{
    console.log("entro a router.get /productosMongo");
    res.status(200).json( await ProductoMongo.addProductosAleatorios()); 
});


// //GET '/api/productos/:id' -> devuelve un producto según su id.
// router.get("/:idProducto",(req, res)=>{
//     //obtengo el id recibido por parametro
//     let idProducto = parseInt(req.params.idProducto);

//     //valido que el id ingresado sea numerico
//     if ( !isNaN(idProducto) ){
//         let objProductoId = Producto.getProductoById(idProducto);
//         objProductoId != null ? res.status(200).json(objProductoId): res.status(406).json({error:`No se encontró el producto con id: ${idProducto}`});
//     }else{
//         res.status(404).json({error:'El id ingresado no es numerico'});
//     }    
// });

// POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado
// router.post("",(req,res)=>{
//     console.log("LOG router.post (productos.js): inicio ");
//     let objProductoBody = {...req.body};
//     console.log(objProductoBody);
//     //agrego nuevo producto al arrayProductos y devuelvo solo el nuevo obj producto con el id asignado
//     console.log("LOG router.post: creo nuevo producto Producto.setProducto");
//     let objProductoNuevo = Producto.setProducto(objProductoBody);
//     console.log(objProductoNuevo);
//     objProductoNuevo != null ? res.status(200).json(objProductoNuevo) : res.status(406).json({error:'Error al querer agregar el nuevo producto'});
// });

// //PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
// router.put("/:idProducto",(req,res)=>{
//     //obtengo el id recibido por parametro
//     let idProducto = parseInt(req.params.idProducto);
//     let objProductoBody = {...req.body};

//     //actualizo los datos del producto del id recibido
//     Producto.updateProducto(idProducto,objProductoBody) ? res.status(200).json({status:`El producto con Id ${idProducto} fue actualizado correctamente.`}) : res.status(406).json({error:`No se encontró el producto con id: ${idProducto}`});
// });

// //DELETE '/api/productos/:id' -> elimina un producto según su id.
// router.delete("/:idProducto",(req,res)=>{
//     //obtengo el id recibido por parametro
//     let idProducto = parseInt(req.params.idProducto);
    
//     //elimino producto con id enviado como parametro
//     Producto.deleteProducto(idProducto) ? res.status(200).json({status:`El producto con Id ${idProducto} fue eliminado correctamente.`}) : res.status(406).json({error: `No se encontró el producto con id: ${idProducto}`});
// });

module.exports = router;