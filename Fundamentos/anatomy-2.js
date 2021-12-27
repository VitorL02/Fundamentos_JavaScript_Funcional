//Anonymus Function     Uma função que não possui nome

(function (a,b,c){
    // Criar uma função anonima e necessario envolver com um parenteses toda a função
    return a + b+c
})

//Function expression
const soma = function(a, b) {
    return a + b
}
const result =soma(80,40)
console.log(result)


const nova_soma = soma
console.log(nova_soma(20,10))