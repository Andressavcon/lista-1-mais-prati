const prompt = require('prompt-sync')();

do {
  const numero = Number(prompt(`Digite um número inteiro: `));

  if (numero < 0 || numero === null) {
    break;
  } else if (numero % 2 === 0) {
    console.log(`${numero} é PAR`);
  } else {
    console.log(`${numero} é ÍMPAR`);
  }
} while (true);
