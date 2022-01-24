numbers = [10,14,21,32,55,67,87]

const pares = el => el % 2 == 0

const filtrando = (el) =>{
    return el >= 20
}


console.log(numbers.filter(pares))

console.log(numbers.filter(filtrando))


const carrinho = [
    { nome : 'Caneta', qtde:10, preco:7.99 },
    { nome : 'Impressora', qtde:0, preco:649.50 },
    { nome : 'Caderno', qtde:4, preco:27.10 },
    { nome : 'Papel de Parede', qtde:0, preco:72.27 },
    { nome : 'Borracha', qtde:4, preco:27.10 },
    { nome : 'Lapis', qtde:10, preco:5.82 },
    { nome : 'Tesoura', qtde:1, preco:19.20 }
]


const itensValidos = (el) => {
    return el.qtde != 0
}

console.log(carrinho.filter(itensValidos))


const itensSemEstoque = el => el.qtde == 0

console.log(carrinho.filter(itensSemEstoque))

const getNome= el => el.nome

const nomeItensSemEstoque = carrinho.filter(itensSemEstoque).map(getNome) //é possivel passar uma função map logo apos uma função filter recebendo por exemplo so o nome do que não existe estoque

console.log(nomeItensSemEstoque)