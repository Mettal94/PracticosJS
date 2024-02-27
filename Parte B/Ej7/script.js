function convertir(){
    let num = parseInt(document.getElementById("num").value);
    let mensaje = document.getElementById("Conversor");
    let dolar = document.getElementById("dolar").checked;
    let peso = document.getElementById("peso").checked;
   
    if(isNaN(num)){
        mensaje.innerHTML = "Ingrese un número válido a convertir."
    }else{
        if(dolar){
            conversion=num/1376;
            conversion= conversion.toFixed(2,conversion)
            mensaje.innerHTML = num+" pesos equivalen a : "+conversion+" dolares."
        }else if(peso){
            conversion=num*1376;
            conversion= conversion.toFixed(2,conversion)
            mensaje.innerHTML = num+" dolares equivalen a : "+conversion+" pesos."
        }else{
            mensaje.innerHTML = "Seleccione una divisa antes de la conversión.";
        }
    }
    return true;
}