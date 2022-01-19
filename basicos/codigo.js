//variables
var edad = 17;
const SUMA = 6;
var siSumar = true;

//let=>crea una variable que solo tiene valor en el bloque en el 
//que se ejecuta y al acabr se elimina

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
    saludar("Maria");
}
document.getElementById("pulsar").onclick = iniciar;
//#endregion