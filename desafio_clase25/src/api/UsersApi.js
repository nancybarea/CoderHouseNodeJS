import UsuariosDao from '../model/daos/UsuariosDao.js';

export default class UsuariosApi {

    constructor() {
        this.usuariosDao = new UsuariosDao();
    }

    async getUsuarios() {
        const usuariosObj = await this.usuariosDao.getAll();
        return usuariosObj;
    }   

    //dado el email devuelve el objeto usuario (incluido el password)
    async obtenerUsuarioPorEmail(email) {
        try{
            const usuario = await this.usuariosDao.usuarioPorEmail(email);
            return usuario
        }
        catch (err){
            throw new CustomError(401, `Error autenticacion`, err)
        }
    }

    //alta de usuario nuevo
    async crearUsuario(objetoUsuario){
   
        if (!objetoUsuario.email) throw new CustomError(404, `El campo 'email' es obligatorio `)
        if (!objetoUsuario.password) throw new CustomError(404, `El campo 'password' es obligatorio `)
        
        try{
            const usuario = await this.usuariosDao.add(objetoUsuario);
            return usuario
        }
        catch (err){
            throw new CustomError(401, `Error al crear el usuario`, err)
        }

    }

}