
function bomDia(){
    console.log('Bom Dia')
}

const boaTarde = function (){
    console.log('Boa tarde')
}

function executarQualquerCoisa(fn){
     //Define o  que está sendo passado para a fn = typeof fn

    //verifica se oque está sendo passado e função
    if (typeof fn === 'function') {

        // a declaração de somente dois '==' compara somente os valores já a de tres '===' compara valor e tipo 
        fn()
    }
}
// Realizar tal operação e impossivel em js pois 3 não e uma função
// executarQualquerCoisa(3)

executarQualquerCoisa(3) 

executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// Retornar uma função por meio de uma função
function potencia(base,expo){
    return Math.pow(base,expo)
}

const resultado = console.log(potencia(10,0))

const bits128 = potencia(2,128)
console.log(bits128)

function potencia_segundaRepr(base){
    return function (expo){
        return Math.pow(base,expo)
    }
   
}

const potenciaDe8 = potencia_segundaRepr(2)// armazena a base 
console.log(potenciaDe8(8)) // passa o parametro da função anonima de retorno 

 const potenciaDe3 = potencia_segundaRepr(5)(4) // outra representação sem utilizar uma const de variaveis
 console.log(potenciaDe3)

 