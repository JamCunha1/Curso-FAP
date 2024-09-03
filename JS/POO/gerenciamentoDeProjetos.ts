export class Funcionario {
    matricula: string;
    cpf: string;
    nome: string;
    cargo: string;
    idade: number;

    constructor(matricula: string, cpf: string, nome: string, cargo: string, idade: number) {
        this.matricula = matricula;
        this.cpf = cpf;
        this.nome = nome;
        this.cargo = cargo;
        this.idade = idade;
    }

    getDetalhes(): string {
        return (`${this.matricula}, CPF: ${this.cpf}, Nome: ${this.nome}, Cargo: ${this.cargo}, Idade: ${this.idade}`);
    }
}

export class Projetos {
    nomeProjeto: string;
    idProjeto: number;
    dataInicio: string;
    situacaoProjeto: string;

    constructor(nomeProjeto: string , idProjeto: number , dataInicio: string , situacaoProjeto: string){
     this.nomeProjeto = nomeProjeto;
     this.idProjeto = idProjeto;
     this.dataInicio = dataInicio;
     this.situacaoProjeto = situacaoProjeto;
    }

    exibirprojeto(){
    console.log(`Nome do Projeto: ${this.nomeProjeto}`);
    console.log(`ID do Projeto: ${this.idProjeto}`);
    console.log(`Data de Início: ${this.dataInicio.toString()}`);
    console.log(`Situação do Projeto: ${this.situacaoProjeto}`);
    }
}

// Cadastro manualmente no codigo (SEI LA, SEI QUE NAO VAI SER ASSIM)
const funcionario1 = new Funcionario("12345", "123.456.789-00", "Cleber Correria", "Desenvolvedor", 30);
console.log(funcionario1.getDetalhes());

const projeto1 = new Projetos("Criar classes", 150, "28/08/2024", "iniciado")
console.log(projeto1.exibirprojeto());

export class Alocacao {
    matricula: number;
    idProjeto: number;
    dataInicio: string;

    constructor(matricula: number, idProjeto:number, dataInicio:string) {
        this.matricula = matricula;
        this.idProjeto = idProjeto;
        this.dataInicio = dataInicio;
    }
}

const alocacao1 = new Alocacao(1, 1, '08/08/2024');

console.log(`O projeto com o id ${alocacao1.idProjeto} está alocado para o funcionario com o id ${alocacao1.matricula} com data de ínicio ${alocacao1.dataInicio}`)
