//Guarda datos en el navegador, como el carrito de compra de Amazon, se guaran strings
localStorage.setItem('platano',"guarda plátano");
localStorage.setItem('sandia',"guarda sandia");
//se guarda en tu navegador, no se comparte entre navegadores o dispositivos
//Solo vale para facilitar tareas, de querer persistir datos entre todo usaríamos BBDD

//recogemos el valor
console.log(localStorage.getItem('platano'));
console.log(localStorage.getItem('sandia'));

//lo eliminamos
localStorage.removeItem("platano");

//destruye todo lo guardado
localStorage.clear();

//localstorage no es muy seguro, no es bueno para las API, si trabajamos con vue, react, angular etc, 
//ya tienen formas de proteger estas cosas

const frutas = [
    {
        nombre : "plátano",
        color: "amarillo"
    },
    {
        nombre : "cereza",
        color: "rojo"
    },
    {
        nombre : "manzana",
        color: "verde"
    }
]

//convertimos el objeto a cadena json
localStorage.setItem("frutas", JSON.stringify(frutas));

//lo recuperamos
const frutasDesdeLocal = JSON.parse(localStorage.getItem("frutas")); 
console.log(frutasDesdeLocal);