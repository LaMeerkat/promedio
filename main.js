
let resultado = 0;

function promedio(CalificacionMatematicas, CalificacionEspañol, CalificacionIngles, CalificacionCiencias) {
     resultado = (CalificacionMatematicas + CalificacionEspañol, + CalificacionIngles + CalificacionCiencias) / 4
     };

     let CalificacionMatematicas = ''
     let CalificacionEspañol = ''
     let CalificacionIngles = ''
     let CalificacionCiencias = ''
     let askAgain = true
     
 do {
    CalificacionMatematicas = parseInt(prompt('Ingresa tu primera calificación'))

     if (CalificacionMatematicas <= 10) {
          askAgain = false
     } else {
         alert('Ingresa tu calificación de Matematicas')
     }

 } while (askAgain);


 do {
    CalificacionEspañol = parseInt(prompt('Ingresa tu segunda calificación'))

     if (CalificacionEspañol <= 10) {
          askAgain = false
     } else {
         alert('Ingresa tu calificación de Español')
     }

 } while (askAgain);


 do {
    CalificacionIngles = parseInt(prompt('Ingresa tu tercera calificación'))

     if (CalificacionIngles <= 10) {
          askAgain = false
     } else {
         alert('Ingresa tu calificación de Ingles')
     }

 } while (askAgain);


 do {
    CalificacionCiencias = parseInt(prompt('Ingresa tu cuarta calificación'))

     if (CalificacionCiencias <= 10) {
          askAgain = false
     } else {
         alert('Ingresa tu calificación de Ciencias')
     }

 } while (askAgain);
 

 function mostrarResultado(resultadoDelPromedio) {
 alert('Tu promedio es de: '+ resultadoDelPromedio)
 };

 promedio(CalificacionMatematicas, CalificacionEspañol, CalificacionIngles, CalificacionCiencias);
 mostrarResultado(resultado);



 const materiasLista = [
    {materia: 'Matematicas', calificacion: 9},
        {materia: 'Español', calificacion: 8},
        {materia: 'Ingles', calificacion: 10},
        {materia: 'Ciencias', calificacion: 6},
 ]

 materiasLista.forEach((materia) => {
   console.log(materia)
 })

 
