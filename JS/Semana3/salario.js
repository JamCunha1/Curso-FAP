const readline = require('readline-sync');

let horas = parseFloat(readline.question('Quantas horas você trabalha no mês: '));
let ganhoHora = parseFloat(readline.question('Digite quanto você ganha na hora trabalhada: '));
let dias = parseFloat(readline.question('Quantos dias voce tra balha no mes: '))

let salario = (ganhoHora * horas) * 20;

console.log (`Com voce ganhando ${ganhoHora} por hora e trabalhando ${horas} por dia seu salario é ${salario}`);