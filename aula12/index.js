// minha primeira solução

let varA = 'A'; // B 
let varB = 'B'; // C
let varC = 'C'; // A
let varAa = varB;

varB = varC;
varC = varA;
varA = varB;
console.log(varAa, varB, varC);

// minha segunda solução
const a = "A";
const b = "B";
const c = "C";

let a2 = b;
let b2 = c;
let c2 = a;

console.log(a2, b2, c2);