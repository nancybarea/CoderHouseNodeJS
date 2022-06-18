import Dao from '../Dao.js'
import logger from '../../../logger.js'

export default class DaoMongoDb extends Dao {

    constructor(db, nombre) {
        super(db, nombre)
    }

    async guardar(document) {
        await this.collection.insertOne(document)
    }

    async listarTodas() {
        try {
            return await this.collection.find().project({ _id: 0 }).toArray()
        } 
        catch(error){
            logger.error(error)
        }
    }

    async listarPorId(id) {
        try {
            let query = {"id": id}
            return await this.collection.findOne(query)
        } 
        catch(error){
            logger.error(error)
        }
    }

    
}
