document.querySelector(".botonMenu").onclick = function (e) {
    e.preventDefault();
    document.querySelector("header").classList.toggle("menuAbierto");
    document.querySelector(".main").classList.toggle("mainAbierto");
    document
        .querySelector(".navegador")
        .classList.toggle("navegadorAbierto");
};

const figuras = document.querySelectorAll(".bande");
figuras.forEach((figura) => {
    document.querySelector(".bande").classList.toggle("bandeAbierto");
    figura.addEventListener("click", () => {
        const texto = figura.querySelector(".texto");
        texto.classList.toggle("textoAbierto");
    });
});


// funciones paises
//argentina
document.querySelector("#arg").ondblclick = function () { window.location.href = "https://www.google.com"; }
document.querySelector("#arg").onclick = function (e) {
    e.preventDefault();
    document.querySelector(".AR").classList.toggle("pathOpen");
};
//nicaragua
document.querySelector("#nic").ondblclick = function () { window.location.href = "https://www.google.com"; }
document.querySelector("#nic").onclick = function (e) {
    e.preventDefault();
    document.querySelector(".NI").classList.toggle("pathOpen");
};
//rumania
document.querySelector("#rom").ondblclick = function () { window.location.href = "https://www.google.com"; }
document.querySelector("#rom").onclick = function (e) {
    e.preventDefault();
    document.querySelector(".RO").classList.toggle("pathOpen");
};
//ucrania
document.querySelector("#ucr").ondblclick = function () { window.location.href = "https://www.google.com"; }
document.querySelector("#ucr").onclick = function (e) {
    e.preventDefault();
    document.querySelector(".UA").classList.toggle("pathOpen");
};
//etnia gitana
document.querySelector("#git").ondblclick = function () { window.location.href = "https://www.google.com"; }
document.querySelector("#git").onclick = function (e) {
    e.preventDefault();
    document.querySelector(".ES").classList.toggle("pathOpen");
    document.querySelector(".IN").classList.toggle("pathOpen");
    document.querySelector(".MA").classList.toggle("pathOpen");
};
//venezuela
document.querySelector("#ven").ondblclick = function () { window.location.href = "https://www.google.com"; }
document.querySelector("#ven").onclick = function (e) {
    e.preventDefault();
    document.querySelector(".VE").classList.toggle("pathOpen");
};
//afganistan
document.querySelector("#afg").ondblclick = function () { window.location.href = "https://www.google.com"; }
document.querySelector("#afg").onclick = function (e) {
    e.preventDefault();
    document.querySelector(".AF").classList.toggle("pathOpen");
};
//sahara
document.querySelector("#sah").ondblclick = function () { window.location.href = "https://www.google.com"; }
document.querySelector("#sah").onclick = function (e) {
    e.preventDefault();
    document.querySelector(".EH").classList.toggle("pathOpen");
};

//////////////////////AUDIO//////////////////////////////////////
muteador.onclick = function () {
    if (iconoMuteador.src.includes('mute.png')) {
        iconoMuteador.src = 'images/sonido.png';
        intro.muted = false;
    } else {
        iconoMuteador.src = 'images/mute.png';
        intro.muted = true;
    }
}

reproductor.onclick = function () {
    if (intro.paused) {
        intro.play();
        intro.currentTime = 0;
    } else {
        intro.pause();
    }
}