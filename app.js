const argv = require("./config/yargs").argv;
const colors = require("colors");
const obtenerData = require("./buscador/buscar.js").obtenerData;
const crearArchivo = require("./crear/crearArch.js").crearArchivo;
// node app.js mostrar-f="datos.csv" -y=2004
// node app.js guardar -f="datos.csv"

let data;
const menu = () => {
    let comando = argv._[0];
    switch (comando) {
        case "mostrar":
            console.log("----------------------EXAMEN PRIMER BIMESTRE--------------------------------".rainbow);
            console.log(`Desarrollado por:`.magenta, `Karla Moyón`.cyan);
            console.log(`Datos:`.magenta, `${data.mediaPais[3]}`);
            console.log(`Pais:`.magenta, ` ${data.mediaPais[1]}`);
            console.log(`Año:`.magenta, ` ${argv.anio}`);
            console.log(`Valor:`.magenta, ` ${data.mediaPais[0]}`);
            console.log("----------------------FIN DEL PROGRAMA-------------------".rainbow);
            break;
        case "guardar":
            console.log(`Generando Archivo ${argv.pais}-${argv.anio}.txt`.blue);
            crearArchivo(data.mediaPais, argv.anio, argv.pais)
                .then((mensaje) => console.log(colors.green(mensaje)))
                .catch((err) => console.log(colors.red(err)));
            break;
        default:
            console.log("Comando no existente");
            break;
    }
};

const ejecutar = async() => {
    data = await obtenerData(argv.pais, argv.anio.toString(), argv.archivo);
    menu();
    return data;
};
ejecutar()
    .then()
    .catch((err) => {
        console.log(colors.red(err));
    });