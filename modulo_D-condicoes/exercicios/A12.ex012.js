// dar bom dia, boa tarde e boa noite:

var hora = 21
console.log(`Agora são exatamente ${hora} horas`)

if (hora < 12) {
    console.log(`Bom dia!`)
} else if (hora <= 18) {   //--> hora vai de 12 ate 18 (pq no primeiro if, ja tem condicao de ATE 12)
    console.log('Boa tarde!')
} else
    console.log('Boa noite!')

//como pegar a hora atual do sistema??

    // criar outra variavel
    var agora = new Date()  //sempre data, mesmo se qser pegar a HORA
    var hora = agora.getHours()