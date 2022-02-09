const formulario = document.getElementById("formulario");

const validarNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/;

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

formulario.addEventListener("submit", (e) =>{
    e.preventDefault(); //evita lo que hace el navegador por defecto, para que no envie el form

    //validación por lado cliente de javascript, menos seguro si validamos en el front-end
    console.log(userName.value);
    if (!validarNombre.test(userName.value)) {
        //se sale de la función y no haría lo demás
        return;
    }
    console.log("nombre correcto");
    console.log("Formulario enviado");

});