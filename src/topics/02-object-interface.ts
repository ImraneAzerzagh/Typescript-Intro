const habilidades = ['saltar', 'correr', 'trepar', true, 123];
habilidades.push('esquivar');
// habilidades = [];  se puede operar y modificar el array pero no asignarle directamente un nuevo array por ser const.

let puntos =[];
puntos = [+20, -30, +5, +3, +1334];
puntos.push(-189);

interface Deportista {
    nombre:string;
    apellido:string;
    apellido2:string|undefined; //para este caso a diferencia del '?' el atributo tiene que ser informado dentro del objeto aunque el valor pueda ser undefined.
    nivel:'junior'|'mid'|'senior';
    habilidades:any[]; // como el array que usare despues es de tipo (string | number | boolean |)[] le pondre any[] para que lo acepte, 
                        // podria poner el mismo tipo pero con any acepta cualquiera. En typescript hay que poner siempre algo para los []; solo [] se quedaria como array vacio siempre.
   
    puntos:number[];
    campeon?:boolean; //en este caso, con '?' se indica que el atributo no tiene porque llegar informado, si no ew informado sera undefined.
}

const imran:Deportista ={
    nombre: 'Imran',
    apellido:'Azerzagh',
    apellido2:undefined,
    nivel:'senior',
    habilidades:habilidades,
    puntos:puntos
}

console.log(imran);
console.log(habilidades);
console.log(puntos);