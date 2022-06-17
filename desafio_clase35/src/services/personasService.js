import { crearPersona } from '../models/personaModel.js'
import daoPersonas from '../databases/personas/daoPersonas.js'

export async function afiliarPersona(datos) {
    const persona = crearPersona(datos)
    await daoPersonas.guardar(persona)
    return persona
}

export async function listarPersonas() {
    return await daoPersonas.listarTodas()
}