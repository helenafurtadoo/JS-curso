function contar() {
    //variaveis abaixo nao existirao quando sair do bloco
    let inicio = document.getElementById('txt-inicio')
    let fim = document.getElementById('txt-fim')
    let passo = document.getElementById('txt-passo')
    let resultado = document.getElementById('res')
    //1° verificar se os dados estao faltando:

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {  //se a quantidade de letras em "inicio" for 0 ...
        res.innerHTML = 'Impossível contar'
        window.alert('[ERRO] Faltam dados!')
    } else {
        resultado.innerHTML = 'Contando: <br>' //<br> para quebrar a linha entre 'contando' e o reusltado

        //convertendo os valores das variaveis para number:
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        //se o passo for negativo, dar erro, e considerar passo = 1
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        //criando o laço de funçao se i < f (contagem crescente)
        if (i < f) {
            for (c = i; c <= f; c += p) {
                resultado.innerHTML += `${c}  ---> `
            }
        } else { // se i > f  (contagem decrescente)
            for (c = i; c >= f; c -= p)
                res.innerHTML += `${c}  ---> `
        }

        //colocando emoji de bandeira, no fim da contagem
        res.innerHTML += `\u{1F3C1}`

    }
}
