const verdadeira = true;

// Let tem escopo de bloco {... bloco}
// Var só tem escopo de função

let nome = 'Pedro'; // criando
var nome2 = 'Pedro'; // criando

if (verdadeira) {
    let nome = 'Hélio'; // criando
    var nome2 = 'Gomes'; // redeclarando

    if (verdadeira) {
        let nome = 'Taison'; 
        var nome2 = 'Jaqueline'; // redeclarando
    }
    // console.log(nome, nome2);
} 

// console.log(nome, nome2);

function falaOi() {
    if (verdadeira) {
        let nome = 'Caio';
        var sobrenome = 'Bruno';
    }

    console.log('Oi', sobrenome);

}

// falaOi();


