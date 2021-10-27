function tabuada (){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltabuada')
    if (num.value.length == 0){
        window.alert('Por Favor, digite um número!')
    }else{
        var númerodigitado = Number(num.value)
        var concat = 1
        tab.innerHTML = ''

        while (concat <= 10) {
            var concatenado = document.createElement('option')
            concatenado.text = `${númerodigitado} x ${concat} = ${númerodigitado*concat}`
            tab.appendChild (concatenado)
            concat++
            
        }
    }
}