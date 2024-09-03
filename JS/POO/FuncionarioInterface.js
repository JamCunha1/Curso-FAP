var Funcionario = /** @class */ (function () {
    function Funcionario(nome, cargo, salario, horasTrabalhadas) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
        this.horasTrabalhadas = horasTrabalhadas;
    }
    Funcionario.prototype.calcularPagamento = function () {
        return (this.salario * this.horasTrabalhadas);
    };
    Funcionario.prototype.exibirFuncionario = function () {
        return "O Funcionario ".concat(this.nome, ", com o cargo de ").concat(this.cargo, " tem como salario ").concat(this.calcularPagamento());
    };
    return Funcionario;
}());
var funcionario2 = new Funcionario("Jamerson", "Desenvolvedor de software", 40, 40);
console.log(funcionario2.exibirFuncionario());
