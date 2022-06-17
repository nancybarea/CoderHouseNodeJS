import { Router } from 'express'
import * as personasController from '../controllers/personasController.js'

const personasRouter = Router()

personasRouter.get('/', personasController.get)
personasRouter.post('/', personasController.post)

export default personasRouter 