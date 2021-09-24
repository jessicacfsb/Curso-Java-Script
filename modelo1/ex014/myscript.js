function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('manha')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'images/foto-manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE!
        img.src = 'images/foto-tarde.jpg'
        document.body.style.background = '#ed8067'
    } else {
        //BOA NOITE!
        img.src =  'images/foto-noite.jpg'
        document.body.style.background = '#3b3c34'
    }
}