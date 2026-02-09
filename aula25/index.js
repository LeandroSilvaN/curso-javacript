const a = 10;

// Se (verdadeiro), executa {código}
// Se não executa {código}

if (a <= 10) { // Verdadeiro
    console.log('É menor ou igual a 10');
}

if (a >= 0 && a <= 5) {
    console.log('Está entre 0 e 5');
} else if (a >= 6 && a <= 8) {
    console.log('Está entre 6 e 8');
} else if (a >= 9 && a <= 11) { // Verdadeiro
    console.log('Está entre 9 e 11');
} else {
    console.log('Não está entre 0 e 11');
}

console.log('... resto do código');