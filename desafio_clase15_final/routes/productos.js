const express = require("express");
const { sendFile } = require("express/lib/response");
const router = express.Router();

//productos en base de datos
const cl_Producto = require("../modules/cl_Producto_DB"); //importo la clase cl_Producto

const Producto = new cl_Producto(
  {
      client: "mysql",
      connection: {
          host: "127.0.0.1",
          database: "bdproductos",
          port: 3307,
      },
       pool: { min: 0, max: 7 },
  },
  "productos"
);
// const ProductoSqlite = new cl_Producto(
//  {
//    client: "sqlite3",
//    connection: { filename: "./DB/mydb.sqlite" },
//  },
//  "productos"
// );


//GET '/api/productos' -> devuelve todos los productos
router.get("/", async (req, res)=>{
    
    console.log("router.get - INICIO");
    res.status(200).json(await Producto.getProductos());
    
});


//GET '/api/productos/:id' -> devuelve un producto según su id.
router.get("/:idProducto",async (req, res)=>{
    console.log("router.get x idProducto - INICIO");
        
    //obtengo el id recibido por parametro
    let idProducto = parseInt(req.params.idProducto);

    //valido que el id ingresado sea numerico
    if ( !isNaN(idProducto) ){

        res.status(200).json(await Producto.getProductoById(idProducto));

    }else{
        res.status(404).json({error:'El id ingresado no es numerico'});
    }    
});

//POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado
router.post("", (req,res)=>{
    console.log("LOG router.post (productos.js): inicio ");
    let objProductoBody = {...req.body};
    console.log(objProductoBody);
    //agrego nuevo producto al arrayProductos y devuelvo solo el nuevo obj producto con el id asignado
    console.log("LOG router.post: creo nuevo producto Producto.setProducto");
    //let objProductoNuevo = Producto.setProducto(objProductoBody);

    let objProductoNuevo =  Producto.setProducto(objProductoBody) //obtengo una promesa 
    .then((rows) => {
        res.status(200).json(rows)
    })
    .then( () => {
        console.log(objProductoNuevo);
    })
    .catch(() => {
        res.status(404).json({error:'Error al querer guardar todos los productos'});
    })
    Producto.cerrarConexion();
    objProductoNuevo != null ? res.status(200).json(objProductoNuevo) : res.status(406).json({error:'Error al querer agregar el nuevo producto'});

 });

//PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
router.put("/:idProducto",(req,res)=>{
    //obtengo el id recibido por parametro
    let idProducto = parseInt(req.params.idProducto);
    let objProductoBody = {...req.body};

    //actualizo los datos del producto del id recibido
    Producto.updateProducto(idProducto,objProductoBody) ? res.status(200).json({status:`El producto con Id ${idProducto} fue actualizado correctamente.`}) : res.status(406).json({error:`No se encontró el producto con id: ${idProducto}`});
});

//DELETE '/api/productos/:id' -> elimina un producto según su id.
router.delete("/:idProducto",(req,res)=>{
    //obtengo el id recibido por parametro
    let idProducto = parseInt(req.params.idProducto);
    
    //elimino producto con id enviado como parametro
    Producto.deleteProducto(idProducto) ? res.status(200).json({status:`El producto con Id ${idProducto} fue eliminado correctamente.`}) : res.status(406).json({error: `No se encontró el producto con id: ${idProducto}`});
});

module.exports = router;