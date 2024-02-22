function estadisticas() {
    var input = document.getElementById("numbers").value;
    var numeros = input.split(",").map(Number);
    var largo = numeros.length;
    var sum = 0;
    var min = 9999999999;
    var max = -9999999999;


    for (var i = 0; i < largo; i++) {
        if (isNaN(numeros[i])) {
            alert("Por favor, ingrese solo números separados por comas.");
            return;
        }
    }


    for (var i = 0; i < largo; i++) {
        sum += numeros[i];
        if (numeros[i] < min) {
            min = numeros[i];
        }
        if (numeros[i] > max) {
            max = numeros[i];
        }
    }

    var promedio = sum / largo;

    numeros.sort(function(a, b) {
        return a - b;
    });

    var mediana;
    if (largo % 2 === 0) {
        mediana = (numeros[largo / 2 - 1] + numeros[largo / 2]) / 2;
    } else {
        mediana = numeros[Math.floor(largo / 2)];
    }

    var sumDifCuadrados = 0;
    for (var j = 0; j < largo; j++) {
        sumDifCuadrados += Math.pow(numeros[j] - promedio, 2);
    }
    var desviacionEstandar = Math.sqrt(sumDifCuadrados / largo);

    var resultado = "Cantidad de números: " + largo + "<br>";
    resultado += "Suma: " + sum + "<br>";
    resultado += "Promedio: " + promedio.toFixed(2) + "<br>";
    resultado += "Mediana: " + mediana + "<br>";
    resultado += "Mínimo: " + min + "<br>";
    resultado += "Máximo: " + max + "<br>";
    resultado += "Desviación Estándar: " + desviacionEstandar.toFixed(2);

    document.getElementById("resultado").innerHTML = resultado;
}