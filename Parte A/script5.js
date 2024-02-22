var num = Math.floor((Math.random() * 1000000)+1);
var intentos = 0;
do{
    var adivina = parseInt(prompt('Adivina el número entre 1 y 1 millon!!!'));
    if(adivina > num){
        alert('El número que ingresaste es mayor al elegido');
    }if(adivina < num){
        alert('El número ingresado es menor al elegido');
    }else{
    }
    intentos += 1;
}while(adivina!=num);

alert('Adivinaste!! después de '+intentos+' intentos, el número es: '+num);