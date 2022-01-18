// Esse arquivo tem a função de ler um arquivo e somente depois da leitura feita a função vai ser chamada

const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname,'dados_funcao_callback.txt') //_dirname informa que o arquivo esta na pasta onde esse arquivo se encontra


function readContent(err,conteudo){
    console.log(conteudo.toString())

}

console.log('Inicio')
fs.readFile(caminho,{},readContent)
// fs.readFile(caminho,readContent) Mesmo suprimindo o segundo parametro e possivel utilizar mesmo assim a função
fs.readFile(caminho, (err,conteudo) => {console.log(conteudo.toString() ) } ) // Utilizando Arrow function
console.log('Fim...')

console.log('Inicio Sync')
 const conteudo =  fs.readFileSync(caminho) 
console.log(conteudo.toString())
//Utilizando esse metodo readSync somente quando o arquivo for completamente lido ele completa a execução do codigo e assim finaliza mostrando o console.log(fim)
console.log('Fim Sync')