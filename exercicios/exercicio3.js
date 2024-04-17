const prompt = require('prompt-sync')();

let verificaNumeros = true;

while (verificaNumeros) {
  const valor1 = parseInt(prompt(`Digite o primeiro número inteiro: `));
  const valor2 = parseInt(prompt(`Digite o segundo número inteiro: `));
  const valor3 = parseInt(prompt(`Digite o terceiro número inteiro: `));
  const valor4 = parseInt(prompt(`Digite o quarto número inteiro: `));

  const verificacoes =
    isNaN(valor1) ||
    isNaN(valor2) ||
    isNaN(valor3) ||
    isNaN(valor4) ||
    valor1 <= 0 ||
    valor2 <= 0 ||
    valor3 <= 0 ||
    valor4 <= 0;

  if (verificacoes) {
    console.log(`
    Todos os números devem ser positivos e válidos. Tente novamente!
    `);
    verificaNumeros = true;
  } else {
    const mensagem = `
    Numeros => ${valor1} ${valor2} ${valor3} ${valor4}
    1º => 25 + ${valor1} = ${25 + valor1} 
    2º => O triplo de ${valor2} = ${valor2 * 3}
    3º => 12% de ${valor3} = ${valor3 * 0.12}
    4º => A soma de ${valor1}, ${valor2}, ${valor3} = ${
      valor1 + valor2 + valor3
    }
    `;

    console.log(mensagem);

    verificaNumeros = false;
  }
}
