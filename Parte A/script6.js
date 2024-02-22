/*
6) Leer una cadena de texto desde un prompt y generar un array con la función split().
Posteriormente, mostrar la siguiente información: Número de palabras, primera palabra,
última palabra, las palabras colocadas en orden inverso, las palabras ordenadas de la “a”
hasta la “z” y las palabras ordenadas de la “z” hasta la ”a”.
*/


var ingreso = prompt("Ingrese un texto:");

var palabras = ingreso.split(" ");

console.log("Número de palabras:", palabras.length);


console.log("Primera palabra:", palabras[0]);


console.log("Última palabra:", palabras[palabras.length - 1]);


console.log("Palabras en orden inverso:", palabras.reverse().join(" "));


console.log("Palabras ordenadas de 'a' hasta 'z':", palabras.slice().sort().join(" "));


console.log("Palabras ordenadas de 'z' hasta 'a':", palabras.slice().sort().reverse().join(" "));