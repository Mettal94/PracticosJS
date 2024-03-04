function redireccion(){
    setTimeout(function() {
        window.location.href = "index.html"
    }, 5000);
}
var nombre = localStorage.getItem("contacto");
var mensaje = document.getElementById("mensaje");
mensaje.innerHTML = "Gracias por comunicarte con nosotros "+nombre+".";