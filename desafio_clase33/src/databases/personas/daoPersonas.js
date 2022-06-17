import DaoPersonasMemoria from './DaoPersonasMemoria.js'
import DaoPersonasMongoDb from './DaoPersonasMongoDb.js'
import DaoPersonasMySQL from './DaoPersonasMySQL.js'

import { MODO_PERSISTENCIA } from '../../config/config.js'

let daoPersonas
switch (MODO_PERSISTENCIA) {
    case 'mongodb':
        const { db } = await import('../shared/mongodb/mongoClient.js')
        daoPersonas = new DaoPersonasMongoDb(db)
        break
    case 'mysql':
        const { knex } = await import('../shared/sql/knexClient.js')
        daoPersonas = new DaoPersonasMySQL(knex)
        break
    default:
        daoPersonas = new DaoPersonasMemoria()

}

export default daoPersonas