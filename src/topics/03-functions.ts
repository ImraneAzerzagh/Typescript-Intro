//function suma (a,b){
//    return a+b
//}
// aunque funcione tira un error de aviso para que al menos declaremos las entradas como any

function resta (a:any,b:any){
    return a-b
} 
// puede ser cualquier tipo de entrada y devolver cualquier tipo de salida

function division (a:number,b:number):number{
    return a/b
}
// la entrada debe ser number y la salida tambien

//arrow functions
const comparadorArrow = (a:number, b:string): boolean =>{
    if(b === `${a}`){ // esto lo que hace es convertir a string el valor de a
        return true;
    }else{
        return false;
    }
    
}

function multiplicar(numero1:number, numero2?:number, base: number=2){
    if(numero2){
        return numero2*base;
    }else{
        return numero1*base;
    }
    // si solo recibe un parametro sera numero1, 2 param seran num1 y 2, en esos casos base tiene un valor por defecto pero se podria modificar con un tercer parametro
}


//const sum:number = suma(2,5);
const rest:number = resta(2,5);
const divis:number = division(2,5);
const comparacion:boolean = comparadorArrow(1,'1');
const multip:number = multiplicar(4,2);

console.log({rest}); // esto lo imprime como objeto en vez de solo el valor-> (rest:-3) en vez de -3
console.log(rest);
console.log(divis);
console.log({comparacion});
console.log({multip});
