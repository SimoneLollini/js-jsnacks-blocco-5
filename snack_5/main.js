// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

let numbersArray = []
for (let i = 0; i < 20; i++) {
    numbersArray.push(i)
    // console.log(i);

    // console.log(numbersArray);
}


checkNumberBetween(numbersArray, 5, 15)
function checkNumberBetween(array, a, b) {
    const numberBetween = array.filter(singleNumber => singleNumber > a && singleNumber < b)
    console.log(numberBetween);
}
