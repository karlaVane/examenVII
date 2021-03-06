const fs = require('fs');

let crearArchivo = (pmedia, anio, pais) => {
    let datos;
    return new Promise((resolve, reject) => {
        datos = `ARCHIVO DE ${pmedia[1]} EN EL AÑO ${anio} \n`
        datos += `*Datos: ${pmedia[3]}\n`;
        datos += `*País: ${pmedia[1]}\n`;
        datos += `*Año: ${anio}\n`;
        datos += `*Valor: ${pmedia[0]}`;

        //console.log(`Nombre del archivo: ${pais}-${anio}.txt`);
        fs.writeFile(`resultados/${pais}-${anio}.txt`, datos, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Revisar archivo guardado en /resultados/${pais}-${anio}.txt`);
        });
    });
}
module.exports = {
    crearArchivo
}