import express, { json, urlencoded } from 'express';
import session from 'express-session';
import DefaultRoutes from "./routes/default.js";
import UsersRoutes from './routes/usuarios.js';
import ProductosRoutes from './routes/productos.js';
import CarritosRoutes from './routes/carritos.js';
import passport from 'passport';
import {requiereAutenticacion} from "./controller/UsuariosController.js"

const app = express()

app.use(json()) //mdw para extraer el json que viene en las peticiones
app.use(urlencoded({ extended: true }))  //mdw para poder extraer los datos que vienen en la url cuando se envia un formulario (el true para poder enviar objetos anidados)

app.use( //para passport que tambien usa session
    session({
        secret: 'shhhhhhhhhhhhhhh',
        resave: false, 
        saveUninitialized: false,
    })
)

app.use(passport.initialize()) 
app.use(passport.session())

/*****************************************************************************************/

// routes apiRestFull
app.use('/usuario', UsersRoutes)
app.use('/producto', requiereAutenticacion, ProductosRoutes)
app.use('/carrito', requiereAutenticacion, CarritosRoutes)

//routes not found
app.use('/*', DefaultRoutes)

export default app

