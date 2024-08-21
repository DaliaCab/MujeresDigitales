//Creamos una variable puntaje y usamos condicionales
// Definir la variable
let puntaje = 85; 

if (puntaje >= 90) {                           //"Excelente" si el puntaje es mayor o igial a 90
    console.log("Excelente");
} else if (puntaje >= 70 && puntaje <= 89) {   //"Bueno" si el puntaje está entre 70 y 89
    console.log("Bueno");
} else if (puntaje < 70) {                     //"Necesita mejorar" si el puntaje es menor de 70
    console.log("Necesita mejorar");
}
