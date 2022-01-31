//accedemos al DOM
console.log(document)
console.log(document.head)
console.log(document.title)
console.log()

//accedemos a las etiquetas
console.log(document.getElementById("tituloWeb"))
console.log(document.getElementById("tituloWeb").textContent)

//con querySelector, usamos los selectores como css .para clase, #para id...etc
console.log(document.querySelector("#subtitulo"));
//para dejar fuera el p que está fuera del container
console.log(document.querySelectorAll(".container .text-danger"));



/* Si el script lo ponemos en la cabecera, nos daría un error
pues no se habrian cargado los elementos del DOM, para solucionarlo
lo ponemos abajo, o lo ponemos en la cabecera y hacemos lo siguiente */
document.addEventListener("DOMContentLoaded",() =>{
//y meteriamos las instrucciones aqui dentro
    console.log("Dom Cargado");
})



//cambiar propiedades del Elementos
const h1 = document.getElementById("tituloWeb");
console.log(h1.id); 

//añadir eventos
h1.addEventListener("click",()=>{
    console.log("click");
    h1.style.color = "pink";
    h1.style.fontSize = "50px";
});

const boton = document.querySelector(".btn-primary");
boton.addEventListener(("click"),()=>{
    h1.textContent = "Nuevo texto desde js";
});