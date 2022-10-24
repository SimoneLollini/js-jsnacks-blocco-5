// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const zucchine = [{
    variety: 'nera',
    weight: 100,
    lengthCm: 20
},
{
    variety: 'romanesca',
    weight: 110,
    lengthCm: 10
},
{
    variety: 'fiorentina',
    weight: 120,
    lengthCm: 18
}, {
    variety: 'napoletana',
    weight: 130,
    lengthCm: 14
}, {
    variety: 'tonda',
    weight: 105,
    lengthCm: 26
}, {
    variety: 'trombetta',
    weight: 120,
    lengthCm: 32
}, {
    variety: 'siciliana',
    weight: 98,
    lengthCm: 14
}, {
    variety: 'bianca',
    weight: 82,
    lengthCm: 19
}, {
    variety: 'pugliese',
    weight: 111,
    lengthCm: 21
}, {
    variety: 'gialla',
    weight: 103,
    lengthCm: 30
}]

// per ogni elemento destrutturo la key lengthCm per filtrarla utilizzando .filter

// const over15 = zucchine.filter(function () {
//     return zucchine.lengthCm > 15;
// })
const over15 = zucchine.filter(zucchina => zucchina.lengthCm > 15)
console.log(over15);

const under15 = zucchine.filter(zucchina => zucchina.lengthCm < 15)
console.log(under15);

let weightOver15 = 0;
over15.forEach(zucchina => {
    // console.log(zucchina)
    weightOver15 += zucchina.weight
});

console.log(weightOver15);

let weightUnder15 = 0;
under15.forEach(zucchina => {
    // console.log(zucchina)
    weightUnder15 += zucchina.weight
});

console.log(weightUnder15);