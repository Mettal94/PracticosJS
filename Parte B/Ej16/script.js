function cambiarClase(){
    document.getElementById("lista").classList.contains("blanco") ?
        (document.getElementById("lista").classList.remove("blanco"),
            document.getElementById("lista").classList.add("negro")) :
        (document.getElementById("lista").classList.remove("negro"),
            document.getElementById("lista").classList.add("blanco"))
};