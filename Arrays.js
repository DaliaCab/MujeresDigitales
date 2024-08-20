let frutas = ["Manzana", "Banana", "Naranja"];
//Acceso a elementos
console.log(frutas[0]);

//Modificacion de un elemento en un array
frutas[1]="Pera"
console.log(frutas);

//Métodos comunes push() Agrega un nuevo elemento al final del arreglo
frutas.push("Mango");
console.log(frutas);

//pop() elimina el ultimo elemento en el array
frutas.pop();
console.log(frutas);

//Elimina el primer elemento del array
frutas.shift();
console.log(frutas);

//Agrega un nuevo elemento al principio
frutas.unshift("Fresa");
console.log(frutas);

//Devuelve el número de elementos
console.log(frutas.length);
