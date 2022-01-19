
// console.log(numMayor(34,55));
// console.log(numMayor(34,22));
// console.log(numMayor(34,34));


function numMayor() {
    let num1 = parseInt( document.getElementById("num1").value);
    let num2 = parseInt (document.getElementById("num2").value);

    let resultado;

    if (num1 > num2) {
        resultado =  num1+" es mayor";
    }else if(num2 > num1){
        resultado = num2+" es mayor";
    }else{
        resultado = "Los dos números son iguales"
    }

    document.getElementById("resultado").textContent = resultado;

}

function minComunMultiplo() {
    
}
