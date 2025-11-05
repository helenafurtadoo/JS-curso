// trabalhando com dias da semana  em tempo real

var agora = new Date()

var diaSemana = agora.getDay()
/*
para o js os dias da semana sao:
    0 = domingo
    1 = segunda
    2 = terça
    3 = quarta
    4 = quinta
    5 = sexta
    6 = sabado
 */

    switch(diaSemana) {
        case 0 :
            console.log('Hoje é domingo!')
            break
        case 1 :
            console.log('Hoje é segunda!')
            break
        case 2 :
            console.log('Hoje é terça!')
            break
        case 3 :
            console.log('Hoje é quarta!')
            break
        case 4 :
            console.log('Hoje é quinta!')
            break
        case 5 :
            console.log('Hoje é sexta!')
            break
        case 6 :
            console.log('Hoje é sábado!')
            break
        default :
            console.log('ERRO! Dia da semana inválido!')
            break
        }