const template = document.getElementById("template");
const fragment = document.createDocumentFragment();

//donde pintaremos los elementos
const carrito = document.querySelector(".carrito");

//botones
const botones = document.querySelectorAll(".container__fruta--boton");


const carritoObjeto = [];



//le metemos el addEventListener a los botones
botones.forEach((btn)=> btn.addEventListener("click",agregarAlCarrito));

const pintarCarrito = (array) => {

    //vaciamos lo que ya tenemos para que no se repita
    carrito.textContent = "";

    array.forEach(item => {
        //clonar el tempalte
        const clone = template.content.firstElementChild.cloneNode(true);
        
        clone.querySelector('.elemento__texto').textContent = item.titulo;
        clone.querySelector('.elemento__cantidad').textContent = item.cantidad;

        fragment.appendChild(clone);
    });

    carrito.appendChild(fragment);
}