class Produto{

    constructor(nome,price,desconto = 0.5){
        this.nome = nome
        this.price = price
        this._desconto = desconto
    }


    precoFinal(){
        return this.price * (1 - this._desconto)
    }
    get precoFinalAtributo(){
        return this.price * (1 - this._desconto)
    }
}

Object.defineProperty(Produto.prototype,'desconto',{
    get : function(){
        return this._desconto
    },
    set: function(novoDesconto) {
        if(novoDesconto >= 0 && novoDesconto <= 1){
            this._desconto = novoDesconto
        }
    }
})
Object.defineProperty(Produto.prototype,'descontoString',{
    get : function(){
        return `${this._desconto}%`
    }

})

Produto.prototype.log = function (){
    console.log(`Nome : ${this.nome} Preço R$ ${this.price}`)
}


const produto_1 = new Produto('Lapis',1.00, 0.02)

produto_1.log()
produto_1.desconto = 3
produto_1.desconto = 0.5
console.log(produto_1.descontoString)
console.log(produto_1.desconto)