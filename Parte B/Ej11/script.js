    var container = document.getElementById("imagen");
    for (var i = 1; i <= 144; i += 16) {
        var rowDiv = document.createElement("div");
        rowDiv.classList.add("fila");
        for (var j = 0; j < 16; j++) {
            var imgNumber = i + j;
            var img = document.createElement("img");
            img.src = "img/imágenes/img_" + imgNumber.toString().padStart(2, "0") + ".gif";
            if (imgNumber === 73) {
                img.addEventListener("mouseenter", function() {
                    this.src = "img/imágenes/wally.gif";
                });
                img.addEventListener("mouseleave", function() {
                    this.src = "img/imágenes/img_73.gif";
                });
                img.addEventListener("click", function() {
                    alert("¡FELICITACIONES!");
                });
            }
            rowDiv.appendChild(img);
        }
        container.appendChild(rowDiv);
    }