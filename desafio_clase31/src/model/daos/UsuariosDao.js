import config from '../../../config/config.js'
import MongoUsuariosDao from './Mongo/UsuariosDao.js';
import FirebaseUsuariosDao from './Firebase/UsuariosDao.js';

let baseDeDatos = config.TIPO_PERSISTENCIA;
let usuario;

if (baseDeDatos === "Mongo"){
    usuario = class UsuariosGeneralDao extends MongoUsuariosDao {
        constructor() {
            super()
        }
    }
}else{
    usuario =  class UsuariosGeneralDao extends FirebaseUsuariosDao {
        constructor() {
            super()
        }
    }
}

export default usuario;
