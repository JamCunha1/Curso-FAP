const readline = require('readline-sync');

let horas = parseFloat(readline.question('Quantas horas voce trabalha no mes: '));
let ganhoHora = parseFloat(readline.question('Digite quanto voce ganha na hora trabalhada: '));

let salario = ganhoHora * horas;

console.log (`Com voce ganhando ${ganhoHora} por hora e trabalhando ${horas} por dia seu salario é ${salario}`);