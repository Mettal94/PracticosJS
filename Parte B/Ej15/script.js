function cambiarStylo() {
    var estiloActual = document.getElementById("estiloCSS").href;
    var nuevoEstilo = (estiloActual.includes("style.css")) ? "style2.css" : "style.css";
    document.getElementById("estiloCSS").href = nuevoEstilo;
}