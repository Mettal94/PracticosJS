var cadena = prompt('Ingrese una cadena');
var dividido = cadena.split(" ");
var cantidad = dividido.length;
console.log('Cantidad de palabras: '+cantidad);
console.log('Primera palabra: ',dividido[0]);
console.log('Última palabra: ',dividido[dividido.length-1]);
dividido.sort();
console.log('Palabras ordenadas A-Z ',dividido);

var inverso = dividido.slice().sort(function (a, b){ return b.localeCompare(a);});
console.log('Orden inverso: ',inverso);