const argv = require("./config/yargs").argv;
const colors = require("colors");
const obtenerData = require("./controller/generar-data.controller").obtenerData;
const crearArchivo = require("./controller/crear-json.controller").crearArchivo;
const crearTabla = require("./controller/tablas.controller").crearTabla;
const startServer = require("./config/server").startServer;
// node app.js publicar -f="db/API_IT.CEL.SETS_DS2_es_csv_v2_1004854.csv" -c="ECU" -y=1997
// node app.js guardar -f="db/API_IT.CEL.SETS_DS2_es_csv_v2_1004854.csv" -c="ECU" -y=1997 -o="HolaMundo