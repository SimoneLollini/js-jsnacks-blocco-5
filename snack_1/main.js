//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
const zucchine = [{
    variety: 'nera',
    weight: 100,
    length: 20
},
{
    variety: 'romanesca',
    weight: 110,
    length: 10
},
{
    variety: 'fiorentina',
    weight: 120,
    length: 18
}, {
    variety: 'napoletana',
    weight: 130,
    length: 15
}, {
    variety: 'tonda',
    weight: 105,
    length: 26
}, {
    variety: 'trombetta',
    weight: 120,
    length: 32
}, {
    variety: 'siciliana',
    weight: 98,
    length: 18
}, {
    variety: 'bianca',
    weight: 82,
    length: 19
}, {
    variety: 'pugliese',
    weight: 111,
    length: 21
}, {
    variety: 'gialla',
    weight: 103,
    length: 30
}]


//Calcola quanto pesano tutte le zucchine.

let totalWeight = 0;
// console.log(totalWeight);
zucchine.forEach(zucchina => {
    // console.log(zucchina)
    totalWeight += zucchina.weight
});
console.log(totalWeight); //1079
