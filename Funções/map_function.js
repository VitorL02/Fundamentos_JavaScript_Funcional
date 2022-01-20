
dados = [
    {nome: 'Vitor',idade:21},
    {nome:'Clara',idade:18},
    {nome:'Varley',idade:46},
    {nome:'Jaqueline',idade:45},
    {nome:'Mateus',idade:11}
]
numeros = [1,2,3,4,5]

const dobro = el => el * 2

console.log(numeros.map(dobro))

const get_idade = (el) => console.log(el.idade)

const get_nome = (el) => {
    return el.nome
}

nomes= ['Vitor','Lucas','Crispim']


const get_primeira_letra = (el) => el[0]



dados.map(get_idade)
console.log(dados.map(get_nome))
console.log(nomes.map(get_primeira_letra))