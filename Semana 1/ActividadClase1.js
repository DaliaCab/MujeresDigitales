//Contador del 1 al 10
//Crear un programa que imprima los núms del 1 al 10, y luego indique cuántos de eso núms son > que 5
//Se debe mostrar el conteo de los nums mayores que 5
let contador = 0;
for(let i = 1; i <= 10; i++){
    console.log(i);              //Imprimimos del 1-10
    if(i > 5){
        contador++;
    }
}
console.log("Numeros mayores que 5: ", contador);  //Imprimimos el número de nums >5