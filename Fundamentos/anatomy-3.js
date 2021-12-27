//Arrow Function


const incremento_1 = function (n) {
    return n + 1
}

//Arrow function sempre serão funções anonimas
const incremento_2 = (n) => { 
    return n + 1
}

console.log(incremento_1(1))
console.log(incremento_2(7))

//Funções que possiu um parametro somente não e necessario utilizar os parenteses
const incremento_3 = n => { 
    return n + 1
}

//Forma mais simples de declarar uma arrow function(return esta implicito)
const incremento_4 = n => n + 1

console.log(incremento_3(10))
console.log(incremento_4(5))


const soma = (a,b) => a + b

console.log(soma(20,30))