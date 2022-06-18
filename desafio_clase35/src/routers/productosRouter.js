import { Router } from 'express'
import  * as productosController from '../controllers/productosController.js'


const productosRoutes = new Router();

//GET '/producto' -> devuelve todos los productos
productosRoutes.get('/', productosController.get)
//GET '/producto/:id' -> devuelve un producto según su id.
productosRoutes.get('/:idProducto', productosController.getId)
//POST '/producto' -> recibe y agrega un producto, y lo devuelve con su id asignado
//productosRoutes.post('/', productosController.agregarProducto)
//PUT '/producto/:id' -> recibe y actualiza un producto según su id.
//productosRoutes.put('/:codigoProducto', productosController.actualizarProducto)
//DELETE '/producto/:id' -> elimina un producto según su id.
//productosRoutes.delete('/:codigoProducto', productosController.borrarProducto)

export default productosRoutes 