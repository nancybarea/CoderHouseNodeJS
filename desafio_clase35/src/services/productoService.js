//import { crearProducto} from '../models/productoModel.js'
import daoProductos from '../databases/productos/daoProductos.js'

export async function listarProductos() {
    return await daoProductos.listarTodas()
}

export async function listarProducto(id) {
    return await daoProductos.listarPorId(id)
}