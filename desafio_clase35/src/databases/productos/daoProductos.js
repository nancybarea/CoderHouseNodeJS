import DaoProductosMemoria from './daoProductosMemoria.js'
import DaoProductosMongoDb from './daoProductosMongoDb.js'

import config from '../../config/config.js'

let daoProductos

switch (config.MODO_PERSISTENCIA) {
    case 'mongodb':
        const { db } = await import('../shared/mongodb/mongoClient.js')
        daoProductos = new DaoProductosMongoDb(db)
        break
    default:
        daoProductos = new DaoProductosMemoria()

}

export default daoProductos