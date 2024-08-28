//JavaScriptObjectNotation es una forma simple de escribir datos para que los humanos y computadora puedan entenderlo
//Es fácil de leer y de usar, se usa para enviar datos entre aplicaciones web
//Es muy popular, es compatible con casi todos los lenguajes de programación
//La estructura es pares clave:valor

({
    "placa": "ABC123",
    "numeroSerie": "564123",
    "modelo": "2021",
    "marca": "Chevrolet",
    "kilometraje": "5000",
    "tipo": "sedan"
    })


//JSON es más corto a comparación de XML, además es más legible
//JSON tiene una estructura más simple de clave:valor 
//XML usa formato con etiquetas </>
//JSON se usa para enviar datos en apps web
//XML se usa en sistemas más antiguos o en configuraciones
//JSON es más detallado, ideal para datos con mucha información
//CSV es más simple y parece una tabla de excel
//Ej CSV: nombre,edad,profesion,hobbies
//        Maria,28,desarrolladora,"leer,viajar,correr"

({
    producto: "laptop",
    marca: "DELL",
    precio: "1200.50",
    En_stock: "True"
});


//JSON.stringify() lo convierte de objeto a JSON--imagina que tienes unobjeto (una lista de cosas con nombre y valor) 
//JSON.parse()Este método hace lo contrario, convierte una cadena de texto en un objeto que puedes usar en tu código
const persona = {
    nombre: "Maria",
    edad:28, 
    profesion:"Desarrolladora"
};
const personaJSON = JSON.stringify(persona);          //convierte objeto o valor de JavaScript en una cadena JSON
console.log(personaJSON);
//Output: '{nombre: "Maria",edad:28, profesion: "Desarrolladora"}'

const personaObjeto = JSON.parse(persona);             //convierte cadena JSON en un objeto de JavaScript
console.log(personaObjeto);
//Output: {nombre: "Maria",edad:28, profesion: "Desarrolladora"}

//MANEJO DE DATOS JSON
//Local storage: forma de guardar datos en el navegador de un usuario-Solo guarda cadenas de texto NO objetos
//Es puente entre JSON y app web

