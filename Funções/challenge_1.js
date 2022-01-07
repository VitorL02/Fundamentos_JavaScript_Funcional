

// Criar duas funções uma de Soma (3) (2) somar os dois numeros
//Criar uma função que retorna (3) (20) (fn) função que retorna um função que retorna outra função

function somar(primeiro_numero){
    return function(segundo_numero){
        return function(terceiro_numero){
            return primeiro_numero  + segundo_numero + terceiro_numero
        }
    }
    
}

function calcular(primeiro_numero){
    return function (segundo_numero){
        return function (fn){
            return fn(primeiro_numero,segundo_numero)
        }
    }
}


function subtrair (primeiro_numero,segundo_numero){
    return primeiro_numero - segundo_numero
}

console.log(somar(3) (5) (7) )

console.log(calcular (2) (8) (subtrair) )