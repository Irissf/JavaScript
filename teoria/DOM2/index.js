const abuelo = document.querySelector(".uno");
const padre = document.querySelector(".dos");
const nieto = document.querySelector(".tres");

// abuelo.addEventListener('click',()=>{
//     console.log("me diste click abuelo");    
// })

// //como vemos al dar al padre, damos al abuelo también, sale dos veces
// padre.addEventListener('click',()=>{
//     console.log("me diste click padre");    
// },true); // con ese parámetro a true se invierte la propagación

// //al igual que con el nieto, que se dan la del nieto, padre y abuelo
// nieto.addEventListener('click',()=>{
//     console.log("me diste click nieto");    
// })

//vemos entonces que se propaga, una propagación de eventos, se propaga de dentro hacia afuera
//Fase de burbujeo se llama

//podemos invertirlo lo cual recibe el nombre de Fase de captura => de afuera hacia adentro



//Para EVITAR la propagación tenemos el stopPropagation
const cajitas = document.querySelectorAll(".cont");

cajitas.forEach((caja)=>{
    caja.addEventListener("click",(e)=>{
        e.stopPropagation(); //sin burbujeo ni captura
        console.log("click")
    });
})