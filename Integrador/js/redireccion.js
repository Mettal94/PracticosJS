// Redireccionar a la página de inicio después de 5 segundos
setTimeout(function() {
    window.location.href = "index.html";
}, 5000);

// Obtener el nombre almacenado en el almacenamiento local (localStorage)
var nombre = localStorage.getItem("contacto");

// Mostrar un mensaje de agradecimiento personalizado en el elemento con id "mensaje"
var mensaje = document.getElementById("mensaje");
mensaje.innerHTML = "Gracias por comunicarte con nosotros " + nombre + ".";

// Obtener el elemento con id "conteo"
var conteo = document.getElementById("conteo");

// Establecer un intervalo para actualizar el contador cada segundo
setInterval(function(){
    // Obtener el valor actual del contador
    var contador = parseInt(conteo.innerText);
    
    // Decrementar el contador en 1
    contador--;
    
    // Actualizar el texto del contador
    conteo.innerText = contador;
}, 1000);