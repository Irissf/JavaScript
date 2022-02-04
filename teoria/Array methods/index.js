/*
Programacion funcional
Estos métodos no mutan el array original, sino que nos devuelven uno nuevo
    map
    find
    filter
    slice
    concat
    reduce
*/

/*
map => Itera sobre cada elemento del arrego y devuelve un nuevo arreglo que contiene
    los resultados de llamar a la función calback en cada elemento sin mutar el arreglo original

find => Devuelve el valor del PRIMER elemento del array que cumple la función
    proporcionada.

filter => Crea un nuevo array con todos los elementos que cumplan la condición
    implementada por la función dada

slice => Devuelve una copia de una parte del array dentro de un nuevo array
    empezando por inicio hasta fin(no incluido).

concat => Se usa para unir dos o más arrays. Este método no cambia los arrays
    existentes, sino que decuelve un nuevo array.

reduce => Ejecuta una función reductora sobre cada elemento de un array, devolviendo
    como resultado un único valor.
*/


//****************************** MAP ********************************* */
const frutas = ["🍇","🍐","🍓","🍉","🍋"];
const nuevoArray = frutas.map((fruta) => { return fruta;});
console.log(nuevoArray);

//otro ejemplo
const user = [
    {nombre:"Iris" , apellido:"Seijo"},
    {nombre:"Maria" , apellido:"Freire"}
];
//podemos coger solo los nombres
const nombres = user.map((usuario) => {return usuario.nombre})
console.log(nombres);



//****************************** FILTER ********************************* */
const users = [
    {uid:1, nombre:"John" , edad: 34},
    {uid:2, nombre:"Evelin" , edad: 56},
    {uid:3, nombre:"Mara" , edad: 42},
];

const mayores = users.filter((user) => user.edad > 40);
console.log(mayores);
const seMarchaElTres = users.filter((user) => user.uid !== 3);
console.log(seMarchaElTres);



//****************************** FIND ********************************* */
const usuariosFind = [
    {uid:1, nombre:"John" , edad: 34},
    {uid:2, nombre:"Evelin" , edad: 56},
    {uid:3, nombre:"Mara" , edad: 42},
];

const Mara = usuariosFind.find((user) => user.uid === 3);
console.log(Mara);  // al ser un objeto, nos devuelve un objeto

//some => comprueba si al menos un elemento cumple con la condicion 
//de esta manera nos ahorramos algún error con find si no existe el elemento
//comprobando antes su existencia
const noExiste = usuariosFind.some((user) => user.uid === 4);
const existe = usuariosFind.some((user) => user.uid === 2);
console.log(noExiste + " " +existe);

// findIndex =>  Devuelve el indice del array que cumple la función
//      proporcionada. En caso contrario devuelve -1
const indice = usuariosFind.findIndex((user)=>user.uid === 1);
console.log(indice);



//****************************** SLICE ********************************* */
const arr = ["cat", "dog", "Tiger", "Zebra"];
//             0    [  1      2   ]     3

const newArr = arr.slice(1,3);
console.log(newArr);



//****************************** CONCAT ********************************* */
const arrayUno = [1,2,3];
const arrayDos = [4,5,6];

const arrayCompleto = arrayUno.concat(arrayDos);
console.log(arrayCompleto); 

//Esta forma es mucho más dinámico, y podemos poner cosas en medio
const otraForma = [...arrayUno," otro ",...arrayDos];
console.log(otraForma);


//****************************** REDUCE ********************************* */
const numero = [1,2,3,4,5];
const sumaTodos = numero.reduce((acumulador, valorActual)=> acumulador + valorActual); //esto itera
//Vuelta 1 => acumulador es 0 y valorActual : 1
//Vuelta 2 => acumulador es 1 y valorActual : 2
//Vuelta 3 => acumulador es 3 y valorActual : 3
//Vuelta 4 => acumulador es 6 y valorActual : 4
//Vuelta 5 => acumulador es 10 y valorActual : 5
//Vuelta 6 => acumulador es 15 y termina

console.log(sumaTodos);

const arrayNumeros = [
    [0, 1],
    [2, 3],
    [4, 5],
];

const soloNumeros = arrayNumeros.reduce((acumulador, valorActual) => acumulador.concat(valorActual));

console.log(soloNumeros); //nos aplanó el array