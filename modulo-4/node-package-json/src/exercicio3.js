const operacao = process.argv[2]
const primeiroNumero = Number(process.argv[3])
const segundoNumero = Number(process.argv[4])

let Resultado = "Resultado: "

switch (operation) {
  case "add":
    result += firstNum + secondNum
    break
  case "sub":
    result += firstNum - secondNum
    break
  case "mult":
    result += firstNum * secondNum
    break
  case "div":
    result += (firstNum / secondNum).toFixed(1)
    break
  default:
    result += "invalid operation"
}
