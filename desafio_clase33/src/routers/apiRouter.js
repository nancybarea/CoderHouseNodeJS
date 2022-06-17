import { Router, json } from 'express'
import personasRouter from './personasRouter.js'

const apiRouter = Router()

apiRouter.use(json())

apiRouter.use('/personas', personasRouter)

export default apiRouter 