function agregar(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let arreglo = [];

    if(isNaN(edad) || nombre == "" || edad < 1||apellido == ""){
        document.getElementById("mensaje").innerHTML = "Ingrese datos válidos.";
    }else{
        document.getElementById("mensaje").innerHTML = "<br>";
        agregarPersona();
    }

    function agregarPersona(){
        let tabla = document.getElementById("cuerpo");
        let columnat = document.createElement("tr");
        let nombret = document.createElement("td");
        let apellidot = document.createElement("td");
        let edadt = document.createElement("td");
        nombret.textContent = nombre;
        apellidot.textContent = apellido;
        edadt.textContent = edad;
        columnat.appendChild(nombret);
        columnat.appendChild(apellidot);
        columnat.appendChild(edadt);
        tabla.appendChild(columnat);
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value= "";
        document.getElementById("edad").value= "";
        let persona = {
            nombre: nombre,
            apellido: apellido,
            edad: edad
        }
        arreglo.push(persona);   
    }
}


