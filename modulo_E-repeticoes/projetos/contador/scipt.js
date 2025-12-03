function contar() {
//variaveis abaixo nao existirao quando sair do bloco
    let inicio = document.getElementById('txt-inicio')
    let fim = document.getElementById('txt-fim')
    let passo = document.getElementById('txt-passo')
    let resultado = document.getElementById('res')
//1° verificar se os dados estao faltando:

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        resultado.innerHTML = 'Contando:'
    }
}