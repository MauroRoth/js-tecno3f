// Roth, Mauro Gonzalo - DNI 30430511
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
//console.log(clasificacionNumeroEntero(0));
//console.log(esTriangulo(7,2,3));
//console.log(determinarTipoTriangulo(5,5,15));
//console.log(clasificarPorEdades(85));
//console.log(parOImpar(7))
//const notas = [120,101,100,95,90,89,84,80,79,76,70,69,67,60,59,28];
//notas.forEach(nota => console.log(nota, calculoDeNotas(nota)));
//console.log(numeroMayorEntreDos(5,5)[2]);
console.log(numeroMayorEntreTres(7, 8, 7));

