import ContainerDao from './ContainerDao.js';


export default class UsuariosDao extends ContainerDao {

  constructor() {
    super('users')
  }
  
    async usuarioPorEmail(email) {
      
      let wanted
      let query= {"email": email};
     
      try {
          wanted = await this.collection.findOne(query);
      }
      catch (err) {
          throw new CustomError(500, `Error when obtaining a Document by code in the collection ${this.collectionName}`, err)
      }
  
      if (!wanted) {
          throw new CustomError(404, `Document not found with that ${JSON.stringify(query)}`)
      }
      return wanted
  
      } 

}