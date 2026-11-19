
// Esperar a que cargue la página
document.addEventListener("DOMContentLoaded", function() {

    // Seleccionar el título y la imagen
    const titulo = document.querySelector("h1");
    const imagen = document.querySelector("img");

    // Mensaje al hacer clic en el título
    titulo.addEventListener("click", function() {
        alert("¡La Catrina llegó a la escuela! 💀🌼");
    });

    // Efecto al hacer clic en la imagen
    imagen.addEventListener("click", function() {
        imagen.classList.toggle("imagenGrande");
    });

    // Mensaje en la consola
    console.log("¡Bienvenido a la calaverita literaria!");

});
