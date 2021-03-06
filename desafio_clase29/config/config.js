import dotenv from 'dotenv';
import parseArgs from 'minimist';

const options= {default:{port:8080},alias:{p:"port", m:"modo"}};
const puerto = parseArgs(process.argv,options).port;
const modo = parseArgs(process.argv,options).modo;

dotenv.config();

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || 'localhost',
  //PORT: process.env.PORT || 8080,
  PORT: puerto,
  MODO: modo,
  MONGO_URL: process.env.MONGO_URL||'noURL',
  MONGO_DB: process.env.MONGO_BASE||'ecommerce',
  MONGO_SESSION_URL: process.env.SESSION_URL||'noURL',
  SESSION_MAXAGE: process.env.SESSION_MAXAGE || 600000,
  SECRET:process.env.SECRET || 'Thebestteam9',
  //CORS_ORIG: process.env.CORS_ORIG || '*',
  TIPO_PERSISTENCIA: process.env.TIPO_PERSISTENCIA|| 'Mongo' ,
  
  firebase: {
    "type": "service_account",
    "project_id": "ecommerce-2beb6",
    "private_key_id": "da60a2289fbeec96c6b6511d32ec878b8724d385",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCWjiLBRNy2h6nZ\np0M+16b117r7DcaAIS2oht6sgfSjgLs4h8agPFq1Tdd1IsyOPhRfIXWx1xkwbIPs\n9S7WnNDs+FFAiE+9bwMTUVZXrDoHwKIiqNNFCBOewVZ2UNivC8M4QJxEEVcN5gnW\nDukF6zTH03uNqxZy5322PJ+GPrHKro5KiT40IfbJGf3BTDjXhFPZeNUJ+g9XV9bt\nlBNkkVMzpQbh57W8X4zErZJHRI4B43I38GMea7/my1D546/Rr3LzI6X/cUEulWRn\nJQ/VZyIQ8HFbfuuIJ6GH7+4uC3fUfveDL7bjetLF3NH/8W3K92FUPNg4Kgj6ZvHv\nhDIuAA7TAgMBAAECggEACFro+NrOeN68gVSz+afUHy6StN4F1xSASSr67o3jurMp\nMLDwR/IxgoBIZbrBqV8umDzuICl0v2g2Rg8xQz2+pnf9YlxuOHARtp+77++h5M4+\n8Td3Sgxxsky+dKB19fjsI5IKWgiwURgkEZoQOoDcE/7bi3gkLcpFArkIjVWrXjkN\n4p5Ee03ruz2m+bOkAN7IyHshzEyp5oWaFFeGR9PWhAG1Z6R98KkCZLtRq3OGsm6F\nzSvJJlhRLdsEPuQeGgqYsi+VTL/8YwA5lQrGnTruE6BnKZydjHKAdX6/6vBLKW4P\n2Mx/4UbNHpEF/PpT7MNE9MjK1uGFTc9ZOGPGi0My0QKBgQDNSyhRG0+mXcsP2MO0\npp5kFQ4pMPtziLktD8/MSmBVJIuPXozfZSWcQyPQcP8kJ0xaaXt7qULN4uXnyZrv\nku2OYSdrl1PTNZeTurnCtR7RaaAbn4oXcSVevULjzLr1Hq11OKGDJCRBqoo29JXx\ntjIVbRO2pJ2HjyElUNgytqVkWwKBgQC7vdZBYZL2c8xYT0GEFaxQQAX/TAvBzatc\ng6DCL4KwOJzIAwucMJZIylbWsBtztgslV6vatVIV1JTzXbqjhApFFkthTsFaVdwy\n/H7AocHsYeC3AkoOgdqRoEmxyLL5012PmrPh1Pg4LmM/nFVwLeKq/jH0wy0L/TX1\nvqDPmZSo6QKBgQCctXFqMEnluhUm3JXP0Zx402XC5cQcVlLcZgR+cowEkmgCIe+x\nG7nRBaNSGt94TpNHNNvw8qyvEzPico/VrzethtYbmCGByZgSSehBDBchTdrNG0TD\nTjhzkE9+KqrQMAHCyF7qB22xvqfQ+XV4VFb46hGxSwmBEC4CGStf0vJ/nwKBgBmm\ndDF2nVeitpaSLYdYVrSYKrmYsDqIWRNIwJwHVbmx4mnJULrEQKQtUPQAF6AVjSxK\n8CXvhAmLg9ZERg21KpoJ0761veETvgQRT1gOQaqELOmUHH4i67PdzHPH0fwkDrJi\nFpWSPV+fptu4BkxPWJq4JCcmy27J56dtphb3CsKRAoGBAKMRxVUeN1oJ5Tc85q6n\n0h6ik8785j9CADaGRT679/U+kJz0Sef8qhh+swmBMf8OaeLC23aom8QoqtWOi+ge\nhgT291Q+3l5vBDhsjOW4kZe5gkYtcYMUILVYkoEF4P191vJtmDOq0SfKPRXXnUt2\nfYLgg+539yem4SSu24qeZfU2\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-7ygm4@ecommerce-2beb6.iam.gserviceaccount.com",
    "client_id": "108962276965730903967",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7ygm4%40ecommerce-2beb6.iam.gserviceaccount.com"
  }
  
}
