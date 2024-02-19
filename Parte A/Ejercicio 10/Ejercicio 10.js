do{
    var fechaInput = prompt("Ingrese la fecha");
    var partesFecha = fechaInput.split("-");
    var dia = parseInt(partesFecha[0]);
    var mes = parseInt(partesFecha[1]) - 1;
    var anio = parseInt(partesFecha[2]);
    var fechaIngresada = new Date(anio, mes, dia);

    if (isNaN(fechaIngresada.getTime()) || fechaIngresada.getDate() !== dia ||
    fechaIngresada.getMonth() !== mes || fechaIngresada.getFullYear() !== anio) {
    alert("La fecha ingresada no es válida. Por favor, ingresa una fecha en formato DD-MM-YYYY.");
    var bool = false;}
    else{
        var bool = true;
    }
} while(bool==false);
var fechaHoy = new Date();
    fechaHoy.setHours(0,0,0,0);
    var diferencia = fechaIngresada.getTime() - fechaHoy.getTime();
    var diasDiferencia = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    console.log(fechaHoy+" "+fechaIngresada)

    if (diasDiferencia > 0) {
        var resultado = "Faltan " + diasDiferencia + " días para la fecha ingresada.";
    } else if (diasDiferencia < 0) {
        var resultado = "Han pasado " + Math.abs(diasDiferencia) + " días desde la fecha ingresada.";
    } else {
        resultado = "La fecha ingresada es hoy.";
    }

    console.log(resultado);