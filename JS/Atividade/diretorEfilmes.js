const readline = require('readline-sync')

filmes = [];

function menu(){
    console.log('Digite a opcao que voce deseja\n\n');
    console.log('1 - incluir filme e diretor');
    console.log('2 - Ver lista');
    console.log('3 - Sair do sistema\n\n');

    opcao = readline.question('Digite o numero da opcao: ');
        switch(opcao) {
            case '1':
                incluirFilme();
                break;
            case '2':
                mostrarLista();
                break;
            case '3':
                console.log('Saindo...');
                break;
            default:
                console.log('Opção inválida.');
                menu();
                break;
        }
}

function incluirFilme(){
    filme = readline.question('Digite o nome do filme: ')
    diretor = readline.question('Digite o nome do diretor: ')
    filmes.push({ filme, diretor });
    console.log(`Filme "${filme}" com o diretor "${diretor}" adicionado com sucesso.`);
    menu();
}

function mostrarLista(){
    if (filmes.length === 0) {
        console.log('Nenhum filme cadastrado.');
    } else {
        console.log('\nLista de filmes e diretores:');
        filmes.forEach((item, index) => {
            console.log(`${index + 1}. Filme: "${item.filme}" - Diretor: "${item.diretor}"`);
        });
    }
    menu();
}
menu();
