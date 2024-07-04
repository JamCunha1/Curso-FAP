const readline = require('readline-sync');

var nome = readline.question('Digite seu nome: ');
var telefone = parseInt(readline.question('Digite o numero do seu telefone: '));
var peso = parseInt(readline.question('Digite o seu peso: '));
var altura = parseFloat(readline.question('Digite sua altura: '));

var agua = 35 * peso;
const imc = peso/(altura*altura);

console.log(nome, 'Você precisa consumir: ',agua, 'ml de agua por dia.');
console.log('Seu IMC é: ', imc);

