function actualizarTitulo(evento) {
        var x = evento.clientX;
        var y = evento.clientY;
        document.title = 'Coordenadas: ' + x + ', ' + y;
    }
    document.addEventListener('mousemove', actualizarTitulo);