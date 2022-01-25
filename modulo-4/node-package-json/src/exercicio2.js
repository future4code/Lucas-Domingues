const operacao = process.argv[2]
const primeiroNumero = Number(process.argv[3])
const segundoNumero = Number(process.argv[4])

let Resultado = "Resultado: "

switch (operacao) {
  case "add":
    Resultado += primeiroNumero + segundoNumero
    break
  case "sub":
    Resultado += primeiroNumero - segundoNumero
    break
  case "mult":
    Resultado += primeiroNumero * segundoNumero
    break
  case "div":
    Resultado += (primeiroNumero / segundoNumero).toFixed(1)
    break
  default:
    Resultado += " operacao invalida"
}
console.log(Resultado)