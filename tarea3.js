// Roth, Mauro Gonzalo - DNI 30430511

/// requiere prompt-sync instalado
const prompt = require("prompt-sync")();

const NUMERO_SECRETO = 5;
const INTENTOS_MAX = 3;

console.log('\nTAREA 3');
for(let i=0;i<INTENTOS_MAX;i++){
    let numeroIntento = i+1
    let intentosRestantes = INTENTOS_MAX-numeroIntento;
    let numeroIngresado = Number(prompt('\nINGRESE NÚMERO DEL 1 AL 10: '));
    if(numeroIngresado !== NUMERO_SECRETO){
        console.log('\tUSTED NO ACERTÓ. LO LAMENTAMOS! (>_<) ​');
        switch(intentosRestantes){
            case 0: 
                console.log('\tUSTED PERDIÓ.'); 
                break;
            case 1: 
                console.log(`\tLE QUEDA ${intentosRestantes} INTENTO.`); 
                break;
            default: 
                console.log(`\tLE QUEDAN ${intentosRestantes} INTENTOS.`); 
                break;
        }
    } else {
        console.log('\tUSTED ACERTÓ. FELICITACIONES!!! (ᵔ◡ᵔ) ');
        console.log(`\tLO HIZO EN EL INTENTO Nº `, numeroIntento);
        break;
    }
}

