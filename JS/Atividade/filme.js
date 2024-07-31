const readline = require('readline');

// Cria uma interface para leitura e escrita no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Lista para armazenar filmes e diretores
let filmes = [];

// Função para mostrar o menu
function mostrarMenu() {
    console.log('\nEscolha uma opção:');
    console.log('1. Incluir filme e diretor');
    console.log('2. Listar filmes e diretores');
    console.log('3. Sair');

    rl.question('Digite o número da opção: ', (opcao) => {
        switch(opcao) {
            case '1':
                incluirFilmeEDiretor();
                break;
            case '2':
                listarFilmesEDiretores();
                break;
            case '3':
                console.log('Saindo...');
                rl.close();
                break;
            default:
                console.log('Opção inválida.');
                mostrarMenu();
                break;
        }
    });
}

// Função para incluir filme e diretor
function incluirFilmeEDiretor() {
    readline.question('Digite o nome do filme: ', (filme) => {
        readline.question('Digite o nome do diretor: ', (diretor) => {
            filmes.push({ filme, diretor });
            console.log(`Filme "${filme}" com o diretor "${diretor}" adicionado com sucesso.`);
            mostrarMenu();
        });
    });
}

// Função para listar filmes e diretores
function listarFilmesEDiretores() {
    if (filmes.length === 0) {
        console.log('Nenhum filme cadastrado.');
    } else {
        console.log('\nLista de filmes e diretores:');
        filmes.forEach((item, index) => {
            console.log(`${index + 1}. Filme: "${item.filme}" - Diretor: "${item.diretor}"`);
        });
    }
    mostrarMenu();
}

// Inicia o programa
mostrarMenu();