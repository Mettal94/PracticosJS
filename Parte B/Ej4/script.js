let botonDeCarga = document.getElementById("nueva");
botonDeCarga.addEventListener("click",cargaNueva);

function cargaNueva(){
    botonDeCarga.disabled = true;
    let contenedor = document.getElementById("carga");
    
    let formulario = document.createElement("form");
    formulario.name = "nueva"
    formulario.action = "#";
    formulario.method = "post";
    contenedor.appendChild(formulario);
    
    let nombreCancion = document.createElement("input");
    nombreCancion.name = "nombreCancion"
    nombreCancion.type = "text";
    nombreCancion.placeholder = "Nombre de la canción";
    formulario.appendChild(nombreCancion);
    
    let nombreCompositor = document.createElement("input");
    nombreCompositor.name = "nombreCompositor";
    nombreCompositor.type = "text";
    nombreCompositor.placeholder = "Nombre del compositor";
    formulario.appendChild(nombreCompositor);
    
    let duracion = document.createElement("input");
    duracion.name = "duracion"
    duracion.type = "text";
    duracion.placeholder = "Duracion ('mm : ss')"
    formulario.appendChild(duracion);

    let cargar = document.createElement("button");
    cargar.textContent = "Agregar";
    cargar.type = "button";
    cargar.addEventListener("click",agregarCancion);
    formulario.appendChild(cargar);
}

function agregarCancion(){
    let nombre = document.forms["nueva"]["nombreCancion"].value;
    let compositor = document.forms["nueva"]["nombreCompositor"].value;
    let duracion = document.forms["nueva"]["duracion"].value;
    let mensaje = document.getElementById("error");

    let patronTiempo = /^\d+(:)\d\d$/;
    
    try{
        if(nombre && compositor && duracion){
            if(!patronTiempo.test(duracion)){
                throw "Tiempo ingresado no válido";
            }else{
                let tiempo = duracion.trim().split(":");
                if(tiempo[tiempo.length - 1] > 60) throw "Los minutos no deben ser superiores a 60";
            }
        }else{
            throw "No deben quedar campos vacíos";
        }
    }catch(err){
        mensaje.style = "font-color:red";
        mensaje.innerHTML = err;
        return;
    }

    let cuerpoTabla = document.getElementById("cuerpo");

    let row = document.createElement("tr");
    let datosTabla = [nombre, compositor, duracion];
    cuerpoTabla.appendChild(row);

    for(let i = 0 ; i < datosTabla.length ; i++){
        let celda = document.createElement("td");
        celda.innerHTML = datosTabla[i];
        row.appendChild(celda);
    }

    mensaje.innerHTML = "Canción agregada exitosamente!!"
    botonDeCarga.disabled = false;
    limpiar();
}

function limpiar(){
    let nombre = document.forms["nueva"]["nombreCancion"].value;
    let compositor = document.forms["nueva"]["nombreCompositor"].value;
    let duracion = document.forms["nueva"]["duracion"].value;

    nombre.innerHTML = "";
    compositor.innerHTML = "";
    duracion.innerHTML = "";
}