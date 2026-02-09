const numero = Number(prompt("Digite um número"));
const numeroTitulo = document.getElementById('numero-titulo');
const conteudo = document.getElementById('conteudo');

numeroTitulo.innerHTML = numero;
conteudo.innerHTML = `<p>Raiz quadrada: <strong>${numero ** 0.5}</strong></p>`;
conteudo.innerHTML += `<p><strong>${numero}</strong> é inteiro: <strong>${Number.isInteger(numero)}</strong></p>`;
conteudo.innerHTML += `<p>É NaN: <strong>${Number.isNaN(numero)}</strong></p>`;
conteudo.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(numero)}</strong></p>`;
conteudo.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(numero)}</strong></p>`;
conteudo.innerHTML += `<p>Com duas casas decimais: <strong>${numero.toFixed(2)}</strong></p>`;