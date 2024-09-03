interface ProdutoInterface {
    nome: string;
    preco: number;
    descricao: string;
    emEstoque: boolean;
}

class Produto implements ProdutoInterface {
    nome: string;
    preco: number;
    descricao: string;
    emEstoque: boolean;

    constructor (nome: string, preco: number, emEstoque: boolean, descricao: string) {
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = emEstoque;
        this.descricao = descricao;
    }

    criarProduto(): string {
        return `Produto: ${this.nome}, preco: R$ ${this.preco}`;
    }
}
const produto2 = new Produto("Cadeira", 150.00, true, "Utilizado para assento");

console.log(produto2.criarProduto());