// criar um objeto para onde aparece a mensagem
//para a function carregar funcionar, botar [onload="carregar()"] no html em body

function carregar() {
    var msg = document.getElementById('mensagem')
    var msg2 = document.getElementById('mensagem2')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 13//data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 6) {
        //boa madrugada
        msg2.innerHTML = 'Boa madrugada!'
        img.src = "./imagens/madrugada.png"
        document.body.style.background = '#34262b'
    } else if (hora >= 6 && hora < 12) {
        // bom dia
        msg2.innerHTML = 'Bom dia!'
        img.src = "./imagens/manha.png"
        document.body.style.background = '#715e5f'
    }else if (hora >= 12 && hora <= 18) {
        //boa tarde
        msg2.innerHTML = 'Boa tarde!'
        img.src = "./imagens/tarde.png"
        document.body.style.background = '#683c18'
    } else {
        //boa noite
        msg2.innerHTML = 'Boa noite!'
        img.src = "./imagens/noite.png"
        document.body.style.background = '#181f28'
    }
}
