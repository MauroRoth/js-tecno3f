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
      { titulo: "Python Data", categoria: "Datos", notas: [-4, 5, 5], aprobado: false },
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
const promedioPorCruso = estudiantes.map(e=>({
  nombre: e.nombre,
  cursos: e.cursos.map(c=>({
    titulo: c.titulo,
    categoria: c.categoria,
    promedio: Number(c.notas.reduce((aN,n)=>aN+n,0)/c.notas.length).toFixed(2),
    aprobado: c.aprobado
  }))
}));

// promedioPorCruso.forEach(element => {
//   console.log(element)
// });

// Calcular el promedio general del estudiante (promedio de todos sus cursos combinados).
const promedioGeneral = estudiantes.map(e=>{
  const todasLasNotas =  e.cursos.flatMap(c=>c.notas);
  const promedio = todasLasNotas.reduce((acumN,notas)=>acumN+notas)/todasLasNotas.length
  return {
    nombre: e.nombre,
    promedioGeneral: Number(promedio).toFixed(2),
  }
})
// promedioGeneral.forEach(element => {
//   console.log(element)
// });



// ---------------------------- 2. Conteo por rangos ------------------------------------------

// ¿Cuántos estudiantes tienen promedio general ≥ 8 (destacados)?
// ¿Cuántos tienen promedio general < 6 (a reforzar)?
const cantPromGralMayorA8 = promedioGeneral.filter(e=> e.promedioGeneral>8).length;
const cantPromGralMenorA6 = promedioGeneral.filter(e=> e.promedioGeneral<6).length;

//console.log('Cantidad Estudiantes con Prom Gral > 8: ', cantPromGralMayorA8);
//console.log('Cantidad Estudiantes con Pom Gral < 6: ', cantPromGralMenorA6);



// ---------------------------3. Filtrado por aprobado y nivel ---------------------------------

// Crear un nuevo arreglo con estudiantes que tengan al menos un curso aprobado y promedio
// general ≥ 6. En ese nuevo arreglo, quedarse solo con { id, nombre, promedioGeneral }.

const aprobadosYNivelados = estudiantes.map(e=>{
  const todasLasNotas = e.cursos.flatMap(c=>c.notas);
  let promedioGeneral = todasLasNotas.reduce((ac,n)=>ac+n,0)/todasLasNotas.length;
  promedioGeneral = Number(promedioGeneral).toFixed(2);
  const tieneCursoAprobado = e.cursos.some(c=>c.aprobado);
  return {
    id: e.id,
    nombre: e.nombre,
    promedioGeneral: promedioGeneral,
    tieneCursoAprobado: tieneCursoAprobado
  }
}).filter(e=>e.tieneCursoAprobado&&e.promedioGeneral>=6)
  .map(({id, nombre, promedioGeneral})=>({id, nombre, promedioGeneral}));

// console.log(aprobadosYNivelados);



// ---------------------- --4. Listado de cursos “críticos” ---------------------------------------

// Generar un listado con los cursos no aprobados de todos los estudiantes cuya media del curso < 6.
// El listado debe lucir como: [{ estudiante: "Mia", titulo: "Python Data", promedioCurso: 4.67 }, ...]
// (redondeá a 2 decimales).

const cursosCriticos = promedioPorCruso.flatMap(e=>{
  const cursos = e.cursos.map(c=>{
    return {
      estudiante: e.nombre,
      titulo: c.titulo,
      promedioCurso: c.promedio
    }
  });
  return cursos;
}).filter(e=>e.promedioCurso>6);

// cursosCriticos.forEach(element => {
//   console.log(element)
// });


// ------------------------ 5. Top 3 estudiantes por promedio general ------------------------- 

// Ordenar de mayor a menor y devolver los 3 mejores con { nombre, promedioGeneral }.
// Si hay menos de 3, devolver los que haya.
const mejoresTresPromedios = promedioGeneral
   .sort((a,b)=>b.promedioGeneral-a.promedioGeneral)
   .slice(0,3);
//console.log(mejoresTresPromedios)

// Extras (opcionales)

// 6. Agrupar por categoría

// Calcular el promedio por categoría (Frontend, Backend, Datos) tomando todas las notas de los
// cursos de esa categoría (sin importar el estudiante). Resultado sugerido:
// { Frontend: 7.92, Backend: 7.67, Datos: 6.02 }.

const sumasParciales = promedioPorCruso.flatMap(e=>{
  const cursos = e.cursos.map(c=>{
    return {
      categoria: c.categoria,
      promedio: c.promedio
    }
  });
  return cursos;
}).reduce((acumulador, curso)=>{
  const clave = curso.categoria;
  if(!acumulador[clave]){
    acumulador[clave]={
      sumaPromedios: 0,
      contador: 0
    }
  }
  acumulador[clave].sumaPromedios += Number(curso.promedio);
  acumulador[clave].contador += 1;
   
  return acumulador;
}, {})

const promediosPorCategorias = Object.entries(sumasParciales)
  .map(([categoria, datos])=>{
    const promedio = Number(datos.sumaPromedios/datos.contador).toFixed(2);
    return {categoria,promedio}
  });

//  console.log(promediosPorCategorias);


// 7 .Validaciones

// Usar every/some para validar que todas las notas están entre 1 y 10.
// Si detectás valores inválidos, informar cuáles y de qué curso/estudiante son.
const validacionNotas = estudiantes.flatMap(e=>{
  const todasLasNotas =  e.cursos.map(c=>{
    const sonValidas = c.notas.every(n=>n<11&&n>0);
    return {
      nombre: e.nombre,
      cursoTitulo: c.titulo,
      cursoNotas: c.notas,
      sonValidas,
    }
  }).filter(n=>n.sonValidas===false);
  return todasLasNotas;
})
console.log(validacionNotas)