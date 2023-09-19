const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "31 dec 2023"

function countdown() {
    const dataLancamento = new Date(lancamento)
    const hoje = new Date()

    const segundosTotais = (dataLancamento - hoje)/1000;
    const finalDias = Math.floor(segundosTotais / 60 / 60 / 24);
    const finalHoras = Math.floor(segundosTotais / 60 / 60) % 24;
    const finalMinutos = Math.floor(segundosTotais / 60) % 60;
    const finalSegundos = Math.floor(segundosTotais) % 60;

    dia.innerHTML = finalDias
    hora.innerHTML = finalHoras
    minuto.innerHTML = finalMinutos
    segundo.innerHTML = finalSegundos
}

countdown();
setInterval(countdown, 1000)