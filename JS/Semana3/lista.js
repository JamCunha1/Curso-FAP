const readline = require('readline-sync');

let lista = [];

function menu() {
    console.log('Digite \n 1 - para cadastrar produtos \n 2 - para listar \n 3 - para sair: ');
}

let opcao;

do { 
    menu();
    opcao = readline.question('Qual opcao voce deseja: ');

    switch (opcao) {
        case '1': 
            let novoItem = readline.question('Quais produtos esta faltando: '); 
            lista.push(novoItem);
            break;
        case '2': 
            console.log('Lista de itens: ')
            lista.forEach((novoItem, index) => {
                console.log(`${index + 1}. ${novoItem}`);
            });
            break;
        case '3': 
        console.log('Voce esta saindo do sistema')
        }
} while (opcao !== '3');
