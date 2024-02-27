function validar(){
    let nombre = document.forms["formulario"]["nombre"].value;
    let edad = document.forms["formulario"]["edad"].value;
    let correo = document.forms["formulario"]["correo"].value;

    let patronName = /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ']{5,}$/;
    let patronCorreo = /.{6,}@.+/;
    let mensaje = document.getElementById("valido");

    try{
        if(!patronName.test(nombre)) throw "Nombre ingresado no váido"

        if(isNaN(edad) || edad < 18 || edad > 30) throw "La edad debe estar comprendida entre 18 y 30"

        if(!patronCorreo.test(correo)) throw "Dirección de correo no válida"
    }catch(err){
        mensaje.innerHTML = err;
        return false;
    }
    mensaje.innerHTML = "Datos ingresados correctamente";
    return true;

}