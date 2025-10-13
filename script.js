let milesimos = 0
let segundos = 0
let minutos = 0
let horas = 0
let intervalo = null
let p = document.querySelector('p')

function iniciarCronometro() {
    if (intervalo) return
    intervalo = setInterval(atualizarConometro, 10)
}

function atualizarConometro() {
    milesimos++
    if (milesimos === 100) {
        milesimos = 0
        segundos++
        if (segundos === 60) {
            segundos = 0
            minutos++
            if (minutos === 60) {
                minutos = 0
                horas++
            }
        }
    }
    exibirTempo()
}

function exibirTempo() {
    const horasFormatadas = String(horas).padStart(2, '0')
    const segundosFormatados = String(segundos).padStart(2, '0')
    const minutosFormatados = String(minutos).padStart(2, '0')
    const milesimosFormatados = String(milesimos).padStart(2, '0')
    p.innerHTML = `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}<span>${milesimosFormatados}</span>`
}

function pausarCronometro() {
    clearInterval(intervalo)
    intervalo = null
}

function resetarCronometro() {
    clearInterval(intervalo)
    intervalo = null
    horas = 0
    segundos = 0
    minutos = 0
    milesimos = 0
    exibirTempo()
}