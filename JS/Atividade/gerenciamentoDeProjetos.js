class Projeto{
    idProjeto
    nomeProjeto
    dataInicioProjeto

    constructor(idProjeto, nomeProjeto, dataInicioProjeto){
        this.idProjeto = idProjeto;
        this.nomeProjeto = nomeProjeto;
        this.dataInicioProjeto = dataInicioProjeto;
    }

    exibirProjeto(){
        console.log(`Projeto: ${this.idProjeto} - ${this.nomeProjeto} foi iniciado no dia ${this.dataInicioProjeto}`);
    }
}

class Alocacao{
    idProjeto
    idFuncionario
    dataInicioAlocacao

    constructor(idProjeto, idFuncionario, dataInicioAlocacao){
        this.idProjeto = idProjeto;
        this.idFuncionario = idFuncionario;
        this.dataInicioAlocacao = dataInicioAlocacao;
    }

    exibirAlocacao(){
        
    }




}