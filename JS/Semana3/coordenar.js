const readline = require('readline-sync');

let membros = [];
let tarefas = [];

function mostrarlista(){
    membros.forEach((novomembro, index) => {
        console.log(`${index + 1}. ${novomembro}`);
    });
}
function mostrartarefas(){
    tarefas.forEach((novatarefa, index, novomembro) => {
        console.log(`${index + 1}. ${novomembro}. ${novatarefa}`);
    });
}
function menu(){
    console.log('Qual opcao voce deseja?\n 1. Adicionar membro\n 2. Adicionar tarefa');
}
let opcao;

do {
    menu();
    opcao = readline.question('Digite o que voce deseja: ');
    
    switch (opcao) {
        case '1': 
            let novomembro = readline.question('Digite o nome do membro: ');
            membros.push(novomembro);
            mostrarlista();
            break;
        case '2':
            let novatarefa = readline.question('Digite a tarefa que quer adicionar: ')
            tarefas.push(novatarefa);
            mostrartarefas();
            break;
    }
} while (opcao !== 3);