const prompt = require('prompt-sync')();

let verifica = true;

while (verifica) {
  const eleitores = parseInt(prompt(`Digite o número de eleitores: `));
  const votosBrancos = parseInt(prompt(`Digite o número de eleitores: `));
  const votosNulos = parseInt(prompt(`Digite o número de eleitores: `));
  const votosValidos = parseInt(prompt(`Digite o número de eleitores: `));

  const somaVotos = votosBrancos + votosNulos + votosValidos;

  if (somaVotos > eleitores) {
    console.log(
      `
      O número de votos é maior do que ${eleitores} eleitores. Tente novamente
    `
    );
    verifica = true;
  } else if (
    eleitores < 0 ||
    votosBrancos < 0 ||
    votosNulos < 0 ||
    votosValidos < 0
  ) {
    console.log(
      `
    Todos os números devem ser positivos. Tente novamente
    `
    );
    verifica = true;
  } else if (
    isNaN(eleitores) ||
    isNaN(votosBrancos) ||
    isNaN(votosNulos) ||
    isNaN(votosValidos)
  ) {
    console.log(
      `
    Digite um número válido. Tente novamente`
    );
    verifica = true;
  } else {
    const porcentagemVotosBrancos = (votosBrancos * 100) / eleitores;
    const porcentagemVotosNulos = (votosNulos * 100) / eleitores;
    const porcentagemVotosValidos = (votosValidos * 100) / eleitores;

    const mensagem = `
      Votos brancos: ${porcentagemVotosBrancos}%
      Votos nulos: ${porcentagemVotosNulos}%
      Votos validos: ${porcentagemVotosValidos}%
      `;

    console.log(mensagem);
    verifica = false;
  }
}
