// minha solução
function maior(x = 1, y = 1) {
if (x === y) {
    return console.log('Os números são iguais!');
} else if (x > y) {
    return console.log(`${x} é maior que ${y}`);
} else if (y > x) {
    return console.log(`${y} é maior que ${x}`);
} else {
    return console.log('Valores inválidos.');
}
}

maior();
maior(5, 2);
maior(3, 10);
maior(3, 3);
maior(5, "doze");

// solução do professor, código refatorado
const max = (x, y) => {
  return  x > y ? x : y;
};
console.log(max(15,200));

const max2 = (a, b) => a > b ? a : b;
console.log(max2(10, 50));