//en una cadena debe contener esa cadena con la i, ignora mayusculas
const regularExpresion = /iris/i;

//lo mismo
const regExpObjeto = new RegExp("iris","i");

/*
i => ignora mayúsculas y minúsculas
g => Busqueda global, sigue buscando coincidencias en vez de pararse en una
m => Multilínea. Permite a ^ y & tratar los finales de linea \r o \n
*/

console.log(regularExpresion.test("iris está aqui"));
console.log(regularExpresion.test("no está aqui"));


/*
[] => Rango de carácteres. Cualquiera de los caracteres del interior de los corchetes
| => Establece una alternativa: lo que está a la izquierda o lo que está a la derecha
*/

const rango = /[ui]ris/i;
console.log(rango.test("Iris"));
console.log(rango.test("Oros"));

const busca = /bluweb|blueweb/i;
console.log(busca.test("por si escribe mal blueweb"));
console.log(busca.test("También encuentra bluweb"));


//Ejemplos, para validar un email,por ejemplo:
const email = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
console.log(email.test("iris@gmail"))
console.log(email.test("iris&gmail"))
console.log(email.test("iris@gmail.com"))

