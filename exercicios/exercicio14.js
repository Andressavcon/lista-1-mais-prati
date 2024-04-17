const prompt = require('prompt-sync')();

let i = 0;
let soma = 0;

while (true) {
  const numero = parseFloat(
    prompt(`Digite o número decimal: (ou 0 para parar) `)
  );

  if (numero === 0) {
    break;
  }

  soma += numero;
  i++;
}

if (i !== 0) {
  const resultado = soma / i;
  console.log(`\nA média é ${resultado.toFixed(2)}`);
} else {
  console.log(`É preciso inserir um número. Tente novamente`);
}
