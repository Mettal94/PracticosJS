/*
Cree un archivo html que muestre una frase al azar cada vez que se cargue. Las frases
deberán estar en otro archivo independiente, del tipo .js.
*/

const personajes = [
    "Goku",
    "Vegeta",
    "Gohan",
    "Piccolo",
    "Krillin",
    "Trunks",
    "Goten",
    "Bulma",
    "Milk",
    "Maestro Roshi",
    "Yamcha",
    "Tenshinhan",
    "Chaos",
    "Androide 17",
    "Androide 18",
    "Majin Buu",
    "Freezer",
    "Cell",
    "Bills",
    "Whis"
];

    var indice = Math.floor(Math.random() * personajes.length);
    var electo = personajes[indice];
    document.getElementById("personaje").textContent = electo;
