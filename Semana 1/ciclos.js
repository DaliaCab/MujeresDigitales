//El for lo usamos cuando sabemos cuántas veces necesitamos repetir un bloque de código
for(let i = 1; i <= 5; i++){   //Imprime hasta 5 de 1 en 1
    console.log(i);
}

//Do while se ejecuta al menos una vez antes de verificar la condición
//Se usa cuando no se sabe cuántas veces se necesita repetir el código y solo se quiere seguir mientras un condición sea verdadera
//Es más flexible, se asegura al menos una ejecución del código
let i = 1;
do {
    console.log(i);    //Imprime 1, 2, 3, 4, 5
    i++;               //Aumenta 'i' en 1 
}while(i <= 5);        //Mientras que sea menor o igual a 5



//break detiene el ciclo en el que se encuentra
//Se usa cuendo se quiere salir del ciclo antes de que se complete todas la repeticiones
let numeros = [10, 20, 30, 40, 50];
let buscar = 30;

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] === buscar){
        console.log("Número encontrado en la posisción: " + i);
        break;
    }
}

//Continue salta el resto del código en la siguiente iteración actual del ciclo y para a la siguiente oiteración
//Se usa cuando se quieren omitir ciertas partes del ciclo basadas en una condición
for(let i = 1; i <= 5; i++){
    if(i === 3){
        continue;     //SAlta la impresión del núm 3
    }
    console.log(i);   //Imprime 1, 2, 4, 5
}


//Ciclos anidados son ciclos dentro de otros ciclos
let tabla = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
for(let i = 0; i<tabla.length; i++){  //Recorre filas
    for(letj = 0; j < tabla[i].length; j++){
        console.log(tabla[i][j]);
    }
}


//Uso de break y continue en ciclos anidados
//Supongamos que queremos encontrar el primer número mayor que 5 en la tabla y detener la búsqueda

