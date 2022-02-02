const template = document.getElementById("template");
const fragment = document.createDocumentFragment();

//donde pintaremos los elementos
const carrito = document.querySelector(".carrito");

//botones
const botones = document.querySelectorAll(".container__fruta--boton");

//para agregar los elementos que seleccionemos
const carritoObjeto = {

};
const agregarAlCarrito = (e) =>{
    //accedemos al data del botón que contine la fruta
    console.log(e.target.dataset.fruta);

    //creamos un objeto producto 
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    }

    //si ya está el producto aumentamos la cantidad
    if(carritoObjeto.hasOwnProperty(producto.id)){
        producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
    }
    
    //lo empujamos en el array => "manzana":{titulo:"manzana",id:"manzana",cantidad:1} <= eso es loq ue estamos metiendo
    carritoObjeto[producto.titulo] = producto


    pintarCarrito();
};

//le metemos el addEventListener a los botones
botones.forEach((btn)=> btn.addEventListener("click",agregarAlCarrito));

const pintarCarrito = () => {

    //vaciamos lo que ya tenemos para que no se repita
    carrito.textContent = "";

    //recorremos el objeto
    Object.values(carritoObjeto).forEach(item => {
        //clonar el tempalte
        const clone = template.content.firstElementChild.cloneNode(true);
        
        clone.querySelector('.elemento__texto').textContent = item.titulo;
        clone.querySelector('.elemento__cantidad').textContent = item.cantidad;

        fragment.appendChild(clone);
    });

    carrito.appendChild(fragment);
}