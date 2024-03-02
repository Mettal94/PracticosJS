var hppiccolo = 100;
var hpgoku = 100;
var kipiccolo = 100;
var kigoku = 100;

var atkgoku = document.getElementById("atkgoku");
atkgoku.disabled = true;
var atkpiccolo = document.getElementById("atkpiccolo");
atkpiccolo.disabled = true;
var recarga = document.getElementById("recarga");
recarga.disabled = true;

var vidagoku = document.getElementById("vidagoku").textContent;
var kigoku = document.getElementById("kigoku").textContent;
var vidapiccolo = document.getElementById("vidapiccolo").textContent;
var kipiccolo = document.getElementById("kipiccolo").textContent;



function iniciarPelea() {
    var arena = document.getElementById("arena");
    arena.innerHTML = '';
    let img = document.createElement("img");
    img.src = "img/arena/start.gif";
    arena.appendChild(img);
    var iniciar = document.getElementById("iniciar");
    iniciar.disabled = true;
    atkgoku.disabled = false;
    atkpiccolo.disabled = false;
    recarga.disabled = false;
    console.log(vidagoku + " " + kigoku + " " + vidapiccolo + " " + kipiccolo)
}

function ataquePiccolo() {
    if (kipiccolo >= 10) {
        console.log(kipiccolo);
        var arena = document.getElementById("arena");
        arena.innerHTML = '';
        let img = document.createElement("img");
        img.src = "img/arena/ataquepiccolo.gif" + '?x=' + Date.now();
        arena.appendChild(img);
        var iniciar = document.getElementById("iniciar");
        recarga.disabled = false;

        //resta ki a Piccolo
        kipiccolo = (kipiccolo - 10);
        document.getElementById("kipiccolo").innerText = kipiccolo;

        //resta vida a Goku
        vidagoku = vidagoku - (Math.floor(Math.random() * 25) + 1);
        if (vidagoku <= 0) {
            //en caso de bajar a 0, evento de victoria de piccolo
            document.getElementById("vidagoku").innerText = 0;
            console.log("Piccolo gana");
        } else {
            //bajar vida normalmente
            document.getElementById("vidagoku").innerText = vidagoku;
        }
    } else {
        alert("Piccolo debe recargar.")
    }
}

function ataqueGoku() {
    var arena = document.getElementById("arena");
    arena.innerHTML = '';
    let img = document.createElement("img");
    img.src = "img/arena/ataquegoku.gif" + '?x=' + Date.now();
    arena.appendChild(img);
    var iniciar = document.getElementById("iniciar");
    recarga.disabled = false;
}

function recargar() {
    var arena = document.getElementById("arena");
    arena.innerHTML = '';
    let img = document.createElement("img");
    img.src = "img/arena/carga.gif";
    arena.appendChild(img);
    var iniciar = document.getElementById("iniciar");
    atkgoku.disabled = false;
    atkpiccolo.disabled = false;
    recarga.disabled = true;
    setTimeout(standby, 3000);
}

function standby() {
    var arena = document.getElementById("arena");
    arena.innerHTML = '';
    let img = document.createElement("img");
    img.src = "img/arena/standby.png";
    arena.appendChild(img);
}

