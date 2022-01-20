const carrinho = [
    { nome : 'Caneta', qtde:10, preco:7.99 },
    { nome : 'Impressora', qtde:0, preco:649.50 },
    { nome : 'Caderno', qtde:4, preco:27.10 },
    { nome : 'Lapis', qtde:10, preco:5.82 },
    { nome : 'Tesoura', qtde:1, preco:19.20 }
]


const get_product_name = (product) => product.nome

console.log(carrinho.map(get_product_name))


const get_value_product = (product)=> {

    return product.qtde * product.preco
}



console.log(carrinho.map(get_value_product))

const get_value_product_name = (product)=> {

    return product.nome + ': ' + product.qtde * product.preco
}

console.log(carrinho.map(get_value_product_name))

//Implementando agora a propria versão map

Array.prototype.meuMap = function (fn) {
    const data = []
    for(let i = 0 ; i < this.length; i++){
         const result = fn(this[i], i , this ) 
        data.push(`Meu Map = ${result}`)
    }
    return data
    
}

console.log(carrinho.meuMap(get_product_name))