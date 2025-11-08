
// targets
let display = document.getElementById("pantalla");
let descuentaUnoBoton = document.getElementById("descuentaUno");
let aumentaUnoBoton = document.getElementById("aumentaUno");
let reiniciaBoton = document.getElementById("reinicia");
let establecerValorBoton = document.getElementById("estableceValor");
let input = document.getElementById("valorIngresado");

// valor del display
let valorDisplay = () => { return Number(display.textContent) };
// valor del input
let valorInput = () => { return Number(input.value) };

// handlers, o manejadores de eventos
function colorDisplay(valor) {
    if (valor > 0) { display.style.backgroundColor = "green" };
    if (valor < 0) { display.style.backgroundColor = "red" };
    if (valor === 0) { display.style.backgroundColor = "grey" };
}
function modificaDisplay(accion){
    let valor = valorDisplay()
    let valorIngresado = valorInput();
    if(accion==='+1'){valor++};
    if(accion==='-1'){valor--};
    if(accion==='Reiniciar'){valor=0};
    if(accion==='Establecer Valor'){valor=valorIngresado};
    display.innerText = valor;
    colorDisplay(valor);
}
// event listeners, o escuchadores de eventos
aumentaUnoBoton.addEventListener("click", (e) => {
    modificaDisplay(e.target.textContent);
})
descuentaUnoBoton.addEventListener("click", (e) => {
    modificaDisplay(e.target.textContent) 
})
reiniciaBoton.addEventListener("click", (e) => {
    modificaDisplay(e.target.textContent);
});
establecerValorBoton.addEventListener("click", (e) => {
    modificaDisplay(e.target.textContent)
})

// Mauro Gonzalo Roth
