function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function receberDados(evento) {
        evento.preventDefault();

        const pegarPeso = document.querySelector('#peso');
        const peso = Number(pegarPeso.value);
        const pegarAltura = document.querySelector('#altura');
        const altura = Number(pegarAltura.value);

        const calculo = peso / (altura * altura);
        console.log(calculo);

        if (peso == '' && altura == '') {
            resultado.innerHTML = `Preencha os campos!`
        } else if (Number.isNaN(peso) && Number.isNaN(altura)) {
            resultado.innerHTML = `Preencha com números!`
        } else if (peso == '' || Number.isNaN(peso)) {
            resultado.innerHTML = `Peso inválido!`;
        } else if (altura == '' || Number.isNaN(altura)) {
            resultado.innerHTML = `Altura inválida!`;
        } else {
            if (calculo < 18.5) {
                resultado.innerHTML = ` Seu IMC é ${calculo.toFixed(2)} (Abaixo do peso)`;
            } else if (calculo >= 18.5 && calculo <= 24.9) {
                resultado.innerHTML = ` Seu IMC é ${calculo.toFixed(2)} (Peso normal)`;
            } else if (calculo >= 25 && calculo <= 29.9) {
                resultado.innerHTML = ` Seu IMC é ${calculo.toFixed(2)} (Sobrepeso)`;
            } else if (calculo >= 30 && calculo <= 34.9) {
                resultado.innerHTML = ` Seu IMC é ${calculo.toFixed(2)} (Obesidade grau 1)`;
            } else if (calculo >= 35 && calculo <= 39.9) {
                resultado.innerHTML = ` Seu IMC é ${calculo.toFixed(2)} (Obesidade grau 2)`;
            } else if (calculo >= 40 && calculo <= 200) {
                resultado.innerHTML = ` Seu IMC é ${calculo.toFixed(2)} (Obesidade grau 3)`;
            } else {
                resultado.innerHTML = ` IMC inválido!`;
            }
        }
    }

    form.addEventListener('submit', receberDados);

}
meuEscopo();