// Seleccionamos el elemento con el ID "goku" y lo guardamos en la variable goku
var goku = document.getElementById("goku");

// Agregamos un event listener para el evento "mouseover" (cuando el cursor pasa por encima del elemento)
// que llama a la función transformar cuando se activa
goku.addEventListener("mouseover", transformar);

// Agregamos un event listener para el evento "mouseout" (cuando el cursor deja de estar sobre el elemento)
// que llama a la función resetear cuando se activa
goku.addEventListener("mouseout", resetear);

// Función para transformar la imagen de Goku a su versión Super Saiyan
function transformar(evento) {
    goku.src = "img/gifgoku/GokuSSJ.png";
}

// Función para restablecer la imagen de Goku a su versión normal
function resetear() {
    goku.src = "img/gifgoku/Goku.gif";
}

// Seleccionamos el elemento con el ID "vegeta" y lo guardamos en la variable vegeta
var vegeta = document.getElementById("vegeta");

// Agregamos un event listener para el evento "mouseover" que llama a la función transform cuando se activa
vegeta.addEventListener("mouseover", transform);

// Agregamos un event listener para el evento "mouseout" que llama a la función reset cuando se activa
vegeta.addEventListener("mouseout", reset);

// Función para transformar la imagen de Vegeta a su versión Super Saiyan
function transform() {
    vegeta.src = "img/gifvegeta/VegetaSSJ.png";
}

// Función para restablecer la imagen de Vegeta a su versión normal
function reset() {
    vegeta.src = "img/gifvegeta/Vegeta.gif";
}