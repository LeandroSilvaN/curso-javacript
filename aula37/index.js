const nomes = ['Carla', 'Flávio', 'Camille'];

// For clássico - Geralmente com iteráveis(array ou string)
// For in - Retorna índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, array ou string)

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('####');

for (let i in nomes) {
    console.log(nomes[i]);
}

console.log('####');

for (let valor of nomes) {
    console.log(valor);
}

console.log('####');

nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
})