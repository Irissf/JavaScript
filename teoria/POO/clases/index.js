class Persona {
    constructor(nombre){
        this.nombre = nombre;
    }

    saludar(){
       return `${this.nombre} dice hola`
    }

    //nos permite usar sin instanciar Persona, no podemos acceder a this
    static probarSaludo(nombre){
        return `${nombre} probando saludo`
    }

    //getter y setter, para los que vienen de lenguajes más restrictivo
    get getNombre(){
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre = nombre;
    }
}

//probando static
console.log(Persona.probarSaludo("iris"));


//la ventaja de la clase, es que todas las funciones van a estar en 
//la cadena de prototipos
const iris = new Persona("iris");
console.log(iris.getNombre);
console.log(iris.saludar());
iris.setNombre = "IrisSF";
console.log(iris.getNombre);


//HERENCIAS :D
class Estudiante extends Persona{

    constructor(nombre, notas ){
        super(nombre);
        this.notas = notas ;
    }

    Saludar(){
       return `${this.nombre} saluda desde estudiante`
    }
}

const estudiante = new Estudiante("Maria",10);
console.log(estudiante.Saludar());

