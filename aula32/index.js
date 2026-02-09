// ... rest, ... spread
// const numeros = [50, 100, 150, 200, 250, 300, 350, 400];
// const [a, b, c, ...resto] = numeros;
// const [a, , b, , c,] = numeros;

// console.log(a, b, c);
// console.log(resto);

//                     0          1         2
//                  0  1  2    0  1  2   0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

// console.log(numeros[2][0]);

// const [,[,,seis]] = numeros;
// console.log(seis);

const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);