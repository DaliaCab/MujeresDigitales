//Importamos node-localstorage (debe estar instalado)
const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

let libro = {
    titulo : "Inmunologia de Rojas 19",
    autor : "William Rojas M",
    año : 2023
};
//Convertimos el objeto a cadena JSON
let libroJSON = JSON.stringify(libro);
console.log(libroJSON)               
//Output: {"titulo":"Inmunologia de Rojas 19","autor":"William Rojas M","año":2023}

//Guardamos la cadena JSON en Local Storage
localStorage.setItem("libro",libroJSON);
//Recuperamos la cadena JSON del localStorage
let libroRecuperadoJSON = localStorage.getItem("libro");
//Convertimos la cadena otra vez en un objeto JS
let libroRecuperado = JSON.parse(libroRecuperadoJSON);
//Mostramos el objeto recuperado en la consola
console.log(libroRecuperado);
//Output: 
// {
//   titulo: 'Inmunologia de Rojas 19',
//   autor: 'William Rojas M',
//   'año': 2023
// }

