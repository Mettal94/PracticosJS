let arreglo = [];
let pos = 0;

for (let i = 0; i < 151; i++) {
  arreglo[i] = "img/" + (i + 1) + ".png"
}

function imgIzquierda() {
  if (pos == 0) {
    pos = arreglo.length - 1;
  } else {
    pos--;
  }
  cargarImg();
}

function imgDerecha() {
  if (pos == arreglo.length - 1) {
    pos = 0;
  } else {
    pos++;
  }
  cargarImg();
}

function cargarImg() {
  var imgcen = document.getElementById("principal");
  imgcen.src = arreglo[pos];
}


