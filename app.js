const argv = require("./config/yargs").argv;
const colors = require("colors");
const obtenerData = require("./buscador/buscar.js").obtenerData;
// node app.js mostrar-f="datos.csv" -y=2004
// node app.js guardar -f="db/API_IT.CEL.SETS_DS2_es_csv_v2_1004854.csv" -c="ECU" -y=1997 -o="HolaMundo

let data;
const menu = () => {
    let comando = argv._[0];
    switch (comando) {
        case "mostrar":
            console.log("------------------------------------------------------".rainbow);
            console.log(`Suscripciones de ${argv.pais}:`.cyan, `${data.mediaPais}`);
            console.log(`Datos: Porcentaje de la población que usan Internet`);
            console.log(`Pais: ${data.mediaPais[1]}`);
            console.log(`Año: ${argv.anio}`);
            console.log(`Valor: ${data.mediaPais[0]}`);
            console.log("----------------------FIN DEL PROGRAMA-------------------".rainbow);
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