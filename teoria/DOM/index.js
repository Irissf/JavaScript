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




//Crear elementos
const lista = document.getElementById("lista");

//creamos un <li/>
const li = document.createElement('li');
li.textContent = "Elemento desde js";

//se lo metemos al padre
lista.appendChild(li);

//con array
// const arrayPaises = ["España", "Portugal", "Italia"]
// arrayPaises.forEach(pais => {
//     const liArray = document.createElement("li");
//     liArray.textContent = pais;
//     lista.appendChild(liArray);
// })
//Otra manera que vemos a continuación:

// const arrayPaises = ["España", "Portugal", "Italia"]
// arrayPaises.forEach((pais) => {
    //inerHtml reescribe el contenido, si ponemos igual, solo saldrá el último elemento
//     lista.innerHTML += `<li>${pais}</li>`;
// })
//Pero esto genera Reflow => Que ocurre cuando un navegador debe procesar y 
//dibujar parte o la totalidad de la web nuevamente. Y puede generar problemas de 
//seguridad, asi que usar con cuidado

// Otra manera, que mejora el primer método
const arrayPaises = ["España", "Portugal", "Italia"]

const fragment = document.createDocumentFragment();
// const fragment = new DocumentFragment(); lo mismo si lo ponemos así

arrayPaises.forEach(pais => {
    const liArray = document.createElement("li");
    liArray.textContent = pais;
    fragment.appendChild(liArray); //en cada ciclo lo mete en el fragment
})
//y luego lo añadimos todo de golpe
lista.appendChild(fragment);