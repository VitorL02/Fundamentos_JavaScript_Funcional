class Produto{

    constructor(nome,price,desconto = 0.5){
        this.nome = nome
        this._price = price
        this.desconto = desconto
    }

    set nome(uppercaseName){
        this._nome = uppercaseName.toUpperCase()
    }
    
    get price(){
        return this._preco
    }

    set price(precoValido){
        if(precoValido >= 0){
          return  this._price = precoValido
        }
    }

    precoFinal(){
        return this.price * (1 - this.desconto)
    }
    get precoFinalAtributo(){
        return this.price * (1 - this.desconto)
    }
}

const produto_1 = new Produto('Lapis',1.00, 0.02)
console.log(produto_1)
console.log(produto_1.precoFinal())
console.log(produto_1.precoFinalAtributo) // Usando o metodo get e possivel transformar a função em um metodo e só e possivel acessar sem as ()