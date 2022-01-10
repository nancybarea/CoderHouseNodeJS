//const idioma = "lenguaje_español";
const idioma = "lenguaje_ingles";
import(`./Idiomas/${idioma}.js`).then(lenguaje => lenguaje.idioma());