const prompt = require('prompt-sync')();

for (let i = 0; i < 5; i++) {
  const numero = Number(prompt(`Digite valor de N: `));

  console.log(`\nTabuada do ${numero}:`);
  let multiplicacao = 1;
  for (let i = 1; i <= numero; i++) {
    multiplicacao = i * numero;
    console.log(`${i} x ${numero} = ${multiplicacao}`);
  }
  console.log('\n');
}
