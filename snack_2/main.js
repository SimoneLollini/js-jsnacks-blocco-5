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
    lengthCm: 15
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
    lengthCm: 18
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

// const over15 = zucchine.filter(function () {
//     return zucchine.lengthCm > 15;
// })

const { lengthCm } = zucchine;
console.log(lengthCm);
function isGreater() {

}
// const over15 = zucchine.filter()
// console.log(over15);
