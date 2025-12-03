function tabuada() {
    let numero = document.getElementById('txtn')
    let tabela = document.getElementById('selecttabela')

    if (numero.value.length == 0){
        window.alert('Por favor, digite um número! ')
    } else {
        //tranformar para number:
        let n = Number(numero.value) //numero q o usuario digitou

        let c = 1
        whiler (c <= 10) {
            let item = document.createElement('option') //criar elementos com opcao
            item.text = `${numero} X ${c} = ${num*c}`
            tabela.appendChild(item)
        }
    }
}