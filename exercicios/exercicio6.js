const prompt = require('prompt-sync')();

const lado1 = Number(prompt(`Digite o primeiro lado: `));
const lado2 = Number(prompt(`Digite o segundo lado: `));
const lado3 = Number(prompt(`Digite o terceiro lado: `));

const verificaTriangulo =
  lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1;

const verificaIsosceles = lado1 === lado2 || lado1 === lado3 || lado2 === lado3;

const verificaEscaleno = lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3;

const verificaEquilatero =
  lado1 === lado2 && lado1 === lado3 && lado2 === lado3;

if (verificaTriangulo) {
  if (verificaIsosceles) {
    console.log(`
    É um triângulo Isósceles.
    `);
  }
  if (verificaEscaleno) {
    console.log(`
    É um triângulo Escaleno.
    `);
  }
  if (verificaEquilatero) {
    console.log(`
    É um triângulo Equilátero.
    `);
  }
} else {
  console.log(`
  Não forma um triângulo.
  `);
}
