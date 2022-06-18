import { listarProductos, listarProducto } from '../services/productoService.js'
import logger from '../logger.js'

//devuelve todos los productos de la coleccion
export async function get(req, res, next) {
    logger.info(`GET /api/productos`)
    try{
        res.status(200).json(await listarProductos())
    }
    catch (err){
        logger.error(err);
        next(error)
    }
}

//dado un id de producto devuelve los datos de ese producto
export async function getId(req, res, next) {
    logger.info(`GET /api/productos/{idProducto}`)
    try{
        let id = req.params.idProducto;
        res.status(200).json(await listarProducto(id))
    }
    catch (err){
        logger.error(err);
        next(error)
    }
}