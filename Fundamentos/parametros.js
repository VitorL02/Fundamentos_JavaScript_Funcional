function logParams(a , b , c){
    console.log(a, b , c)
}

logParams(1 , 2 , 3)
logParams(1 , 2 , 3 , 4 , 5) // Como os parametros não foram declarado na função a mesma ignora os parametros "extras"
logParams(1,2)//Como o 3 parametro não foi definido ele retorna undefined
logParams(1) //1 undefined undefined
logParams()//undefined undefined undefined 

// Igualando o parametro a um valor quando o valor não e passado o parametro recebe de atribuição o valor default
function defaultParams(a = 9,b = 32,c = 0){
    console.log(a,b,c)
}
defaultParams(8,7,5)
defaultParams(8,5)

function logNums(nums){
    //Percorre todo o array e imprime cada numero passado pelo parametro
    for(let n of nums){
        console.log(n)
    }
}

logNums([10,20,30,4,5,6])


//spread/rest permite retirar os colchetes dos parametros passados por log nums pois define o nuns como um array
function logNums(...nums){
    console.log(Array.isArray(nums))
    console.log(nums)
}

logNums(10,20,30,4,5,6)

function sumAll(...nums){
    let total = 0

    for(let n of nums){
        total +=n
    }
    return total
}
console.log(sumAll(10,20,30))
console.log(sumAll(10,20,30,40,50,60,70,80))