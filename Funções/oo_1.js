
//Função construtora
function Produto(nome,price,desconto = 0.15){

    //Instancia o objeto e somente assim e possivel acessar o objeto
    this.nome = nome
    this.price = price
    this.desconto = desconto 

    this.precoFinal = function(){
        return this.price * (1-this.desconto)
    }

}


const produto_1 = new Produto('Caneta',8.30)
const produto_2 = new Produto('Celta',30000)

console.log(produto_1)
console.log(produto_2)
console.log(produto_2.precoFinal())