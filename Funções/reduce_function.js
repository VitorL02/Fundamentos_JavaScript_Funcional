
numbers = [1,2,3,4,5]

 const somarArray  = (total,el) => total + el

 const multiplicarArray = (total,el) => {
     return total * el
 }

 
 console.log(numbers.reduce(somarArray))

 console.log(numbers.reduce(multiplicarArray))


 const carrinho = [
    { nome : 'Caneta', qtde:10, preco:7.99 },
    { nome : 'Impressora', qtde:3, preco:649.50 },
    { nome : 'Caderno', qtde:4, preco:27.10 },
    { nome : 'Papel de Parede', qtde:0, preco:72.27 },
    { nome : 'Borracha', qtde:4, preco:27.10 },
    { nome : 'Lapis', qtde:10, preco:5.82 },
    { nome : 'Tesoura', qtde:1, preco:19.20 }
]

const mapeiaItensCarrinho  = (el) => el.qtde * el.preco
const somarItensCarrinhoTotal = (total,el) => el + total

console.log(carrinho.map(mapeiaItensCarrinho))
console.log(carrinho.map(mapeiaItensCarrinho).reduce(somarItensCarrinhoTotal))