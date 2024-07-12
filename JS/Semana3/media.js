const readline = require('readline-sync');

let n1 = parseFloat(readline.question('Digite o valor da primeira nota: '));
let n2 = parseFloat(readline.question('Digite o valor da segunda nota: '));
let n3 = parseFloat(readline.question('Digite o valor da terceira nota: '));
let n4 = parseFloat(readline.question('Digite o valor da quarta nota: '))

var media = (n1 + n2 + n3 + n4)/4

console.log('A media do aluno e: ', media);