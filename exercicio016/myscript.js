function contar() {
    var valorinicio = document.getElementById ('inicio')
    var valorfim = document.getElementById ('fim')
    var pularcasas = document.getElementById ('concat')
    var resultado = document.getElementById ('res')

    if (valorinicio.value.length == 0 || valorfim.value.length == 0 || pularcasas.value.length == 0){
        window.alert ('ERRO! Faltam dados')
    }else{
        var comeco = Number(valorinicio.value)
        var final = Number(valorfim.value)
        var pular = Number(pularcasas.value)

        for (var c = comeco; c <= final; c += pular) {
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
}