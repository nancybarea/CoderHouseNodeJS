const express = require("express");
const router = express.Router();
const multer = require("multer");

//creo lugar de almancenamiento 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/') // esta carpeta la tengo q crear sino no la crea y tira error
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })

const upload = multer({ storage: storage }); //instancia de multer

router.get("/",(req, res)=>{
    res.sendFile("public/index.html");
});


router.post("/",upload.single("archivo"),(req,res, next)=>{
    const file = req.file;
    !file ?  res.status(400).send({error:"no se recibio un archivo"}) :  res.send(file);
});


module.exports = router;