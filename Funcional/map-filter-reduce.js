
const estudantes =[
    {nome:'Lucas',nota:5.25},
    {nome:'Clara',nota:7.45},
    {nome:'Eduardo',nota:5.75},
    {nome:'Mateus',nota:10.00},
    {nome:'Jaqueline',nota:6}
]


const notasAprovadas = el => {
    return el.nota >= 6
}

 const mediaTodasNotas = el => el.nota > 0


const getNotas = el => el.nota
const getNotasSum = (total,el) => total + el.nota


const mediaNotas = (totalNotas,el,i,array) => {
    
    if(i === array.length - 1){
        return (totalNotas + el) / array.length
    } else {
        return totalNotas + el
    }
}



console.log(
    estudantes.filter(mediaTodasNotas)
    .map(getNotas).map(Math.ceil)
    .reduce(mediaNotas)
)


console.log(
    estudantes.filter(notasAprovadas)
    .map(getNotas).map
    .reduce(mediaNotas)
)

