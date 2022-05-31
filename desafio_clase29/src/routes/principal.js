import { Router } from 'express'
import config from '../../config/config.js'

const PrincipalRoutes = new Router();

PrincipalRoutes.get("/",(_req,res)=>{

     const objeto = {
        puerto:config.PORT,
        process_id:process.pid,
     }

     res.status(200).json(objeto);
});

export default PrincipalRoutes 
