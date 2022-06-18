import dotenv from 'dotenv';
//import parseArgs from 'minimist';

//const options= {alias:{p:"port", m:"modo"}};
//const puerto = parseArgs(process.argv,options).port;
//const modo = parseArgs(process.argv,options).modo;

dotenv.config();

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || 'localhost',
  //PORT: puerto || process.env.PORT,
  PORT: process.env.PORT || 8080,
  //MODO: modo,
  MONGO_URL: process.env.MONGO_URL||'noURL',
  CNX_STR: 'mongodb+srv://nancy:JuOS3cItRNt1Du2z@cluster0.7ycpm.mongodb.net/?retryWrites=true&w=majority',
  MONGO_DB: process.env.MONGO_BASE||'ecommerce', 
  MONGO_BASE: 'ecommerce',
  MODO_PERSISTENCIA: process.env.MODO_PERSISTENCIA||'mongodb'
}