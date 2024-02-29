var formulario = document.forms["contacto"];
var nombre = formulario.nombre.value;
var apellido = formulario.apellido.value;
var correo = formulario.correo.value;
var comment = formulario.comentario.value;
var mensaje = document.getElementById("mensaje");

var patronName = /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ']$/;
var patronCorreo = /^\w+@\w+(\.\w{2,4})+$/;

function validar(){
    try{
        if(!patronName.test(nombre)||!patronName.test(apellido)) throw "Los datos en el nombre/apellido no son correctos";

        if(!patronCorreo.test(correo)) throw "Correo no válido";
    }catch(err){
        mensaje.innerHTML = err;
        return false;
    }
    mensaje.innerHTML = "Informacion recibida, gracias!!"
    return true;
}