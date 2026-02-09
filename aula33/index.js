const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Rodrigo',
    idade: 25,
    endereco: {
        rua: 'Rua Benedita',
        numero: 220
    }
};

// Atribuição via desestruturação
// const {nome = 'Gabriel', sobrenome} = pessoa;

// const {nome: n = '', sobrenome} = pessoa;
// console.log(n, sobrenome);

// const {nome, sobrenome} = pessoa;
// console.log(nome, sobrenome);

const { endereco: { rua, numero } } = pessoa;
console.log(rua, numero);

const { nome, idade, ...resto } = pessoa;
console.log(nome, idade, resto);