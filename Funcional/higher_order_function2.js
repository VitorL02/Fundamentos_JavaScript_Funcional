//Retornando uma função atraves de uma função
//A vantagem de utilizar funções dessa forma e possivel passar os parametros de forma parcial e o somente o parametro final (price) permite usar


//Curring(maior grau de reuso)
function finalPrice(tax){
    return function(price){
        return price * (1 + tax)
    }
}

nycFinalPrice = finalPrice(0.0875)

console.log(nycFinalPrice (30.25))
console.log(nycFinalPrice (155.25))
console.log(nycFinalPrice (10.12))

// console.log(finalPrice((0.0875) (30.25))
// console.log(finalPrice((0.0875) (155.25)) 
// console.log(finalPrice( (0.0875) (10.12))