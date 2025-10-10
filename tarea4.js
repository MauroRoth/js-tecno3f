// Roth, Mauro Gonzalo - DNI 30430511

const estudiantes = [
  {
    id: 1,
    nombre: "Ana",
    cursos: [
      { titulo: "JS Básico", categoria: "Frontend", notas: [8, 7, 9], aprobado: true },
      { titulo: "HTML & CSS", categoria: "Frontend", notas: [6, 7, 7], aprobado: true },
      { titulo: "SQL Intro", categoria: "Datos", notas: [5, 6, 6], aprobado: false }
    ]
  },
  {
    id: 2,
    nombre: "Luis",
    cursos: [
      { titulo: "JS Básico", categoria: "Frontend", notas: [9, 9, 10], aprobado: true },
      { titulo: "Kotlin Intro", categoria: "Backend", notas: [7, 8, 8], aprobado: true }
    ]
  },
  {
    id: 3,
    nombre: "Mia",
    cursos: [
      { titulo: "Python Data", categoria: "Datos", notas: [4, 5, 5], aprobado: false },
      { titulo: "SQL Intro", categoria: "Datos", notas: [6, 6, 7], aprobado: true }
    ]
  },
  {
    id: 4,
    nombre: "Rafa",
    cursos: [
      { titulo: "HTML & CSS", categoria: "Frontend", notas: [10, 9, 9], aprobado: true }
    ]
  }
]

// 1. Promedio por curso y por estudiante

// Calcular el promedio de cada curso (promedio de su arreglo notas).
// Calcular el promedio general del estudiante (promedio de todos sus cursos combinados).

let promedios = estudiantes.map(estudiante => {
    const nombre = estudiante.nombre;
    const promedioPorCurso = estudiante.cursos.map(curso =>{
        return {
            curso : curso.titulo,
            promedio: curso.notas.reduce((acumNotas,notas)=>acumNotas + notas,0)/curso.notas.length
        }
    });
    const promedioGeneral = promedioPorCurso.map(x=>{return x.promedio})
        .reduce((acumProm, prom)=>acumProm+prom,0)/estudiante.cursos.length;
    return {nombre, promedioPorCurso, promedioGeneral};
})
        
// promedios.forEach(element => {
//     console.log(element.nombre);
//     console.log(element.promedioPorCurso);
//     console.log('---------');
//     console.log(element.promedioGeneral);
// });


// 2. Conteo por rangos

// ¿Cuántos estudiantes tienen promedio general ≥ 8 (destacados)?
// ¿Cuántos tienen promedio general < 6 (a reforzar)?
const cantPromGralMayorA8 = promedios.filter(promedio => promedio.promedioGeneral>8).length;
console.log(cantPromGralMayorA8);
console.log('------');
const cantPromGralMenorA6 = promedios.filter(promedio => promedio.promedioGeneral<6).length;
console.log(cantPromGralMenorA6);

// 3. Filtrado por aprobado y nivel

// Crear un nuevo arreglo con estudiantes que tengan al menos un curso aprobado y promedio
// general ≥ 6.
// En ese nuevo arreglo, quedarse solo con { id, nombre, promedioGeneral }.

// 4. Listado de cursos “críticos”

// Generar un listado con los cursos no aprobados de todos los estudiantes cuya media del curso < 6.
// El listado debe lucir como: [{ estudiante: "Mia"

// , titulo: "Python Data"

// , promedioCurso: 4.67 }, ...]

// (redondeá a 2 decimales).

// 5. Top 3 estudiantes por promedio general

// Ordenar de mayor a menor y devolver los 3 mejores con { nombre, promedioGeneral }.
// Si hay menos de 3, devolver los que haya.

// Extras (opcionales)

// 6. Agrupar por categoría

// Calcular el promedio por categoría (Frontend, Backend, Datos) tomando todas las notas de los
// cursos de esa categoría (sin importar el estudiante). Resultado sugerido:
// { Frontend: 7.92, Backend: 7.67, Datos: 6.02 }.

// 7 .Validaciones

// Usar every/some para validar que todas las notas están entre 1 y 10.
// Si detectás valores inválidos, informar cuáles y de qué curso/estudiante son.