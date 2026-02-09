function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números!');
    }
    return x + y;
}

try {
    console.log(soma(2, 5));
    console.log(soma(2, '5'));
} catch(err) {
    // console.log(err);
    console.log('Mensagem de erro para o usúario');
}

