const readline = require('readline-sync');

console.log('Inicio');
var num1 = parseInt(readline.question('Digite o primeiro número: '));
var num2 = parseInt(readline.question('Digite o segundo número: '));
var soma = num1 + num2;
console.log('A soma dos 2 números é: ', soma);
console.log('Fim!!');