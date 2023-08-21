function showBubble(id) {
    var bubble = document.getElementById(id);
    bubble.style.display = "flex";
}

function hideBubble(id) {
  var bubble = document.getElementById(id);
  bubble.style.display = "none";
}

document.getElementsByClassName("flagI")[0].onclick = function(){
  window.location.href = "https://en.wikipedia.org/wiki/Santa_Maria_del_Fiore";
}
document.querySelector(".flagA").onclick = function() {
  window.location.href = "https://en.wikipedia.org/wiki/Santa_Maria_del_Fiore";
}
document.querySelector(".flagN").onclick =  document.querySelector(".flagV").onclick = document.querySelector(".flagU").onclick = document.querySelector(".flagR").onclick = document.querySelector(".flagS").onclick = document.querySelector(".flagAF").onclick = function() {
  window.location.href = "#";
}