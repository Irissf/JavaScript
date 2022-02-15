/* 
    CALLBACKS =>  Una función de callback es una función que se pasa a otra a otra función
    como un argumento, que luego se invoca dentro de la función externa para completar algún 
    tipo de rutina o acción.
    Cada vez se usan menos, pero importa conocerlos
*/

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



