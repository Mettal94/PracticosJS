const listaPersonajes = [
  {
    nombre: "KARIN",
    descripcion: "Maestro que vive en la torre.",
    imagen: "img/dragondle/KARIN.png",
  },
  {
    nombre: "PIANO",
    descripcion: "Hijo del Rey Demonio Piccolo.",
    imagen: "img/dragondle/PIANO.png",
  },
  {
    nombre: "VADOS",
    descripcion: "Angel del 6to universo.",
    imagen: "img/dragondle/VADOS.png",
  },
  {
    nombre: "BUJIN",
    descripcion: "Secuaz de Bojack.",
    imagen: "img/dragondle/BUJIN.png",
  },
  {
    nombre: "GOKUA",
    descripcion: "Secuaz de Bojack.",
    imagen: "img/dragondle/GOKUA.png",
  },
  {
    nombre: "CARGO",
    descripcion: "Namek hermano de Dende.",
    imagen: "img/dragondle/CARGO.png",
  },
  {
    nombre: "DENDE",
    descripcion: "Namek, nuevo Kamisama de la tierra.",
    imagen: "img/dragondle/DENDE.png",
  },
  {
    nombre: "MOORI",
    descripcion: "Namek, nuevo patriatca del Namekusei.",
    imagen: "img/dragondle/MOORI.png",
  },
  {
    nombre: "BULMA",
    descripcion: "Aventurera, trabajadora de la Corporación Cápsula.",
    imagen: "img/dragondle/BULMA.png",
  },
  {
    nombre: "MARON",
    descripcion: "Ex-novia de Krillin.",
    imagen: "img/dragondle/MARON.png",
  },
  {
    nombre: "ROSHI",
    descripcion: "Maestro de las artes marciales.",
    imagen: "img/dragondle/ROSHI.png",
  },
  {
    nombre: "SATAN",
    descripcion: "Campeón de múltiples torneos de artes marciales.",
    imagen: "img/dragondle/SATAN.png",
  },
  {
    nombre: "PIZZA",
    descripcion: "Asistente de Mr.Satán.",
    imagen: "img/dragondle/PIZZA.png",
  },
  {
    nombre: "VIDEL",
    descripcion: "Guerrera terrícola hija del campeón mundial.",
    imagen: "img/dragondle/VIDEL.png",
  },
  {
    nombre: "NAPPA",
    descripcion: "Saiyan élite, compañero de Vegeta.",
    imagen: "img/dragondle/NAPPA.png",
  },
  {
    nombre: "CABBA",
    descripcion: "Saiyan del 6to universo.",
    imagen: "img/dragondle/CABBA.png",
  },
  {
    nombre: "KEFLA",
    descripcion: "Fusion saiyan del 6to universo.",
    imagen: "img/dragondle/KEFLA.png",
  },
  {
    nombre: "GOHAN",
    descripcion: "Primer hijo de Goku y Milk.",
    imagen: "img/dragondle/GOHAN.png",
  },
  {
    nombre: "GOTEN",
    descripcion: "Segundo hijo de Goku y Milk.",
    imagen: "img/dragondle/GOTEN.png",
  },
  {
    nombre: "ARALE",
    descripcion: "Invitada recurrente de Dr.Slump.",
    imagen: "img/dragondle/ARALE.png",
  },
  {
    nombre: "DOORE",
    descripcion: "Soldado del escuadrón de Cooler.",
    imagen: "img/dragondle/DOORE.png",
  },
  {
    nombre: "SALZA",
    descripcion: "Soldado del escuadrón de Cooler.",
    imagen: "img/dragondle/SALZA.png",
  },
  {
    nombre: "SIDRA",
    descripcion: "Dios de la Destrucción.",
    imagen: "img/dragondle/SIDRA.png",
  },
  {
    nombre: "JEREZ",
    descripcion: "Diosa de la Destrucción.",
    imagen: "img/dragondle/JEREZ.png",
  },
  {
    nombre: "OLIBU",
    descripcion: "Alumno del Kaio del Norte.",
    imagen: "img/dragondle/OLIBU.png",
  },
  {
    nombre: "GINYU",
    descripcion: "Soldado de Freezer que lidera su escuadrón.",
    imagen: "img/dragondle/GINYU.png",
  },
  {
    nombre: "GULDO",
    descripcion: "Miembro de las 'Fuerzas Ginyu'.",
    imagen: "img/dragondle/GULDO.png",
  },
  {
    nombre: "JEICE",
    descripcion: "Miembro de las 'Fuerzas Ginyu'.",
    imagen: "img/dragondle/JEICE.png",
  },
  {
    nombre: "GOWAS",
    descripcion: "Kaiosama del 10mo universo.",
    imagen: "img/dragondle/GOWAS.png",
  },
  {
    nombre: "ZAMAS",
    descripcion: "Asistente de Gowas, principal villano de su arco.",
    imagen: "img/dragondle/ZAMAS.png",
  },
  {
    nombre: "BLACK",
    descripcion: "Una versión alternativa de Zamas, en el cuerpo de Goku.",
    imagen: "img/dragondle/BLACK.png",
  },
  {
    nombre: "DISPO",
    descripcion: "Miembro de las tropas del orgullo.",
    imagen: "img/dragondle/DISPO.png",
  },
  {
    nombre: "JIREN",
    descripcion: "Miembro de las tropas del orgullo.",
    imagen: "img/dragondle/JIREN.png",
  },
  {
    nombre: "BASIL",
    descripcion: "Miembro del trio del peligro.",
    imagen: "img/dragondle/BASIL.png",
  },
  {
    nombre: "BILLS",
    descripcion: "Dios de la Destrucción.",
    imagen: "img/dragondle/BILLS.png",
  },
  {
    nombre: "BROLY",
    descripcion: "El Super Saiyan Legendario.",
    imagen: "img/dragondle/BROLY.png",
  },
  {
    nombre: "TOPPO",
    descripcion: "Miembro de las tropas del orgullo.",
    imagen: "img/dragondle/TOPPO.png",
  },
  {
    nombre: "CHAOS",
    descripcion: "Alumno de la escuela de la grulla.",
    imagen: "img/dragondle/CHAOS.png",
  },
  {
    nombre: "FROST",
    descripcion: "Combatiente del 6to universo.",
    imagen: "img/dragondle/FROST.png",
  },
];
//eligiendo un personaje del arreglo y iniciando intentos.
let aleatorio = Math.floor(Math.random() * listaPersonajes.length); // Número aleatorio para seleccionar un personaje
let pjRandom = listaPersonajes[aleatorio]; // Objeto del personaje seleccionado
let nombrepjRandom = pjRandom.nombre; // Nombre del personaje seleccionado
let intentos = 0; // Número de intentos realizados por el usuario

console.log(nombrepjRandom);

// **Elemento del DOM donde se muestran los resultados**
let juego = document.getElementById("wordle");

// Función para detectar la pulsación de la tecla Enter en el campo de texto "nombre"

//asignando el botón enter al botón

document.getElementById("nombre").addEventListener("keypress", function (e) {
  // Si la tecla pulsada es Enter
  if (e.key === "Enter") {
    // Prevenir el comportamiento por defecto de la tecla Enter (enviar el formulario)
    e.preventDefault();

    // Llamar a la función "enviarPersonaje()" para enviar el nombre del personaje
    enviarPersonaje();
  }
});

// Función para finalizar la partida

function terminarJuego() {
  // **Mostrar información del personaje a adivinar**

  // Obtener elementos del DOM
  var nombrePJ = document.getElementById("NombrePJ");
  var imagenPJ = document.getElementById("Imagen");
  var descripciónPJ = document.getElementById("descripcionPJ");

  // Asignar información del personaje
  nombrePJ.innerText = pjRandom.nombre;
  imagenPJ.src = pjRandom.imagen;
  imagenPJ.id = "ImagenPJ";
  descripciónPJ.innerText = pjRandom.descripcion;

  // **Deshabilitar el campo de texto y el botón "Enviar"**

  // Obtener elementos del DOM
  var nombreInput = document.getElementById("nombre");
  var boton = document.getElementById("boton");

  // Deshabilitar el campo de texto y el botón
  nombreInput.disabled = true;
  boton.disabled = true;

  // **Función especial para el personaje "CHAOS"**

  if (nombrepjRandom == "CHAOS") {
    adiosTen(); // Función para mostrar una imagen y un audio especial
  }

  // **Cambiar el texto del botón "Ayuda" y recargar la página al hacer clic**

  // Obtener el botón "Ayuda"
  var boton2 = document.getElementById("ayuda");

  // Cambiar el texto del botón
  boton2.innerText = "Volver a jugar";

  // Habilitar el botón
  boton2.disabled = false;

  // Función para recargar la página al hacer clic en el botón
  boton2.onclick = function () {
    window.location.reload();
  };
}

// Función para validar y enviar el nombre del personaje

function enviarPersonaje() {
  // **Expresión regular para validar el nombre**
  let patron = /^[a-zA-Z]{5}$/; // 5 letras mayúsculas o minúsculas seguidas

  // **Validación del nombre**
  if (patron.test(document.forms["formulario"]["nombre"].value)) {
    // Si el nombre es válido:
    intentos++; // Incrementa el número de intentos
    introducirPersonaje(); // Llama a la función para procesar el intento
  } else {
    // Si el nombre no es válido:
    let error = document.getElementById("error");
    error.innerHTML = "Escriba el nombre del personaje correctamente"; // Muestra un mensaje de error
    setTimeout(function () {
      error.innerHTML = ""; // Limpia el mensaje de error después de 2 segundos
    }, 2000);
  }
}

// Función para procesar el intento del usuario

function introducirPersonaje() {
  // **Obtener elementos del DOM**

  // Contenedor de los resultados de los intentos
  juego = document.getElementById("wordle");

  // **Crear el div para el intento actual**

  let div = document.createElement("div");
  div.classList.add("juego");

  // **Obtener el nombre introducido por el usuario**

  let campo = document.forms["formulario"]["nombre"];
  let ingreso = campo.value.toUpperCase();
  campo.value = ""; // Limpiar el campo de texto

  // **Crear las spans para cada letra**

  let letra1 = document.createElement("span");
  let letra2 = document.createElement("span");
  let letra3 = document.createElement("span");
  let letra4 = document.createElement("span");
  let letra5 = document.createElement("span");

  // **Asignar las letras a las spans**

  letra1.innerText = ingreso[0];
  letra2.innerText = ingreso[1];
  letra3.innerText = ingreso[2];
  letra4.innerText = ingreso[3];
  letra5.innerText = ingreso[4];

  /**Banderas para controlar si una letra ya ha sido 
      encontrada en otra posición                   **/

  //comprobación de cada letra para evitar repetirla en los otros chequeos
  var letra1encontrada = ingreso[0] == nombrepjRandom[0] ? true : false;
  var letra2encontrada = ingreso[1] == nombrepjRandom[1] ? true : false;
  var letra3encontrada = ingreso[2] == nombrepjRandom[2] ? true : false;
  var letra4encontrada = ingreso[3] == nombrepjRandom[3] ? true : false;
  var letra5encontrada = ingreso[4] == nombrepjRandom[4] ? true : false;

  /*if (ingreso[0] == nombrepjRandom[0]){var letra1encontrada = true;}else{var letra1encontrada = false;}
    if (ingreso[1] == nombrepjRandom[1]){var letra2encontrada = true;}else{var letra2encontrada = false;}
    if (ingreso[2] == nombrepjRandom[2]){var letra3encontrada = true;}else{var letra3encontrada = false;}
    if (ingreso[3] == nombrepjRandom[3]){var letra4encontrada = true;}else{var letra4encontrada = false;}
    if (ingreso[4] == nombrepjRandom[4]){var letra5encontrada = true;}else{var letra5encontrada = false;}*/

  // **Comprobación de cada letra**

 
    //letra 1
    if (ingreso[0] == nombrepjRandom[0]) {
        letra1.classList.add("letraCorrecta");
    }
    else if ((ingreso[0] == nombrepjRandom[1] && !letra2encontrada) ||
        (ingreso[0] == nombrepjRandom[2] && !letra3encontrada) ||
        (ingreso[0] == nombrepjRandom[3] && !letra4encontrada) ||
        (ingreso[0] == nombrepjRandom[4] && !letra5encontrada)) {
        letra1.classList.add("letraPosible");
    } else {
        letra1.classList.add("letra");
    }

    //letra 2
    if (ingreso[1] == nombrepjRandom[1]) {
        letra2.classList.add("letraCorrecta");
    }
    else if ((ingreso[1] == nombrepjRandom[0] && !letra1encontrada)||
        (ingreso[1] == nombrepjRandom[2] && !letra3encontrada) ||
        (ingreso[1] == nombrepjRandom[3] && !letra4encontrada) ||
        (ingreso[1] == nombrepjRandom[4] && !letra5encontrada)) {
        letra2.classList.add("letraPosible");
    } else {
        letra2.classList.add("letra");
    }

    //letra 3
    if (ingreso[2] == nombrepjRandom[2]) {
        letra3.classList.add("letraCorrecta")
    }
    else if ((ingreso[2] == nombrepjRandom[0] && !letra1encontrada) ||
        (ingreso[2] == nombrepjRandom[1] && !letra2encontrada) ||
        (ingreso[2] == nombrepjRandom[3] && !letra4encontrada) ||
        (ingreso[2] == nombrepjRandom[4] && !letra5encontrada)) {
        letra3.classList.add("letraPosible");
    } else {
        letra3.classList.add("letra");
    }

    //letra 4
    if (ingreso[3] == nombrepjRandom[3]) {
        letra4.classList.add("letraCorrecta")
    }
    else if ((ingreso[3] == nombrepjRandom[0] && !letra1encontrada) ||
        (ingreso[3] == nombrepjRandom[1] && !letra2encontrada) ||
        (ingreso[3] == nombrepjRandom[2] && !letra3encontrada) ||
        (ingreso[3] == nombrepjRandom[4] && !letra5encontrada)) {
        letra4.classList.add("letraPosible");
    } else {
        letra4.classList.add("letra");
    }

    //letra 5
    if (ingreso[4] == nombrepjRandom[4]) {
        letra5.classList.add("letraCorrecta")
    }
    else if ((ingreso[4] == nombrepjRandom[0] && !letra1encontrada) ||
        (ingreso[4] == nombrepjRandom[1] && !letra2encontrada) ||
        (ingreso[4] == nombrepjRandom[2] && !letra3encontrada) ||
        (ingreso[4] == nombrepjRandom[3]) && !letra4encontrada) {
        letra5.classList.add("letraPosible");
    } else {
        letra5.classList.add("letra");
    }

  //añadir las letras al div
  div.appendChild(letra1);
  div.appendChild(letra2);
  div.appendChild(letra3);
  div.appendChild(letra4);
  div.appendChild(letra5);

  //añadir el div al section
  juego.appendChild(div);

  //comprobación para cerrar el juego
  if (
    ingreso[0] == nombrepjRandom[0] &&
    ingreso[1] == nombrepjRandom[1] &&
    ingreso[2] == nombrepjRandom[2] &&
    ingreso[3] == nombrepjRandom[3] &&
    ingreso[4] == nombrepjRandom[4]
  ) {
    terminarJuego();
  }

  if (intentos == 6) {
    terminarJuego();
  }
}

// Función que se ejecuta al agotar los intentos
function adiosTen() {
  // **Agregar imagen a la página tras una espera de 3 segundos:**
  setTimeout(function () {
    // Crear un nuevo elemento <img>
    var img = document.createElement("img");
    // Establecer la fuente de la imagen
    img.src = "img/dragondle/adios.png";
    // Asignar un ID a la imagen
    img.id = "chaosExplosion";
    // Añadir la imagen al elemento con ID "juego"
    juego.appendChild(img);

    // **Reproducir un audio:**
    // Crear un nuevo objeto Audio
    var audio = new Audio("img/dragondle/audio.mp3");
    // Iniciar la reproducción del audio
    audio.play();

    // **Recargar la página tras una espera de 5 segundos:**
    setTimeout(function () {
      location.reload();
    }, 5000);
  }, 3000);
}

// Función para mostrar la ventana
function mostrarVentana() {
  // Obtener una referencia al elemento <div> con ID "miDiv"
  var div = document.getElementById("miDiv");
  // Hacer visible el div
  div.style.display = "block";
}

// Función para cerrar la ventana
function cerrarVentana() {
  // Obtener una referencia al elemento <div> con ID "miDiv"
  var div = document.getElementById("miDiv");
  // Ocultar el div
  div.style.display = "none";
}