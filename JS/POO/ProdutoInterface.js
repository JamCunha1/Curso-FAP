var Produto = /** @class */ (function () {
    function Produto(nome, preco, emEstoque, descricao) {
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = emEstoque;
        this.descricao = descricao;
    }
    Produto.prototype.criarProduto = function () {
        return "Produto: ".concat(this.nome, ", preco: R$ ").concat(this.preco);
    };
    return Produto;
}());
var produto2 = new Produto("Cadeira", 150.00, true, "Utilizado para assento");
console.log(produto2.criarProduto());
