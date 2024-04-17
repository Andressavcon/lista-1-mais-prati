let numeroAtual = 101;
let primosEncontrados = 0;

while (primosEncontrados < 50) {
  let ehPrimo = true;
  let possivelDivisor = 2;
  let limiteInferior = Math.floor(numeroAtual / 2);

  while (possivelDivisor <= limiteInferior) {
    if (numeroAtual % possivelDivisor === 0) {
      ehPrimo = false;
      break;
    }
    possivelDivisor++;
  }

  if (ehPrimo) {
    console.log(numeroAtual);
    primosEncontrados++;
  }

  numeroAtual++;
}
