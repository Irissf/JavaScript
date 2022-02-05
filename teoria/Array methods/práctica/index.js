const template = document.getElementById("template");
const fragment = document.createDocumentFragment();

//donde pintaremos los elementos
const carrito = document.querySelector(".carrito");

//botones
const botones = document.querySelectorAll(".container__fruta--boton");


const carritoObjeto = [];

const agregarAlCarrito = (e) =>{
    //accedemos al data del botón que contine la fruta
    console.log(e.target.dataset.fruta);

    //creamos un objeto producto 
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    }

    //vemos si está el id, si ya existe la fruta y recogemos su indice, -1 si no existe
    const indice = carritoObjeto.findIndex(
        (item) => item.id === producto.id
    );
    if(indice===-1){
        //si no existe
        carritoObjeto.push(producto)
    }else{
        //si existe, aumentamos la cantidad
        carritoObjeto[indice].cantidad ++;
    }
    console.log(carritoObjeto);

    pintarCarrito(carritoObjeto);
};

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