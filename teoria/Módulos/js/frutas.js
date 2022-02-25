//exportamos la fruta
//es una exportación con nombre, ya que la exportamso con un nombre y la importamos con ese nombre
export const fruta = "manzana";

export function pintarManzana() {
    console.log("pintamos la manzana");
}

export const fresa = () => {
    console.log("La rica fresa");
}

export class Verdura{
    constructor(nombre){
        this.nombre = nombre;
    }
}

/*podemos exportar todo de golpe, quitando los export de arriba
        export{
            fruta, pintarManzana,fresa,Verdura
        }
*/