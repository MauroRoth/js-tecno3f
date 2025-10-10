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

// ---------------------1. Promedio por curso y por estudiante --------------------------------------

// Calcular el promedio de cada curso (promedio de su arreglo notas).
// Calcular el promedio general del estudiante (promedio de todos sus cursos combinados).

const estudiantesConPromedios = estudiantes.map(estudiante => {
  let promedioGeneral = 0;
  const nuevoEstudiante = {...estudiante, promedioGeneral};
  
  const cursosConPromedio = estudiante.cursos.map(curso => {
    let promedioIndividual = curso.notas.reduce((acumNotas, notas) => acumNotas + notas, 0) / curso.notas.length;
    return {...curso, promedioIndividual};
  });
  
  nuevoEstudiante.cursos = cursosConPromedio;

  nuevoEstudiante.promedioGeneral = cursosConPromedio.map(curso => { return curso.promedioIndividual })
    .reduce((acumProm, prom) => acumProm + prom, 0) / estudiante.cursos.length;
  
  return nuevoEstudiante;
})

/// Visualización Punto 1
// estudiantesConPromedios.forEach(estudiante => {
//   console.log(estudiante);
// });



// ---------------------------- 2. Conteo por rangos ------------------------------------------

// ¿Cuántos estudiantes tienen promedio general ≥ 8 (destacados)?
// ¿Cuántos tienen promedio general < 6 (a reforzar)?
// const cantPromGralMayorA8 = estudiantesConPromedios.filter(estudiante => estudiante.promedioGeneral>8).length;
// const cantPromGralMenorA6 = estudiantesConPromedios.filter(estudiante => estudiante.promedioGeneral<6).length;
// console.log('Cantidad Estudiantes con Prom Gral > 8', cantPromGralMayorA8);
// console.log('Cantidad Estudiantes con Pom Gral < 6', cantPromGralMenorA6);



// ---------------------------3. Filtrado por aprobado y nivel ---------------------------------

// Crear un nuevo arreglo con estudiantes que tengan al menos un curso aprobado y promedio
// general ≥ 6.
// En ese nuevo arreglo, quedarse solo con { id, nombre, promedioGeneral }.

// const estudiantesAprobadosYNivelados = estudiantesConPromedios.filter(estudiante=>{
//     if(estudiante.promedioGeneral>=6){
//       return estudiante.cursos.some(curso=>curso.aprobado);
//     }
//   }).map(estudiante=>{
//     const nuevoEstudiante = {};
//     nuevoEstudiante.id = estudiante.id;
//     nuevoEstudiante.nombre = estudiante.nombre;
//     nuevoEstudiante.promedioGeneral = estudiante.promedioGeneral;
//     return nuevoEstudiante;
//   });

/// Visualización
///console.log(estudiantesAprobadosYNivelados);



// ---------------------- --4. Listado de cursos “críticos” ---------------------------------------

// Generar un listado con los cursos no aprobados de todos los estudiantes cuya media del curso < 6.
// El listado debe lucir como: [{ estudiante: "Mia"
// , titulo: "Python Data"
// , promedioCurso: 4.67 }, ...]
// (redondeá a 2 decimales).

const cursosCriticos = estudiantesConPromedios.map(e=>{
  const nuevoE = {};
  nuevoE.nombre = e.nombre;
  const cursosCriticos = e.cursos.filter(c=>c.promedioIndividual<6)
    .map(c=>{
      const nuevoC = {};
      nuevoC.titulo = c.titulo;
      nuevoC.promedioIndividual=c.promedioIndividual;
      return nuevoC;
    })
    nuevoE.cursosCriticos = cursosCriticos;
  return nuevoE;
})
  .filter(e=>Object.keys(e.cursosCriticos).length!==0);

/// Visulización
// cursosCriticos.forEach(element => {
//   console.log(element);
// });

// 5. Top 3 estudiantes por promedio general FALTAN EL 5, EL 6 Y EL 7

// Ordenar de mayor a menor y devolver los 3 mejores con { nombre, promedioGeneral }.
// Si hay menos de 3, devolver los que haya.
const mejoresTresPromedios = estudiantesConPromedios
  .sort((a,b)=>b.promedioGeneral-a.promedioGeneral)
  .slice(0,3)
  .map(({nombre, promedioGeneral})=>({nombre, promedioGeneral}));
console.log(mejoresTresPromedios);

// Extras (opcionales)

// 6. Agrupar por categoría

// Calcular el promedio por categoría (Frontend, Backend, Datos) tomando todas las notas de los
// cursos de esa categoría (sin importar el estudiante). Resultado sugerido:
// { Frontend: 7.92, Backend: 7.67, Datos: 6.02 }.

// 7 .Validaciones

// Usar every/some para validar que todas las notas están entre 1 y 10.
// Si detectás valores inválidos, informar cuáles y de qué curso/estudiante son.