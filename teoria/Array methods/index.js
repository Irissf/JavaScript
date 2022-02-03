/*
Programacion funcional
Estos métodos no mutan el array original, sino que nos devuelven uno nuevo
    map
    find
    filter
    reduce
*/

/*
map => Itera sobre cada elemento del arrego y devuelve un nuevo arreglo que contiene
    los resultados de llamar a la función calback en cada elemento sin mutar el arreglo original
find =>
filter =>
reduce =>
*/

const frutas = ["🍇","🍐","🍓","🍉","🍋"];

const nuevoArray = frutas.map((fruta) => { return fruta;});

console.log(nuevoArray);