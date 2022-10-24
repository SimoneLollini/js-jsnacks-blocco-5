// Scrivi una funzione che fonda due array (aventi lo stesso numero di
//     elementi) prendendo alternativamente gli elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


const lettere = ['a', 'b', 'c', 'd']
const numeri = [1, 2, 3, 4]

console.log(lettere);
console.log(numeri);


// #soluzione uno (funziona ma non mi è chiara)
// const arrayCombined = lettere.map(function (v, i) { return [v, numeri[i]]; }).reduce(function (a, b) { return a.concat(b); });


// #soluzione due più semplice e chiara

const arrayCombined = []
function arrayCombinator() {
    for (let i = 0; i < lettere.length; i++) {
        arrayCombined.push(lettere[i])
        arrayCombined.push(numeri[i])
    }
}

arrayCombinator()
console.log(arrayCombined);