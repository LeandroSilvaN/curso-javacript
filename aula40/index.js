const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

// Continue - continua para a próxima iteração
// Break - sai do laço

let i = 0
do {
    let letra = letras[i];

    if (letra === 'b') {
        console.log('b foi pulado');
        i++;
        continue;
    }

    if (letra === 'f') {
        console.log('f encontrado!! finalizando o app...');
        i++;
        break;
    }

    console.log(letra);
    i++;
} while (i < letras.length);

// for (let i of letras) {
    
//     if (i === 'b') {
//         console.log('b foi pulado');
//         continue;
//     }

//     if (i === 'f') {
//         console.log('f encontrado!! finalizando o app...');
//         break;
//     }

//     console.log(i);
// }