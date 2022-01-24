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
    }
};
console.log(gato);

//añadir y cambiar datos
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

