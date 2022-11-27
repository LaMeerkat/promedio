
let resultado = 0;

function promedio(primeraCalificacion, segundaCalificacion, terceraCalificacion, cuartaCalificacion) {
     resultado = (primeraCalificacion + segundaCalificacion + terceraCalificacion + cuartaCalificacion) / 4
     };

     let primeraCalificacion = ''
     let segundaCalificacion = ''
     let terceraCalificacion = ''
     let cuartaCalificacion = ''
     let askAgain = true
     
 do {
    primeraCalificacion = parseInt(prompt('Ingresa tu primera calificación'))

     if (primeraCalificacion <= 10) {
          askAgain = false
     } else {
         alert('Ingrese un número del 1 al 10')
     }

 } while (askAgain);


 do {
    segundaCalificacion = parseInt(prompt('Ingresa tu segunda calificación'))

     if (segundaCalificacion <= 10) {
          askAgain = false
     } else {
         alert('Ingrese un número del 1 al 10')
     }

 } while (askAgain);


 do {
    terceraCalificacion = parseInt(prompt('Ingresa tu tercera calificación'))

     if (terceraCalificacion <= 10) {
          askAgain = false
     } else {
         alert('Ingrese un número del 1 al 10')
     }

 } while (askAgain);


 do {
    cuartaCalificacion = parseInt(prompt('Ingresa tu cuarta calificación'))

     if (cuartaCalificacion <= 10) {
          askAgain = false
     } else {
         alert('Ingrese un número del 1 al 10')
     }

 } while (askAgain);
 

 function mostrarResultado(resultadoDelPromedio) {
 alert('Tu promedio es de: '+ resultadoDelPromedio)
 };

 promedio(primeraCalificacion, segundaCalificacion, terceraCalificacion, cuartaCalificacion);
 mostrarResultado(resultado);








 
