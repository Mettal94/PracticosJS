    var bool = false;
    
    do{
    var fechaInput = prompt("Ingrese la fecha");
    var dia = parseInt(fechaInput.substring(0,2));
    var mes = parseInt(fechaInput.substring(3,5)) - 1;
    var anio = parseInt(fechaInput.substring(6,10));
    
    /* split
    var fechasplit = fechaInput.split("-");
    var dia2 = fechasplit[0];
    var mes2 = fechasplit[1]-1;
    var anio2 = fechasplit[2];
    */

    var fechaIngresada = new Date(anio, mes, dia);

    if (isNaN(fechaIngresada.getTime()) || fechaIngresada.getDate() !== dia ||
    fechaIngresada.getMonth() !== mes || fechaIngresada.getFullYear() !== anio) {
    alert("La fecha ingresada no es válida. Por favor, ingresa una fecha en formato DD-MM-YYYY.");
    bool = false;}
    else{
    bool = true;
    }

} while(bool==false);

    var fechaHoy = new Date();
    fechaHoy.setHours(0,0,0,0);
    var diferencia = fechaIngresada.getTime() - fechaHoy.getTime();
    var diasDiferencia = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    if (diasDiferencia > 0) {
        var resultado = "Faltan " + diasDiferencia + " días para la fecha ingresada.";
    } else if (diasDiferencia < 0) {
        var resultado = "Han pasado " + Math.abs(diasDiferencia) + " días desde la fecha ingresada.";
    } else {
        resultado = "La fecha ingresada es hoy.";
    }

    console.log(resultado);
