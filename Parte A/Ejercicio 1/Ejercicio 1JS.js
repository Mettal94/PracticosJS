function diasVividos(){
    try{    
        let nombre = prompt('Cuál es tu nombre?');
        let edad = parseInt(prompt('Cuál es tu edad?'));
        if(isNaN(edad)) throw 'Edad no válida.'
        let dias = edad*365;

        return alert('Hola! '+nombre+' hasta hoy viviste '+dias+' días.');
    }catch(err){
        alert('Dato/s ingresado/s incorrecto/s.');
    }
}

diasVividos();