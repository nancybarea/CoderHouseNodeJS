const express = require("express");
const router = express.Router();

router.get("",(req,res)=>{res.status(200).send({method:req.method,status:"ok"})}); //lo agregue para probar en el navegador antes de ir a postman
router.post("",(req,res)=>{res.status(200).send({method:req.method,status:"ok"})});
router.put("",(req,res)=>{res.status(200).send({method:req.method,status:"ok"})});
router.delete("",(req,res)=>{res.status(200).send({method:req.method,status:"ok"})});

module.exports = router;