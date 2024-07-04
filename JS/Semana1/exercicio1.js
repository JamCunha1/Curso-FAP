const readline = require('readline-sync');

var numero1 = parseInt(readline.question('Digite um numero: '));
var numero2 = parseInt(readline.question('Digite o segundo mumero: '));

var soma = numero1+numero2;
var sub = numero1-numero2;
var div = numero1/numero2;
var multi = numero1*numero2;

console.log('A soma dos números é: ', soma);
console.log('A subtracao dos números é: ', sub);
console.log('A divisao dos números é: ', div);
console.log('A multiplicacao dos números é: ', multi);