
const numeros = [1, 2, 3, 4, 5, 6]


// const numeros_array_forV = []
// for(let n of numeros){
//     numeros_array_forV.push(n*2)
// } Metodo for sem utilizar o map

const numeros_array=numeros.map((el) => {
    return el * 2
})

// Utilizando a função .map e passando o el como parametro e possivel retornar um array com todos os elementos duplicados [ 2, 4, 6, 8, 10, 12 ] 
console.log(numeros_array)


const estudandes =[
    {nome:'Lucas',nota:5.25},
    {nome:'Clara',nota:7.45},
    {nome:'Eduardo',nota:8.12},
    {nome:'Mateus',nota:10.00},
    {nome:'Jaqueline',nota:7.5}
]

// const notas_estudantes = estudandes.map(function(el){
//     return el.nota
// })
// console.log(notas_estudantes)

const get_notas_estudantes = el => el.nota
console.log(estudandes.map(get_notas_estudantes))

const getNotasArrendondadas = estudandes.map(get_notas_estudantes).map(Math.ceil)

console.log(`Resultado final : ${getNotasArrendondadas}`)