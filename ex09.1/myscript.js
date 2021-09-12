function testar() {
    var teste = window.document.querySelector('input#nacionalidade')
    var resposta = window.document.querySelector('div#resposta')
    var nac = (teste.value)
    resposta.innerHTML = `<p>Seu país é ${nac}!</p>`
    if (nac == 'Brasil') {
        resposta.innerHTML += "<p>Você é <strong>Brasileiro</strong>!</p>"
    } else {
        resposta.innerHTML += "<p>Você é <strong>Estrangeiro</strong>!</p>"
    }
}