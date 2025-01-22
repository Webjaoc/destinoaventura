var indexValue = 11; 
// Cambié el valor inicial de `indexValue` a 1 para evitar valores iniciales fuera del rango.

showimg(indexValue);

const izq = document.querySelector(".l");
const dcha = document.querySelector(".r");

izq.addEventListener("click", () => {
    indexValue -= 1;
    if (indexValue < 1) {
        indexValue = document.querySelectorAll(".galeria").length; 
        // Si el valor de `indexValue` es menor que 1, reinicia al último índice.
    }
    showimg(indexValue);
});

dcha.addEventListener("click", () => {
    indexValue += 1;
    if (indexValue > document.querySelectorAll(".galeria").length) {
        indexValue = 1; 
        // Si el valor de `indexValue` supera el máximo, reinicia al primer índice.
    }
    showimg(indexValue);
});

let array = document.querySelectorAll(".btn");
array.forEach((item) => {
    item.addEventListener("click", (e) => {
        indexValue = parseInt(e.target.id, 10); 
        // Asegúrate de convertir `id` en un entero.
        showimg(indexValue);
    });
});

function showimg(foto) {
    const img = document.querySelectorAll(".galeria");
    const bSliders = document.querySelectorAll(".btn");

    if (foto > img.length) {
        indexValue = 1; 
        // Corrige el valor si es mayor que la cantidad de imágenes.
    }
    if (foto < 1) {
        indexValue = img.length; 
        // Corrige el valor si es menor que 1.
    }

    // Oculta todas las imágenes.
    img.forEach((image) => {
        image.style.display = "none";
    });

    // Restablece el estilo de fondo de todos los botones.
    bSliders.forEach((button) => {
        button.style.background = "none";
    });

    // Asegúrate de que `indexValue - 1` esté dentro de los límites antes de acceder.
    if (indexValue - 1 >= 0 && indexValue - 1 < img.length) {
        img[indexValue - 1].style.display = "block"; 
        // Muestra la imagen correspondiente.

        bSliders[indexValue - 1].style.background = "white"; 
        // Destaca el botón correspondiente.
    }
}




