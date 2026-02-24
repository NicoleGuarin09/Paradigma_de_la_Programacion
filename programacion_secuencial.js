let nombre = "juanito";
let edad = 23;
let apellido = "casimiro";
let numero = 18;

function  sumar(a,b) {
    return a + b;
}

function restar(a,b){
    let operation = a - b; 
    return operation;
}


console.log("El resultado de la suma es: " + sumar(numero,edad));
let ResultadoResta = restar(8,4);

console.log("Resultado de la resta:" + ResultadoResta);
console.log("nombre completo: " + nombre + " " + apellido + ", edad: " + edad );
