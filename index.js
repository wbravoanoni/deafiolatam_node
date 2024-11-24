const { registrar, leer } = require('./operaciones');
const [operacion, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2);

if (operacion === 'registrar') {
    registrar(nombre, edad, tipo, color, enfermedad);
} else if (operacion === 'leer') {
    leer();
} else {
    console.log('Operación no reconocida. Usa "registrar" o "leer".');
}

//$ node index.js registrar Benito "2 años" perro blanco vomitos
//node index.js leer
