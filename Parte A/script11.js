    var bool = false;
    
    do{
    var dia = parseInt(prompt("Ingrese el día"));
    var mes = parseInt(prompt("Ingrese el mes")) - 1;
    var anio = parseInt(prompt("Ingrese el año")) ;

    var fechaIngresada = new Date(anio, mes, dia);

    if (isNaN(fechaIngresada.getTime()) || fechaIngresada.getDate() !== dia ||
    fechaIngresada.getMonth() !== mes || fechaIngresada.getFullYear() !== anio) {
    alert("La fecha ingresada no es válida. Por favor, ingresa una fecha en formato DD-MM-YYYY.");
    bool = false;}
    else{
    bool = true;
    alert("La fecha ingresada es correcta.")
    }

} while(bool==false);
