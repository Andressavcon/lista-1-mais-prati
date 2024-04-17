const prompt = require('prompt-sync')();

let soma = 0;
let somaPesos = 0;

while (true) {
  const numero = parseFloat(
    prompt(`Digite o número decimal: (ou 0 para parar) `)
  );

  if (numero === 0) {
    break;
  }

  const peso = parseFloat(prompt(`Digite o peso: `));

  soma += numero * peso;
  somaPesos += peso;
}

if (somaPesos !== 0) {
  const resultado = soma / somaPesos;
  console.log(`\nA média é ${resultado.toFixed(2)}`);
} else {
  console.log(`É preciso inserir um número. Tente novamente`);
}
