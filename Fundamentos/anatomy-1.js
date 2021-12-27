//Function Declaration

function HelloWorld(){
    console.log('Hello Word')
    console.log('hello!')
}

//Chama a Função
HelloWorld()

let teste = HelloWorld()

console.log(teste)


function sayHello(name){
    console.log(`Olá ${name}`)
}

sayHello('Jõao')

function returnHi(){
    return 'Hi!'
}
//Não retorna nada no console pois não foi chamada em console.log
returnHi()

// var cumprimentos = returnHi()
// let cumprimentos = returnHi()

const cumprimentos = returnHi()
console.log(cumprimentos)

function returnHiTo(name){
    return `Hi ${name}!`
}

const cumprimentos_com_parametros = returnHiTo('Michael')
console.log(cumprimentos_com_parametros)
