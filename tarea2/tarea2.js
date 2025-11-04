// Roth, Mauro Gonzalo - DNI 30430511

/// requiere prompt-sync instalado

function clasificacionNumeroEntero(numeroEntero) {
  if (numeroEntero > 0) { return "Positivo" };
  if (numeroEntero < 0) { return "Negativo" };
  return "Cero";
}

function esTriangulo(lado1, lado2, lado3) {
  let condicion1 = lado1 + lado2 > lado3;
  let condicion2 = lado1 + lado3 > lado2;
  let condicion3 = lado2 + lado3 > lado1;
  return condicion1 && condicion2 && condicion3;
}

function determinarTipoTriangulo(lado1, lado2, lado3) {
  if (!esTriangulo(lado1, lado2, lado3)) { return "No es triángulo" }
  if (lado1 === lado2 && lado1 === lado3) { return "Equilátero" };
  if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) { return "Isósceles" };
  return "Escaleno"
}

function clasificarPorEdades(edad) {
  if (edad < 12) { return "Niño" };
  if (edad >= 12 && edad <= 17) { return "Adolescente" };
  if (edad >= 18 && edad <= 64) { return "Adulto" };
  return "Adulto Mayor";
}

function parOImpar(numeroEntero) {
  let parCondicion = numeroEntero % 2 === 0;
  if (parCondicion) { return "Es Par" };
  return "Es Impar";
}

function calculoDeNotas(calificacion) {
  if (calificacion < 0 || calificacion > 100) { return "Fuera de Rango" };
  if (calificacion <= 100 && calificacion >= 90) { return "A" };
  if (calificacion <= 89 && calificacion >= 80) { return "B" };
  if (calificacion <= 79 && calificacion >= 70) { return "C" };
  if (calificacion <= 69 && calificacion >= 60) { return "D" };
  return "F";
}

function numeroMayorEntreDos(numero1, numero2) {
  if (numero1 > numero2) { return numero1 };
  if (numero1 < numero2) { return numero2 };
  return "Son Iguales";
}

function numeroMayorEntreTres(numero1, numero2, numero3) {
  let sonIgualesLosTres = numero1 === numero2 && numero1 === numero3;
  if (sonIgualesLosTres) { return "Son iguales" };
  let mayorParcial;
  if (numero1 > numero2) { mayorParcial = numero1 }
  else { mayorParcial = numero2 };
  if (mayorParcial < numero3) { return numero3 }
  else { return mayorParcial };
}
// Test
const prompt = require("prompt-sync")();

console.log("\n1. CLASIFICACIÓN DE NÚMERO ENTERO");
let numeroEnteroIngresado = Number(prompt("Ingrese un número entero: "));
console.log(clasificacionNumeroEntero(numeroEnteroIngresado));

console.log("\n2. TIPO DE TRIÁNGULO");
let lado1Ingresado = Number(prompt("Ingrese lado 1: "));
let lado2Ingresado = Number(prompt("Ingrese lado 2: "));
let lado3Ingresado = Number(prompt("Ingrese lado 3: "));
console.log(determinarTipoTriangulo(lado1Ingresado,lado2Ingresado,lado3Ingresado));

console.log("\n3. CLASIFICACIÓN DE EDAD");
let edadIngresada = Number(prompt("Ingrese edad: "));
console.log(clasificarPorEdades(edadIngresada));

console.log("\n4. PAR O IMPAR");
let numeroIntIngresado = Number(prompt("Ingrese un número entero: "));
console.log(parOImpar(numeroIntIngresado));

console.log("\n5. CÁLCULO DE NOTAS");
let calificacionIngresada = Number(prompt("Ingrese su calificación: "));
console.log("Equivale a ", calculoDeNotas(calificacionIngresada));

console.log("\n6.1. NÚMERO MAYOR ENTRE DOS");
let num1Ingresado = Number(prompt("Ingrese número 1: "));
let num2Ingresado = Number(prompt("Ingrese número 2: "));
console.log(numeroMayorEntreDos(num1Ingresado,num2Ingresado));

console.log("\n6.2. NÚMERO MAYOR ENTRE TRES");
let num1Ingr = Number(prompt("Ingrese número 1: "));
let num2Ingr = Number(prompt("Ingrese número 2: "));
let num3Ingr = Number(prompt("Ingrese número 3: "));
console.log(numeroMayorEntreTres(num1Ingr,num2Ingr, num3Ingr));

