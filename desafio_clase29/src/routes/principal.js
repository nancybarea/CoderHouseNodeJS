import { Router } from 'express'

const PrincipalRoutes = new Router();

//GET '/info' -> devuelve info del process
PrincipalRoutes.get("/",(_req,res)=>{

    const objeto = {
        Servidor_express_en_puerto: PORT,
        process_id:process.pid,
        fecha:new Date().toLocaleString(), 
    }

    res.status(200).json(objeto);
});

export default PrincipalRoutes 
