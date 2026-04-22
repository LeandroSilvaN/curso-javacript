function criarMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    }
}

const duplica = criarMultiplicador(2);
const triplica = criarMultiplicador(3);
const quadriplica = criarMultiplicador(4);

console.log(duplica(5));
console.log(triplica(7));
console.log(quadriplica(10));

// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + " " + resto;
//     }
//     return falaResto;
// }

// const fala = falaFrase("Olá");
// const resto = fala("mundo!");

// console.log(resto);

