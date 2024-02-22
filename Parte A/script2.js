/*
2) Haz un programa que dibuje un rectángulo de asteriscos a partir de una base y altura
especificada por el usuario.
*/


do{
var base = parseInt(prompt("Ingrese la base del rectángulo."));
if(isNaN(base) || !Number.isInteger(base) || base<1){
    alert("No se insertó un número correcto. Ingrese un número entero mayor a 0.")
}else{
    var valBase = true;
}
}while (!valBase);


do{
var altura = parseInt(prompt("Ingrese la altura del rectángulo."));
if(isNaN(altura) || !Number.isInteger(altura) || altura<1){
    alert("No se insertó un número correcto. Ingrese un número entero mayor a 0.")
}else{
    var valAltura = true;
}
}while (!valAltura);


for (var i = 0; i < altura; i++) {
    var linea = "";
    for (var j = 0; j < base; j++) {
        linea += "*";
    }
    console.log(linea+" "+(i+1)); //El número de linea se agregó para que no se agrupen en la consola por ser iguales.
}