const prompt = require('prompt-sync')();
const quantidadeDeMacas = Number(prompt(`Digite o número de maçãs: `));

let valorTotalMacas = 0;

if (quantidadeDeMacas < 12) {
  valorTotalMacas += quantidadeDeMacas * 0.3;
} else {
  valorTotalMacas += quantidadeDeMacas * 0.25;
}

console.log(`
O valor total de ${quantidadeDeMacas} maçãs é R$ ${valorTotalMacas.toFixed(2)}
`);
