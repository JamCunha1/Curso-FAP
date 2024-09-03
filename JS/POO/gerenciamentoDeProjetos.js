"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alocacao = exports.Projetos = exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(matricula, cpf, nome, cargo, idade) {
        this.matricula = matricula;
        this.cpf = cpf;
        this.nome = nome;
        this.cargo = cargo;
        this.idade = idade;
    }
    Funcionario.prototype.getDetalhes = function () {
        return ("".concat(this.matricula, ", CPF: ").concat(this.cpf, ", Nome: ").concat(this.nome, ", Cargo: ").concat(this.cargo, ", Idade: ").concat(this.idade));
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
var Projetos = /** @class */ (function () {
    function Projetos(nomeProjeto, idProjeto, dataInicio, situacaoProjeto) {
        this.nomeProjeto = nomeProjeto;
        this.idProjeto = idProjeto;
        this.dataInicio = dataInicio;
        this.situacaoProjeto = situacaoProjeto;
    }
    Projetos.prototype.exibirprojeto = function () {
        console.log("Nome do Projeto: ".concat(this.nomeProjeto));
        console.log("ID do Projeto: ".concat(this.idProjeto));
        console.log("Data de In\u00EDcio: ".concat(this.dataInicio.toString()));
        console.log("Situa\u00E7\u00E3o do Projeto: ".concat(this.situacaoProjeto));
    };
    return Projetos;
}());
exports.Projetos = Projetos;
// Cadastro manualmente no codigo (SEI LA, SEI QUE NAO VAI SER ASSIM)
var funcionario1 = new Funcionario("12345", "123.456.789-00", "Cleber Correria", "Desenvolvedor", 30);
console.log(funcionario1.getDetalhes());
var projeto1 = new Projetos("Criar classes", 150, "28/08/2024", "iniciado");
console.log(projeto1.exibirprojeto());
var Alocacao = /** @class */ (function () {
    function Alocacao(matricula, idProjeto, dataInicio) {
        this.matricula = matricula;
        this.idProjeto = idProjeto;
        this.dataInicio = dataInicio;
    }
    return Alocacao;
}());
exports.Alocacao = Alocacao;
var alocacao1 = new Alocacao(1, 1, '08/08/2024');
console.log("O projeto com o id ".concat(alocacao1.idProjeto, " est\u00E1 alocado para o funcionario com o id ").concat(alocacao1.matricula, " com data de \u00EDnicio ").concat(alocacao1.dataInicio));
