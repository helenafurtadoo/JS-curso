// criar um objeto para onde aparece a mensagem
//para a function carregar funcionar, botar [onload="carregar()"] no html em body

function atualizarHora() {
    var msg = document.getElementById('mensagem')
    var msg2 = document.getElementById('mensagem2')
    var img = document.getElementById('imagem')
//----------------------------------------------------------------------//
    //var data = new Date()
    //var hora = 7//data.getHours()

//----------------------------------------------------------------------//
    var agora = new Date()
    var hora =  3//agora.getHours()
    var minuto = agora.getMinutes()
    var segundo = agora.getSeconds()

    // formatar min e  sec com zero à esquerda ex(10:09:45)
    minuto = minuto < 10 ? '0' + minuto : minuto
    segundo = segundo < 10 ? '0' + segundo : segundo

    msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo}`

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
//chamar a funcao para o relogio aparecer assim que a pagina abrir
atualizarHora()

//relogio atualiza sozinho a cada 1 segundo
setInterval(atualizarHora, 1000)

//setInterval - 'repita essa funcao'
//1000 = 1 segundo


