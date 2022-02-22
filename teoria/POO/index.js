function Persona(nombre,edad) {
    this.nombre = nombre;
    this.edad = edad

    this.saludad = function () {
        return `${this.nombre} dice hola`
    }

    // this.saludadIngles = function () {
    //     return `${this.nombre} says hi!` 
    // }
}

//por si no es util para todos los objetos, hacemos un prototipo, como una herencia
Persona.prototype.saludadIngles = function(){
    return `${this.nombre} says hi!`
}

const juanito = new Persona("Juanito",33);
const pedrito = new Persona("Pedrito",43);
console.log(juanito);
console.log(pedrito);

console.log(juanito.saludad());
console.log(pedrito.saludadIngles()); //solo cuando lo llaman, busca el prototipo