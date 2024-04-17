const prompt = require('prompt-sync')();
const codigoOrigem = Number(prompt(`Digite qual a origem do produto: `));

let origem;

switch (codigoOrigem) {
  case 1:
    origem = 'Sul';
    break;
  case 2:
    origem = 'Norte';
    break;
  case 3:
    origem = 'Leste';
    break;
  case 4:
    origem = 'Oeste';
    break;
  case 5:
  case 6:
    origem = 'Nordeste';
    break;
  case 7:
  case 8:
  case 9:
    origem = 'Sudeste';
    break;
  case 10:
  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
  case 20:
    origem = 'Centro-Oeste';
    break;
  case 25:
  case 26:
  case 27:
  case 28:
  case 29:
  case 30:
  case 31:
  case 32:
  case 33:
  case 34:
  case 35:
  case 36:
  case 37:
  case 38:
  case 39:
  case 40:
  case 41:
  case 42:
  case 43:
  case 44:
  case 45:
  case 46:
  case 47:
  case 48:
  case 49:
  case 50:
    origem = 'Nordeste';
    break;
  default:
    origem = 'Produto importado';
}

console.log(`Origem: ${origem}`);
