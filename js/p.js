let contador = 1;
const imagen = document.getElementById("banner");

function cambiarImagen() {
    contador++;

    // Reducir opacidad para efecto de desvanecimiento
    imagen.style.opacity = 0;

    // Cambiar la imagen después de la transición
    setTimeout(() => {
        imagen.src = `https://picsum.photos/800/400?random=${contador}`;
        imagen.style.opacity = 1;
    }, 500); // Igual que el tiempo de transición en CSS
}

// Opcional: cambiar imagen automáticamente cada 5 segundos
// setInterval(cambiarImagen, 5000);

/*Manu estuvo aqui