/** 
 *  FETCH => La API Fetch proporciona una interfaz para recuperar recursos(incluso a través de la red)
 *  El método fetch() toma un argumento obligatorio, la ruta de acceso al recurso que desea recuperar.
 * 
 *  Devuelve una PROMISE que resuelve en Respone a esa petición, sea o no correcta
 *  Una vez que Response es recuperada, hay varios m,étodos disponibles para definir cuál es el
 *  contenido del cuerpo y como debe manejarse
 */

const url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url) //en las funciones de flecha el return está implícito
    .then(response =>  response.json())  //formateamos a json la respuesta
    .then(post => console.log(post)) //ahora la devolvemos
    .catch(error => console.log(error))
    .finally(() => console.log("finalizó"))

const findPostById = async (id) => {
    try {
        const respuesta = await fetch(url + id); //esperamos primero la url
        const post = await respuesta.json(); //esperamos el formateo, esperamos dos veces ya que una depende de otra
    
        console.log(post);
    } catch (error) {
        console.log(error);
    } 
};

findPostById(40);

/**
 *  APIS => Construcciones disponibles en los lenguajes de programación que permiten a los 
 *  desarrolladores crear funcionalidades complejas de una manera simple. Estas abstraen el
 *  código más complejo para proveer una sintaxis más fácil de usar en su lugar
 * 
 *  API REST => Cuando queremos comunicar nuestro mundo del Fronten con el Backend. Para que 
 *  nuestras comunicaciones no sean un caos existe el término de REST, que es un estandar
 *  para la construcción de APIS.
 */