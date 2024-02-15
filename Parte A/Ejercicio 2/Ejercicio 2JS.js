function dibujarRectangulo(base, altura){
    try{
        if((base <= 0 || altura <= 0) || (isNaN(base) || isNaN(altura))) throw 'Los valores deben ser números positivos.'

        let superiorEinferior = '*'.repeat(base);
        let long = superiorEinferior.length;
        let interior = superiorEinferior.charAt(0)+" ".repeat(long - 2)+superiorEinferior.charAt(long - 1);

        for(i = 0; i < altura; i++){
            if(i == 0 || i == altura -1){
                console.log(superiorEinferior);
            }else{
                console.log(interior);
            }

        }
    }catch(err){
        alert(err);
    }
}

let base = parseInt(prompt('Ingrese la base para el rectángulo.'));
let altura = parseInt(prompt('Ingrese la altura para el rectángulo.'));

dibujarRectangulo(base, altura);