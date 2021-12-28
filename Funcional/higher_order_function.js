// Em js e permitido passar funções como argumentos de outra função e uma função pode retornar outra função isso e uma higher order function




//Passando a referencia de sayHello para run
function run(fn){
   return `Result ${fn()}`
}

function sayHello(){
    console.log('Hello!')
}

run(sayHello)


run(function(){
    console.log('run!!!')
})

const result = run(Math.random)
console.log(result)