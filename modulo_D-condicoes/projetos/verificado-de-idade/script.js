/*identificador de idade:
é colocado o ano de nascimento
o sexo (feminino - masculino)
apertar o botao verificar
calcular a idade
mudar a foto de acordo com a idade, e o sexo
*/


function verificar() {
   var data = new Date() 
   var ano = data.getFullYear() // ano atual do sistema
   var fAno = document.getElementById('txt-ano')
   var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano) { //se o valor de fAno for == 0 ,=, OU o valor de fAno for > que o ano atual:
        window.alert('[ERRO] Verifique os dados e tente novamente! ')
    } else {
       var fsex = document.getElementsByName('radsex')  // [0]campo do masculino [1]campo do feminino
       var idade = ano - Number(fAno.value)
       var genero = ''
       if (fsex[0].checked){
        genero = 'Homem'
       } else if (fsex[1].checked) {
        genero = 'Mulher'
       }
      res.innerHTML = `Detectamos ${genero} com ${idade}.`
    }

}