function meuEscopo() {
    const data = new Date();
    const dataAtual = document.querySelector('.data-atual');

    const diaSemana = data.getDay();
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minuto = data.getMinutes();

    let diaSemanaTexto = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira',
        'Quinta-feira', 'Sexta-feira', 'Sábado'];
    let mesTexto = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    function zeroAEsquerda(num) {
        return num >= 10 ? num : `0${num}`;
    }

    dataAtual.innerHTML = `${diaSemanaTexto[diaSemana]}, ${dia} de ${mesTexto[mes]} de ${ano}, às ${zeroAEsquerda(hora)}:${zeroAEsquerda(minuto)}`;

    // const data = new Date();
    // const dataAtual = document.querySelector('.data-atual');

    // dataAtual.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });

}
meuEscopo();