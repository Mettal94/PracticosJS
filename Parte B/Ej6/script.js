var caja1=document.getElementById("caja1")
var caja2=document.getElementById("caja2")
var caja3=document.getElementById("caja3")
var caja4=document.getElementById("caja4")
var caja5=document.getElementById("caja5")

caja1.addEventListener("mouseover",cambiarColor)
caja2.addEventListener("mouseover",cambiarColor)
caja3.addEventListener("mouseover",cambiarColor)
caja4.addEventListener("mouseover",cambiarColor)
caja5.addEventListener("mouseover",cambiarColor)

caja1.addEventListener("mouseout",resetear)
caja2.addEventListener("mouseout",resetear)
caja3.addEventListener("mouseout",resetear)
caja4.addEventListener("mouseout",resetear)
caja5.addEventListener("mouseout",resetear)


var colorOriginal;

function cambiarColor(evento){
    colorOriginal=document.body.style.backgroundColor;
    let div=document.getElementById(evento.target.id);
    document.body.style.backgroundColor=window.getComputedStyle(div).backgroundColor;
}

function resetear(){
    document.body.style.backgroundColor=colorOriginal;
}