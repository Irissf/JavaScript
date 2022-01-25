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
    },
    comer : function(){            //métodos
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

//recorrer el objeto con for...in
const perro = {
    nombre:"Valiente Perrón",
    duerme : true,
    edad : 10
}
console.log("********* for...in ********");
for(let propiedad in perro){
    console.log("propiedad: "+ propiedad +" valor: " +perro[propiedad]);
}

//object.values
console.log("********** object.values *******");
console.log(Object.values(perro));
Object.values(perro).forEach((item) => console.log(item));

//desestructurar objetos
console.log("********** desestructurar *******");
//aqui creamos las variables de cada propiedad del objeto, no hace falta poner todas, podemos añadir alias por
//si el nombre de la variable ya está cogido, podemos si no existe, poner un valor por defecto
const {nombre: nombrecitoAlias = "valor por defecto si no tiene", duerme, edad, mote = "perraQueen"} = perro;
console.log(nombrecitoAlias+" mote: "+mote);

