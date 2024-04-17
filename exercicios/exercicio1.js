const prompt = require('prompt-sync')();

const celsius = prompt(`Digite a temperatura ºC que será convertida para ºF: `);

const celsiusFahrenheit = celsius * (9 / 5) + 32;

const conversao = `
${celsius}ºC ====> ${celsiusFahrenheit}ºF 
`;

console.log(conversao);
