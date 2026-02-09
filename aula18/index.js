function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Lucas', 'David', 27);
const pessoa2 = criaPessoa('Taina', 'Oliveira', 35);
const pessoa3 = criaPessoa('Caio', 'Alvarez', 25);
const pessoa4 = criaPessoa('Joana', 'Souza', 40);
const pessoa5 = criaPessoa('Tiago', 'Son', 45); 

console.log(pessoa1.nome, pessoa1.sobrenome);


const pessoa = {
    nome: 'Leila',
    sobrenome: 'Pereira',
    idade: 55,

    fala() {
        console.log(`A idade atual de ${this.nome} é ${this.idade}!`);
    },

    incrementaIdade() {
        this.idade++;
    }
}
console.log(pessoa.nome);
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();