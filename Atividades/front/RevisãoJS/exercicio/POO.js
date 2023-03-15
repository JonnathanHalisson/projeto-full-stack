class Pessoaa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    exibitInfo() {
        return console.log(`Nome: ${this.nome} \nIdade: ${this.idade} \nProfissão: ${this.profissao}`)
    }

}

const pessoa1 = new Pessoaa("joão", 24, "dados")

pessoa1.exibitInfo()