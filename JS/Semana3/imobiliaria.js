const readline = require('readline-sync');

let valor = 20

let imovel = readline.question('Digite se o imovel é apartamento ou casa: ');
let area = parseFloat(readline.question('Digite a area que o imovel tem: '));

let aluguel = valor*area; 

console.log(`${imovel} com ${area}m² - O valor do aluguel será de ${aluguel} `);
