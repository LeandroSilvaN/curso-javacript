/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU -> Apenas uma expressão precisa ser verdadeira para retornar true
! -> NOT -> NÃO -> Inverte o valor
*/
const expressaoAnd = true && true && true && true;
const expressaoOr = true || true || false || true;

// const usuario = 'Leandro'; // form usuário digitou
// const senha = '123456'; // form usuário digitou
//                              True                   False
// const loginUsuario = usuario === 'Leandro' && senha === '12345';

console.log(!expressaoAnd);