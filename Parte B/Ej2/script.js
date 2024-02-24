function validar(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let sexo = document.querySelector('input[name="sexo"]:checked');
    let fecha = new Date(document.getElementById("fechaNac").value);
    let mail = document.getElementById("correo").value;
    
    let patronName = /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ']+$/;
    let patronMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let fechaActual = new Date();

    try{
        if(!patronName.test(nombre)||!patronName.test(apellido)) throw "Nombre o apellido no válido/s";

        if(!sexo) throw "Sexo no seleccionado";

        if(fecha > fechaActual) throw "No es posible seleccionar una fecha posterior a la actual";

        if(!patronMail.test(mail)) throw "Correo ingresado no válido";

    }catch(err){
        alert("Datos ingresados incorrectos: "+err);
        return false;
    }

    let mensaje = document.getElementById("valido");
    mensaje.innerHTML = "Datos ingresados válidos!!!"
    return true;

}