function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anonasc = document.getElementById('txtano')
    var res = document.getElementById('res')

        if (anonasc.value.length == 0 || anonasc.value > ano){
            window.alert('[ERRO] Verifique os dados inseridos!')
        } else {
            var sexdeclarado = document.getElementsByName('radsex')
            var idade = ano - Number(anonasc.value)
            var img = document.createElement('img')
            img.setAttribute('id', 'foto') 
            var genero = ''
            
            if (sexdeclarado[0].checked) {
                genero = 'Homem'
                if (idade >= 0 && idade < 10) {
                    img.setAttribute('src', 'images/homem-bebe.jpg')
                }else if (idade < 21) {
                    img.setAttribute('src', 'images/homem-jovem.jpg')
                }else if (idade < 50) {
                    img.setAttribute('src', 'images/homem-adulto.jpg')
                }else{
                    img.setAttribute('src', 'images/homem-idoso.jpg')
                }
            } else if (sexdeclarado[1].checked) {
                genero = 'Mulher'
                if (idade >= 0 && idade < 10) {
                    img.setAttribute('src', 'images/mulher-bebe.jpg')
                }else if (idade < 21) {
                    img.setAttribute('src', 'images/mulher-jovem.jpg')
                }else if (idade < 50) {
                    img.setAttribute('src', 'images/mulher-adulto.jpg')
                }else{
                    img.setAttribute('src', 'images/mulher-idosa.jpg')
                }
            }
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
        }
}