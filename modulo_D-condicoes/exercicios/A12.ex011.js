//sistema de votos

var idade = 70
console.log(`Você tem ${idade} anos, `)

if (idade < 16) {
    console.log('Voto não permitido')
} else if (idade >= 16 && idade < 18  || idade > 67) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}

