let titulo = document.querySelector('h1');

titulo.innerHTML = 'Hora do desafio!';

function clicarBotao(num1, num2, num3) {
    let num1 = prompt("Qual o primeiro número?");
    let num2 = prompt("Qual o segundo número?");
    let num3 = prompt("Qual o terceiro número?");
    alert((num1+num2+num3)/3);
}

function alertaX() {
    alert('Eu amo JS!');
}

function perguntarCidade() {
    let cidade = prompt('Cite o nome de uma cidade:');
    
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function somarDois() {
    let num1 = parseInt(prompt('Digite o primeiro número:'));
    let num2 = parseInt(prompt('Digite o segundo número:'));
    
    let resultado = num1 + num2;
    
    alert(`A soma de ${num1} e ${num2} é ${resultado}.`);
}

let listaGenerica = [];
