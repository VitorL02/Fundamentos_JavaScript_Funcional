const carrinho = [
    { nome : 'Caneta', qtde:10, preco:7.99 },
    { nome : 'Impressora', qtde:0, preco:649.50 },
    { nome : 'Caderno', qtde:4, preco:27.10 },
    { nome : 'Papel de Parede', qtde:0, preco:72.27 },
    { nome : 'Borracha', qtde:4, preco:27.10 },
    { nome : 'Lapis', qtde:10, preco:5.82 },
    { nome : 'Tesoura', qtde:1, preco:19.20 }
]




Array.prototype.meuFilter = function(fn) {
    const novoArray = []
    for(let i = 0; i < this.length; i++)

    if(fn(this[i],i,this)){
        novoArray.push(this[i])
    }


    return novoArray
}


const itensSemEstoque = el => el.qtde == 0


const getNome= el => el.nome

const nomeItensSemEstoque2 = carrinho.meuFilter(itensSemEstoque).map(getNome)

const nomeItensSemEstoque = carrinho.filter(itensSemEstoque).map(getNome)
console.log(nomeItensSemEstoque)
console.log(nomeItensSemEstoque2)
