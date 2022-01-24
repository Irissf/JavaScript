//variables
var edad = 17;
const SUMA = 6;
var siSumar = true;

/*let=>crea una variable que solo tiene valor en el bloque en el 
que se ejecuta y al acabr se elimina, Vive en el scope, const tiene todas
las ventajas de let, pero es solo de lectura. aunque si podemos modificar su interior
si es un array*/

//arrays
var numeros = ["uno", "dos", "tres", "cuatro"];

//objetos
var objeto = {
    nombre:"iris",
    apellido:"seijo"
}

// sumar();
// verTipo();
// interpolacionCadenas();

//#region basicos
function sumar() {
    let accion = "sumar";
    console.log(accion);
    console.log(17+SUMA);
}

//ver el tipo de variable
function verTipo() {
    console.log(typeof(siSumar));
}
//#endregion



//#region interpolación de cadenas
function interpolacionCadenas() {
    let nombre = "Iris";
    const apellido = "Seijo";

    //Objetos
    let fecha = new Date();

    //Expresiones
    let numero = 3;

    //funcion con retorno de datos
    let euros = 100;

    //comillas invertidas
    let mensaje=`Me llamo ${nombre} con apellido ${apellido} estamos en el años ${fecha.getFullYear()}
    y después del número ${numero} viene el ${++numero},
    el valor de ${euros} en pesos es ${convertir(euros)}`;
    console.log(mensaje);
}
function convertir(a) {
    return  a * 22.23;
}
//#endregion

//#region funciones y eventos

function saludar(nombre) {
    console.log("Hola "+nombre);
}
function iniciar() {
    saludar("Iris");
}
document.getElementById("pulsar").onclick = iniciar;
//#endregion

//#region cosas de arrays
arraysCositas()
function arraysCositas() {
    const frutas = ["Manzana","Plátano"];
    frutas[2] = "Sandía";

    //diferentes métodos de los array
    //push ==> empuja un nuevo elemento al final del array
    frutas.push("Pera");
    
    //unshift ==> Lo agrega al principio
    frutas.unshift("Melón")
    
    //pop ==> Elimina el último elemento y lo devuelve
    const frutaEliminada = frutas.pop(); 
    console.log(frutaEliminada);
    
    //shift ==>Elimina el primer elemento del array
    const primeraFrutaEliminada = frutas.shift();
    console.log(primeraFrutaEliminada);
    
    console.log(frutas);
}
//#endregion

//#region tipo defunciones

//funcion declarativa, las de siempre
function numAzarDelarativo(min,max) {
    return Math.floor(Math.random() * (max - min)) +min;
}
/*funciones anónimas => funciones expresadas, la diferencia con las declarativas
es que necesita ser declarada antes de ser llamadab */
const numAzar = function(min,max){
    //el resultado de la operación lo guardamos en la variable
    return Math.floor(Math.random() * (max - min)) +min;
}

console.log(numAzar(100,201))

//funciones de flecha => con las funciones de flecha podemos tener atajos

const numeroAzarFlecha = (min,max) => {
    return Math.floor(Math.random() * (max - min)) +min;
}

console.log(numeroAzarFlecha(10,21))
//por ejemplo, quitamos el return y las llaves
// const numeroAzarFlecha = (min,max) => Math.floor(Math.random() * (max - min)) +min;
//o con parentesis
// const numeroAzarFlecha = (min,max) => (Math.floor(Math.random() * (max - min)) +min)

// Si solo hay un parámetro
// const numeroAzarFlecha = min => "num"+min;

//podemos ver entonces que el foreach usa este metodo, una funcion que retorna algo
const frutas = ["manzana","pera","limón"]
frutas.forEach(fruta => console.log(fruta));
frutas.forEach((fruta,index) => {
    console.log("==============")
    console.log(`${index}: ${fruta}`)
});

//#endregion

//#region 
//#endregion
