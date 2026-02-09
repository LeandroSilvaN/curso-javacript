/*
&& -> false && true -> false "valor"
|| -> true && false -> vai retornar o "valor verdadeiro"

FALSY
false
0
'' "" ``
null / undefined
NaN
*/

const corUsuario = null;
const corPadrao = corUsuario || 'blue';

// console.log(corPadrao);

let a = 0;
let b = null;
let c = false;
let d = '';

console.log(a || b || 'e' || c || d);