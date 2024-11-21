let numeros = [10, 20, 5, 15];

function sumaIterativa(numeros) {
    let total = 0;

    numeros.forEach(numero => {
        total += numero;
    });

    return total;
} 

let total = 0;

function sumaRecursiva(numeros) {
    
    if(numeros.length === 0) {
        return 0;
    } else {
        return numeros[0] + sumaRecursiva(numeros.slice(1));
    }
} 

console.log(sumaIterativa(numeros));
console.log(sumaRecursiva(numeros, total));