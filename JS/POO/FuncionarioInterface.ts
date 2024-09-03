interface FuncionarioInterface{
    nome: string;
    cargo: string;
    salario: number;
    horasTrabalhadas: number;
}

class Funcionario implements FuncionarioInterface{
    nome: string;
    cargo: string;
    salario: number;
    horasTrabalhadas: number;

    constructor (nome: string, cargo: string, salario: number, horasTrabalhadas: number) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario; 
        this.horasTrabalhadas = horasTrabalhadas;
    }

    calcularPagamento(): number {
        return (this.salario * this.horasTrabalhadas);
    }
    exibirFuncionario(): string {
        return `O Funcionario ${this.nome}, com o cargo de ${this.cargo} tem como salario ${this.calcularPagamento()} Reais por mes.`
    }
}

const funcionario2 = new Funcionario("Jamerson", "Desenvolvedor de software", 40, 40)

console.log(funcionario2.exibirFuncionario())