// try {
//     // console.log(a);
//     console.log('Iniciando app');
//     console.log('Manipulando app');
//     console.log('Finalizando app');

//     try {
//         console.log(sim);
//     } catch (e) {
//         console.log('Deu erro');
//     } finally {
//         console.log('FINALLY: Encerrando');
//     }

// } catch (e) {
//     console.log('Tratando o erro');
// } finally {
//     console.log('FINALLY: Sempre sou executado');
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) throw new TypeError('Esperando instância de Date');
    if (!data) data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const dia = new Date('02-02-2000 20:02:10');
    const hora = retornaHora(dia);
    console.log(hora);
} catch (e) {
    // Tratar erro
} finally {
    console.log('Tenha um excelente dia!');
}

