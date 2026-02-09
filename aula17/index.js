const raiz = n => n ** 0.5;
console.log(raiz(9));


const dobro = function (n) {
    return n * 2;
}
console.log(dobro(5));


function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}
console.log(soma(2, 2));


function saudacao(nome) {
    console.log(`Bem vindo ${nome}!`);
}
saudacao('Leandro');
