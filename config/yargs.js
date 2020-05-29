let mostrar = {
    archivo: {
        demand: true,
        alias: 'f',
        desc: 'Permite establecer el path del archivo CSV que contiene los datos a analizar'
    },
    pais: {
        demand: true,
        alias: 'c',
        desc: ' Permite determinar el país a analizar a través de su código',
        default: 'ECU'
    },
    anio: {
        default: 1960,
        alias: 'y',
        desc: 'Permite especificar el año para el cual se requiere las estadísticas'
    }
}

let guardar = {
    archivo: {
        demand: true,
        alias: 'f',
        desc: 'Permite establecer el path del archivo CSV que contiene los datos a analizar'
    },
    pais: {
        demand: true,
        alias: 'c',
        desc: ' Permite determinar el país a analizar a través de su código',
        default: 'ECU'
    },
    anio: {
        default: 1960,
        alias: 'y',
        desc: 'Permite especificar el año para el cual se requiere las estadísticas'
    }
}

const argv = require('yargs')
    .command('mostrar', 'Este comando imprime en pantalla el resultado de la búsqueda', mostrar)
    .command('guardar', 'Este comando genera un archivo de texto con el resultado de la búsqueda.', guardar)
    .help().argv;

module.exports = {
    argv
}