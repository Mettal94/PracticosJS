function validar() {
    // Obtenemos el formulario y los valores de los campos del formulario
    var formulario = document.forms["contacto"];
    var nombre = formulario.nombre.value;
    var apellido = formulario.apellido.value;
    var correo = formulario.correo.value;
    var comment = formulario.comentario.value;
    var mensaje = document.getElementById("mensaje"); // Elemento para mostrar mensajes de error

    // Patrones para validar nombre, apellido y correo electrónico
    var patronName = /^[^\d\W_]+$/; // Solo permite letras y espacios
    var patronCorreo = /^\w+@\w+(\.\w{2,4})+$/; // Valida formato de correo electrónico

    try {
        // Validamos nombre y apellido utilizando el patrón
        if (!patronName.test(nombre) || !patronName.test(apellido)) throw "Los datos en el nombre/apellido no son correctos";

        // Validamos el correo electrónico utilizando el patrón
        if (!patronCorreo.test(correo)) throw "Correo no válido";

        // Validamos que se haya ingresado un comentario
        if (!comment) throw "Déjanos un comentario!!";
    } catch (err) {
        // Si se produce un error, mostramos el mensaje de error y retornamos false para evitar el envío del formulario
        mensaje.innerHTML = err;
        return false;
    }

    // Si no hay errores, almacenamos el nombre en el almacenamiento local y retornamos true para enviar el formulario
    localStorage.setItem("contacto", nombre);
    return true;
}
