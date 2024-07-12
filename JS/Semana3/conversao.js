const readline = require('readline-sync');

var metros = parseFloat(readline.question('Digite o valor que voce quer converter: '));

var cm = metros*100

console.log(metros, 'm é igual a', cm, 'cm');