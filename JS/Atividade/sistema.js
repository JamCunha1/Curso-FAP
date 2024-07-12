const readline = require('readline-sync');

let lista = [];

function mensagem() {
    console.log('*********Menu*********');
    console.log('1 - Cadastrar uma tarefa');
    console.log('2 - Alterar uma tarefa');
    console.log('3 - Excluir uma tarefa');
    console.log('4 - Listar as tarefas');
    console.log('5 - Sair do sistema');
}

let opcao;

do {
    mensagem();
    opcao = parseInt(readline.question('Digite uma opcao: '));

    switch (opcao) {
        case 1:
            let novaTarefa = readline.question('Digite uma tarefa: ');
            lista.push(novaTarefa);
            break;
        case 2:
            if (lista.length === 0) {
                console.log('Lista de tarefas vazia. Nada para alterar.');
            } else {
                let indiceAlterar = parseInt(readline.question('Digite o indice da tarefa que deseja alterar: '));
                if (indiceAlterar >= 0 && indiceAlterar < lista.length) {
                    lista[indiceAlterar] = readline.question('Digite a nova tarefa: ');
                } else {
                    console.log('Indice inválido.');
                }
            }
            break;
        case 3:
            if (lista.length === 0) {
                console.log('Lista de tarefas vazia. Nada para excluir.');
            } else {
                let tarefaExcluir = readline.question('Digite a tarefa que deseja excluir: ');
                let index = lista.indexOf(tarefaExcluir);
                if (index !== -1) {
                    lista.splice(index, 1);
                    console.log('Tarefa excluída.');
                } else {
                    console.log('Tarefa não encontrada.');
                }
            }
            break;
        case 4:
            console.log('Lista de Tarefas:');
            lista.forEach((tarefa, index) => {
                console.log(`${index + 1}. ${tarefa}`);
            });
            break;
        case 5:
            console.log('Saindo do sistema...');
            break;
        default:
            console.log('Opção inválida.');
            break;
    }

} while (opcao !== 5);

console.log('Você saiu do sistema.');