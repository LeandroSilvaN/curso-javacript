const conta = (operador, acumulador, ...numeros) => {
    console.log("Acumulador:", acumulador);
    console.log("Números:", numeros);
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log("Operador usado:", operador)
    console.log("Resultado:", acumulador);
};

conta('+', 2, 4, 6, 20, 13, 2, 9);

//function funcao([valor1, valor2, valor3]) {
//    console.log(valor1, valor2, valor3);
//}
//funcao([4, 5, 34]);

//function funcao({nome, sobrenome, idade}){
//    console.log(nome, sobrenome, idade);
//}
//let obj = {
//    nome: 'Sandro',
//    sobrenome: 'Duarte',
//    idade: 26
//}
//funcao(obj);