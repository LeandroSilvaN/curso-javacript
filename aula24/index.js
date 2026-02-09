/*
Entre 0 e 12 -> Bom dia
Entre 13 e 17 -> Boa tarde
Entre 18 e 23 -> Boa noite
 */

const hora = 30;

if (hora >= 0 && hora <= 12) {
    console.log(`Bom dia, agora são ${hora}h`);
} else if (hora >= 13 && hora <= 17) {
    console.log(`Boa tarde, agora são ${hora}h`);
} else if (hora >= 18 && hora <= 23) {
    console.log(`Boa noite, agora são ${hora}h`);
} else {
    console.log('Olá');
}