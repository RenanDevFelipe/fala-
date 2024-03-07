// Frase definida
var label1 = document.getElementById("label1");
label1.addEventListener('click', ouvirFrase)

// Função para ouvir a frase
function ouvirFrase() {
    const frase = document.getElementById("teste").value;
    // Seleciona o elemento de frase
    const elementoFrase = document.getElementById("frase");

    // Configuração da síntese de fala
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(frase);

    // Fala a frase
    synth.speak(utterance);

}

var label2 = document.getElementById("label2");
label2.addEventListener('click', ouvirFrase2)

// Função para ouvir a frase
function ouvirFrase2() {
    const frase = document.getElementById("teste2").value;
    // Seleciona o elemento de frase
    const elementoFrase = document.getElementById("frase");

    // Configuração da síntese de fala
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(frase);

    // Fala a frase
    synth.speak(utterance);

}

var label3 = document.getElementById("label3");
label3.addEventListener('click', ouvirFrase3)

// Função para ouvir a frase
function ouvirFrase3() {
    const frase = document.getElementById("teste3").value;
    // Seleciona o elemento de frase
    const elementoFrase = document.getElementById("frase");

    // Configuração da síntese de fala
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(frase);

    // Fala a frase
    synth.speak(utterance);

}


