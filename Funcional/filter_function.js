// Utilizada para filtar uma determinada condição em objetos/arrays

numeros = [ 0,1,2,3,4,5,6,7,-1,-2,-3]

const getNumerosPositivos = numeros.filter ((el) => {
    return el > 0
});




const menorQueZero = el => el < 0 
console.log(numeros.filter(menorQueZero));
console.log(getNumerosPositivos);

const estudandes =[
    {nome:'Lucas',nota:5.25},
    {nome:'Clara',nota:7.45},
    {nome:'Eduardo',nota:5.75},
    {nome:'Mateus',nota:10.00},
    {nome:'Jaqueline',nota:6}
]

const alunosAprovados = el => el.nota >= 6

console.log(
    estudandes.filter(alunosAprovados)
)