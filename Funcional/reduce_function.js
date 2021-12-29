// Utilizada para reduzir um array unificando os elementos
numeros = [1,2,3,4,5,6]


const sumArray = (total,el) => { 
   return total + el
} 
const total = numeros.reduce(sumArray,0) // Quando o valor inicial e passado um passo a mais

console.log(total)


const mediaArray = (totalMedia,el,i, array) => {
    if( i === array.length - 1) {

        return (totalMedia + el) / array.length
        
    } else {
        return totalMedia + el
    }
}

const media = numeros.reduce(mediaArray)
console.log(media)