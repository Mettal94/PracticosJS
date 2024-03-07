// Seleccionar el elemento con id "header"
let header = document.getElementById("header")

// Crear elementos div para los enlaces de inicio, personajes y contacto
let inicio = document.createElement("div");
let personajes = document.createElement("div");
let contacto = document.createElement("div");

// Agregar enlaces a los elementos div creados
inicio.innerHTML = '<a href="index.html">Inicio</a>';
personajes.innerHTML = '<a href="characters.html">Información</a>';
contacto.innerHTML = '<a href="contact.html">Contacto</a>';

// Agregar los elementos div al encabezado
header.appendChild(inicio);
header.appendChild(personajes); 
header.appendChild(contacto);

// Seleccionar el elemento con id "footer"
let footer = document.getElementById("footer");

// Crear elementos div para los nombres de los colaboradores
let div1 = document.createElement("div");
div1.innerHTML = '<a href="https://github.com/Mettal94" target="_blank">Schembri Alan';
let div2 = document.createElement("div");
div2.innerHTML = '<a href="https://github.com/Marii0130" target="_blank">Villanueva María Belén';
let div3 = document.createElement("div");
div3.innerHTML = '<a href="https://github.com/ApioMan3" target="_blank">Winiarczyk Robinson';
let div4 = document.createElement("div");
div4.innerHTML = '<a href="https://github.com/JNZader" target="_blank">Zader Javier';

// Agregar los elementos div al pie de página
footer.appendChild(div1);
footer.appendChild(div2);
footer.appendChild(div3);
footer.appendChild(div4);