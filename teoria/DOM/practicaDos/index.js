const lista = document.querySelector("#lista");
const arrayPaises = ["Grecia", "Portugal", "Italia"]
const fragment = document.createDocumentFragment();

{/* <li class="list">
<b>Pais:</b>
<span class="text-primary">Aqui va el pais</span>
</li> */}

// arrayPaises.forEach(pais =>{
//     const li = document.createElement('li');
//     const b = document.createElement('b');
//     const span = document.createElement('span');

//     li.className = "List";
//     b.textContent = "Pais: ";
//     span.className = "text-primary";
//     span.textContent = pais;

//     li.appendChild(b);
//     li.appendChild(span);
//     fragment.appendChild(li);

// });

// console.log(fragment)
// lista.appendChild(fragment);

//se puede hacer así, pero es un proces largo para unas lineas tan simples
//Podríamos haberlo puesto con el innerHTML

//Pero tenemos una alternativa TOP => ¡¡Template!!
const liTemplate = document.getElementById("liTemplate");

//funcion
const clickPaises = () => console.log("me diste click");

arrayPaises.forEach(pais =>{
    //ahora se recomienda clonarla, cogiendo su contenido
    const clone = liTemplate.content.firstElementChild.cloneNode(true);
    clone.querySelector("span").textContent = pais; 

    clone.addEventListener("click",clickPaises);
    
    fragment.appendChild(clone);
});
lista.appendChild(fragment);

// Aunque pueda parecer más lioso, es más seguro y más rápido si tenemos un código html
//a repetir muy largo

//Pero OJO tiene también sus problemas, si tenemos que meterle un addeventListener
// a liTemplate.content.cloneNode(true); se le añade liTemplate.content.firstElementChild.cloneNode(true);
//para que funciones los eventos
