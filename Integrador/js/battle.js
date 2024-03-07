//Mapa y música - INICIALIZACIÓN
// Variables para la música y el sonido de carga
var music = new Audio("img/arena/audio/music.mp3");
var ki = new Audio("img/arena/audio/carga.mp3");

// Se establece que la música se repita en bucle
music.loop = true;

// Se define el volumen inicial de la música y el sonido de carga
music.volume = 0;

// Lista de mapas disponibles para la arena
var listaMapas = [
  { nombre: "Torneo de las Artes Marciales", imagen: "img/arena/arenas/0.gif" },
  { nombre: "Yermos", imagen: "img/arena/arenas/1.gif" },
  { nombre: "Habitación del tiempo", imagen: "img/arena/arenas/2.gif" },
  { nombre: "Carretera", imagen: "img/arena/arenas/3.gif" },
  { nombre: "Páramos", imagen: "img/arena/arenas/4.gif" },
];

// Variable para controlar el mapa actual
var mapaActual = 0;

//Inicialización de audios de ataque para Goku y Piccolo
var piccolo = new Audio("img/arena/audio/makankosappo.mp3");
var goku = new Audio("img/arena/audio/kamehameha.mp3");

//Inicializar los botones de pelea desactivados.
var atkgoku = document.getElementById("atkgoku");
atkgoku.disabled = true;
var atkpiccolo = document.getElementById("atkpiccolo");
atkpiccolo.disabled = true;
var recarga = document.getElementById("recarga");
recarga.disabled = true;

//Obtener valores iniciales de vida y ki de los personajes para utilizarlos en los métodos.
var vidagoku = document.getElementById("vidagoku").textContent;
var kigoku = document.getElementById("kigoku").textContent;
var vidapiccolo = document.getElementById("vidapiccolo").textContent;
var kipiccolo = document.getElementById("kipiccolo").textContent;

//Obtener valores de volumen del Storage.
recuperarVolumen();
////////////////////////////////////////////////////////////////////////////////////
// Función para iniciar la pelea
function iniciarPelea() {
  // Desactivar todos los botones durante la pelea
  desactivarBotones();

  // Cambiar la imagen de la arena a "start.gif" (imagen de inicio)
  var arena = document.getElementById("pelea");
  arena.src = "img/arena/start.gif";

  // Desactivar los botones de cambio de mapa durante la pelea
  var mapaizq = document.getElementById("mapaizq");
  mapaizq.disabled = true;
  var mapader = document.getElementById("mapader");
  mapader.disabled = true;

  // Reproducir la música de fondo de la pelea
  music.play();

  // Esperar 1.3 segundos y luego llamar a la función "standby"
  // (que se encarga de la espera y preparación para los siguientes eventos)
  setTimeout(standby, 1300);
}
//////////////////////////////////////////////////////////////////////////////////////////
// Función para realizar el ataque de Piccolo
function ataquePiccolo() {
  // Comprobar si Piccolo tiene suficiente Ki (al menos 10)
  if (kipiccolo >= 10) {
    // Reproducir el sonido del ataque de Piccolo
    piccolo.play();

    // Desactivar todos los botones durante el ataque
    desactivarBotones();

    // Cambiar la imagen de la arena a la del ataque de Piccolo
    var img = document.getElementById("pelea");
    // Agregar una marca de tiempo al final de la URL para evitar problemas de caché
    img.src = "img/arena/ataquepiccolo.gif" + "?x=" + Date.now();

    // Restar 10 puntos de Ki a Piccolo
    kipiccolo -= 10;
    // Actualizar el valor del Ki de Piccolo en el HTML
    document.getElementById("kipiccolo").innerText = kipiccolo;

    // Restar vida a Goku de forma aleatoria (entre 5 y 19 puntos)
    vidagoku -= Math.floor(Math.random() * 15) + 5;

    // Comprobar si la vida de Goku llega a 0
    if (vidagoku <= 0) {
      // Victoria de Piccolo
      document.getElementById("vidagoku").innerText = 0;
      desactivarBotones();
      setTimeout(piccoloWins, 1900); // Esperar 1.9 segundos antes de mostrar la victoria
    } else {
      // Bajar la vida de Goku y esperar antes de volver al modo "standby"
      document.getElementById("vidagoku").innerText = vidagoku;
      setTimeout(standby, 2500); // Esperar 2.5 segundos antes de volver a "standby"
    }
  } else {
    // Si Piccolo no tiene suficiente Ki, llamar a la función para recargar
    recargar();
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////
// Función para realizar el ataque de Goku
function ataqueGoku() {
  // Comprobar si Goku tiene suficiente Ki (al menos 10)
  if (kigoku >= 10) {
    // Reproducir el sonido del ataque de Goku
    goku.play();

    // Desactivar todos los botones durante el ataque
    desactivarBotones();

    // Cambiar la imagen de la arena a la del ataque de Goku
    var img = document.getElementById("pelea");
    // Agregar una marca de tiempo al final de la URL para evitar problemas de caché
    img.src = "img/arena/ataquegoku.gif" + "?x=" + Date.now();

    // Restar 10 puntos de Ki a Goku
    kigoku -= 10;
    // Actualizar el valor del Ki de Goku en el HTML
    document.getElementById("kigoku").innerText = kigoku;

    // Restar vida a Piccolo de forma aleatoria (entre 5 y 19 puntos)
    vidapiccolo -= Math.floor(Math.random() * 15) + 5;

    // Comprobar si la vida de Piccolo llega a 0
    if (vidapiccolo <= 0) {
      // Victoria de Goku
      document.getElementById("vidapiccolo").innerText = 0;
      desactivarBotones();
      setTimeout(gokuWins, 1900); // Esperar 1.9 segundos antes de mostrar la victoria
    } else {
      // Bajar la vida de Piccolo y esperar antes de volver al modo "standby"
      document.getElementById("vidapiccolo").innerText = vidapiccolo;
      setTimeout(standby, 2700); // Esperar 2.7 segundos antes de volver a "standby"
    }
  } else {
    // Si Goku no tiene suficiente Ki, llamar a la función para recargar
    recargar();
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////
// Función para recargar Ki y vida de ambos personajes
function recargar() {
  // Desactivar todos los botones durante la recarga
  desactivarBotones();

  // Reproducir el sonido de carga
  ki.play();

  // Cambiar la imagen de la arena a la de carga
  var img = document.getElementById("pelea");
  img.src = "img/arena/carga.gif";

  // Esperar 3 segundos antes de volver al modo "standby"
  setTimeout(standby, 3000);

  // **Recuperación aleatoria de Ki y vida:**

  // Goku
  kigoku += parseInt(Math.floor(Math.random() * 10) + 5); // Aumento aleatorio entre 5 y 14
  vidagoku += parseInt(Math.floor(Math.random() * 20) + 5); // Aumento aleatorio entre 5 y 24

  // Piccolo
  kipiccolo += parseInt(Math.floor(Math.random() * 10) + 5); // Aumento aleatorio entre 5 y 14
  vidapiccolo += parseInt(Math.floor(Math.random() * 20) + 5); // Aumento aleatorio entre 5 y 24

  // **Limitar valores a 100:**

  // Ki
  if (kigoku > 100) {
    document.getElementById("kigoku").innerText = 100;
    kigoku = 100;
  } else {
    document.getElementById("kigoku").innerText = kigoku;
  }

  if (kipiccolo > 100) {
    document.getElementById("kipiccolo").innerText = 100;
    kipiccolo = 100;
  } else {
    document.getElementById("kipiccolo").innerText = kipiccolo;
  }

  // Vida
  if (vidagoku > 100) {
    document.getElementById("vidagoku").innerText = 100;
    vidagoku = 100;
  } else {
    document.getElementById("vidagoku").innerText = vidagoku;
  }

  if (vidapiccolo > 100) {
    document.getElementById("vidapiccolo").innerText = 100;
    vidapiccolo = 100;
  } else {
    document.getElementById("vidapiccolo").innerText = vidapiccolo;
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////
// Función para poner el juego en modo "standby" (espera)
function standby() {
  // Cambiar la imagen de la arena a la de "standby"
  var img = document.getElementById("pelea");
  img.src = "img/arena/standby.png";

  // Reactivar los botones de ataque y recarga
  atkgoku.disabled = false;
  atkpiccolo.disabled = false;
  recarga.disabled = false;

  // **Función de espera de acción:**

  // Esta función reactiva los botones en un tiempo determinado (2 segundos) y cambia la postura de los personajes a la espera.

  setTimeout(function() {
    // Cambiar la imagen de los personajes a "standby"
    goku.src = "img/arena/goku_standby.gif";
    piccolo.src = "img/arena/piccolo_standby.gif";
  }, 2000);
}
///////////////////////////////////////////////////////////////////////////////////////////////////
// Función para mostrar la victoria de Piccolo
function piccoloWins() {
  // Cambiar la imagen de la arena a la de victoria de Piccolo
  var img = document.getElementById("pelea");
  img.src = "img/arena/piccolowins.gif";

  // Deshabilitar todos los botones para detener el juego
  removerBotones();
}

// Función para mostrar la victoria de Goku
function gokuWins() {
  // Cambiar la imagen de la arena a la de victoria de Goku
  var img = document.getElementById("pelea");
  img.src = "img/arena/gokuwins.gif";

  // Deshabilitar todos los botones para detener el juego
  removerBotones();
}
//////////////////////////////////////////////////////////////////////////////////////////////////
// Función para deshabilitar todos los botones del juego
function desactivarBotones() {
  // Deshabilitar el botón "iniciar"
  iniciar.disabled = true;

  // Deshabilitar el botón de ataque de Goku
  atkgoku.disabled = true;

  // Deshabilitar el botón de ataque de Piccolo
  atkpiccolo.disabled = true;

  // Deshabilitar el botón de recarga
  recarga.disabled = true;
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// Función para mover el mapa hacia la izquierda
function mapaIzquierda() {
  // Comprobar si ya está en el primer mapa
  if (mapaActual == 0) {
    // Si está en el primero, ir al último mapa
    mapaActual = listaMapas.length - 1;
  } else {
    // Si no está en el primero, retroceder una posición
    mapaActual--;
  }

  // Obtener el elemento de la arena
  var arena = document.getElementById("arena");

  // Actualizar el fondo de la arena con la nueva imagen del mapa
  arena.style.backgroundImage = "url(" + listaMapas[mapaActual].imagen + ")";
}
///////////////////////////////////////////////////////////////////////////////////////////////////
// Función para mover el mapa hacia la derecha
function mapaDerecha() {
  // Comprobar si ya está en el último mapa
  if (mapaActual == listaMapas.length - 1) {
    // Si está en el último, ir al primer mapa
    mapaActual = 0;
  } else {
    // Si no está en el último, avanzar una posición
    mapaActual++;
  }

  // Obtener el elemento de la arena
  var arena = document.getElementById("arena");

  // Actualizar el fondo de la arena con la nueva imagen del mapa
  arena.style.backgroundImage = "url(" + listaMapas[mapaActual].imagen + ")";
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// Función para cambiar el volumen del juego y guardar la configuración

function cambiarVolumen() {
  // Obtener el elemento "volumen" del HTML
  var span = document.getElementById("volumen");

  // Comprobar el estado actual del volumen (icono)
  if (span.innerHTML == "🔈") { // Si el icono es "silencio" (volumen bajo)
    // Activar el volumen
    span.innerHTML = "🔊"; // Cambiar el icono a "sonido" (volumen alto)
    music.volume = 0.25; // Establecer volumen de la música de fondo a 25%
    goku.volume = 0.6; // Establecer volumen del sonido de Goku a 60%
    piccolo.volume = 0.5; // Establecer volumen del sonido de Piccolo a 50%
    ki.volume = 0.5; // Establecer volumen del sonido de Ki a 50%
  } else { // Si el icono es "sonido" (volumen alto)
    // Desactivar el volumen
    span.innerHTML = "🔈"; // Cambiar el icono a "silencio" (volumen bajo)
    music.volume = 0; // Silenciar la música de fondo
    goku.volume = 0; // Silenciar el sonido de Goku
    piccolo.volume = 0; // Silenciar el sonido de Piccolo
    ki.volume = 0; // Silenciar el sonido de Ki
  }

  // Guardar la configuración del volumen en localStorage
  localStorage.setItem("musicVolume", music.volume);
  localStorage.setItem("gokuVolume", goku.volume);
  localStorage.setItem("piccoloVolume", piccolo.volume);
  localStorage.setItem("kiVolume", ki.volume);
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// Función para mostrar una ventana oculta
function mostrarVentana() {
  // Obtener el elemento con ID "miDiv"
  var div = document.getElementById("miDiv");

  // Mostrar el elemento
  div.style.display = "block";
}

/////////////////////////////////////////////
// Función para esconder la ventana con ID "miDiv"
function cerrarVentana() {
  // Obtener el elemento con ID "miDiv"
  var div = document.getElementById("miDiv");

  // Esconder el elemento
  div.style.display = "none";
}
///////////////////////////////////////////////////////////////////////////////////////////////////
// Función para remover botones y preparar la ventana para reiniciar el juego
function removerBotones() {
  // Actualizar texto del botón "iniciar"
  iniciar.innerText = "Volver a jugar";

  // Habilitar el botón "iniciar"
  iniciar.disabled = false;

  // Asignar nueva funcionalidad al botón "iniciar" al hacer clic
  iniciar.onclick = function() {
    // Recargar la página para reiniciar el juego
    window.location.reload();
  };
}
///////////////////////////////////////////////////////////////////////////////////////////////////
// Función para recuperar los ajustes de volumen desde localStorage
function recuperarVolumen() {
  // Obtener el elemento "volumen" del HTML
  var span = document.getElementById("volumen");

  // Recuperar y establecer el volumen de la música
  if (localStorage.getItem("musicVolume") !== null) {
    music.volume = parseFloat(localStorage.getItem("musicVolume"));
  }

  // Recuperar y establecer el volumen de otros sonidos
  if (localStorage.getItem("gokuVolume") !== null) {
    goku.volume = parseFloat(localStorage.getItem("gokuVolume"));
  }
  if (localStorage.getItem("piccoloVolume") !== null) {
    piccolo.volume = parseFloat(localStorage.getItem("piccoloVolume"));
  }
  if (localStorage.getItem("kiVolume") !== null) {
    ki.volume = parseFloat(localStorage.getItem("kiVolume"));
  }

  // Actualizar el icono de volumen
  if (localStorage.getItem("musicVolume") > 0) {
    span.innerHTML = ""; // Icono de volumen alto
  } else {
    span.innerHTML = ""; // Icono de volumen bajo
  }
}