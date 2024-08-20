//Las funciones nos dicen qué hacer paso a paso
//Por ejemplo una función es la receta para un plato
//Se usan para reutilizar código sin repetirlo código DRY Don't Repeat Yourself

//Así se declara una función en el ejemplo para saludar
function saludar(nombre){
    return "Hola", + nombre+"!";
}
//Llamamos la funcion
console.log(saludar("Maria"));  //Output "Hola Maria"

const sumar = function(a, b){
    return a + b;
};
console.log(sumar(3,4));  //Output 7

//Parámetros y retorno
//Parámetros son los ingredientes de la receta, valores que la función necesita para hacer su trabajo
//Retorno es el resultado después de que la función hace su trabajo

//Funciomes anónimas = funciones sin nombre que se guardan en una constante

//