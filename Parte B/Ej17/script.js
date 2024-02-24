let cadena;

while (!(cadena = prompt("ingrese un texto:")) ? alert("debe ingresar una cadena de texto") : false);

let indice=0;

function letraXLetra() {
    let txt = document.getElementById("txt");
    txt.value += cadena.charAt(indice);
    indice++;
    if (indice >= cadena.length) {
        clearInterval(intervalo);
    }
}

let intervalo = setInterval(letraXLetra, 700);