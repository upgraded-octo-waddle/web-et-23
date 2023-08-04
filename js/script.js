
///////////// MENU ///////////////////
document.getElementById("menunav").style.right = "-20em";
document
    .getElementById("botonHamburguesa")
    .addEventListener("click", function () {
        var menu = document.getElementById("menunav");
        if (menu.style.right == "-20em") {
            menu.style.right = "1em";
            menu.style.transition = "1s";
        } else {
            menu.style.right = "-20em";
        }
    });

document.getElementById("modulos").style.height = "0px";
document
    .getElementById("botonModus")
    .onclick = function () {
        var modus = document.getElementById("modulos")
        if (modus.style.height == "0px") {
            modus.style.height = "209px";
            document.getElementById('botonModus').style.textDecoration = "underline";
        } else {
            modus.style.height = "0px";
            document.getElementById('botonModus').style.textDecoration = "none";
        }
    };



var tarjetas = document.getElementsByClassName('box')
for (let i = 0; i < tarjetas.length; i++) {
    tarjetas[i].onmouseover = function () {
        this.style.filter = 'opacity(100%)';
    }
    tarjetas[i].onmouseout = function () {
        this.style.filter = 'opacity(60%)'
    }
}

// animación carrousel header

var images = [
    "images/DSC_9832.jpg",
    "images/DSC_9825.jpg",
    "images/DSC_9826.jpg"
];

function changeBackgroundImage() {
    var backgroundContainer = document.getElementById("background-container");
    var currentImageIndex = 0;

    setInterval(function () {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        backgroundContainer.classList.add("transition-background");
        backgroundContainer.style.backgroundImage = "url(" + images[currentImageIndex] + ")";

        setTimeout(function () {
            backgroundContainer.classList.remove("transition-background");
        }, 500); // Duración de la transición en milisegundos
    }, 3000);
}

changeBackgroundImage();