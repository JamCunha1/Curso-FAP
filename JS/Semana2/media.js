const readline = require('readline-sync');

var nota1 = parseFloat(readline.question('Digite a primeira nota: '));
var nota2 = parseFloat(readline.question('Digite a segunda nota: '));

var media = (nota1+nota2)/2;

if (media >= 7){
    console.log('Parabéns você passou com a média: ', media);
} else if (media >= 5){
    console.log('Você está na recuperação com média: ', media);
} else {
    console.log('Infelizmente você foi reprovado com a média: ', media);
}
