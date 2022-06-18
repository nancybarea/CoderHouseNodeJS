import { Router, json } from 'express'
import personasRouter from './personasRouter.js'
import productosRoutes from './productosRouter.js'


const apiRouter = Router()

apiRouter.use(json())

apiRouter.use('/personas', personasRouter)
apiRouter.use('/productos', productosRoutes)

export default apiRouter 