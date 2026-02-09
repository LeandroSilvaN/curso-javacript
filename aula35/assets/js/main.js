function meuEscopo() {
const elementos = [
    {tag: 'strong', texto: 'Metro Boomin & Future - Superhero (Heroes & Villains)'},
    {tag: 'p', texto: 'Travis Scott - HIGHEST IN THE ROOM'},
    {tag: 'i', texto: 'Travis Scott - TIL FURTHER NOTICE (Official Audio) ft. James Blake, 21 Savage'},
    {tag: 'p', texto: 'Don Toliver - No Idea'}
];

// Minha solução
const container = document.querySelector('.container');

for (let i = 0; i < elementos.length; i++) {
    const {tag, texto} = elementos[i];
    container.innerHTML += `<${tag}>${texto}</${tag}>`;
}

}
meuEscopo();


// Solução do professor
// const div = document.createElement('div');

// for (let i = 0; i < elementos.length; i++) {
//     // console.log(elementos[i].tag);
//     const {tag, texto} = elementos[i];
//     const criaTag = document.createElement(tag);

// opção 1
//     criaTag.innerText = texto;

// opção 2
//     criaTag.innerText = texto;

// opção 3
// let textoCriado = document.createTextNode(texto);
// criaTag.appendChild(textoCriado);

//     div.appendChild(criaTag);
// }

// container.appendChild(div);