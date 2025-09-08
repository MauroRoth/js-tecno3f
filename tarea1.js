// Roth, Mauro Gonzalo - DNI 30430511
function totalCompras(){
    let precio1 = 34.5;
    let precio2 = 67.44;
    let precio3 = 555.45;

    let dinero = 10000;
    let total = precio1 + precio2 + precio3;
    let vuelto = dinero - total;

    console.log(`Precio del Producto 1: ${precio1}`);
    console.log(`Precio del Producto 2: ${precio2}`);
    console.log(`Precio del Producto 3: ${precio3}`);

    console.log(`Dinero Disponible: ${dinero}`);
    console.log(`Su Vuelto es: ${vuelto.toFixed(2)}`)
}

function fichaPersonal(){
    let nombre = 'Ramona Galarza';
    let edad = 25;
    let leGustaProgramar = false;
    let horasEstudioPorSemana = 8;
    let mensaje = leGustaProgramar ? 'le gusta programar':'no le gusta programar';
    console.log(`${nombre}, de ${edad} años de edad, ${mensaje}, dedica ${horasEstudioPorSemana} horas de estudio por semana.`);
}

console.log('\nTotal Compra \n');
totalCompras();
console.log('\nFicha Personal\n');
fichaPersonal();
