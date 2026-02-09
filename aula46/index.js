function mostrarHora() {
    const data = new Date('2000-02-02 10:00:00');

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

const timer = setInterval(function() {
    console.log(mostrarHora());
}, 1000 );

setTimeout(function() {
    clearInterval(timer);
}, 6000);

setTimeout(function() {
    console.log('Olá Mundo!');
}, 7000);