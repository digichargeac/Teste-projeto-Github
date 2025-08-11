// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Descubra o número secreto entre 1 e 10.';
let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Descubra o número secreto entre 1 e 100.');
}

exibirMensagemInicial();

function verificarChute() { 
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns! Você descobriu o número secreto em ${tentativa} ${palavraTentativa}.`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
     } else if (chute > numeroSecreto) {
        exibirTextoNaTela('h1', 'Você errou! O número secreto é menor.');}
        else {
        exibirTextoNaTela('h1', 'Você errou! O número secreto é maior.');
    }
    tentativa++;
    limparCampo();             
}

function gerarNumAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeNumerosSorteados = listaDeNumerosSorteados.length;

    if (quantidadeNumerosSorteados == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumAleatorio();
    tentativa = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}

