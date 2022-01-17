// relembrando arrow function que sempre é anonima


const godDay= () => console.log("Bom Dia!!!!!!!")
godDay()


const saudacao = (nome) => "Fala  " + nome + "!!!!!!!!!!!!!!!"

console.log(saudacao('João'))

const saudacaoInterpolada = (nome) => `Fala ${nome} !!!!!!!`

console.log(saudacaoInterpolada('Cleiton'))

const somar = (array) => {
    let total = 0
    for(let n of array){
        total += n
    }
    return total
}


console.log(somar([1,2,3,4,5,6,7,8,9,10]))


//Utilizando o operador rest "..." e possivel passar parametros e o operador transforma tudo em array
const somarRest = (...numeros) => {
    let total = 0
    for(let n of numeros){
        total += n
    }
    return total
}

console.log(somarRest(1,2,3))
console.log(somarRest(1,2,3,4,5))
console.log(somarRest(1,2,3,4,5,6,7))

function potencia_segundaRepr(base){
    return function (expo){
        return Math.pow(base,expo)
    }
   
}

const potencia_arrowfunction = (base) => {
    return function (expo){
        return Math.pow(base,expo)
    }
}


//this

Array.prototype.log = function () {  //Informa na aplicação que o array pode agora receber o console.log
    console.log(this)
}

Array.prototype.primeiro = function () {  
    console.log(this[0])
}


const numeros = [1,2,3]
numeros.log()
numeros.primeiro()