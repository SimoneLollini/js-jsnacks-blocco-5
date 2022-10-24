// Scrivi una funzione che accetti una stringa come argomento e la ritorni
// girata (es. Ciao -> oaiC)


const saluto = "Ciao"
// console.log(saluto);


GenerateReverseWord(saluto)


function GenerateReverseWord(initialWord) {
    console.log(initialWord);
    let reversedWord = "";
    let i = initialWord.length;
    while (i > 0) {
        // uso i-1 perché i parte a contare da 0, length invece parte da 1
        let selezioneLettere = initialWord.charAt(i - 1);
        // console.log(selezioneLettere);
        //rimonto la parola al contrario sommando le lettere del testo
        reversedWord += selezioneLettere
        i--
    }
    console.log(reversedWord);
}