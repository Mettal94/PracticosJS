
    function validacion(){

    var edad = document.getElementById("edad").value;
    console.log(edad);
    var nombre = document.getElementById("nombre").value;
    var dias = edad*365
    if(isNaN(edad) || nombre == "" || edad < 1){
        document.getElementById("resultado").innerHTML = "Ingrese datos válidos.";
    }else{
    resultado = nombre + " ha vivido " + dias + " días."
    document.getElementById("resultado").innerHTML = resultado;
    }
}