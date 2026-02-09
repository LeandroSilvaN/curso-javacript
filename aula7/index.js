/*
Pedro Gomes Santos tem 27 anos, pesa 86 kg
tem 1.8 de altura e seu IMC é de 25.9
Pedro nasceu em 1999.
*/
const nome = 'Pedro';
const sobrenome = 'Gomes Santos';
const idade = 27;
const peso = 86;
const alturaEmM = 1.80;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2026 - idade;

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);