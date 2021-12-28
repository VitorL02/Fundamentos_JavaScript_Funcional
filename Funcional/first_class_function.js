// JavaScript permite que uma function seja atribuida em uma varivel, isso e uma First-Class Function   

const sum  = function(primeiro_numero,segundo_numero){
     return primeiro_numero + segundo_numero
}

const sub = (primeiro_numero,segundo_numero) => primeiro_numero - segundo_numero

const mult = (primeiro_numero,segundo_numero) => {
    return primeiro_numero * segundo_numero
}

const div = (primeiro_numero,segundo_numero) => primeiro_numero / segundo_numero

console.log(sum(20,30))
console.log(sub(20,30))
console.log(mult(20,30))
console.log(div(20,30))

// Funções first class tem uma extrema importacia,são tratadas como primeira classe  por possuir esse comportamento e permitir atribuiçao de funções a variaveis