//para passar acessar os parametros , no node usamos o process.argv[0]

const username = process.argv[2] 
const age = Number(process.argv[3])




console.log(`Olá, ${username}! Você tem ${age} anos.`)

