const readline = require('readline-sync');

let diaria = parseFloat(readline.question('Digite a quantidade de diarias que voce deseja: '));
let quarto = parseFloat(readline.question('Escolha o tipo de quarto:\n 1 - Standard\n 2 - Luxo\n 3 - Suite\n Digite uma opcao: '));

let valorstandard = 150*diaria;
let valorluxo = 300*diaria;
let valorsuite = 500*diaria;

if (quarto ==  1){
    console.log(`O valor do quarto standard para ${diaria} diarias e de ${valorstandard} Reais no total`);
} else if (quarto == 2){
    console.log(`O valor do quarto de luxo para ${diaria} diarias e de ${valorluxo} Reais no total`);
} else if (quarto == 3){
    console.log(`O valor para o quarto suite para ${diaria} diarias e de ${valorsuite} Reais no total`);
} else {
    console.log('Opcao invalída');
}