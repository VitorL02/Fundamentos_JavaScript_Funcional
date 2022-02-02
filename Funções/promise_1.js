let a = 1

console.log(a)

// Promete um dado no futuro
let promise = new Promise(function (cumprirPromessa) {
    return cumprirPromessa(3,4)
})

console.log(typeof Promise) //Informa que Promise() é uma function

//Then acessa a promessa,esse metodo recebe uma função como parametro, e só acessa a variavel promise quando o valor for cumprido a função e executada
promise.then(function(valor,segundo_valor){
    //promises so recebem um valor
    console.log(valor,segundo_valor)
})


//Apesar de receber somente um valor e possivel passar objeto e informar so
let promise_object = new Promise(function (cumprirPromessa2) {
    return cumprirPromessa2({
        x:2,
        y:5
    })
})

promise_object.then(function(valor){
    console.log(valor)
    console.log(valor.x)
})


let nomes = new Promise(function (resolve){
    return resolve (['Vitor','Clara','Jaqueline'])
})


nomes.then(function(valor){
    console.log(valor)
    console.log(valor[1])
})

nomes.then(valor => console.log(valor))

nomes.then(valor => valor[0]) //Isso recebe o primeiro valor do array
.then(valor => console.log(valor))

nomes.then(valor => valor[0])
.then(primeira_Letra => primeira_Letra[0]) //Pega a primeira letra do primeiro objeto do array
.then(letra => letra.toLowerCase()) // transforma a letra em minuscula
.then(letraMinuscula => console.log(letraMinuscula)) //entrega a primeira letra


function segundo_objeto_array(array){
    return array[1]
}


function primeira_Letra(string){
    return string[0]
}

function letra_minuscula(letraMinuscula){
    return letraMinuscula.toLowerCase()
}

nomes.then(segundo_objeto_array)
.then(primeira_Letra) 
.then(letra_minuscula) 
.then(console.log) 