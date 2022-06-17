import { afiliarPersona, listarPersonas } from '../services/personasService.js'

export async function post(req, res, next) {
    try {
        const afiliada = await afiliarPersona(req.body)
        res.status(201).json(afiliada)
    } catch (error) {
        next(error)
    }
}

export async function get(req, res, next) {
    try {
        res.json(await listarPersonas())
    } catch (error) {
        next(error)
    }
}
