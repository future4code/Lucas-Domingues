// Faça uma função que receba dois números como parâmetros e imprima no terminal, as seguintes informações:

// a) A soma desses números
// b) A subtração desses números
// c) A multiplicação desses números
// d) Qual deles é o maior

const firstArg = Number(process.argv[2])
const secondArg = Number(process.argv[3])

function compareNumbers(firstNum: number, secondNum: number): void {
  if (isNaN(firstNum)) { 
    return console.log("Invalid first number in argv")
  }
  
  if (isNaN(secondNum)) { 
    return console.log("Invalid second number in argv")
  }

  console.log(`Números: ${firstNum} e ${secondNum}`)

  console.log("Soma: ", firstNum + secondNum)
  console.log("Sub: ", firstNum - secondNum)
  console.log("Mult: ", firstNum * secondNum)

  if (firstNum > secondNum) {
    console.log("Maior: ", firstNum)
  } else if (firstNum < secondNum) {
    console.log("Maior: ", secondNum)
  } else {
    console.log(`São iguais: ${firstNum} = ${secondNum}`)
  }
}

compareNumbers(firstArg, secondArg)
