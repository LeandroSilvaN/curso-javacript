//first-class object
// Function hosting"
function falaOi(){
    console.log('Oi');
}
falaOi();

// arrow function
const bDia = () => console.log('Bom dia');

// function expression
function usarFuncao(funcao) { // parametro chama outra função
    console.log('Função executada...');
    funcao();
}
usarFuncao(bDia);

// function como objeto
const boasVindas = {
    nome: 'Vitor',
    saudacao() {
        console.log(`Bem-vindo ${this.nome}!`);
    }
};

boasVindas.saudacao();