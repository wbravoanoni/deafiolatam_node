const fs = require('fs');

// Registrar una nueva cita
function registrar(nombre, edad, tipo, color, enfermedad) {
    // Leer el contenido actual del archivo JSON
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    
    // Agregar una nueva cita al arreglo
    citas.push({ nombre, edad, tipo, color, enfermedad });

    // Guardar nuevamente en el archivo
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));

    console.log(`Cita registrada para ${nombre}`);
}

// Leer todas las citas
function leer() {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    console.log('Citas registradas:', citas);
}

module.exports = { registrar, leer };
