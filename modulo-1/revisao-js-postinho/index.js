
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    //  Sua lógica aqui
    return `no comparador de igualdade de ${a} ===${b} é ${a === b}`
}
console.log(checarIgualdade(1,2));
// c-)Faça uma função chamada "verificaSeEMaior"
      function verificaSeEMaior(a , b){
       return `no comparador maior que  ${a} > ${b} é ${a > b} `
      }

console.log(verificaSeEMaior(321, 2156));
   

// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'=  true 
// c-) 'a'==='b'=  false
// d-) 'b'>'a'= true
// e-) 0!==null= null 
       

// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = ()) => {
    const usuario = []
  
    //  Sua lógica aqui
    const nome= prompt("digite seu nome ?")
    const dataDeNascimento = Number(prompt("digite seu ano de nascimento ??"))
    const idade = 2021 - dataDeNascimento

    const nascionalidade=prompt("digite sua nacionalidade??").tolowercase()

    const senha =prompt (" digite sua senha , ela deve conter mais de 6 caracteres ?")

    if(idade>= 18 && senha.length >6 && nacionalidae === "brasileira "){
        alert(`usuario ${nome} cadastrado com sucesso`)
        usuarios.push(nome,dataDeNascimento,idade,nacionalidade,senha)
        console.log(usuario)
    }


// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
    //  Sua lógica aqui
        let usuario =prompt ("digite sua senha !!")
        if (usuario === login ){
            console.log("usuario logado ")
        }else{
            console.log("usuario não logado ")

        }
}
console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {
    //  Sua lógica aqui
    let tempo,date = new Date()
    let nome=prompt("digite seu nome ??").toLocaleLowerCase
    let vacina=prompt("qual vacina você tomou ").toLocaleLowerCase
    if(vacina=== "coronavac"){
        tempo=28
    }else if (vacina ==="astrazenica"){
        tempo =90
    }else if (vacina ==="pfizer" ){
        tempo=90
    }
    const milissegundos1dia =86400000
    const hoje =date.getTime()
    
    const dataAtualiza = new Date(hoje + (tempo * milissegundos1dia))

    const dataFormatada = dataAtualizada("pt-br")

         return `olá ${nome} A proxima dose da ${vacina} é daqui ${tempo} dias.va ao posto na data ${dataAtualizada}`

}
console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui


}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastro = () => {
    //  Sua lógica aqui
}
console.log(cadastro());

const login = () => {
    //  Sua lógica aqui
}
console.log(login());

const primeiraDose = () => {
//  Sua lógica aqui
}
console.log(primeiraDose())
const segundaDose = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDose("ALGUM NOME AQUI"));

const avisoAosAtrasados = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasados());