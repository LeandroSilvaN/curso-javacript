// For in -> lê os índices ou chaves do objeto
const frutas = ['Uva', 'Maça', 'Manga'];

for (let i in frutas) {
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Julio',
    sobrenome: 'Abravanel',
    idade: '30'
};

// console.log(pessoa.nome);
// console.log(pessoa['nome']);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}