const prompt = require('prompt-sync')();
const numero1 = Number(prompt(`Digite o número 1: `));
const numero2 = Number(prompt(`Digite o número 2: `));

const ordenar =
  numero1 > numero2 ? `${numero2}, ${numero1}` : `${numero1}, ${numero2}`;

console.log(ordenar);
