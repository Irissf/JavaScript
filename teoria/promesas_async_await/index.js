
const posts = [
    {
        "userId":1,
        "id":1,
        "title":"Lorem ipsum dolor",
        "body":"Lorem ipsum dolor sit amet consectetur adipiscing elit class, sapien proin per bibendum libero consequat conubia. "
    },
    {
        "userId":1,
        "id":2,
        "title":"Lorem ipsum dolor",
        "body":"Lorem ipsum dolor sit amet consectetur adipiscing elit class, sapien proin per bibendum libero consequat conubia. "
    },
    {
        "userId":1,
        "id":3,
        "title":"Lorem ipsum dolor",
        "body":"Lorem ipsum dolor sit amet consectetur adipiscing elit class, sapien proin per bibendum libero consequat conubia. "
    }
]

//#region Callback
/* 
    CALLBACKS =>  Una función de callback es una función que se pasa a otra a otra función
    como un argumento, que luego se invoca dentro de la función externa para completar algún 
    tipo de rutina o acción.
    Cada vez se usan menos, pero importa conocerlos
*/


//pregunto por id y llamo a un callback como segundo parámetro
const findPostById = (id,callback)=>{
    const post = posts.find(item => item.id === id); //buscamos en el array el objeto con ese id
    
    if (post) {
        callback(null,post);//el null ya que no mandamos un mensaje si existe el post
    }else{
        //primer argumento el error, segundo el resultado
        callback("No se encontró el post",id);
    }

}
//a la hora de llamar la función, capturamso el error y el resultado
findPostById(4,(error,post)=>{
    //si hay error
    if (error) {
        return console.log(error);
    }
    console.log(post);
})
//#endregion

//#region Promesas

/*
    PROMESAS => Es un objeto que representa la terminación o el fracaso
     de una operación asíncrona
*/

const findPostByIdPro = (id) => {
    const post = posts.find(item => item.id === id)

    return new Promise((resolve, reject)=>{
        if(post){
            // hay post, lo manda
            resolve(post);
        } else{
            //si no hay post
            reject("no se encontro el id: " + id);
        }
    })
}

findPostByIdPro(1)
    .then((post) => console.log(post)) //si no hay error
    .catch(error => console.log(error)); //el error
findPostByIdPro(6)
    .then((post) => console.log(post)) //si no hay error
    .catch(error => console.log(error)); //el error


//#endregion

//#region Async Await setTimeOut

//vamos a simular que nos conectamos a una base de datos grandota y tarda un tiempo 


const findPostByIdAsyn = (id) => new Promise ((resolve, reject)=>{

    setTimeout(() => {
        const post = posts.find(item => item.id === id)
        if(post){
            // hay post, lo manda
            resolve(post);
        } else{
            //si no hay post
            reject("no se encontro el id: " + id);
        }
    }, 2000); // se ejecutará despues de 2 segundos por si se demora
})

// findPostByIdAsyn(1)
//     .then((post) => console.log(post)) //si no hay error
//     .catch(error => console.log(error)); //el error

//para async o await usamos una funcion asincrona, es una forma mejorada de acceder a una promesa
const buscar = async (id) => {

    //¿Cómo recogemos el reject? con el try catch 
    try {
        const post = await findPostByIdAsyn(id);
        console.log(post);
    } catch (error) {
        console.log("error");
    } finally{
        console.log("Se ejecuta si o si");
    }
};
buscar(1);
buscar(4);


//#endregion