function crearId() {
    return `${Date.now()}`
}

export function crearPersona(datos) {
    if (!datos.nombre) throw new Error('falta el campo "nombre"')
    if (!datos.edad) throw new Error('falta el campo "edad"')

    return {
        id: crearId(),
        nombre: datos.nombre,
        edad: datos.edad,
    }
}