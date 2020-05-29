const fs = require("fs");
const neatCsv = require("neat-csv");
const paisesValidos = require("./paises-validos").paisesValidos;
let informacion = [];
let datosPorAnio = [];

/* Valida que el número sea de typo number */
const validarNumero = (numero) => {
    if (!Number(numero)) {
        throw Error(`${numero}: No es un numero`);
    }
};

/* Lee el documento y carga en le varible global: "informacion":object */
const cargarDatos = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, async(err, data) => {
            if (err) {
                reject("Error al leer el archivo");
            } else {
                resolve((informacion = await neatCsv(data)));
            }
        });
    });
};
/* Carga los valores de suscripciones en la variable "datosPorAnio":object */
const vectorAnio = async(anio) => {
    let anios = Object.values(informacion[3]); //aqui obtengo los datos que necesito.
    anio = anios.indexOf(anio);
    for (let index = 4; index < informacion.length; index++) {
        datosPorAnio.push([(informacion[index][anio]), informacion[index][0], informacion[index][1], informacion[index][2]]);
    }

    return true;
};
/* Limpieza de paises no registrados*/
const limpiarPaises = () => {
    aux = [];
    datosPorAnio.forEach((element) => {
        if (paisesValidos.includes(element[2])) {
            aux.push(element);
        }
    });
    datosPorAnio = aux;
};

/* Comprueba si el codigo del pais ingresado existe en el listado */
const comprobarPais = (cod_Pais) => {
    return new Promise((resolve, reject) => {
        datosPorAnio.forEach((element) => {
            if (element[2] == cod_Pais) {
                resolve(true);
                return;
            }
        });
        reject(`El codigo de país: "${cod_Pais}" no fue encontrado`);
    });
};

/* Comprueba si anio ingresado existe en el listado*/
const comprobarAnio = (anio) => {
    let anios = Object.values(informacion[3]);
    return new Promise((resolve, reject) => {
        anios.forEach((element) => {
            if (element == anio) {
                resolve(true);
                return;
            }
        });
        reject(`El año: "${anio}" no fue encontrado`);
    });
};


/* Dato de personas que usan internet del pais y anio especificado */
const datoPais = (codPais) => {
    dato = [];
    datosPorAnio.forEach((element) => {
        if (element[0] == '') {
            element[0] = 'No existen valores registrados'
        }
        if (element[2] == codPais) {
            dato = element;
            return;
        }
    });

    return dato;
};

/* Devulve toda la data para ser consumida */
const obtenerData = async(codPais, anio, path) => {
    await cargarDatos(path);
    validarNumero(anio);
    vectorAnio(anio);
    limpiarPaises();
    await comprobarAnio(anio);
    await comprobarPais(codPais);
    let mediaPais = datoPais(codPais);
    return { mediaPais };
};
module.exports = {
    obtenerData,
};