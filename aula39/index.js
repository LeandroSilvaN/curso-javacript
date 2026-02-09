const nome = 'Leandro';
let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// while (i < nome.length) {
//     console.log(nome[i]);
//     i++;
// }

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const lista = [];
const min = 5;
const max = 40;

let sorteio = 0;

// verifica antes de executar
while (sorteio !== 10) {
    sorteio = random(min, max);
    lista.push(sorteio);
}

console.log('######');

// executa e depois verifica
do {
    console.log(lista.length, 'números');
} while (sorteio !== 10);
