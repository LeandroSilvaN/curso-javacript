/*
* Aritméticos
* + Adição / Concatenação (- / *)
* ** Potenciação
* % Resto da divisão
*/
const num1 = 4;
const num2 = 7;
const num3 = 2;

console.log(num1 * num3);

/* 
Ordem de precedência
* ()
* **
* * / %
* + -
*/
console.log((num1 + num2) * num3);

/*
* Incremento = ++
* Decremento = --
*
* Operadores de atribuição (+= -= *= /= **= %=)
*/
let contador = 1;
contador++; // 2
contador--; // 1
contador += 5; // contador = contador + 5

console.log(contador++);

// NaN -> Not a number
let num4 = 'L5';
console.log(num4 * 2);

// parseInt (inteiro) | parseFloat(decimais) | Number
let num5 = Number('7.5');
console.log(num5 + num2);