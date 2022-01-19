//ponemos esto para que espere a que se cargen los elementos del html 
//o el script dará error
window.onload = inicio;
function inicio() {
    //y aqui ya cogemos los elementos
    document.getElementById("cosa").onclick = cambioColor;
}

function cambioColor() {
    var titulo = document.getElementById("cosa").style;
    titulo.color = "white";
    titulo.backgroundColor = "green";
}
