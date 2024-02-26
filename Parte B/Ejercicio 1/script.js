function validar(){
    let num = parseInt(document.getElementById("num").value);
    let mensaje = document.getElementById("validacion");
    if(isNaN(num) || num < 1 || num > 100){
        mensaje.innerHTML = "Dato no válido"
        return false;
    }else{
        mensaje.innerHTML = "Ingreso correcto"
        return true;
    }
}