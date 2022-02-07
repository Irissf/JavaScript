/*
    La delegación de eventos es básicamente un patrón para manejar eventos de manera eficiente.
    
    En lugar de agregar un detector de eventos a todos y cada uno de los elementos similares,
    podemos agregar un detector de eventos a un elemento principal y llamar a un evento
    en un objeto en particular utilizando la propiedad .target del objeto de evento.

    Así evitamos la propagación.
*/

//capturamos el container que contiene a todos los elementos
const container = document.querySelector(".container");
//y le agregamos el addeventlistener
container.addEventListener("click",(e)=>{
    
    console.log(e.target.id);

    //preguntamos si existe un elemento
    console.log(e.target.matches(".hijo"));

    //acceder al dataset
    console.log(e.target.dataset.div);

    if (e.target.dataset.div === "divNieto") {
        console.log("nieto, soy el nieto");
    }
});

//si no queremos tener un contenedor, mucha gente le mete al document
//el addEventListener
//document.addEventListener("click",(e)=>{