// Variable para controlar si el juego está activo o no
var juegoactivo = true;

// Selección de todas las cartas del juego mediante su clase
var cartas = document.querySelectorAll('.carta');

// Elemento HTML del botón de inicio del juego
var iniciar = document.querySelector('#iniciar');

// Elementos HTML para mostrar el tiempo transcurrido
var min = document.querySelector('#min');
var seg = document.querySelector('#seg');

// Variables para almacenar el tiempo transcurrido en segundos y minutos
var seg_aux = 0;
var min_aux = 0;

// Elemento HTML para mostrar el temporizador del juego
var tiempo = document.querySelector('#temporizador');

// Contador de tarjetas destapadas actualmente
var tarjetasDestapadas = 0;

// Variables para almacenar las tarjetas seleccionadas
var tarjeta1;
var tarjeta2;

// Variables para almacenar las imágenes de las tarjetas seleccionadas
var resultado1;
var resultado2;

// Contador de movimientos realizados durante el juego
var movimientos = 0;

// Elemento HTML para mostrar el contador de movimientos
var mostrarMovimientos = document.getElementById("contador_movimientos");

// Contador de aciertos durante el juego
var aciertos = 0;

// Elemento HTML para mostrar el contador de aciertos
var mostrarAciertos = document.getElementById("contador_aciertos");

// Variable para almacenar el récord actual del juego
var record;

// Elemento HTML para mostrar el récord del juego
var mostrarRecord = document.getElementById("record");

var imagenes = [
    "img/memorama/broly.png",
    "img/memorama/broly.png",
    "img/memorama/bulma.jpg",
    "img/memorama/bulma.jpg",
    "img/memorama/freezer.jpg",
    "img/memorama/freezer.jpg",
    "img/memorama/ginyu.jpg",
    "img/memorama/ginyu.jpg",
    "img/memorama/goham.jpg",
    "img/memorama/goham.jpg",
    "img/memorama/goku.png",
    "img/memorama/goku.png",
    "img/memorama/gokua.jpg",
    "img/memorama/gokua.jpg",
    "img/memorama/karin.png",
    "img/memorama/karin.png",
    "img/memorama/krillin.png",
    "img/memorama/krillin.png",
    "img/memorama/nappa.jpg",
    "img/memorama/nappa.jpg",
    "img/memorama/olibu.png",
    "img/memorama/olibu.png",
    "img/memorama/piccolo.jpg",
    "img/memorama/piccolo.jpg",
    "img/memorama/pizza.png",
    "img/memorama/pizza.png",
    "img/memorama/satan.jpg",
    "img/memorama/satan.jpg",
    "img/memorama/vegeta.jpg",
    "img/memorama/vegeta.jpg",
    "img/memorama/videl.jpg",
    "img/memorama/videl.jpg",
]
var imagenesJuego = []
var comienzo;

// Evento que se ejecuta cuando el documento HTML ha sido completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    iniciar_app();
    mostrar_record();
})

// Evento que se ejecuta al hacer clic en el botón "Iniciar"
iniciar.addEventListener("click", function () {
    cronometro();
    desordenarImagenes(imagenes, imagenesJuego);
})
// Función para inicializar la aplicación
function iniciar_app() {
    bloquearTarjetas();
}
// Función para mostrar el récord guardado en el almacenamiento local
function mostrar_record () {
    let record = localStorage.getItem("ultimo_record");
    if(record==null){
        mostrarRecord.innerHTML = "-";
    }else{
        mostrarRecord.innerHTML = record.toString();
    }
}
// Función para bloquear las tarjetas al inicio del juego
function bloquearTarjetas() {
    for (let i = 0; i < cartas.length; i++) {
        cartas[i].disabled = true;
        cartas[i].classList.add("disabled");
    }
}
// Función para iniciar el cronómetro y desbloquear las tarjetas
function cronometro() {
    desbloquear_cartas()
    iniciar.disabled = true;
    iniciar.classList.add("disabled");
    comienzo = setInterval(temporizador, 1000);
}
// Función para controlar el temporizador del juego
function temporizador() {
    // Verifica si el temporizador está dentro del límite de tiempo (3 minutos)
    if (min_aux < 3) {
        // Verifica si los segundos son menores que 59
        if (seg_aux < 59) {
            seg_aux++; // Incrementa los segundos
        } else {
            min_aux++; // Incrementa los minutos
            seg_aux = 0; // Reinicia los segundos a 0
        }

        // Agrega clases de estilo adicionales según el tiempo restante
        if (min_aux == 2 && seg_aux == 30) {
            tiempo.classList.add("poco_tiempo"); // Agrega clase "poco_tiempo" al temporizador
        }
        if (min_aux == 2 && seg_aux == 50) {
            tiempo.classList.add("ultimos_segundos"); // Agrega clase "ultimos_segundos" al temporizador
        }

        // Actualiza el contenido HTML de los elementos de minutos y segundos
        seg.innerHTML = seg_aux.toString().padStart(2, "0"); // Actualiza los segundos con formato de dos dígitos
        min.innerHTML = min_aux; // Actualiza los minutos

    } else {
        // Si se alcanza el límite de tiempo (3 minutos), se detiene el temporizador y se bloquean las tarjetas del juego
        clearInterval(comienzo); // Detiene el temporizador
        bloquearTarjetas(); // Bloquea las tarjetas del juego
        window.location.href = 'perdiste.html'; // Redirige al usuario a la página de derrota
    }
}

// Función para desbloquear las tarjetas
function desbloquear_cartas() {
    for (let i = 0; i < cartas.length; i++) {
        cartas[i].disabled = false;
        cartas[i].classList.remove("disabled");
    }
}
// Función para desordenar las imágenes del juego
function desordenarImagenes(array1, array2) {
    let imagenesDuplicadas = array1.slice();
    let numerosDisponibles = [];
    let aux;
    let num;
    for (let i = 0; i < imagenesDuplicadas.length; i++) {
        numerosDisponibles[i] = i;
    }
    for (let j = 0; j < imagenesDuplicadas.length; j++) {
        aux = Math.floor(Math.random() * numerosDisponibles.length);
        num = numerosDisponibles[aux]
        array2[j] = imagenesDuplicadas[num]
        numerosDisponibles.splice(aux, 1);
    }
}
// Función para destapar una tarjeta al hacer clic en ella
function destapar(id) {
    // Verifica si el juego está activo
    if (juegoactivo) {
        // Incrementa el contador de tarjetas destapadas
        tarjetasDestapadas++;

        // Si es la primera tarjeta destapada
        if (tarjetasDestapadas == 1) {
            tarjeta1 = document.getElementById(id); // Almacena la primera tarjeta seleccionada
            resultado1 = imagenesJuego[id]; // Obtiene la imagen de la primera tarjeta
            tarjeta1.style.border = '3px solid #954300'; // Cambia el borde de la primera tarjeta
            tarjeta1.style.backgroundImage = 'url(' + resultado1 + ')'; // Muestra la imagen de la primera tarjeta
            tarjeta1.disabled = true; // Desactiva la primera tarjeta
        } 
        // Si es la segunda tarjeta destapada
        else if (tarjetasDestapadas == 2) {
            tarjeta2 = document.getElementById(id); // Almacena la segunda tarjeta seleccionada
            resultado2 = imagenesJuego[id]; // Obtiene la imagen de la segunda tarjeta
            tarjeta2.style.border = '3px solid #954300'; // Cambia el borde de la segunda tarjeta
            tarjeta2.style.backgroundImage = 'url(' + resultado2 + ')'; // Muestra la imagen de la segunda tarjeta
            tarjeta2.disabled = true; // Desactiva la segunda tarjeta

            // Incrementa el contador de movimientos y lo muestra en la interfaz
            movimientos++;
            mostrarMovimientos.innerHTML = movimientos;

            // Si las imágenes de ambas tarjetas son iguales
            if (resultado1 == resultado2) {
                tarjeta1.style.border = '4px solid green'; // Cambia el borde de la primera tarjeta a verde
                tarjeta2.style.border = '4px solid green'; // Cambia el borde de la segunda tarjeta a verde
                tarjeta1.style.cursor = 'not-allowed'; // Desactiva el cursor sobre la primera tarjeta
                tarjeta2.style.cursor = 'not-allowed'; // Desactiva el cursor sobre la segunda tarjeta
                aciertos++; // Incrementa el contador de aciertos
                mostrarAciertos.innerHTML = aciertos; // Muestra el contador de aciertos en la interfaz

                // Si se han encontrado todas las parejas de tarjetas
                if (aciertos == 16) {
                    clearInterval(comienzo); // Detiene el temporizador
                    window.location.href = 'ganaste.html'; // Redirige al usuario a la página de victoria
                    record = min_aux + ":" + seg_aux.toString().padStart(2, "0"); // Almacena el récord actual
                    localStorage.setItem("ultimo_record", record); // Guarda el récord actual en el almacenamiento local del navegador
                }
            } 
            // Si las imágenes de ambas tarjetas son diferentes
            else {
                // Cambia el borde de ambas tarjetas a rojo después de un tiempo
                setTimeout(() => {
                    tarjeta1.style.border = '4px solid red';
                    tarjeta2.style.border = '4px solid red';
                }, 750);

                // Oculta las imágenes de ambas tarjetas después de un tiempo
                setTimeout(() => {
                    tarjeta1.style.backgroundImage = 'url(img/memorama/card.png)';
                    tarjeta2.style.backgroundImage = 'url(img/memorama/card.png)';
                    tarjeta1.style.border = '';
                    tarjeta2.style.border = '';
                    tarjeta1.disabled = false; // Activa la primera tarjeta
                    tarjeta2.disabled = false; // Activa la segunda tarjeta
                    juegoactivo = true; // Vuelve a habilitar el juego
                }, 1500);
                juegoactivo = false; // Desactiva el juego temporalmente
            }
            tarjetasDestapadas = 0; // Reinicia el contador de tarjetas destapadas
        }
    }
}
