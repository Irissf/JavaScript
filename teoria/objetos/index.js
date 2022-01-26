//objetos literales
const gato = {
    nombre:"valiente",
    duerme : true,
    edad : 10,
    enemigos: ["agua","perros"] ,
    //objetos anidados {} => objetos []=> arrays
    otros : {
        amigos: ["cobarde","timido"],
        favoritos :{
            frio : "salmón",
            caliente: "pollito"
        }
    //métodos
    }, 
    comer : function(){            
        console.log("ñam,ñam");
    }, 
    comerReducido(alimento){
        // se puede poner así también una función
        console.log(this.nombre+" ñam,ñam "+alimento);
    },
    comerFecha: () => {
        console.log("ñam sobre flecha")
    },
    ListarEnemigos(){
        this.enemigos.forEach((enemigo) => console.log(enemigo));
    },
    //setters getters
    get nombreMayuscula(){
        return this.nombre.toLocaleUpperCase();
    },
    set agregarEnemigo(nuevoAmigo){
        this.enemigos.push(nuevoAmigo);
    }

};
console.log(gato);

//añadir propiedad y cambiar datos
gato.enemigos[0] = "vino";
gato.color = "azul";

//forma de llamar a las propiedades del objeto
console.log(gato.nombre);
console.log(gato["nombre"]);
console.log(gato.enemigos[0]);
console.log(gato["enemigos"][0]);

console.log(gato.color);

//eliminar propiedad
delete gato.duerme;
console.log(gato);

//saber si existe una propiedad
console.log(gato.hasOwnProperty("color"));
console.log(gato.hasOwnProperty("duerme"));

//para llegar al pollito dentro del objeto dentro de otro objeto, etc
console.log("la comida favorita del gato es: "+gato.otros.favoritos.caliente);

//métodos del gato
gato.comer();
gato.comerReducido("pescado");
gato.comerFecha();
gato.ListarEnemigos();

//setters y getters
console.log("nombre en mayúscula: "+gato.nombreMayuscula);
gato.agregarEnemigo = "Mostachón"; //le mandamos el parámetro con el igual

// ************************ recorrer el objeto con for...in ************************ 
const perro = {
    nombre:"Valiente Perrón",
    duerme : true,
    edad : 10
}
console.log("********* for...in ********");
for(let propiedad in perro){
    console.log("propiedad: "+ propiedad +" valor: " +perro[propiedad]);
}



//************************ object.values ************************ 
console.log("********** object.values *******");
console.log(Object.values(perro));
Object.values(perro).forEach((item) => console.log(item));



// ************************ desestructurar objetos ************************ 
console.log("********** desestructurar *******");
//aqui creamos las variables de cada propiedad del objeto, no hace falta poner todas, podemos añadir alias por
//si el nombre de la variable ya está cogido, podemos si no existe, poner un valor por defecto
const {nombre: nombrecitoAlias = "valor por defecto si no tiene", duerme, edad, mote = "perraQueen"} = perro;
console.log(nombrecitoAlias+" mote: "+mote);

//podemos hacerlo con un array
const amigosArray = ["Cobarde", "Tímido", "Pegajoso"];
const [aUno, aDos, aTres, aCuatro = "no existe"] = amigosArray;
console.log("amigo UNO: "+aUno)

// **************************** asignaciones variables **********************

//por valor se pasan los tipos primitivos
let a = "hola";
let b = a;

console.log(a);
a = "adiós"

console.log(b);
console.log(a);


// pero al pasar objetos y arrays, se pasa la referencia, no el valor
let aArr = ["hola array"];
let bArr = aArr;

console.log("a " + aArr);
aArr.push("adiós array");

console.log("a " + aArr);
console.log("b " + bArr); //cambia los dos, a y b