//MORANGUINHO

document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById ('botao-acessibilidade')
    const opçõesDeAcessibilidade = document.getElementById ('opçoes-acessibilidade')


    botaoDeAcessibilidade.addEventListener('click',function (){
        botaoDeAcessibilidade.classList.toggle('rotaçao-botao');
        opçõesDeAcessibilidade.classList.toggle('apresenta-lista')

        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
    })


    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const dimunuiFonteBotao = document.getElementById('diminuir-fonte');

    const alternaContraste = document.getElementById('alterna-contraste');

    
    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte  += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

    dimunuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte  -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

    alternaContraste.addEventListener('click', function(){
        document.body.classList.toggle('alto-contraste')
    })

})


ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#moranguinho', { delay: 500 });
ScrollReveal().reveal('#galeria', { delay: 500 });
ScrollReveal().reveal('#contato', { delay: 500 });
ScrollReveal().reveal('#cronometro', { delay: 700 });

const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

// CRONOMETRO 

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2025-05-12T00:00:00");
const tempoObjetivo2 = new Date("2025-05-20T00:00:00");
const tempoObjetivo3 = new Date("2025-05-30T00:00:00");
const tempoObjetivo4 = new Date("2026-01-01T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];


function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
}

function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        document.getElementById("dias" + i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas" + i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min" + i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg" + i).textContent = calculaTempo(tempos[i])[3];
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();