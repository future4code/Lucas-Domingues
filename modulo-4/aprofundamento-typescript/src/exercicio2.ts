type Estastisticas ={
    maior:number ,
    menor : number ,
    media : number 
}

function obterEstatisticas (numeros: number[]):Estastisticas{
    const numerosOrdenados = numeros.sort(
        (a,b) => a - b
    )
    let soma = 0
    for(let num of numeros ){
        soma += num  
    }
    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
  
    return estatisticas
  
}
//B
function obterEstatisticasTotalmenteTipada(numeros: number[]):Estatisticas {
    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )
  
    let soma: number = 0
  
    for (let num of numeros) {
        soma += num
    }
  
    const estatisticas: Estastisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
  
    return estatisticas
  }
  
  
  // c. Crie um type para representar uma amostra de dados, isto é, um objeto com as chaves numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:
  
  type AmostraDeIdades = {
    numeros: number[],
    obterEstatisticas: (number: number[]) => Estatisticas
  }
  
  const amostraDeIdades: AmostraDeIdades = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: obterEstatisticas
  }
  console.log(amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros))