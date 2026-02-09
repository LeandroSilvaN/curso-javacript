/* 
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/

const f = {
    nome: 'Paulo',
    sobrenome: 'Ramos'
};
const g = {...f};
console.log(f, g);
g.nome = 'Gabriel';
console.log(f, g);


let c = [1, 2, 3];
let d = [...c];
let e = d;

// c.push(4);
// console.log(c, d);
// d.pop();
// console.log(c, d);
// c.push('Sim')
// console.log(c, d);


let a = 'A';
let b = a; // Cópia
a = 'Arroz';
// console.log(a, b);